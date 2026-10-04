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
  multiDest: { el: 'Multi-Destination', en: 'Multi-Destination' },
  wheelHint: { el: 'Όλοι οι προορισμοί αυτόματα', en: 'All destinations automatically' },
  destCountTotal: { el: '{n} προορισμοί', en: '{n} destinations' },
  loadingDests: { el: 'Φόρτωση προορισμών...', en: 'Loading destinations...' },
  selectAll: { el: 'Επιλογή όλων', en: 'Select all' },
  clear: { el: 'Αποεπιλογή', en: 'Clear' },
  helpBtn: { el: 'Βοήθεια / Οδηγίες', en: 'Help / Guide' },
  helpTitle: { el: 'Βοήθεια / Οδηγίες', en: 'Help / Guide' },
  helpBody: {
    el: '<p>Η εφαρμογή ψάχνει ανάμεσα στα δρομολόγια να βρει πτήσεις που ανταποκρίνονται στα φίλτρα που ορίζει ο χρήστης, με ΑΦΕΤΗΡΙΑ το αεροδρόμιο που επιθυμεί. Για παράδειγμα: Από ημερομηνία 1/10/2026 έως 15/11/2026 και για διανυκτερεύσεις 3 έως 7 η εφαρμογή αναζητά ταξίδια μέσα στο εύρος των ημερομηνιών για 3 ή 4 ή 5 ή 6 ή 7 διανυκτερεύσεις, στον ή στους προορισμούς που έχουν επιλεχθεί. Μπορεί να οριστεί επιπλέον φίλτρο ώστε τα ταξίδια να περιλαμβάνουν Σαββατοκύριακο (βλ. αντίστοιχο checkbox).</p><p><strong>Multidestination:</strong> Έχοντας τσεκαρισμένη αυτή την λειτουργία, μπορούμε να επιλέξουμε κάποιον προορισμό που δεν ταξιδεύει με απευθείας πτήσεις από την ΑΦΕΤΗΡΙΑ, οπότε και βρίσκει πτήσεις μέσω ανταπόκρισης. Σε περίπτωση που είναι τσεκαρισμένο και το <strong>Wheel of fortune</strong>, τότε η εφαρμογή ψάχνει όλους τους δυνατούς συνδυασμούς προορισμών με ανταπόκριση, με βάση τα γενικά φίλτρα του χρήστη.</p><p>Στα αποτελέσματα αναζήτησης εμφανίζεται αρχικά ένας πίνακας/ημερολόγιο τιμών πτήσεων (με κίτρινο φόντο οι φθηνότερες πτήσεις και με κόκκινο οι ακριβότερες) και μετά αναλυτικά όλες οι διαθέσιμες πτήσεις. Υπάρχουν διαθέσιμα φίλτρα ταξινόμησης, διανυκτερεύσεων και ωρών αναμονής στο αεροδρόμιο (στην περίπτωση ανταποκρίσεων).</p><p class="note"><u>Σημείωση:</u> Δεν υπάρχει δυνατότητα πραγματοποίησης κράτησης μέσω της εφαρμογής!</p>',
    en: '<p>The app searches Ryanair schedules to find flights matching the user-defined filters, with ORIGIN set to the desired airport. For example: From date 1/10/2026 to 15/11/2026 and for 3 to 7 nights, the app searches for trips within the date range with 3 or 4 or 5 or 6 or 7 nights, for the selected destination(s). An extra filter can be set so that trips include a weekend (see the corresponding checkbox).</p><p><strong>Multidestination:</strong> With this option checked, you can select a destination not served by Ryanair with direct flights from the ORIGIN, and the app finds flights via a connection. If <strong>Wheel of Fortune</strong> is also checked, the app searches all possible connecting destination combinations, based on the user\'s general filters.</p><p>In the search results, a flight price table/calendar is shown first (cheapest flights with yellow background and most expensive with red), followed by a detailed list of all available flights. Sorting, nights and airport waiting-time filters are available (in the case of connections).</p><p class="note"><u>Note:</u> Booking cannot be made through the app!</p>'
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
  mcTitle: { el: 'Multi-Destination: {org} → {dest}', en: 'Multi-Destination: {org} → {dest}' },
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
  document.title = currentLang === 'en' ? 'LowcostFlightPlanner - Multi-Destination' : 'LowcostFlightPlanner - Multi-Destination από Ελλάδα';
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
  if (lastMultiDestPaths) displayMultiDestResults(lastMultiDestPaths, data?.greekCityNames, lastMultiDestDays, lastMultiDestOrigin);
  else if (lastResults.length > 0 || lastMcResults.length > 0) renderResults();
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
  
  if (!isMc) allDests.sort((a, b) => a.city.localeCompare(b.city));
  
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
    grid.innerHTML = allDests.map(d => {
      const label = cityName(d.code, d.city);
      return `<label class="dest-item"><input type="checkbox" value="${d.code}" ${selectedDestinations.has(d.code) ? 'checked' : ''} onchange="toggleDest('${d.code}',this.checked)"><span class="dest-code">${d.code}</span><span class="dest-name">${label}</span></label>`;
    }).join('');
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
  if (isMc) {
    if (selectedDestinations.size > 1) {
      const first = [...selectedDestinations][0];
      selectedDestinations.clear();
      selectedDestinations.add(first);
    }
    selectAllIntermediatesDefault();
    if (wheelRow) wheelRow.classList.remove('is-hidden');
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
    document.getElementById('minNights').value = '2';
    document.getElementById('maxNights').value = '5';
    document.getElementById('weekendOnly').checked = false;
    selectedDestinations.clear();
    loadDestinations();
    updateDestCount();
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

  const minN = parseInt(document.getElementById('minNights').value, 10) || 2;
  const maxN = parseInt(document.getElementById('maxNights').value, 10) || 5;
  const wk = document.getElementById('weekendOnly').checked;
  const isOneWay = document.querySelector('input[name="tripType"]:checked')?.value === 'oneway';
  const isMc = document.getElementById('multiDestMode').checked;

  isSearching = true;
  const btn = document.getElementById('searchBtn');
  btn.disabled = true;
  btn.textContent = t('searching');

  setCacheDot('loading', t('fetching'));
  const content = document.getElementById('resultsContent');
  content.innerHTML = `<div class="loading"><div class="spinner"></div><div class="progress-text" id="progText">${t('fetchingReal')}</div><div class="progress-bar"><div class="progress-bar-fill" id="progBar" style="width:0%"></div></div><div class="cancel-row"><button class="btn btn-secondary btn-mini" id="cancelBtn" onclick="cancelSearch()">${t('cancel')}</button></div></div>`;

  if (!searchWorker) searchWorker = new Worker('worker.js');
  
  searchWorker.onmessage = function(e) {
    const { type, payload } = e.data;
    if (type === 'PROGRESS') {
      const pt = document.getElementById('progText');
      const pb = document.getElementById('progBar');
      if (pt) pt.textContent = payload.msg || `${t('fetching')} ${Math.round(payload.pct)}%`;
      if (pb) pb.style.width = Math.min(100, payload.pct) + '%';
    } else if (type === 'RESULTS') {
      handleSearchSuccess(payload);
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
      dateFrom, dateTo, minN, maxN, wk, isOneWay, wheelOfFortuneMode,
      masterAirports,
      originDestMap: data.destinations
    }
  });
}

function handleSearchSuccess(results) {
  isSearching = false;
  const btn = document.getElementById('searchBtn');
  btn.disabled = false;
  btn.textContent = t('search');
  setCacheDot('fresh', t('completed', { n: results.length }));
  
  lastResults = results; // Simplified for this version
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
function renderResults() {
  const sortBy = document.getElementById('sortBy').value;
  const content = document.getElementById('resultsContent');
  let displayResults = [...lastResults];
  const ow = displayResults.length > 0 && displayResults[0].inDate === null;

  if (sortBy === 'date') {
    displayResults.sort((a, b) => a.outDate.localeCompare(b.outDate) || a.total - b.total);
  } else {
    displayResults.sort((a, b) => a.total - b.total);
  }

  if (displayResults.length === 0) {
    content.innerHTML = `<div class="empty-msg"><div class="big-icon">&#128533;</div><p>${t('noResults')}</p></div>`;
    return;
  }

  const colHeaders = ow
    ? `<th>#</th><th>${t('destCol')}</th><th>${t('depCol')}</th><th class="num">${t('totalCol')}</th>`
    : `<th>#</th><th>${t('destCol')}</th><th>${t('depCol')}</th><th>${t('retCol')}</th><th class="num">${t('nightsCol')}</th><th class="num">${t('outCol')}</th><th class="num">${t('inCol')}</th><th class="num">${t('totalCol')}</th>`;

  let html = `<div class="table-wrap"><table><thead><tr>${colHeaders}</tr></thead><tbody>`;
  displayResults.forEach((r, i) => {
    const rc = i < 3 ? `rank-${i+1}` : 'rank-other';
    const cell = `<td><span class="rank-badge ${rc}">${i+1}</span></td><td><div class="dest-cell"><span class="code-badge">${r.destCode}</span><span>${cityName(r.destCode, r.destName)}</span></div></td><td>${fmtDate(r.outDate)}</td>`;
    if (ow) {
      html += `<tr>${cell}<td class="price-total num">${fmtEuro(r.total)}</td></tr>`;
    } else {
      html += `<tr>${cell}<td>${fmtDate(r.inDate)}</td><td class="num"><span class="nights-badge">${r.nights}</span></td><td class="price num">${fmtEuro(r.outPrice)}</td><td class="price num">${fmtEuro(r.inPrice)}</td><td class="price-total num">${fmtEuro(r.total)}</td></tr>`;
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

function filterSimpleNights() { renderResults(); }
function filterSimpleCity() { renderResults(); }

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
  if (dot) dot.className = `dot ${cls}`;
  if (pdot) pdot.className = `dot ${cls}`;
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
  setCacheDot('loading', t('init'));
  loadAppData();
  onTripTypeChange();
}

window.onload = initApp;
