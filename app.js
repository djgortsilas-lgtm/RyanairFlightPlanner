/* --- i18n (Ελληνικά / English) --- */
let currentLang = 'el';
try { currentLang = localStorage.getItem('rfpLang') || 'el'; } catch (e) {}

const I18N = {
  origin: { el: 'Αφετηρία:', en: 'Origin:' },
  badge: { el: 'Πραγματικές τιμές • Τιμές σε EUR • Auto-refresh', en: 'Real prices • Prices in EUR • Auto-refresh' },
  init: { el: 'Αρχικοποίηση...', en: 'Initializing...' },
  proxyInfo: { el: 'Λήψη πραγματικών τιμών μέσω proxy • ', en: 'Fetching real prices via proxy • ' },
  type: { el: 'Τύπος:', en: 'Trip type:' },
  roundtrip: { el: 'Με επιστροφή', en: 'Round trip' },
  oneway: { el: 'Μονή διαδρομή', en: 'One way' },
  dateFrom: { el: 'Από ημερομηνία', en: 'From date' },
  dateTo: { el: 'Έως ημερομηνία', en: 'To date' },
  nights: { el: 'Διανυκτερεύσεις', en: 'Nights' },
  to: { el: 'έως', en: 'to' },
  weekend: { el: 'Να περιλαμβάνει Σαββατοκύριακο', en: 'Include weekend' },
  multiDest: { el: 'Με ανταπόκριση', en: 'With connection' },
  wheelHint: { el: 'Όλοι οι προορισμοί αυτόματα', en: 'All destinations automatically' },
  destCountTotal: { el: '{n} προορισμοί', en: '{n} destinations' },
  loadingDests: { el: 'Φόρτωση προορισμών...', en: 'Loading destinations...' },
  selectAll: { el: 'Επιλογή όλων', en: 'Select all' },
  clear: { el: 'Αποεπιλογή', en: 'Clear' },
  helpBtn: { el: 'Βοήθεια / Οδηγίες', en: 'Help / Guide' },
  helpTitle: { el: 'Βοήθεια / Οδηγίες', en: 'Help / Guide' },
  helpBody: {
    el: '<p>Η εφαρμογή ψάχνει ανάμεσα στα δρομολόγια να βρει πτήσεις που ανταποκρίνονται στα φίλτρα που ορίζει ο χρήστης, με ΑΦΕΤΗΡΙΑ το αεροδρόμιο που επιθυμεί. Για παράδειγμα: Από ημερομηνία 1/10/2026 έως 15/11/2026 και για διανυκτερεύσεις 3 έως 7 η εφαρμογή αναζητά ταξίδια μέσα στο εύρος των ημερομηνιών για 3 ή 4 ή 5 ή 6 ή 7 διανυκτερεύσεις, στον ή στους προορισμούς που έχουν επιλεχθεί. Μπορεί να οριστεί επιπλέον φίλτρο ώστε τα ταξίδια να περιλαμβάνουν Σαββατοκύριακο (βλ. αντίστοιχο checkbox).</p><p><strong>Με ανταπόκριση:</strong> Έχοντας τσεκαρισμένη αυτή την λειτουργία, μπορούμε να επιλέξουμε κάποιον προορισμό που δεν ταξιδεύει με απευθείας πτήσεις από την ΑΦΕΤΗΡΙΑ, οπότε και βρίσκει πτήσεις μέσω ανταπόκρισης. </p><p>Στα αποτελέσματα αναζήτησης εμφανίζεται αρχικά ένας πίνακας/ημερολόγιο τιμών πτήσεων (με πράσινο φόντο οι φθηνότερες πτήσεις και με κόκκινο οι ακριβότερες) και μετά αναλυτικά όλες οι διαθέσιμες πτήσεις. Υπάρχουν διαθέσιμα φίλτρα ταξινόμησης, διανυκτερεύσεων και ωρών αναμονής στο αεροδρόμιο (στην περίπτωση ανταποκρίσεων).</p><p class="note"><u>Σημείωση:</u> Δεν υπάρχει δυνατότητα πραγματοποίησης κράτησης μέσω της εφαρμογής!</p>',
    en: '<p>The app searches Ryanair schedules to find flights matching the user-defined filters, with ORIGIN set to the desired airport. For example: From date 1/10/2026 to 15/11/2026 and for 3 to 7 nights, the app searches for trips within the date range with 3 or 4 or 5 or 6 or 7 nights, for the selected destination(s). An extra filter can be set so that trips include a weekend (see the corresponding checkbox).</p><p><strong>With connection:</strong> With this option checked, you can select a destination not served by Ryanair with direct flights from the ORIGIN, and the app finds flights via a connection.</p><p>In the search results, a flight price table/calendar is shown first (cheapest flights with green background and most expensive with red), followed by a detailed list of all available flights. Sorting, nights and airport waiting-time filters are available (in the case of connections).</p><p class="note"><u>Note:</u> Booking cannot be made through the app!</p>'
  },
  search: { el: 'Αναζήτηση', en: 'Search' },
  searching: { el: 'Αναζήτηση...', en: 'Searching...' },
  results: { el: 'Αποτελέσματα', en: 'Results' },
  cheapest: { el: 'Φθηνότερα', en: 'Cheapest' },
  depDate: { el: 'Ημερομηνία αναχώρησης', en: 'Departure date' },
  emptyInit: { el: 'Επιλέξτε προορισμούς και πατήστε "Αναζήτηση"', en: 'Select destinations and press "Search"' },
  pickDates: { el: 'Επιλέξτε ημερομηνίες.', en: 'Select dates.' },
  pickDest: { el: 'Επιλέξτε έναν προορισμό.', en: 'Select a destination.' },
  pickDestPlural: { el: 'Επιλέξτε τουλάχιστον έναν προορισμό.', en: 'Select at least one destination.' },
  dateOrder: { el: 'Η "Από" πρέπει να είναι πριν την "Έως".', en: '"From" must be before "To".' },
  selectedCount: { el: '{n} / {m} επιλεγμένοι', en: '{n} / {m} selected' },
  pickOne: { el: 'Επιλέξτε έναν προορισμό', en: 'Select a destination' },
  selectedOne: { el: 'Επιλέχθηκε {code}', en: 'Selected {code}' },
  fetching: { el: 'Λήψη τιμών...', en: 'Fetching prices...' },
  fetchingRoutes: { el: 'Λήψη δρομολογίων...', en: 'Fetching schedules...' },
  fetchingAll: { el: 'Λήψη τιμών για όλους τους συνδυασμούς...', en: 'Fetching prices for all combinations...' },
  fetchingReal: { el: 'Λήψη πραγματικών τιμών από Ryanair...', en: 'Fetching real prices from Ryanair...' },
  scanning: { el: 'Σάρωση δρομολογίων', en: 'Scanning schedules' },
  connecting: { el: 'συνδέσεις', en: 'connections' },
  retry: { el: 'επανάληψη...', en: 'retry...' },
  calcMulti: { el: 'Υπολογισμός multi-city...', en: 'Computing multi-city...' },
  updated: { el: 'Ενημερώθηκε {time} — {n} προορισμοί', en: 'Updated {time} — {n} destinations' },
  error: { el: 'Σφάλμα', en: 'Error' },
  completed: { el: 'Ολοκληρώθηκε — {n} διαδρομές', en: 'Completed — {n} routes' },
  mcHeader: { el: 'Επιλέξτε τελικό προορισμό (οποιοδήποτε αεροδρόμιο της Ryanair) — με πράσινο: απευθείας πτήση από την αφετηρία', en: 'Select a final destination (any Ryanair airport) — green: direct flight from the origin' },
  mcTitle: { el: 'Με ανταπόκριση: {org} → {dest}', en: 'With connection: {org} → {dest}' },
  foundRoutes: { el: 'Βρέθηκαν {n} διαδρομές', en: '{n} routes found' },
  cheapestSort: { el: 'Φθηνότερο', en: 'Cheapest' },
  nightsSort: { el: 'Διανυκτερεύσεις', en: 'Nights' },
  oneWayLabel: { el: 'Μονή διαδρομή', en: 'One way' },
  totalLabel: { el: 'Σύνολο', en: 'Total' },
  nightsShort: { el: '{n} διαν.', en: '{n} nts' },
  flights: { el: 'Πτήσεις', en: 'Flights' },
  outbound: { el: 'ΜΕΤΑΒΑΣΗ', en: 'OUTBOUND' },
  return: { el: 'ΕΠΙΣΤΡΟΦΗ', en: 'RETURN' },
  oneNight: { el: '1 διαν.', en: '1 nt' },
  sameDay: { el: 'ίδια μέρα', en: 'same day' },
  viaWord: { el: ' via ', en: ' via ' },
  noRoutes: { el: 'Δεν βρέθηκαν διαθέσιμες διαδρομές με ενδιάμεσους σταθμούς.', en: 'No available routes with intermediate stops found.' },
  showing500: { el: 'Εμφανίζονται οι 500 πρώτες από {n} διαδρομές', en: 'Showing the first 500 of {n} routes' },
  mcRoutesFor: { el: '{n} multi-destination διαδρομές για {dest}', en: '{n} multi-destination routes for {dest}' },
  outgoing: { el: 'Μετάβαση', en: 'Outbound' },
  inbound: { el: 'Επιστροφή', en: 'Return' },
  oneWayDash: { el: 'Μονή διαδρομή — ', en: 'One way — ' },
  foundFlights: { el: 'Βρέθηκαν {n} πτήσεις', en: 'Found {n} flights' },
  foundCombos: { el: 'Βρέθηκαν {n} συνδυασμοί', en: 'Found {n} combinations' },
  cheapestPlural: { el: 'οι {n} φθηνότεροι', en: 'the {n} cheapest' },
  closestDates: { el: 'οι {n} πιο κοντινές ημερομηνίες', en: 'the {n} closest dates' },
  multiCityAdd: { el: ' + {n} multi-city', en: ' + {n} multi-city' },
  noResults: { el: 'Δεν βρέθηκαν αποτελέσματα.', en: 'No results found.' },
  tryOtherDates: { el: 'Δοκιμάστε άλλες ημερομηνίες.', en: 'Try different dates.' },
  noApiData: { el: 'Δεν ελήφθησαν τιμές από το Ryanair API. Δοκιμάστε ξανά ή ελέγξτε τη σύνδεσή σας.', en: 'No prices received from the Ryanair API. Try again or check your connection.' },
  calTitle: { el: 'Ημερολόγιο τιμών μετ\' επιστροφής', en: 'Round-trip price calendar' },
  cities: { el: 'ΠΟΛΕΙΣ', en: 'CITIES' },
  dayNames: { el: ['ΚΥ','ΔΕ','ΤΡ','ΤΕ','ΠΕ','ΠΑ','ΣΑ'], en: ['SU','MO','TU','WE','TH','FR','SA'] },
  destCol: { el: 'Προορισμός', en: 'Destination' },
  routeCol: { el: 'Διαδρομή', en: 'Route' },
  directLabel: { el: 'απευθείας', en: 'direct' },
  legTotal: { el: 'Σύνολο', en: 'Total' },
  calCheaper: { el: 'Φθηνότερο', en: 'Cheapest' },
  calCostlier: { el: 'Ακριβότερο', en: 'Most expensive' },
  waitAll: { el: 'Όλες οι αναμονές', en: 'All waiting times' },
  wait1to3: { el: '1-3 ώρες', en: '1-3 hours' },
  wait3to6: { el: '3-6 ώρες', en: '3-6 hours' },
  wait6to9: { el: '6-9 ώρες', en: '6-9 hours' },
  wait9to24: { el: '9-24 ώρες', en: '9-24 hours' },
  waitAt: { el: 'αναμονή', en: 'wait' },
  depCol: { el: 'Αναχώρηση', en: 'Departure' },
  retCol: { el: 'Επιστροφή', en: 'Return' },
  nightsCol: { el: 'Διαν.', en: 'Nts' },
  outCol: { el: 'Out €', en: 'Out €' },
  inCol: { el: 'In €', en: 'In €' },
  totalCol: { el: 'Σύνολο €', en: 'Total €' },
  mcProposals: { el: 'Προτάσεις multi-city', en: 'Multi-city proposals' },
  saving: { el: 'εξοικονόμηση {n} €', en: 'saving {n} €' },
  notFound: { el: 'Δεν βρέθηκαν διαθέσιμες διαδρομές.', en: 'No available routes found.' },
  originWord: { el: 'Αφετηρία', en: 'Origin' },
  other: { el: 'Άλλο', en: 'Other' },
  wheelOfFortuneActive: { el: 'Τροχός της τύχης — όλοι οι προορισμοί', en: 'Wheel of Fortune — all destinations' },
  wheelOfFortuneGridMsg: { el: 'Ο "Τροχός της τύχης" ενεργοποιήθηκε — θα ελεγχθούν όλοι οι προορισμοί αυτόματα.', en: '"Wheel of Fortune" is enabled — all destinations will be checked automatically.' },
  wheelOfFortuneLabel: { el: 'Τροχός της τύχης', en: 'Wheel of Fortune' },
  wheelAllDests: { el: 'Όλοι οι προορισμοί', en: 'All destinations' },
  cityAll: { el: 'Όλες οι πόλεις', en: 'All cities' },
  wheelFilterDest: { el: 'Φίλτρο προορισμού', en: 'Destination filter' },
  wheelTop10: { el: 'Τοπ 10 φθηνότεροι προορισμοί', en: 'Top 10 cheapest destinations' },
  wheelAllNights: { el: 'Όλες οι διανυκτερεύσεις', en: 'All nights' },
  wheelWaitAll: { el: 'Όλοι οι χρόνοι αναμονής', en: 'All waiting times' },
  wheelWaitShort: { el: '< 3 ώρες αναμονή', en: '< 3 hours wait' },
  wheelWaitMed: { el: '3-6 ώρες αναμονή', en: '3-6 hours wait' },
  wheelWaitLong: { el: '> 6 ώρες αναμονή', en: '> 6 hours wait' },
  wheelWaitShortBoth: { el: '< 3 ώρες και στις 2 πτήσεις', en: '< 3 hours both flights' },
  wheelWaitMedBoth: { el: '3-6 ώρες και στις 2 πτήσεις', en: '3-6 hours both flights' },
  wheelWaitLongBoth: { el: '> 6 ώρες και στις 2 πτήσεις', en: '> 6 hours both flights' },
  cancel: { el: 'Ακύρωση', en: 'Cancel' },
  cancelled: { el: 'Η αναζήτηση ακυρώθηκε', en: 'Search cancelled' },
  waitBadge: { el: 'Αναμ. {n}ω', en: 'Wait {n}h' },
  hideFilters: { el: 'Απόκρυψη φίλτρων ▲', en: 'Hide filters ▲' },
  showFilters: { el: 'Εμφάνιση φίλτρων ▼', en: 'Show filters ▼' },
  clearFilters: { el: 'Καθαρισμός Φίλτρων', en: 'Clear Filters' }
};

function t(key, vars) {
  let s = (I18N[key] && I18N[key][currentLang]) || key;
  if (vars) for (const k of Object.keys(vars)) s = s.split('{'+k+'}').join(String(vars[k]));
  return s;
}

/* --- State --- */
let data = null;
let currentOrigin = 'SKG';
let selectedDestinations = new Set();
let selectedIntermediates = new Set();
let isSearching = false;
let searchWorker = null;
let lastResults = [];
let lastMcResults = [];
let lastFaresData = {};
let lastMultiDestPaths = null;
let lastMultiDestCityNames = null;
let lastMultiDestDays = 0;
let lastMultiDestOrigin = '';
let lastMultiDestDestCode = '';
let lastMultiDestDestName = '';
let wheelOfFortuneMode = false;
let wheelFilterDest = 'ALL';
let wheelFilterNights = 'ALL';
let wheelFilterWait = 'ALL';
let simpleFilterNights = 'ALL';
let simpleFilterCity = 'ALL';
let simpleFilterWait = 'ALL';

/* --- Data Handling --- */
async function loadAppData() {
  try {
    const resp = await fetch('destinations.json');
    data = await resp.json();
    initOriginSelect();
    onOriginChange();
    applyI18n();
  } catch (e) {
    console.error("Failed to load data:", e);
    alert("Σφάλμα φόρτωσης δεδομένων.");
  }
}

function cityName(code, fallback) {
  if (!data) return code;
  const greek = getGreekName(code, fallback || data.greekCityNames[fallback] || code);
  return currentLang === 'el' ? greek : (data.greekCityNames[greek] || greek);
}

function getGreekName(code, fallback) {
  if (data && data.greekCodeNames[code]) return data.greekCodeNames[code];
  if (data && data.greekCityNames[fallback]) return data.greekCityNames[fallback];
  return fallback;
}

function getOriginDisplayName(code) {
  return cityName(code, data?.destinations[code]?.[0]?.city || code);
}

/* --- UI Logic --- */
function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const vars = el.getAttribute('data-i18n-vars');
    let val = t(key, vars ? JSON.parse(vars) : null);
    if (el.hasAttribute('data-i18n-html')) el.innerHTML = val; else el.textContent = val;
  });
  const sel = document.getElementById('sortBy');
  if (sel) {
    sel.options[0].text = t('cheapest');
    sel.options[1].text = t('depDate');
  }
  document.title = currentLang === 'en' ? 'LowcostFlightPlanner - With connection' : 'LowcostFlightPlanner - Με ανταπόκριση';
}

function setLang(lang) {
  currentLang = lang;
  try { localStorage.setItem('rfpLang', lang); } catch (e) {}
  document.documentElement.lang = lang;
  document.getElementById('flagEl')?.classList.toggle('is-active', lang === 'el');
  document.getElementById('flagEn')?.classList.toggle('is-active', lang === 'en');
  applyI18n();
  initOriginSelect();
  loadDestinations();
  updateDestCount();
  if (lastResults.length > 0 || lastMcResults.length > 0) renderResults();
}

function initOriginSelect() {
  const sel = document.getElementById('originSelect');
  if (!sel || !data) return;
  const byCountry = {};
  const masterAirports = [];
  
  // Build master list from all destination lists
  const seen = new Set();
  for (const [origin, list] of Object.entries(data.destinations)) {
    for (const d of list) {
      if (!seen.has(d.code)) { seen.add(d.code); masterAirports.push(d); }
    }
  }
  
  for (const d of masterAirports) {
    const c = d.country || t('other');
    if (!byCountry[c]) byCountry[c] = [];
    byCountry[c].push(d);
  }
  
  const countries = Object.keys(byCountry).sort((a, b) => a.localeCompare(b));
  let html = '';
  for (const c of countries) {
    html += `<optgroup label="${c}">`;
    byCountry[c].sort((a, b) => a.city.localeCompare(b.city));
    for (const d of byCountry[c]) {
      const label = `${cityName(d.code, d.city)} (${d.code})`;
      html += `<option value="${d.code}"${d.code === currentOrigin ? ' selected' : ''}>${label}</option>`;
    }
    html += '</optgroup>';
  }
  sel.innerHTML = html;
}

function onOriginChange() {
  const sel = document.getElementById('originSelect');
  currentOrigin = sel ? sel.value : currentOrigin;
  selectedDestinations.clear();
  if (document.getElementById('multiDestMode')?.checked) selectAllIntermediatesDefault();
  else selectedIntermediates.clear();
  loadDestinations();
  updateDestCount();
}

function loadDestinations() {
  const isMc = document.getElementById('multiDestMode').checked;
  let allDests = isMc 
    ? Object.values(data.destinations).flat().filter((v, i, a) => a.findIndex(t => t.code === v.code) === i)
    : (data.destinations[currentOrigin] || []);
  
  if (!isMc) allDests.sort((a, b) => (a.country || '').localeCompare(b.country || '') || a.city.localeCompare(b.city));
  
  document.getElementById('destCount').textContent = t('destCountTotal', { n: allDests.length });
  renderDestinations(allDests);
}

function renderDestinations(allDests) {
  const grid = document.getElementById('destGrid');
  const isMc = document.getElementById('multiDestMode').checked;
  if (isMc && wheelOfFortuneMode) {
    grid.innerHTML = `<div class="dest-note is-alert">${t('wheelOfFortuneGridMsg')}</div>`;
    return;
  }
  if (isMc) {
    const directCodes = new Set((data.destinations[currentOrigin] || []).map(d => d.code));
    const sorted = [...allDests].sort((a, b) => a.country.localeCompare(b.country) || a.city.localeCompare(b.city));
    let html = `<div class="dest-note is-info">${t('mcHeader')}</div>`;
    let currentCountry = '';
    for (const d of sorted) {
      const label = cityName(d.code, d.city);
      if (d.country !== currentCountry) {
        currentCountry = d.country;
        html += `<div class="dest-group">${currentCountry}</div>`;
      }
      const direct = directCodes.has(d.code);
      html += `<label class="dest-item${direct ? ' is-direct' : ''}"><input type="radio" name="mcDest" value="${d.code}" ${selectedDestinations.has(d.code) ? 'checked' : ''} onchange="selectSingleDest('${d.code}')"><span class="dest-code">${d.code}</span><span class="dest-name">${label}</span></label>`;
    }
    grid.innerHTML = html;
  } else {
    let html = '';
    let currentCountry = '';
    for (const d of allDests) {
      const label = cityName(d.code, d.city);
      if (d.country !== currentCountry) {
        currentCountry = d.country;
        html += `<div class="dest-group">${currentCountry}</div>`;
      }
      html += `<label class="dest-item"><input type="checkbox" value="${d.code}" ${selectedDestinations.has(d.code) ? 'checked' : ''} onchange="toggleDest('${d.code}',this.checked)"><span class="dest-code">${d.code}</span><span class="dest-name">${label}</span></label>`;
    }
    grid.innerHTML = html;
  }
}

function toggleDest(code, chk) { chk ? selectedDestinations.add(code) : selectedDestinations.delete(code); updateDestCount(); }
function selectSingleDest(code) { selectedDestinations.clear(); selectedDestinations.add(code); updateDestCount(); }
function selectAllIntermediatesDefault() {
  selectedIntermediates.clear();
  const list = data.destinations[currentOrigin] || [];
  list.forEach(d => { if (d.code !== currentOrigin) selectedIntermediates.add(d.code); });
}
function selectAllDestinations(sel) {
  const allDests = document.getElementById('multiDestMode').checked 
    ? Object.values(data.destinations).flat().filter((v, i, a) => a.findIndex(t => t.code === v.code) === i)
    : (data.destinations[currentOrigin] || []);
  if (sel) allDests.forEach(d => selectedDestinations.add(d.code));
  else selectedDestinations.clear();
  loadDestinations();
  updateDestCount();
}
function onMultiDestToggle() {
  const isMc = document.getElementById('multiDestMode').checked;
  const wheelRow = document.getElementById('wheelOfFortuneRow');
  /* The Wheel of Fortune option is hidden for now. The checkbox, its handler
     and the whole connection-scan path in worker.js are still here and still
     work - flip this to true to bring the option back. */
  const wheelUiEnabled = false;
  if (isMc) {
    if (selectedDestinations.size > 1) {
      const first = [...selectedDestinations][0];
      selectedDestinations.clear();
      selectedDestinations.add(first);
    }
    selectAllIntermediatesDefault();
    if (wheelRow) {
      wheelRow.classList.toggle('is-hidden', !wheelUiEnabled);
      if (!wheelUiEnabled) {
        const wfCk = document.getElementById('wheelOfFortune');
        if (wfCk) wfCk.checked = false;
        wheelOfFortuneMode = false;
      }
    }
  } else {
    const directCodes = new Set((data.destinations[currentOrigin] || []).map(d => d.code));
    const valid = [...selectedDestinations].filter(c => directCodes.has(c));
    selectedDestinations.clear();
    for (const c of valid) selectedDestinations.add(c);
    selectedIntermediates.clear();
    if (wheelRow) wheelRow.classList.add('is-hidden');
    const wfCk = document.getElementById('wheelOfFortune');
    if (wfCk) { wfCk.checked = false; wheelOfFortuneMode = false; }
  }
  loadDestinations();
  updateDestCount();
}
function onWheelOfFortuneToggle() {
  wheelOfFortuneMode = document.getElementById('wheelOfFortune').checked;
  loadDestinations();
  updateDestCount();
}
function updateDestCount() {
  const isMc = document.getElementById('multiDestMode').checked;
  const countEl = document.getElementById('destCount');
  const actionsEl = document.getElementById('destActions');
  if (isMc) {
    if (wheelOfFortuneMode) {
      countEl.textContent = t('wheelOfFortuneActive');
      if (actionsEl) actionsEl.classList.add('is-hidden');
    } else {
      const sel = [...selectedDestinations][0];
      countEl.textContent = selectedDestinations.size > 0
        ? t('selectedOne', { code: `${sel} (${cityName(sel, data?.greekCityNames[sel] || sel)})` })
        : t('pickOne');
      if (actionsEl) actionsEl.classList.add('is-hidden');
    }
  } else {
    const allDestsCount = (data.destinations[currentOrigin] || []).length;
    countEl.textContent = t('selectedCount', { n: selectedDestinations.size, m: allDestsCount });
    if (actionsEl) actionsEl.classList.remove('is-hidden');
  }
}

function clearAllFilters() {
    document.getElementById('dateFrom').value = '';
    document.getElementById('dateTo').value = '';
document.getElementById('minNights').value = '';
  document.getElementById('maxNights').value = '';
    document.getElementById('weekendOnly').checked = false;
    selectedDestinations.clear();
    enforceDateOrder();
    clampNightsInputs();
    loadDestinations();
    updateDestCount();
}

/* --- Dates & nights ---
   TO must always be strictly after FROM, and the nights range follows the
   chosen window. Without this the inputs stay at their 2-5 defaults, so a
   20-day window silently only ever returns 2-5 night trips. */
function formatDate(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}
function daysBetween(a, b) { return Math.round((b - a) / 86400000); }
function addDays(d, n) { const r = new Date(d); r.setDate(r.getDate() + n); return r; }

function getDateRangeNights() {
  const df = document.getElementById('dateFrom')?.value;
  const dt = document.getElementById('dateTo')?.value;
  if (!df || !dt) return null;
  const dFrom = new Date(df + 'T00:00:00');
  const dTo = new Date(dt + 'T00:00:00');
  if (isNaN(dFrom) || isNaN(dTo)) return null;
  const diff = daysBetween(dFrom, dTo);
  return diff < 1 ? null : diff;
}

/* Nights are chosen from dropdowns rather than typed, which is what mobile
   needs. The options are rebuilt whenever the allowed range changes, so a
   45-day date window offers 45 nights without the markup hard-coding them. */
const DEFAULT_MIN_NIGHTS = 2;
const DEFAULT_MAX_NIGHTS = 5;
const MAX_NIGHTS_OPTIONS = 365;

function buildNightOptions(el, cap, value) {
  if (!el) return;
  const limit = Math.max(1, Math.min(MAX_NIGHTS_OPTIONS, cap));
  let html = '';
  for (let n = 1; n <= limit; n++) html += `<option value="${n}">${n}</option>`;
  el.innerHTML = html;
  el.value = String(Math.max(1, Math.min(limit, value)));
}

function syncNightsFromDates() {
  const diff = getDateRangeNights();
  if (diff === null) return;
  const minEl = document.getElementById('minNights');
  const maxEl = document.getElementById('maxNights');
  if (!minEl || !maxEl) return;
  buildNightOptions(minEl, diff, diff);
  buildNightOptions(maxEl, diff, diff);
}

function clampNightsInputs() {
  const diff = getDateRangeNights();
  const cap = diff === null ? 30 : diff;
  const minEl = document.getElementById('minNights');
  const maxEl = document.getElementById('maxNights');
  if (!minEl || !maxEl) return;
  let minN = parseInt(minEl.value, 10);
  let maxN = parseInt(maxEl.value, 10);
  if (isNaN(minN)) minN = DEFAULT_MIN_NIGHTS;
  if (isNaN(maxN)) maxN = DEFAULT_MAX_NIGHTS;
  minN = Math.max(1, Math.min(cap, minN));
  maxN = Math.max(minN, Math.min(cap, maxN));
  buildNightOptions(minEl, cap, minN);
  buildNightOptions(maxEl, cap, maxN);
}

function readNightsRange() {
  const diff = getDateRangeNights();
  const cap = diff === null ? 30 : diff;
  let minN = parseInt(document.getElementById('minNights')?.value, 10);
  let maxN = parseInt(document.getElementById('maxNights')?.value, 10);
  if (isNaN(minN)) minN = DEFAULT_MIN_NIGHTS;
  if (isNaN(maxN)) maxN = DEFAULT_MAX_NIGHTS;
  minN = Math.max(1, Math.min(cap, minN));
  maxN = Math.max(minN, Math.min(cap, maxN));
  return { minN, maxN };
}

function enforceDateOrder(changed) {
  const df = document.getElementById('dateFrom');
  const dt = document.getElementById('dateTo');
  if (!df || !dt) return;
  if (df.value) {
    const dFrom = new Date(df.value + 'T00:00:00');
    if (!isNaN(dFrom)) dt.min = formatDate(addDays(dFrom, 1));
  } else {
    dt.removeAttribute('min');
  }
  if (dt.value) {
    const dTo = new Date(dt.value + 'T00:00:00');
    if (!isNaN(dTo)) df.max = formatDate(addDays(dTo, -1));
  } else {
    df.max = '';
    df.removeAttribute('max');
  }
  if (!df.value || !dt.value) return;
  const dFrom = new Date(df.value + 'T00:00:00');
  const dTo = new Date(dt.value + 'T00:00:00');
  if (isNaN(dFrom) || isNaN(dTo)) return;
  if (dTo <= dFrom) {
    if (changed === 'to') {
      df.value = formatDate(addDays(dTo, -1));
      const nf = new Date(df.value + 'T00:00:00');
      if (!isNaN(nf)) dt.min = formatDate(addDays(nf, 1));
    } else {
      dt.value = formatDate(addDays(dFrom, 1));
      const nt = new Date(dt.value + 'T00:00:00');
      if (!isNaN(nt)) df.max = formatDate(addDays(nt, -1));
    }
  }
}

function onDateChange(changed) {
  enforceDateOrder(changed);
  const cap = getDateRangeNights() ?? 30;
  const minEl = document.getElementById('minNights');
  const maxEl = document.getElementById('maxNights');
  if (minEl) minEl.max = String(cap);
  if (maxEl) maxEl.max = String(cap);
  syncNightsFromDates();
}

/* --- Search Execution (Worker) --- */
async function search() {
  if (isSearching) return;
  const dateFrom = document.getElementById('dateFrom').value;
  const dateTo = document.getElementById('dateTo').value;
  if (!dateFrom || !dateTo) return alert(t('pickDates'));
  if (!wheelOfFortuneMode && selectedDestinations.size === 0) return alert(t('pickDestPlural'));
  
  const dFrom = new Date(dateFrom + 'T00:00:00');
  const dTo = new Date(dateTo + 'T00:00:00');
  if (dFrom >= dTo) return alert(t('dateOrder'));

  const { minN, maxN } = readNightsRange();
  const wk = document.getElementById('weekendOnly').checked;
  const isOneWay = document.querySelector('input[name="tripType"]:checked')?.value === 'oneway';
  const isMc = document.getElementById('multiDestMode').checked;

  isSearching = true;
  const btn = document.getElementById('searchBtn');
  btn.disabled = true;
  btn.textContent = t('searching');

  setCacheDot('loading', t('fetching'));
  const content = document.getElementById('resultsContent');
  content.innerHTML = `<div class="loading"><div class="plane-loader" aria-hidden="true"><span class="plane-ping"></span><span class="plane-ping plane-ping-late"></span><svg class="plane-icon" viewBox="0 0 24 24"><path fill="url(#planeGrad)" d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg></div><div class="progress-text" id="progText">${t('fetchingReal')}</div><div class="progress-bar"><div class="progress-bar-fill" id="progBar" style="width:0%"></div></div><div class="cancel-row"><button class="btn btn-secondary btn-mini" id="cancelBtn" onclick="cancelSearch()">${t('cancel')}</button></div></div>`;

  if (!searchWorker) searchWorker = new Worker('worker.js');
  
  searchWorker.onmessage = function(e) {
    const { type, payload } = e.data;
    if (type === 'PROGRESS') {
      const pt = document.getElementById('progText');
      const pb = document.getElementById('progBar');
      if (pt) pt.textContent = payload.msg || `${t('fetching')} ${Math.round(payload.pct)}%`;
      if (pb) pb.style.width = Math.min(100, payload.pct) + '%';
    } else if (type === 'RESULTS') {
      handleSearchSuccess(payload, e.data.faresData || {});
    } else if (type === 'ERROR') {
      handleSearchError(payload);
    }
  };

  const masterAirports = Object.values(data.destinations).flat().filter((v, i, a) => a.findIndex(t => t.code === v.code) === i);

  searchWorker.postMessage({
    type: 'SEARCH',
    payload: {
      origin: currentOrigin,
      destList: isMc ? [...selectedDestinations] : (data.destinations[currentOrigin] || []).filter(d => selectedDestinations.has(d.code)),
      dateFrom, dateTo, minN, maxN, wk, isOneWay, isMc, wheelOfFortuneMode,
      masterAirports,
      originDestMap: data.destinations
    }
  });
}

function handleSearchSuccess(results, faresData) {
  isSearching = false;
  const btn = document.getElementById('searchBtn');
  btn.disabled = false;
  btn.textContent = t('search');
  setCacheDot('fresh', t('completed', { n: results.length }));
  
  lastResults = results;
  lastFaresData = faresData || {};
  renderResults();
}

function handleSearchError(msg) {
  isSearching = false;
  const btn = document.getElementById('searchBtn');
  btn.disabled = false;
  btn.textContent = t('search');
  document.getElementById('resultsContent').innerHTML = `<div class="error-msg">${t('error')}: ${msg}</div>`;
  setCacheDot('empty', t('error'));
}

function cancelSearch() {
  if (searchWorker) searchWorker.terminate();
  searchWorker = null;
  handleSearchError(t('cancelled'));
}

/* --- Results Rendering --- */

/* Flight times, e.g. 05:40-06:50. Returns '' when the API gave no times. */
function timeSpan(dep, arr) {
  if (!dep && !arr) return '';
  const span = `${dep || '—'}${arr ? '-' + arr : ''}`;
  return `<span class="time-span">${span}</span>`;
}

/* One leg line inside a detailed multi-destination itinerary. */
function legLine(from, to, date, dep, arr, price, wait) {
  const p = price == null ? '' : `<span class="leg-price">${fmtEuro(price)}</span>`;
  const w = wait == null ? '' : `<span class="leg-wait">${t('waitAt')} ${fmtWait(wait)}</span>`;
  const d = date ? `<span class="leg-date">${fmtDate(date)}</span>` : '';
  return `<div class="leg-line"><span class="leg-route">${from} <span class="route-arrow">&rarr;</span> ${to}</span>${d}<span class="leg-time">${timeSpan(dep, arr)}</span>${w}${p}</div>`;
}

/* Detailed itinerary for a multi-destination row: every leg with its date,
   times and price, for the outbound and the return direction. A connection
   can land on the next day, so leg dates come from the route itself rather
   than from the row's single outDate / inDate. */
function itineraryHtml(r) {
  const dir = (route, from, to, leg1Date, leg2Date, wait) => {
    if (!route) return '';
    if (route.intCode) {
      return legLine(from, route.intCode, leg1Date, route.dep1, route.arr1, route.leg1Price, wait)
        + legLine(route.intCode, to, leg2Date, route.dep2, route.arr2, route.leg2Price, null);
    }
    return legLine(from, to, leg1Date, route.dep, route.arr, route.price, null);
  };
  const out = dir(r.outRoute, currentOrigin, r.destCode, r.outDate, (r.outRoute && r.outRoute.arrDate) || r.outDate, r.outWait);
  const ret = dir(r.retRoute, r.destCode, currentOrigin, (r.retRoute && r.retRoute.depDate) || r.inDate, r.inDate, r.retWait);
  if (!out) return '';
  const outTotal = r.outPrice;
  const inTotal = r.inPrice;
  return `<div class="itin">${out}<div class="leg-sum">${t('legTotal')}: <strong>${fmtEuro(outTotal)}</strong></div>`
    + (ret ? `<div class="itin-sep"></div>${ret}<div class="leg-sum">${t('legTotal')}: <strong>${fmtEuro(inTotal)}</strong></div>` : '')
    + `</div>`;
}

/* Round-trip price calendar: one row per destination, one column per
   outbound date. Only the cheapest cell of each destination is green and
   only the most expensive is red; everything in between stays neutral, so
   the two extremes stand out instead of drowning in a gradient. */
function renderPriceCalendar() {
  const destCodes = [];
  const dateSet = new Set();
  for (const [code, fd] of Object.entries(lastFaresData)) {
    if (simpleFilterCity !== 'ALL' && code !== simpleFilterCity) continue;
    if (!fd || (Object.keys(fd.outbound || {}).length === 0 && Object.keys(fd.inbound || {}).length === 0)) continue;
    destCodes.push(code);
    for (const d of Object.keys(fd.outbound || {})) dateSet.add(d);
  }
  if (destCodes.length === 0 || dateSet.size === 0) return '';

  /* cheapest total per destination + outbound date */
  const rtMap = {};
  for (const r of lastResults) {
    if (!r.inDate) continue;
    const key = r.destCode + '|' + r.outDate;
    if (!rtMap[key] || r.total < rtMap[key].total) rtMap[key] = { total: r.total, nights: r.nights };
  }

  const calDates = [...dateSet].sort();
  const dayNames = I18N.dayNames[currentLang];
  let html = `<div class="cal-section"><h3>${t('calTitle')}</h3>`
    + `<div class="cal-legend"><span class="cal-legend-chip cal-legend-cheap"></span>${t('calCheaper')}<span class="cal-legend-chip cal-legend-expensive"></span>${t('calCostlier')}</div>`
    + `<div class="cal-scroll"><table class="cal-table"><thead><tr><th class="cal-dest">${t('cities')}</th>`
    + calDates.map(d => {
        const day = new Date(d + 'T00:00:00').getDay();
        const cls = day === 0 || day === 6 ? ' cal-date-wknd' : '';
        return `<th class="cal-date${cls}"><span class="day-name">${dayNames[day]}</span>${fmtDate(d)}</th>`;
      }).join('')
    + `</tr></thead><tbody>`;

  for (const code of destCodes) {
    /* prefer the name the API gave us for this destination */
    const known = lastResults.find(r => r.destCode === code);
    const label = cityName(code, (known && known.destName) || code);
    let min = Infinity, max = -Infinity;
    for (const d of calDates) {
      const rt = rtMap[code + '|' + d];
      if (rt) { if (rt.total < min) min = rt.total; if (rt.total > max) max = rt.total; }
    }
    html += `<tr><td class="cal-dest">${label} <span class="code-badge">${code}</span></td>`;
    for (const d of calDates) {
      const rt = rtMap[code + '|' + d];
      if (!rt) { html += `<td class="cal-cell cal-empty">-</td>`; continue; }
      let cls = 'cal-cell';
      if (min < Infinity && rt.total === min) cls += ' cal-min';
      else if (max > -Infinity && min !== max && rt.total === max) cls += ' cal-max';
      html += `<td class="${cls}">${Number(rt.total).toFixed(0).replace('.', ',')}&euro;<span class="cal-nights">${t('nightsShort', { n: rt.nights })}</span></td>`;
    }
    html += `</tr>`;
  }
  return html + `</tbody></table></div></div>`;
}

function renderResults() {
  const sortBy = document.getElementById('sortBy').value;
  const content = document.getElementById('resultsContent');
  const ow = lastResults.length > 0 && lastResults[0].inDate === null;

  applyResultFilters(ow);

  let displayResults = [...lastResults];
  /* A connection beyond MAX_WAIT_HOURS is not an itinerary anybody can use. */
  displayResults = displayResults.filter(r => (r.maxWait == null ? 0 : Number(r.maxWait)) <= MAX_WAIT_HOURS);
  if (simpleFilterNights !== 'ALL' && !ow) displayResults = displayResults.filter(r => String(r.nights) === simpleFilterNights);
  if (simpleFilterCity !== 'ALL') displayResults = displayResults.filter(r => r.destCode === simpleFilterCity);
  if (simpleFilterWait !== 'ALL') displayResults = displayResults.filter(r => waitInBand(r.maxWait, simpleFilterWait));

  const info = document.getElementById('resultsInfo');
  if (info) {
    const filtered = displayResults.length !== lastResults.length;
    info.textContent = filtered
      ? `${displayResults.length} / ${lastResults.length}`
      : `${lastResults.length}`;
  }

  if (sortBy === 'date') {
    displayResults.sort((a, b) => a.outDate.localeCompare(b.outDate) || a.total - b.total);
  } else {
    displayResults.sort((a, b) => a.total - b.total);
  }

  if (displayResults.length === 0) {
    const nothingMatched = lastResults.length > 0;
    content.innerHTML = `<div class="empty-msg"><div class="big-icon">&#128533;</div><p>${t('noResults')}</p><p style="color:var(--text2);font-size:0.9rem;margin-top:8px">${nothingMatched ? t('tryOtherDates') : t('noApiData')}</p></div>`;
    return;
  }

  const isMulti = displayResults.some(r => r.outRoute);

  const colHeaders = ow
    ? `<th>#</th><th>${t('destCol')}</th>${isMulti ? `<th>${t('routeCol')}</th>` : ''}<th>${t('depCol')}</th><th class="num">${t('totalCol')}</th>`
    : `<th>#</th><th>${t('destCol')}</th>${isMulti ? `<th>${t('routeCol')}</th>` : ''}<th>${t('depCol')}</th><th>${t('retCol')}</th><th class="num">${t('nightsCol')}</th><th class="num">${t('outCol')}</th><th class="num">${t('inCol')}</th><th class="num">${t('totalCol')}</th>`;

  const legHtml = (route, from, to) => {
    if (!route) return '';
    if (route.intCode) {
      return `${from} <span class="route-arrow">&rarr;</span> <span class="via-badge">${route.intCode}</span> <span class="route-arrow">&rarr;</span> ${to}`;
    }
    return `${from} <span class="route-arrow">&rarr;</span> ${to} <span class="route-dim">(${t('directLabel')})</span>`;
  };

  /* calendar first (round-trip only), then the detailed list */
  let html = ow ? '' : renderPriceCalendar();

  html += `<div class="table-wrap"><table><thead><tr>${colHeaders}</tr></thead><tbody>`;
  displayResults.forEach((r, i) => {
    const rc = i < 3 ? `rank-${i+1}` : 'rank-other';
    let cell = `<td><span class="rank-badge ${rc}">${i+1}</span></td><td><div class="dest-cell"><span class="code-badge">${r.destCode}</span><span>${cityName(r.destCode, r.destName)}</span></div></td>`;
    if (isMulti) {
      const out = legHtml(r.outRoute, currentOrigin, r.destCode);
      const ret = r.retRoute ? legHtml(r.retRoute, r.destCode, currentOrigin) : '';
      cell += `<td class="route-cell"><span class="route-leg">${out}</span>${ret ? `<span class="route-leg route-leg-ret">${ret}</span>` : ''}${itineraryHtml(r)}</td>`;
    }
    cell += `<td>${fmtDate(r.outDate)}${timeSpan(r.outDep, r.outArr)}</td>`;
    if (ow) {
      html += `<tr>${cell}<td class="price-total num">${fmtEuro(r.total)}</td></tr>`;
    } else {
      html += `<tr>${cell}<td>${fmtDate(r.inDate)}${timeSpan(r.inDep, r.inArr)}</td><td class="num"><span class="nights-badge">${r.nights}</span></td><td class="price num">${fmtEuro(r.outPrice)}</td><td class="price num">${fmtEuro(r.inPrice)}</td><td class="price-total num">${fmtEuro(r.total)}</td></tr>`;
    }
  });
  html += `</tbody></table></div>`;
  content.innerHTML = html;
}

function fmtDate(iso) {
  if (!iso) return '—';
  const [y, m, d] = String(iso).split('-');
  return `${d}/${m}/${y}`;
}

function fmtEuro(n) {
  return `${Number(n).toFixed(2).replace('.', ',')} €`;
}

function reSortResults() { renderResults(); }

function filterSimpleNights() {
  const sel = document.getElementById('simpleNightsFilter');
  if (sel) simpleFilterNights = sel.value;
  renderResults();
}
function filterSimpleCity() {
  const sel = document.getElementById('simpleCityFilter');
  if (sel) simpleFilterCity = sel.value;
  renderResults();
}
function filterSimpleWait() {
  const sel = document.getElementById('simpleWaitFilter');
  if (sel) simpleFilterWait = sel.value;
  renderResults();
}

/* A connection longer than this is not a usable itinerary, so those rows
   are dropped whatever the filter says. */
const MAX_WAIT_HOURS = 24;

/* Does a layover fall inside the selected 1-3 / 3-6 / 6-9 / 9-24 band? */
function waitInBand(hours, band) {
  if (band === 'ALL') return true;
  if (hours == null) return false;
  const h = Number(hours);
  if (band === '1-3') return h >= 1 && h < 3;
  if (band === '3-6') return h >= 3 && h < 6;
  if (band === '6-9') return h >= 6 && h < 9;
  if (band === '9-24') return h >= 9 && h <= MAX_WAIT_HOURS;
  return true;
}

function fmtWait(h) {
  if (h == null) return '';
  const hrs = Math.floor(h);
  const mins = Math.round((h - hrs) * 60);
  return hrs > 0 ? `${hrs}h${mins ? ' ' + mins + 'm' : ''}` : `${mins}m`;
}

/* Populate the results dropdowns and apply them. Nights and city apply to
   every search; the layover band only makes sense when the results
   actually contain connections, so it stays hidden otherwise. */
function applyResultFilters(ow) {
  const nightsSel = document.getElementById('simpleNightsFilter');
  const citySel = document.getElementById('simpleCityFilter');
  const waitSel = document.getElementById('simpleWaitFilter');

  const nightsSet = [...new Set(lastResults.map(r => r.nights).filter(n => n > 0))].sort((a, b) => a - b);
  if (nightsSel) {
    if (!ow && nightsSet.length > 0) {
      if (simpleFilterNights !== 'ALL' && !nightsSet.includes(Number(simpleFilterNights))) simpleFilterNights = 'ALL';
      nightsSel.innerHTML = `<option value="ALL">${t('wheelAllNights')}</option>`
        + nightsSet.map(n => `<option value="${n}" ${simpleFilterNights === String(n) ? 'selected' : ''}>${t('nightsShort', { n })}</option>`).join('');
      nightsSel.classList.remove('is-hidden');
    } else {
      nightsSel.classList.add('is-hidden');
      simpleFilterNights = 'ALL';
    }
  }

  if (citySel) {
    const codes = [...new Set(lastResults.map(r => r.destCode))];
    if (codes.length > 1) {
      const sorted = [...codes].sort((a, b) => {
        const ra = lastResults.find(r => r.destCode === a);
        const rb = lastResults.find(r => r.destCode === b);
        return cityName(a, (ra && ra.destName) || a).toLowerCase().localeCompare(cityName(b, (rb && rb.destName) || b).toLowerCase());
      });
      if (simpleFilterCity !== 'ALL' && !codes.includes(simpleFilterCity)) simpleFilterCity = 'ALL';
      citySel.innerHTML = `<option value="ALL">${t('cityAll')} (${codes.length})</option>`
        + sorted.map(c => {
          const rr = lastResults.find(r => r.destCode === c);
          const nm = cityName(c, (rr && rr.destName) || c);
          return `<option value="${c}" ${simpleFilterCity === c ? 'selected' : ''}>${nm} (${c})</option>`;
        }).join('');
      citySel.classList.remove('is-hidden');
    } else {
      citySel.classList.add('is-hidden');
      simpleFilterCity = 'ALL';
    }
  }

  const hasLayovers = lastResults.some(r => r.maxWait != null && r.maxWait > 0);
  if (waitSel) {
    if (hasLayovers) {
      waitSel.innerHTML = `<option value="ALL">${t('waitAll')}</option>`
        + [['1-3', 'wait1to3'], ['3-6', 'wait3to6'], ['6-9', 'wait6to9'], ['9-24', 'wait9to24']]
          .map(([v, k]) => `<option value="${v}" ${simpleFilterWait === v ? 'selected' : ''}>${t(k)}</option>`).join('');
      waitSel.classList.remove('is-hidden');
    } else {
      waitSel.classList.add('is-hidden');
      simpleFilterWait = 'ALL';
    }
  }
}

/* --- UI Helpers --- */
function onTripTypeChange() {
  const ow = document.querySelector('input[name="tripType"]:checked')?.value === 'oneway';
  document.getElementById('nightsFilter').classList.toggle('filter-disabled', ow);
  document.getElementById('weekendFilter').classList.toggle('filter-disabled', ow);
}

function setCacheDot(cls, text) {
  const dot = document.getElementById('cacheDot');
  const tx = document.getElementById('cacheText');
  const pdot = document.getElementById('proxyDot');
  if (dot) dot.className = `dot is-${cls}`;
  if (pdot) pdot.className = `dot is-${cls}`;
  if (tx) tx.textContent = text;
  const ps = document.getElementById('proxyStatus');
  if (ps) ps.textContent = text;
}

function toggleFilters() {
  const sec = document.getElementById('filtersSection');
  const collapsed = !sec.classList.contains('collapsed');
  sec.classList.toggle('collapsed', collapsed);
  const btn = document.getElementById('filterToggleBtn');
  btn.textContent = collapsed ? t('showFilters') : t('hideFilters');
}

function openHelpModal() { document.getElementById('helpModal').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeHelpModal() { document.getElementById('helpModal').classList.remove('open'); document.body.style.overflow = ''; }

function initApp() {
  document.getElementById('flagEl')?.classList.toggle('is-active', currentLang === 'el');
  document.getElementById('flagEn')?.classList.toggle('is-active', currentLang === 'en');
  const df = document.getElementById('dateFrom');
  const dt = document.getElementById('dateTo');
  const minEl = document.getElementById('minNights');
  const maxEl = document.getElementById('maxNights');
  if (df) df.addEventListener('change', () => onDateChange('from'));
  if (dt) dt.addEventListener('change', () => onDateChange('to'));
  if (minEl) minEl.addEventListener('change', clampNightsInputs);
  if (maxEl) maxEl.addEventListener('change', clampNightsInputs);
  enforceDateOrder();
  clampNightsInputs();
  setCacheDot('loading', t('init'));
  loadAppData();
  onTripTypeChange();
}

window.onload = initApp;
