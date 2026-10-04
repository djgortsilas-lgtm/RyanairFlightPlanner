/* --- Utility Functions --- */
function fmtDate(iso) { 
    const [y,m,d] = iso.split('-'); 
    return `${d}/${m}/${y}`; 
}

function formatDate(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
}

function daysBetween(a, b) { 
    return Math.round((b - a) / (1000 * 60 * 60 * 24)); 
}

function addDays(d, n) { 
    const r = new Date(d); 
    r.setDate(r.getDate() + n); 
    return r; 
}

function connects(arr1, dep2, minMins = 60) {
    if (!arr1 || !dep2) return true;
    const [ah, am] = arr1.split(':').map(Number);
    const [bh, bm] = dep2.split(':').map(Number);
    return (bh * 60 + bm) >= (ah * 60 + am) + minMins;
}

function coversWeekend(out, inbound) {
    let w = 0; 
    const d = new Date(out);
    while (d <= inbound) { 
        const dw = d.getDay(); 
        if (dw === 0 || dw === 6) w++; 
        d.setDate(d.getDate() + 1); 
    }
    return w >= 2;
}

function getWaitHours(arr, dep) {
    if (!arr || !dep) return null;
    const [ah, am] = arr.split(':').map(Number);
    const [dh, dm] = dep.split(':').map(Number);
    let mins = (dh * 60 + dm) - (ah * 60 + am);
    if (mins < 0) mins += 24 * 60;
    return mins / 60;
}

function getLegWait(route) {
    if (!route || !route.arr1 || !route.dep2) return null;
    const w = getWaitHours(route.arr1, route.dep2);
    if (w === null) return null;
    if (route.type === 'via1n') return w + 24;
    return w;
}

function getRouteMaxWait(outRoute, retRoute) {
    let maxWait = 0;
    let found = false;
    const ow = getLegWait(outRoute);
    if (ow !== null) { found = true; if (ow > maxWait) maxWait = ow; }
    const rw = getLegWait(retRoute);
    if (rw !== null) { found = true; if (rw > maxWait) maxWait = rw; }
    return found ? maxWait : 0;
}

/* --- API Handling --- */
const CORS_PROXIES = [
    'https://api.cors.lol/?url=',
    'https://corsproxy.io/?url=',
    'https://corsproxy.georgev.workers.dev/?url='
];

async function fetchWithRetry(url, retries = 3) {
    for (let attempt = 0; attempt <= 1; attempt++) {
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), 20000);
        try {
            const resp = await fetch(url, { headers: { 'Accept': 'application/json' }, signal: ctrl.signal });
            clearTimeout(timer);
            if (resp.ok) return await resp.json();
        } catch {
            clearTimeout(timer);
        }
    }
    const start = Math.floor(Math.random() * CORS_PROXIES.length);
    for (let attempt = 0; attempt <= retries; attempt++) {
        for (let pi = 0; pi < CORS_PROXIES.length; pi++) {
            const proxy = CORS_PROXIES[(start + pi) % CORS_PROXIES.length];
            const ctrl = new AbortController();
            const timer = setTimeout(() => ctrl.abort(), 20000);
            try {
                const resp = await fetch(`${proxy}${encodeURIComponent(url)}`, { headers: { 'Accept': 'application/json' }, signal: ctrl.signal });
                if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
                clearTimeout(timer);
                return await resp.json();
            } catch {
                clearTimeout(timer);
                continue;
            }
        }
        if (attempt < retries) await new Promise(r => setTimeout(r, 1500 * (attempt + 1)));
    }
    throw new Error('All proxies failed');
}

const fareCache = {};
const FARE_TTL_MS = 10 * 60 * 1000;

async function fetchFares(origin, dest, monthDate, currency = 'EUR') {
    const mKey = formatDate(monthDate);
    const cKey = `${origin}|${dest}|${mKey}`;
    const cached = fareCache[cKey];
    if (cached && (Date.now() - cached.ts) < FARE_TTL_MS) return cached.data;
    const url = `https://www.ryanair.com/api/farfnd/v4/oneWayFares/${origin}/${dest}/cheapestPerDay?outboundMonthOfDate=${mKey}&currency=${currency}`;
    const data = await fetchWithRetry(url);
    if (!data || !data.outbound) return [];
    const fares = (data.outbound.fares || []).filter(f => f && f.price && f.price.value != null && !f.soldOut && !f.unavailable);
    fareCache[cKey] = { ts: Date.now(), data: fares };
    return fares;
}

/* --- Worker Event Handler --- */
self.onmessage = async function(e) {
    const { type, payload } = e.data;
    if (type === 'SEARCH') {
        const { 
            origin, 
            destList, 
            dateFrom, 
            dateTo, 
            minN, 
            maxN, 
            wk, 
            isOneWay, 
            isMc,
            wheelOfFortuneMode, 
            masterAirports,
            originDestMap
        } = payload;

        try {
            const dFrom = new Date(dateFrom + 'T00:00:00');
            const dTo = new Date(dateTo + 'T00:00:00');
            
            if (isMc) {
                const results = await performMultiDestSearch(origin, destList, dFrom, dTo, minN, maxN, wk, isOneWay, wheelOfFortuneMode, masterAirports, originDestMap);
                self.postMessage({ type: 'RESULTS', payload: results });
            } else {
                const results = await performStandardSearch(origin, destList, dFrom, dTo, minN, maxN, wk, isOneWay);
                self.postMessage({ type: 'RESULTS', payload: results });
            }
        } catch (err) {
            self.postMessage({ type: 'ERROR', payload: err.message });
        }
    }
};

async function performStandardSearch(origin, destList, dFrom, dTo, minN, maxN, wk, isOneWay) {
    const results = [];
    const months = getMonthsInRange(dFrom, dTo);
    const faresData = {};

    for (let i = 0; i < destList.length; i++) {
        const dest = destList[i];
        self.postMessage({ type: 'PROGRESS', payload: { 
            pct: (i / destList.length) * 100, 
            msg: `Fetching ${dest.city}...` 
        }});

        const oMap = {}, iMap = {};
        let hasData = false;

        for (const m of months) {
            const [o, n] = await Promise.all([
                fetchFares(origin, dest.code, m).catch(() => []),
                isOneWay ? Promise.resolve([]) : fetchFares(dest.code, origin, m).catch(() => [])
            ]);
            
            for (const f of o) { 
                const dt = new Date(f.day + 'T00:00:00'); 
                if (dt >= dFrom && dt <= dTo) { 
                    oMap[f.day] = { price: f.price.value, dep: f.departureDate?.substring(11,16), arr: f.arrivalDate?.substring(11,16) }; 
                    hasData = true; 
                } 
            }
            if (!isOneWay) {
                for (const f of n) { 
                    const dt = new Date(f.day + 'T00:00:00'); 
                    if (dt >= dFrom && dt <= dTo) { 
                        iMap[f.day] = { price: f.price.value, dep: f.departureDate?.substring(11,16), arr: f.arrivalDate?.substring(11,16) }; 
                        hasData = true; 
                    } 
                }
            }
        }

        faresData[dest.code] = { outbound: oMap, inbound: iMap };

        if (hasData) {
            if (isOneWay) {
                for (const [od, op] of Object.entries(oMap)) {
                    results.push({ destCode: dest.code, destName: dest.city, outDate: od, inDate: null, nights: 0, outPrice: op.price, inPrice: 0, total: op.price, outDep: op.dep, outArr: op.arr, inDep: null, inArr: null });
                }
            } else {
                for (const [od, op] of Object.entries(oMap)) {
                    const odd = new Date(od + 'T00:00:00');
                    for (const [id, ip] of Object.entries(iMap)) {
                        const idd = new Date(id + 'T00:00:00');
                        const nn = daysBetween(odd, idd);
                        if (nn >= minN && nn <= maxN && (!wk || coversWeekend(odd, idd))) {
                            results.push({ destCode: dest.code, destName: dest.city, outDate: od, inDate: id, nights: nn, outPrice: op.price, inPrice: ip.price, total: op.price + ip.price, outDep: op.dep, outArr: op.arr, inDep: ip.dep, inArr: ip.arr });
                        }
                    }
                }
            }
        }
    }
    return results.sort((a, b) => a.total - b.total);
}

/* Multi-destination results have to carry the same flat price fields as the
   standard search, otherwise renderResults() renders "—" in both price
   columns. Route shapes: direct keeps dep/arr, via keeps dep1/arr1/dep2/arr2. */
function packMultiDest(destCode, destName, outDate, inDate, nights, outRoute, retRoute) {
    const outP = outRoute ? outRoute.price : 0;
    const retP = retRoute ? retRoute.price : 0;
    return {
        destCode, destName, outDate, inDate, nights,
        outRoute, retRoute,
        outPrice: outP,
        inPrice: retP,
        outDep: outRoute ? (outRoute.dep1 || outRoute.dep || null) : null,
        outArr: outRoute ? (outRoute.arr2 || outRoute.arr || null) : null,
        inDep: retRoute ? (retRoute.dep1 || retRoute.dep || null) : null,
        inArr: retRoute ? (retRoute.arr2 || retRoute.arr || null) : null,
        total: outP + retP
    };
}

async function performMultiDestSearch(origin, destList, dFrom, dTo, minN, maxN, wk, isOneWay, wheelOfFortuneMode, masterAirports, originDestMap) {
    const allResults = [];
    const months = getMonthsInRange(dFrom, dTo);
    const allFares = {};
    const inflight = {};

    /* Concurrent callers must await the same fetch, otherwise the second
       one gets the still-empty map object and moves on too early. */
    async function ensureFares(from, to) {
        if (!allFares[from]) allFares[from] = {};
        if (!inflight[from]) inflight[from] = {};
        if (inflight[from][to]) return inflight[from][to];
        if (allFares[from][to]) return allFares[from][to];
        const map = {};
        allFares[from][to] = map;
        const p = (async () => {
            for (const m of months) {
                try {
                    const fares = await fetchFares(from, to, m);
                    for (const f of fares) {
                        const dt = new Date(f.day + 'T00:00:00');
                        if (dt >= dFrom && dt <= dTo) {
                            map[f.day] = { price: f.price.value, dep: f.departureDate?.substring(11,16), arr: f.arrivalDate?.substring(11,16) };
                        }
                    }
                } catch (e) {}
            }
            return map;
        })();
        inflight[from][to] = p;
        try {
            return await p;
        } finally {
            delete inflight[from][to];
        }
    }

    const CONCURRENCY = 12;
    async function runPool(items, limit, worker) {
        let cursor = 0;
        const runners = [];
        const n = Math.min(limit, items.length);
        for (let k = 0; k < n; k++) {
            runners.push((async () => {
                while (cursor < items.length) {
                    const i = cursor++;
                    await worker(items[i], i);
                }
            })());
        }
        await Promise.all(runners);
    }

    let pool = masterAirports.filter(a => a.code !== origin && (wheelOfFortuneMode || !destList.includes(a.code)));
    const poolSize = pool.length;
    const viableOutbound = new Set();
    const viableReturn = new Set();
    let scanned = 0;

    await runPool(pool, CONCURRENCY, async (airport) => {
        const outMap = await ensureFares(origin, airport.code);
        if (Object.keys(outMap).length > 0) viableOutbound.add(airport.code);
        if (!isOneWay) {
            const retMap = await ensureFares(airport.code, origin);
            if (Object.keys(retMap).length > 0) viableReturn.add(airport.code);
        }
        scanned++;
        self.postMessage({ type: 'PROGRESS', payload: {
            pct: (scanned / poolSize) * 40,
            msg: `Scanning intermediaries: ${scanned}/${poolSize}`
        }});
    });

    const targets = wheelOfFortuneMode ? masterAirports.filter(a => a.code !== origin).map(a => a.code) : destList;
    
    for (let di = 0; di < targets.length; di++) {
        const destCode = targets[di];
        const destName = masterAirports.find(a => a.code === destCode)?.city || destCode;
        
        const outCandidates = [...viableOutbound].filter(c => c !== destCode);
        const retCandidates = isOneWay ? [] : [...viableReturn].filter(c => c !== destCode);

        const phase2Base = 40 + (di / targets.length) * 50;
        
        // Fetch and cache connections
        await Promise.all([
            ...outCandidates.map(c => ensureFares(c, destCode)),
            ...retCandidates.map(c => ensureFares(destCode, c)),
            ensureFares(origin, destCode),
            isOneWay ? Promise.resolve() : ensureFares(destCode, origin)
        ]);

        self.postMessage({ type: 'PROGRESS', payload: { 
            pct: phase2Base + (di / targets.length) * 10, 
            msg: `Connecting via ${destName}...` 
        }});

        const directOutFares = allFares[origin]?.[destCode] || {};
        const directRetFares = allFares[destCode]?.[origin] || {};

        for (let d = new Date(dFrom); d <= dTo; d.setDate(d.getDate() + 1)) {
            const ods = formatDate(d);
            const odNext = formatDate(addDays(d, 1));
            let bestOutCost = Infinity, bestOutRoute = null;

            const directOut = directOutFares[ods];
            if (directOut && !wheelOfFortuneMode) {
                bestOutCost = directOut.price;
                bestOutRoute = { type: 'direct', intCode: null, intCity: null, arrDate: ods, dep: directOut.dep, arr: directOut.arr, price: directOut.price, legs: 1 };
            }

            for (const ic of outCandidates) {
                const leg1 = allFares[origin]?.[ic]?.[ods];
                if (!leg1) continue;
                const leg2 = allFares[ic]?.[destCode]?.[ods];
                if (!leg2 || !connects(leg1.arr, leg2.dep)) continue;
                const total = leg1.price + leg2.price;
                if (total < bestOutCost) {
                    bestOutCost = total;
                    bestOutRoute = { type: 'via', intCode: ic, arrDate: ods, leg1Price: leg1.price, leg2Price: leg2.price, dep1: leg1.dep, arr1: leg1.arr, dep2: leg2.dep, arr2: leg2.arr, price: total, legs: 2 };
                }
            }

            if (odNext <= formatDate(addDays(dTo, 1))) {
                for (const ic of outCandidates) {
                    const leg1 = allFares[origin]?.[ic]?.[ods];
                    if (!leg1) continue;
                    const leg2 = allFares[ic]?.[destCode]?.[odNext];
                    if (!leg2) continue;
                    const total = leg1.price + leg2.price;
                    if (total < bestOutCost) {
                        bestOutCost = total;
                        bestOutRoute = { type: 'via1n', intCode: ic, arrDate: odNext, leg1Price: leg1.price, leg2Price: leg2.price, dep1: leg1.dep, arr1: leg1.arr, dep2: leg2.dep, arr2: leg2.arr, price: total, legs: 2 };
                    }
                }
            }

            if (!bestOutRoute) continue;

            if (isOneWay) {
                allResults.push(packMultiDest(destCode, destName, ods, null, 0, bestOutRoute, null));
            } else {
                for (let rd = new Date(d); rd <= dTo; rd.setDate(rd.getDate() + 1)) {
                    const rds = formatDate(rd);
                    const rPrev = formatDate(addDays(rd, -1));
                    const nights = daysBetween(d, rd);
                    if (nights < minN || nights > maxN) continue;
                    if (wk && !coversWeekend(d, rd)) continue;

                    let bestRetCost = Infinity, bestRetRoute = null;
                    const directRet = directRetFares[rds];
                    if (directRet && !wheelOfFortuneMode) {
                        bestRetCost = directRet.price;
                        bestRetRoute = { type: 'direct', intCode: null, depDate: rds, dep: directRet.dep, arr: directRet.arr, price: directRet.price, legs: 1 };
                    }

                    for (const ic of retCandidates) {
                        const leg1 = allFares[destCode]?.[ic]?.[rds];
                        if (!leg1) continue;
                        const leg2 = allFares[ic]?.[origin]?.[rds];
                        if (!leg2 || !connects(leg1.arr, leg2.dep)) continue;
                        const total = leg1.price + leg2.price;
                        if (total < bestRetCost) {
                            bestRetCost = total;
                            bestRetRoute = { type: 'via', intCode: ic, depDate: rds, leg1Price: leg1.price, leg2Price: leg2.price, dep1: leg1.dep, arr1: leg1.arr, dep2: leg2.dep, arr2: leg2.arr, price: total, legs: 2 };
                        }
                    }

                    if (rPrev >= ods) {
                        for (const ic of retCandidates) {
                            const leg1 = allFares[destCode]?.[ic]?.[rPrev];
                            if (!leg1) continue;
                            const leg2 = allFares[ic]?.[origin]?.[rds];
                            if (!leg2) continue;
                            const total = leg1.price + leg2.price;
                            if (total < bestRetCost) {
                                bestRetCost = total;
                                bestRetRoute = { type: 'via1n', intCode: ic, depDate: rPrev, leg1Price: leg1.price, leg2Price: leg2.price, dep1: leg1.dep, arr1: leg1.arr, dep2: leg2.dep, arr2: leg2.arr, price: total, legs: 2 };
                            }
                        }
                    }

                    if (!bestRetRoute) continue;
                    allResults.push(packMultiDest(destCode, destName, ods, rds, nights, bestOutRoute, bestRetRoute));
                }
            }
        }
    }

    return allResults.sort((a, b) => a.total - b.total);
}

function getMonthsInRange(from, to) {
    const months = []; 
    let m = new Date(from.getFullYear(), from.getMonth(), 1);
    while (m <= to) { 
        months.push(new Date(m)); 
        m.setMonth(m.getMonth() + 1); 
    }
    return months;
}
