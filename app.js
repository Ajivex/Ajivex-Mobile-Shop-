/* ═══════════════════════════════════════
   AJIVEX MOBILE SHOP — MAIN APP JS
   Phase 1 | Frontend Demo
═══════════════════════════════════════ */

// ─────────────────────────────────────
// DEMO PRODUCTS DATA
// ─────────────────────────────────────
const PRODUCTS = [
  { id:1, name:'Samsung Galaxy S24 Ultra', brand:'samsung', cat:'mobile', price:124999, old:144999, icon:'📱', rating:4.8, reviews:342, emi:'₹10,416/mo', tags:['200MP','AI','S-Pen'], flash:true, trending:true, bestseller:true, instock:true },
  { id:2, name:'iPhone 15 Pro Max', brand:'apple', cat:'mobile', price:134900, old:149900, icon:'🍎', rating:4.9, reviews:521, emi:'₹11,241/mo', tags:['A17 Pro','Titanium','USB-C'], flash:false, trending:true, bestseller:true, instock:true },
  { id:3, name:'Vivo V30 Pro', brand:'vivo', cat:'mobile', price:39999, old:46999, icon:'🔵', rating:4.5, reviews:198, emi:'₹3,333/mo', tags:['Zeiss','50MP','5G'], flash:true, trending:true, bestseller:false, instock:true },
  { id:4, name:'OnePlus 12R', brand:'oneplus', cat:'mobile', price:42999, old:49999, icon:'🟢', rating:4.6, reviews:256, emi:'₹3,583/mo', tags:['120W Fast','SD 8s Gen 3','5G'], flash:false, trending:false, bestseller:true, instock:true },
  { id:5, name:'Realme GT 5 Pro', brand:'realme', cat:'mobile', price:31999, old:39999, icon:'🔴', rating:4.4, reviews:143, emi:'₹2,666/mo', tags:['SD 8 Gen 3','150W','5G'], flash:true, trending:false, bestseller:false, instock:true },
  { id:6, name:'Redmi Note 13 Pro+', brand:'redmi', cat:'mobile', price:26999, old:32999, icon:'⭐', rating:4.5, reviews:387, emi:'₹2,249/mo', tags:['200MP','5G','67W'], flash:false, trending:true, bestseller:true, instock:true },
  { id:7, name:'OPPO Reno 11 Pro', brand:'oppo', cat:'mobile', price:36999, old:43999, icon:'🟡', rating:4.3, reviews:112, emi:'₹3,083/mo', tags:['50MP','5G','80W'], flash:true, trending:false, bestseller:false, instock:true },
  { id:8, name:'Motorola Edge 40 Neo', brand:'motorola', cat:'mobile', price:18999, old:24999, icon:'〽️', rating:4.2, reviews:89, emi:'₹1,583/mo', tags:['5G','68W','IP68'], flash:false, trending:false, bestseller:false, instock:true },
  { id:9, name:'Samsung Galaxy S24+', brand:'samsung', cat:'mobile', price:89999, old:99999, icon:'📱', rating:4.7, reviews:211, emi:'₹7,499/mo', tags:['AI','Snapdragon','5G'], flash:true, trending:true, bestseller:false, instock:true },
  { id:10, name:'iPhone 15', brand:'apple', cat:'mobile', price:79900, old:89900, icon:'🍎', rating:4.8, reviews:445, emi:'₹6,658/mo', tags:['A16','Dynamic Island','5G'], flash:false, trending:false, bestseller:true, instock:true },
  { id:11, name:'JBL Tune 770NC', brand:'jbl', cat:'accessory', price:4499, old:6999, icon:'🎧', rating:4.4, reviews:67, emi:null, tags:['ANC','40hr','Wireless'], flash:true, trending:true, bestseller:true, instock:true },
  { id:12, name:'Boat Nirvana Ion', brand:'boat', cat:'accessory', price:2499, old:3999, icon:'🎵', rating:4.2, reviews:234, emi:null, tags:['ANC','TWS','30hr'], flash:false, trending:false, bestseller:true, instock:true },
  { id:13, name:'65W GaN Fast Charger', brand:'other', cat:'accessory', price:1299, old:1999, icon:'🔌', rating:4.6, reviews:156, emi:null, tags:['GaN','USB-C','Fast'], flash:false, trending:false, bestseller:false, instock:true },
  { id:14, name:'Samsung Galaxy Watch 6', brand:'samsung', cat:'gadget', price:24999, old:29999, icon:'⌚', rating:4.5, reviews:78, emi:'₹2,083/mo', tags:['BPM','GPS','AMOLED'], flash:true, trending:true, bestseller:false, instock:true },
  { id:15, name:'Apple AirPods Pro 2', brand:'apple', cat:'accessory', price:22900, old:26900, icon:'🎵', rating:4.7, reviews:312, emi:'₹1,908/mo', tags:['ANC','Spatial','H2 Chip'], flash:false, trending:true, bestseller:true, instock:true },
  { id:16, name:'Mi 55" 4K Smart TV', brand:'redmi', cat:'tv', price:34999, old:44999, icon:'📺', rating:4.3, reviews:45, emi:'₹2,916/mo', tags:['4K','Dolby','Smart'], flash:false, trending:false, bestseller:false, instock:true },
  { id:17, name:'Samsung 1.5T Split AC', brand:'samsung', cat:'ac', price:32999, old:39999, icon:'🌬️', rating:4.4, reviews:34, emi:'₹2,749/mo', tags:['5-Star','Inverter','Wi-Fi'], flash:false, trending:false, bestseller:false, instock:true },
  { id:18, name:'Whirlpool 265L Fridge', brand:'other', cat:'fridge', price:24999, old:29999, icon:'❄️', rating:4.2, reviews:28, emi:'₹2,083/mo', tags:['Double Door','Frost Free','5-Star'], flash:false, trending:false, bestseller:false, instock:true },
];

const UPCOMING = [
  { name:'Samsung Galaxy S25 Ultra', date:'Apr 2025', slots:12, days:28, hours:6, mins:42 },
  { name:'iPhone 16 Pro', date:'Sep 2025', slots:5, days:186, hours:14, mins:22 },
  { name:'OnePlus 13', date:'May 2025', slots:18, days:56, hours:9, mins:15 },
  { name:'Pixel 9 Pro', date:'Aug 2025', slots:8, days:148, hours:11, mins:30 },
];

const AI_RECS = {
  'camera': [
    { rank:1, name:'Samsung Galaxy S24 Ultra', price:'₹1,24,999', why:'200MP main camera with AI enhancements, best optical zoom (10x), unbeatable video quality. Best in class for photography.' },
    { rank:2, name:'iPhone 15 Pro Max', price:'₹1,34,900', why:'48MP main + 5x optical zoom, Cinema mode video, Natural color accuracy. Photographers love it.' },
    { rank:3, name:'Vivo V30 Pro', price:'₹39,999', why:'Zeiss Optics camera, 50MP portrait, excellent low-light. Best under ₹40,000 for camera.' }
  ],
  'gaming': [
    { rank:1, name:'Realme GT 5 Pro', price:'₹31,999', why:'Snapdragon 8 Gen 3, 150W charging, 144Hz AMOLED. Born for gaming, blazing fast processor.' },
    { rank:2, name:'OnePlus 12R', price:'₹42,999', why:'SD 8s Gen 3, 120Hz ProXDR, 120W fast charge. Smooth gaming experience at competitive price.' },
    { rank:3, name:'Samsung Galaxy S24+', price:'₹89,999', why:'Exynos 2400, Game Assist, 2600 nits brightness. For serious mobile gamers who want premium.' }
  ],
  'battery': [
    { rank:1, name:'Redmi Note 13 Pro+', price:'₹26,999', why:'5000mAh battery, 67W fast charging, all-day & night use guaranteed. Best battery champion.' },
    { rank:2, name:'OnePlus 12R', price:'₹42,999', why:'5500mAh battery + 120W SuperVOOC. From 0 to 100% in 26 minutes. Incredible!' },
    { rank:3, name:'Motorola Edge 40 Neo', price:'₹18,999', why:'5000mAh with 68W charging, clean Android, IP68 water resistant. Value champ.' }
  ],
  'budget': [
    { rank:1, name:'Redmi Note 13 Pro+', price:'₹26,999', why:'200MP camera, 5000mAh, 5G, AMOLED 120Hz — maximum features at this price range. Best value.' },
    { rank:2, name:'Realme GT 5 Pro', price:'₹31,999', why:'Flagship processor at mid-range price. Nothing beats the performance per rupee here.' },
    { rank:3, name:'Motorola Edge 40 Neo', price:'₹18,999', why:'5G, 68W charging, IP68, clean Android at ₹18,999. Unbeatable under ₹20,000.' }
  ],
  default: [
    { rank:1, name:'Samsung Galaxy S24 Ultra', price:'₹1,24,999', why:'Best overall flagship phone in 2025. AI features, S-Pen, 200MP camera, premium build.' },
    { rank:2, name:'iPhone 15 Pro Max', price:'₹1,34,900', why:'Apple ecosystem, best-in-class performance, cinematic camera, titanium build.' },
    { rank:3, name:'Redmi Note 13 Pro+', price:'₹26,999', why:'Best mid-range phone. 200MP camera, 5G, AMOLED 120Hz. Incredible value for money.' }
  ]
};

const SOCIAL_PROOFS = [
  { name:'Karthik from Karur', msg:'just bought Samsung Galaxy S24 Ultra! 🔥' },
  { name:'Priya from Aravakurichi', msg:'got Surprise Delivery — loved it! 🎁' },
  { name:'Rajesh from Kulithalai', msg:'unlocked Diamond tier! 💎' },
  { name:'Anbu from Thogaimalai', msg:'pre-booked iPhone 15 Pro! 📱' },
  { name:'Meena from Karur', msg:'referred 3 friends — got 300 bonus points! 🌟' },
  { name:'Vijay from Manmangalam', msg:'joined Flash Sale — saved ₹8,000! ⚡' },
];

// ─────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────
let currentPage = 'home';
let prevPage = 'home';

function navigate(page) {
  // Hide all
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Show target
  const target = document.getElementById('page-' + page);
  if (target) {
    target.classList.add('active');
    currentPage = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  // Update cat bar visibility
  const catBar = document.getElementById('cat-bar');
  catBar.style.display = ['admin'].includes(page) ? 'none' : 'flex';
  // Adjust padding
  document.querySelectorAll('.page').forEach(p => {
    p.style.paddingTop = page === 'admin' ? 'var(--nav-h)' : 'calc(var(--nav-h) + var(--cat-h))';
  });
}

function catNavigate(el, page) {
  document.querySelectorAll('.cat-item').forEach(i => i.classList.remove('active'));
  if (el) el.classList.add('active');
  navigate(page);
}

// Admin navigate needs special modal flow
const origNavigate = navigate;
window.navigate = function(page) {
  if (page === 'admin') {
    openModal('admin-login-modal');
    return;
  }
  origNavigate(page);
};

// ─────────────────────────────────────
// MODALS
// ─────────────────────────────────────
function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  if (!document.querySelector('.modal-overlay.open')) {
    document.body.style.overflow = '';
  }
}
// Close on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal(overlay.id);
  });
});

// ─────────────────────────────────────
// TOAST
// ─────────────────────────────────────
let toastTimer;
function toast(icon, title, msg) {
  const t = document.getElementById('main-toast');
  document.getElementById('toast-icon').textContent = icon;
  document.getElementById('toast-title').textContent = title;
  document.getElementById('toast-msg').textContent = msg || '';
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}

// ─────────────────────────────────────
// PRODUCT CARD BUILDER
// ─────────────────────────────────────
function buildCard(p, isGrid) {
  const off = Math.round((1 - p.price / p.old) * 100);
  return `
    <div class="product-card ${isGrid ? 'product-card-grid' : ''}" onclick="openProduct(${p.id})">
      <div class="pc-image">
        <span class="pc-image-icon">${p.icon}</span>
        ${off > 0 ? `<span class="pc-off">−${off}%</span>` : ''}
        <button class="pc-wish" onclick="event.stopPropagation();toggleWish(this)"><i class="far fa-heart"></i></button>
      </div>
      <div class="pc-body">
        <div class="pc-brand">${p.brand.toUpperCase()}</div>
        <div class="pc-name">${p.name}</div>
        <div class="pc-stars">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5-Math.floor(p.rating))} <span style="color:var(--gray);font-family:var(--font-body)">${p.rating} (${p.reviews})</span></div>
        <div class="pc-price">
          <span class="pc-price-now">₹${p.price.toLocaleString('en-IN')}</span>
          <span class="pc-price-old">₹${p.old.toLocaleString('en-IN')}</span>
        </div>
        ${p.emi ? `<div class="pc-emi"><i class="fas fa-credit-card"></i> No Cost EMI ${p.emi}</div>` : ''}
        <div class="pc-tags">${p.tags.map(t => `<span class="pc-tag">${t}</span>`).join('')}</div>
        <button class="pc-add" onclick="event.stopPropagation();addToCart(${p.id})"><i class="fas fa-cart-plus"></i> Add to Cart</button>
      </div>
    </div>`;
}

function buildLaunchCard(l) {
  return `
    <div class="launch-card">
      <div class="launch-badge"><i class="fas fa-rocket"></i> Coming Soon</div>
      <div class="launch-icon">📱</div>
      <div class="launch-name">${l.name}</div>
      <div class="launch-date">Expected: ${l.date}</div>
      <div class="launch-slots">Only ${l.slots} slots remaining</div>
      <div class="launch-cd">
        <div class="lc-unit"><span class="lc-num">${l.days}</span><span class="lc-lbl">Days</span></div>
        <div class="lc-unit"><span class="lc-num">${l.hours}</span><span class="lc-lbl">Hrs</span></div>
        <div class="lc-unit"><span class="lc-num">${l.mins}</span><span class="lc-lbl">Min</span></div>
      </div>
      <div class="launch-btns">
        <button class="btn-notify" onclick="toast('🔔','Reminder Set!','We\\'ll notify you on launch day')">Notify Me</button>
        <button class="btn-prebook" onclick="toast('🎯','Pre-Booked!','Slot reserved — ₹999 token required')">Pre-Book</button>
      </div>
    </div>`;
}

// ─────────────────────────────────────
// LOAD CAROUSELS
// ─────────────────────────────────────
function loadCarousels() {
  const flash = PRODUCTS.filter(p => p.flash);
  const trending = PRODUCTS.filter(p => p.trending);
  const best = PRODUCTS.filter(p => p.bestseller);

  injectCards('flash-track', flash, false);
  injectCards('trending-track', trending, false);
  injectCards('best-track', best, false);
  injectCards('mobile-top-track', PRODUCTS.filter(p => p.cat === 'mobile').slice(0,6), false);

  // Launch track
  const lt = document.getElementById('launch-track');
  if (lt) lt.innerHTML = UPCOMING.map(buildLaunchCard).join('');

  // Grids
  loadGrid('products-grid', PRODUCTS, true);
  loadGrid('mobile-grid', PRODUCTS.filter(p => p.cat === 'mobile'), true);
  loadGrid('accessory-grid', PRODUCTS.filter(p => p.cat === 'accessory'), true);
  loadGrid('gadget-grid', PRODUCTS.filter(p => p.cat === 'gadget'), true);
  loadGrid('tv-grid', PRODUCTS.filter(p => p.cat === 'tv'), true);
  loadGrid('fridge-grid', PRODUCTS.filter(p => p.cat === 'fridge'), true);
  loadGrid('ac-grid', PRODUCTS.filter(p => p.cat === 'ac'), true);
  loadGrid('flash-grid', PRODUCTS.filter(p => p.flash), true);
  loadGrid('wish-grid', PRODUCTS.slice(0,2), true);

  const pg = document.getElementById('prebook-grid');
  if (pg) pg.innerHTML = UPCOMING.map(buildLaunchCard).join('');
}

function injectCards(id, prods, isGrid) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = prods.map(p => buildCard(p, isGrid)).join('');
}
function loadGrid(id, prods, isGrid) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = prods.map(p => buildCard(p, isGrid)).join('');
}

// ─────────────────────────────────────
// CAROUSEL SCROLL
// ─────────────────────────────────────
function scrollCarousel(id, dir) {
  const el = document.getElementById(id);
  if (!el) return;
  const cardW = el.firstElementChild ? el.firstElementChild.offsetWidth + 16 : 240;
  el.parentElement.scrollLeft += dir * cardW * 2;
  el.style.transform = '';
  // Use scrollLeft on wrapper
  const wrap = el.parentElement;
  wrap.style.overflowX = 'auto';
  wrap.scrollBy({ left: dir * cardW * 2, behavior: 'smooth' });
}

// ─────────────────────────────────────
// OPEN PRODUCT DETAIL
// ─────────────────────────────────────
function openProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  document.getElementById('d-brand').textContent = p.brand.toUpperCase();
  document.getElementById('d-name').textContent = p.name;
  document.getElementById('d-price').textContent = '₹' + p.price.toLocaleString('en-IN');
  document.getElementById('d-old').textContent = '₹' + p.old.toLocaleString('en-IN');
  document.getElementById('d-rating').textContent = p.rating;
  navigate('detail');
}

// ─────────────────────────────────────
// CART
// ─────────────────────────────────────
let cartCount = 3;
function addToCart(id) {
  cartCount++;
  document.getElementById('cart-badge').textContent = cartCount;
  const p = PRODUCTS.find(x => x.id === id);
  if (p) toast('🛒', 'Added to Cart!', p.name + ' added successfully');
}

// ─────────────────────────────────────
// WISHLIST
// ─────────────────────────────────────
let wishCount = 2;
function toggleWish(btn) {
  const icon = btn.querySelector('i') || btn;
  if (icon.classList.contains('far')) {
    icon.classList.remove('far'); icon.classList.add('fas');
    btn.classList.add('active');
    wishCount++;
    toast('❤️', 'Wishlist!', 'Added to your wishlist');
  } else {
    icon.classList.remove('fas'); icon.classList.add('far');
    btn.classList.remove('active');
    wishCount = Math.max(0, wishCount - 1);
  }
  document.getElementById('wish-badge').textContent = wishCount;
}

// ─────────────────────────────────────
// COMPARE
// ─────────────────────────────────────
let compareCount = 0;
function addCompare() {
  if (compareCount >= 3) { toast('ℹ️', 'Compare Full', 'Max 3 products can be compared'); return; }
  compareCount++;
  document.getElementById('compare-bar').classList.add('show');
  const slots = document.getElementById('compare-items').children;
  if (slots[compareCount-1]) {
    slots[compareCount-1].textContent = '📱';
    slots[compareCount-1].style.fontSize = '1.6rem';
  }
  toast('⚖️', 'Added to Compare', 'Select up to 3 products');
}

// ─────────────────────────────────────
// COUPON
// ─────────────────────────────────────
const COUPONS = { 'AJIVEX10': 10, 'KARUR20': 20, 'WELCOME50': 5 };
function applyCoupon(inputId) {
  const val = document.getElementById(inputId).value.trim().toUpperCase();
  if (COUPONS[val]) {
    toast('🎉', 'Coupon Applied!', val + ' — ' + COUPONS[val] + '% discount added!');
    document.getElementById(inputId).style.borderColor = 'var(--green)';
  } else {
    toast('❌', 'Invalid Coupon', 'Please enter a valid coupon code');
    document.getElementById(inputId).style.borderColor = 'var(--red)';
  }
}

// ─────────────────────────────────────
// VARIANT SELECTOR
// ─────────────────────────────────────
function selectVariant(el) {
  el.parentElement.querySelectorAll('.variant-opt').forEach(v => v.classList.remove('active'));
  el.classList.add('active');
}

// ─────────────────────────────────────
// AI ASSISTANT
// ─────────────────────────────────────
function setAI(query) {
  document.getElementById('ai-query').value = query;
  runAI();
}

function runAI() {
  const q = document.getElementById('ai-query').value.toLowerCase();
  const resultsDiv = document.getElementById('ai-results');
  const loading = document.getElementById('ai-loading');

  resultsDiv.classList.add('show');
  loading.style.display = 'block';
  resultsDiv.innerHTML = '';
  resultsDiv.appendChild(loading);
  loading.style.display = 'block';

  setTimeout(() => {
    let recs;
    if (q.includes('camera') || q.includes('photo')) recs = AI_RECS.camera;
    else if (q.includes('gaming') || q.includes('game')) recs = AI_RECS.gaming;
    else if (q.includes('battery') || q.includes('backup')) recs = AI_RECS.battery;
    else if (q.includes('budget') || q.includes('cheap') || q.includes('value') || q.includes('10000') || q.includes('15000') || q.includes('20000')) recs = AI_RECS.budget;
    else recs = AI_RECS.default;

    loading.style.display = 'none';
    resultsDiv.innerHTML = recs.map(r => `
      <div class="ai-result-card">
        <div class="ai-rank">${r.rank}</div>
        <div>
          <div class="ai-result-name">${r.name}</div>
          <div class="ai-result-price">${r.price}</div>
          <div class="ai-result-why">${r.why}</div>
        </div>
        <button class="btn btn-primary btn-sm" onclick="toast('🛒','View Product!','Opening ${r.name}')">View</button>
      </div>`).join('');

    toast('🤖', 'AI Analysis Complete!', 'Top 3 phones found for you');
  }, 1200);
}

// ─────────────────────────────────────
// FLASH SALE COUNTDOWN
// ─────────────────────────────────────
let flashEnd = Date.now() + (8 * 3600 + 34 * 60 + 22) * 1000;

function updateFlashTimer() {
  const diff = Math.max(0, Math.floor((flashEnd - Date.now()) / 1000));
  const h = Math.floor(diff / 3600);
  const m = Math.floor((diff % 3600) / 60);
  const s = diff % 60;
  const pad = n => String(n).padStart(2, '0');

  ['fh','fm','fs','fph','fpm','fps'].forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) el.textContent = pad([h,m,s,h,m,s][i]);
  });
}

// Detail page timer
let detailEnd = Date.now() + (2 * 3600 + 45 * 60 + 30) * 1000;
function updateDetailTimer() {
  const diff = Math.max(0, Math.floor((detailEnd - Date.now()) / 1000));
  const h = Math.floor(diff / 3600);
  const m = Math.floor((diff % 3600) / 60);
  const s = diff % 60;
  const pad = n => String(n).padStart(2, '0');
  ['dh','dm','ds'].forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) el.textContent = pad([h,m,s][i]);
  });
}

setInterval(() => { updateFlashTimer(); updateDetailTimer(); }, 1000);

// ─────────────────────────────────────
// GIVEAWAY COUNTER ANIMATION
// ─────────────────────────────────────
let giveawayCount = 6547;
function updateGiveaway() {
  const chance = Math.random();
  if (chance > 0.7 && giveawayCount < 10000) {
    giveawayCount += Math.floor(Math.random() * 3) + 1;
    const el = document.getElementById('gb-count');
    if (el) el.textContent = giveawayCount.toLocaleString('en-IN');
    const fill = document.getElementById('gb-fill');
    if (fill) fill.style.width = (giveawayCount / 100) + '%';
  }
}
setInterval(updateGiveaway, 8000);

// ─────────────────────────────────────
// FAQ
// ─────────────────────────────────────
function toggleFaq(btn) {
  const ans = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');
  // Close all
  document.querySelectorAll('.faq-q.open').forEach(q => {
    q.classList.remove('open');
    q.nextElementSibling.classList.remove('open');
  });
  if (!isOpen) {
    btn.classList.add('open');
    ans.classList.add('open');
  }
}

// ─────────────────────────────────────
// CUSTOMER CHALLENGE
// ─────────────────────────────────────
function selectChallenge(card, emoji, type, phones) {
  document.querySelectorAll('.challenge-card').forEach(c => c.classList.remove('selected'));
  card.classList.add('selected');

  document.getElementById('cr-emoji').textContent = emoji;
  document.getElementById('cr-title').textContent = 'Perfect for ' + type + '!';
  document.getElementById('cr-desc').textContent = 'Recommended: ' + phones;
  document.getElementById('challenge-result').classList.add('show');
  document.getElementById('challenge-result').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ─────────────────────────────────────
// BESTSELLER TAB
// ─────────────────────────────────────
function setBestTab(tab, btn) {
  document.querySelectorAll('[onclick^="setBestTab"]').forEach(b => {
    b.style.background = 'var(--dark3)';
    b.style.color = 'var(--gray-light)';
  });
  btn.style.background = 'var(--gold)';
  btn.style.color = 'var(--black)';
  const best = tab === 'week'
    ? PRODUCTS.filter(p => p.bestseller).slice(0,6)
    : PRODUCTS.filter(p => p.trending).slice(0,6);
  injectCards('best-track', best, false);
}

// ─────────────────────────────────────
// BRAND FILTER
// ─────────────────────────────────────
function filterByBrand(brand) {
  navigate('cat-mobile');
  setTimeout(() => {
    const pills = document.querySelectorAll('[onclick*="filterCatBrand"]');
    pills.forEach(p => {
      if (p.getAttribute('onclick').includes("'" + brand + "'")) {
        p.click();
      }
    });
  }, 100);
}

function filterCatBrand(el, brand, cat) {
  if (!el) return;
  el.parentElement.querySelectorAll('.brand-pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  const grid = document.getElementById(cat + '-grid');
  if (!grid) return;
  const filtered = brand === 'all'
    ? PRODUCTS.filter(p => p.cat === cat)
    : PRODUCTS.filter(p => p.brand === brand && p.cat === cat);
  grid.innerHTML = filtered.length
    ? filtered.map(p => buildCard(p, true)).join('')
    : '<div style="color:var(--gray);padding:32px;text-align:center;width:100%">No products found for this brand.</div>';
}

// ─────────────────────────────────────
// PRODUCT SEARCH & FILTER
// ─────────────────────────────────────
function filterProds() {
  const q = (document.getElementById('prod-search')?.value || '').toLowerCase();
  const maxPrice = parseInt(document.getElementById('price-range')?.value || 200000);
  let filtered = PRODUCTS.filter(p => {
    const matchQ = !q || p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q);
    const matchP = p.price <= maxPrice;
    return matchQ && matchP;
  });
  loadGrid('products-grid', filtered, true);
  const countEl = document.getElementById('products-count');
  if (countEl) countEl.textContent = 'Showing ' + filtered.length + ' products';
}

function updatePrice(val) {
  const label = document.getElementById('price-label');
  if (label) label.textContent = '₹' + parseInt(val).toLocaleString('en-IN');
  filterProds();
}

function sortProds(val) {
  const grid = document.getElementById('products-grid');
  let sorted = [...PRODUCTS];
  if (val === 'price-low') sorted.sort((a,b) => a.price - b.price);
  else if (val === 'price-high') sorted.sort((a,b) => b.price - a.price);
  else if (val === 'rating') sorted.sort((a,b) => b.rating - a.rating);
  loadGrid('products-grid', sorted, true);
}

// Search modal
function navSearch(val) { }
function modalSearch(val) {
  document.getElementById('modal-search-input').value = val;
  const q = val.toLowerCase();
  const results = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)
  );
  const div = document.getElementById('search-results');
  if (!div) return;
  if (!results.length) {
    div.innerHTML = '<div style="text-align:center;color:var(--gray);padding:24px">No products found for "' + val + '"</div>';
    return;
  }
  div.innerHTML = `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px">` +
    results.slice(0,6).map(p => buildCard(p, true)).join('') + '</div>';
}

// ─────────────────────────────────────
// AUTH SYSTEM
// ─────────────────────────────────────
function switchAuth(btn, tab) {
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('auth-login').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('auth-register').style.display = tab === 'register' ? 'block' : 'none';
}

function sendLoginOtp() {
  const wa = document.getElementById('login-wa').value.trim();
  if (wa.replace(/\D/g,'').length < 10) {
    document.getElementById('login-wa-err').classList.add('show');
    return;
  }
  document.getElementById('login-wa-err').classList.remove('show');
  document.getElementById('login-send-btn').style.display = 'none';
  document.getElementById('login-otp-wrap').style.display = 'block';
  toast('📱', 'OTP Sent!', 'Check your WhatsApp for 6-digit code');
}

function nextOtp(input) {
  if (input.value.length === 1) {
    const next = input.nextElementSibling;
    if (next && next.classList.contains('otp-box')) next.focus();
  }
}

function verifyLogin() {
  closeModal('login-modal');
  toast('🎉', 'Logged In!', 'Welcome back to Ajivex!');
}

function registerUser() {
  const fname = document.getElementById('reg-fname').value.trim();
  const wa = document.getElementById('reg-wa').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const tc = document.getElementById('tc-check').checked;
  let valid = true;

  if (fname.length < 2) { document.getElementById('reg-fname-err').classList.add('show'); valid = false; }
  else document.getElementById('reg-fname-err').classList.remove('show');
  if (wa.replace(/\D/g,'').length < 10) { document.getElementById('reg-wa-err').classList.add('show'); valid = false; }
  else document.getElementById('reg-wa-err').classList.remove('show');
  if (!email.includes('@')) { document.getElementById('reg-email-err').classList.add('show'); valid = false; }
  else document.getElementById('reg-email-err').classList.remove('show');
  if (!tc) { document.getElementById('tc-err').classList.add('show'); valid = false; }
  else document.getElementById('tc-err').classList.remove('show');

  if (!valid) return;
  closeModal('login-modal');
  toast('🎉', 'Account Created!', 'Welcome to Ajivex! +50 Bonus Points added!');
}

// ─────────────────────────────────────
// ADMIN LOGIN
// ─────────────────────────────────────
function adminLogin() {
  const user = document.getElementById('admin-user').value.trim();
  const pass = document.getElementById('admin-pass').value.trim();
  const err = document.getElementById('admin-err');
  if (user === 'ajivex_admin' && pass === 'Admin@2025') {
    closeModal('admin-login-modal');
    err.style.display = 'none';
    loadAdminPortal();
    origNavigate('admin');
    toast('🔐', 'Admin Login Successful!', 'Welcome to Ajivex Admin Portal');
  } else {
    err.style.display = 'flex';
  }
}

function togglePass() {
  const inp = document.getElementById('admin-pass');
  const eye = document.getElementById('pass-eye');
  if (inp.type === 'password') {
    inp.type = 'text';
    eye.classList.remove('fa-eye'); eye.classList.add('fa-eye-slash');
  } else {
    inp.type = 'password';
    eye.classList.remove('fa-eye-slash'); eye.classList.add('fa-eye');
  }
}

// ─────────────────────────────────────
// ADMIN PORTAL LOADER
// ─────────────────────────────────────
function loadAdminPortal() {
  const adminPage = document.getElementById('page-admin');
  if (!adminPage) {
    const div = document.createElement('div');
    div.id = 'page-admin';
    div.className = 'page page-admin';
    div.innerHTML = buildAdminPortal();
    document.body.appendChild(div);
  }
}

function buildAdminPortal() {
  return `
  <nav class="navbar" style="position:fixed;top:0;left:0;right:0;z-index:1001;border-bottom-color:rgba(212,175,55,0.25)">
    <div class="nav-logo" onclick="origNavigate('home');navigate('home')">
      <div class="nav-logo-icon">A</div>
      <div class="nav-logo-text">Admin Portal<span>Ajivex Mobile</span></div>
    </div>
    <div style="margin-left:auto;display:flex;align-items:center;gap:10px">
      <span style="font-size:0.78rem;color:var(--gray)">ajivex_admin</span>
      <button onclick="navigate('home')" style="background:var(--dark3);border:1px solid rgba(255,255,255,0.08);color:var(--gray-light);padding:8px 14px;border-radius:9px;font-size:0.82rem;font-weight:600;cursor:pointer"><i class="fas fa-home" style="margin-right:6px"></i>Visit Site</button>
      <button onclick="navigate('home');toast('👋','Logged Out','Admin session ended')" style="background:rgba(230,57,70,0.1);border:1px solid rgba(230,57,70,0.2);color:var(--red);padding:8px 14px;border-radius:9px;font-size:0.82rem;font-weight:600;cursor:pointer"><i class="fas fa-sign-out-alt" style="margin-right:6px"></i>Logout</button>
    </div>
  </nav>
  <div style="padding-top:var(--nav-h)">
    <div class="admin-wrap">
      <div class="admin-sidebar">
        <div class="admin-logo-wrap">
          <div class="admin-logo-name">Admin Portal</div>
          <div class="admin-logo-sub">Ajivex Mobile Shop</div>
        </div>
        <div class="admin-nav-section">Overview</div>
        <div class="admin-nav-item active" onclick="setAdminPage('dashboard',this)"><i class="fas fa-tachometer-alt"></i>Dashboard</div>
        <div class="admin-nav-section">Catalog</div>
        <div class="admin-nav-item" onclick="setAdminPage('products',this)"><i class="fas fa-mobile-alt"></i>Products</div>
        <div class="admin-nav-item" onclick="setAdminPage('inventory',this)"><i class="fas fa-boxes"></i>Inventory</div>
        <div class="admin-nav-item" onclick="setAdminPage('flash',this)"><i class="fas fa-bolt"></i>Flash Sales</div>
        <div class="admin-nav-item" onclick="setAdminPage('coupons',this)"><i class="fas fa-tag"></i>Coupons</div>
        <div class="admin-nav-section">Orders</div>
        <div class="admin-nav-item" onclick="setAdminPage('orders',this)"><i class="fas fa-shopping-bag"></i>Orders</div>
        <div class="admin-nav-item" onclick="setAdminPage('payments',this)"><i class="fas fa-credit-card"></i>Payments</div>
        <div class="admin-nav-section">Customers</div>
        <div class="admin-nav-item" onclick="setAdminPage('customers',this)"><i class="fas fa-users"></i>Customers</div>
        <div class="admin-nav-item" onclick="setAdminPage('loyalty',this)"><i class="fas fa-star"></i>Loyalty Points</div>
        <div class="admin-nav-item" onclick="setAdminPage('referrals',this)"><i class="fas fa-share-alt"></i>Referrals</div>
        <div class="admin-nav-section">Services</div>
        <div class="admin-nav-item" onclick="setAdminPage('service',this)"><i class="fas fa-tools"></i>Service Requests</div>
        <div class="admin-nav-item" onclick="setAdminPage('surprise',this)"><i class="fas fa-gift"></i>Surprise Delivery</div>
        <div class="admin-nav-item" onclick="setAdminPage('giveaway',this)"><i class="fas fa-trophy"></i>Giveaway</div>
        <div class="admin-nav-section">Content</div>
        <div class="admin-nav-item" onclick="setAdminPage('content',this)"><i class="fas fa-image"></i>Content Mgmt</div>
        <div class="admin-nav-item" onclick="setAdminPage('reviews',this)"><i class="fas fa-star-half-alt"></i>Reviews</div>
        <div class="admin-nav-item" onclick="setAdminPage('whatsapp',this)"><i class="fab fa-whatsapp"></i>WhatsApp Auto</div>
        <div class="admin-nav-section">Settings</div>
        <div class="admin-nav-item" onclick="setAdminPage('aiconfig',this)"><i class="fas fa-robot"></i>AI Config</div>
        <div class="admin-nav-item" onclick="setAdminPage('delivery',this)"><i class="fas fa-truck"></i>Delivery Settings</div>
        <div class="admin-nav-item" onclick="setAdminPage('settings',this)"><i class="fas fa-cog"></i>General Settings</div>
        <div class="admin-nav-item" onclick="setAdminPage('reports',this)"><i class="fas fa-chart-bar"></i>Reports</div>
      </div>
      <div class="admin-main" id="admin-main">
        ${buildAdminDashboard()}
      </div>
    </div>
  </div>`;
}

function setAdminPage(page, el) {
  document.querySelectorAll('.admin-nav-item').forEach(i => i.classList.remove('active'));
  if (el) el.classList.add('active');
  const main = document.getElementById('admin-main');
  if (!main) return;
  const pages = {
    dashboard: buildAdminDashboard,
    products: buildAdminProducts,
    orders: buildAdminOrders,
    customers: buildAdminCustomers,
    loyalty: buildAdminLoyalty,
    service: buildAdminService,
    giveaway: buildAdminGiveaway,
    delivery: buildAdminDelivery,
    settings: buildAdminSettings,
    aiconfig: buildAdminAI,
    coupons: buildAdminCoupons,
    flash: buildAdminFlash,
    whatsapp: buildAdminWhatsApp,
    content: buildAdminContent,
    reports: buildAdminReports,
    payments: buildAdminPayments,
    referrals: buildAdminReferrals,
    reviews: buildAdminReviews,
    inventory: buildAdminInventory,
    surprise: buildAdminSurprise,
  };
  main.innerHTML = (pages[page] || buildAdminDashboard)();
}

function buildAdminDashboard() {
  return `
    <div class="admin-page-title">📊 Dashboard</div>
    <div class="admin-stats-row">
      <div class="astat"><div class="astat-lbl">Today's Revenue</div><div class="astat-val">₹3,24,500</div><div class="astat-chg up">+12.5% vs yesterday</div></div>
      <div class="astat"><div class="astat-lbl">Total Orders</div><div class="astat-val">28</div><div class="astat-chg up">+4 today</div></div>
      <div class="astat"><div class="astat-lbl">Customers</div><div class="astat-val">5,247</div><div class="astat-chg up">+12 today</div></div>
      <div class="astat"><div class="astat-lbl">Giveaway Entries</div><div class="astat-val">6,547</div><div class="astat-chg up">+34 today</div></div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px">
      <div class="astat"><div class="astat-lbl">Pending Orders</div><div class="astat-val" style="color:#FFAA00">7</div><div class="astat-chg">Need attention</div></div>
      <div class="astat"><div class="astat-lbl">Service Requests</div><div class="astat-val" style="color:var(--blue)">4</div><div class="astat-chg">Awaiting quotation</div></div>
      <div class="astat"><div class="astat-lbl">Surprise Deliveries</div><div class="astat-val" style="color:var(--gold)">2</div><div class="astat-chg">Pending approval</div></div>
      <div class="astat"><div class="astat-lbl">Low Stock Alert</div><div class="astat-val" style="color:var(--red)">3</div><div class="astat-chg down">Action needed</div></div>
    </div>
    <div class="admin-card">
      <div class="admin-card-head"><div class="admin-card-title">Recent Orders</div><button class="btn btn-outline btn-sm" onclick="setAdminPage('orders')">View All</button></div>
      <table class="admin-table">
        <thead><tr><th>Order ID</th><th>Customer</th><th>Product</th><th>Amount</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>
          <tr><td>#AJX-2025-1058</td><td>Karthik R.</td><td>Samsung S24 Ultra</td><td style="color:var(--gold);font-weight:700">₹1,24,999</td><td><span class="status-pill s-processing">Processing</span></td><td><button class="btn btn-primary btn-sm">View</button></td></tr>
          <tr><td>#AJX-2025-1057</td><td>Priya M.</td><td>iPhone 15 Pro Max</td><td style="color:var(--gold);font-weight:700">₹1,34,900</td><td><span class="status-pill s-pending">Pending</span></td><td><button class="btn btn-primary btn-sm">View</button></td></tr>
          <tr><td>#AJX-2025-1056</td><td>Rajesh K.</td><td>JBL Tune 770NC</td><td style="color:var(--gold);font-weight:700">₹4,499</td><td><span class="status-pill s-delivered">Delivered</span></td><td><button class="btn btn-ghost btn-sm">Bill</button></td></tr>
        </tbody>
      </table>
    </div>`;
}

function buildAdminProducts() {
  return `
    <div class="admin-page-title">📱 Products</div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:12px">
      <div style="display:flex;background:var(--dark3);border:1px solid rgba(255,255,255,0.07);border-radius:var(--radius-sm);overflow:hidden;max-width:300px">
        <input type="text" placeholder="Search products..." style="flex:1;background:none;border:none;color:var(--white);font-family:var(--font-body);font-size:0.82rem;padding:10px 12px;outline:none">
        <button style="background:var(--gold);border:none;color:var(--black);padding:10px 14px"><i class="fas fa-search"></i></button>
      </div>
      <button class="btn btn-primary btn-sm" onclick="toast('➕','New Product','Product add form — Phase 2 with database')"><i class="fas fa-plus"></i> Add Product</button>
    </div>
    <div class="admin-card">
      <table class="admin-table">
        <thead><tr><th>Product</th><th>Brand</th><th>Price</th><th>Stock</th><th>Coupon</th><th>Flash Sale</th><th>Action</th></tr></thead>
        <tbody>
          ${PRODUCTS.slice(0,8).map(p => `
          <tr>
            <td><div style="display:flex;align-items:center;gap:10px"><span style="font-size:1.3rem">${p.icon}</span><div><div style="font-weight:700;color:var(--white);font-size:0.82rem">${p.name}</div><div style="font-size:0.7rem;color:var(--gray)">ID: AJX-P-${String(p.id).padStart(4,'0')}</div></div></div></td>
            <td style="text-transform:uppercase;font-size:0.78rem;color:var(--gold)">${p.brand}</td>
            <td style="font-family:var(--font-head);color:var(--gold);font-weight:700">₹${p.price.toLocaleString('en-IN')}</td>
            <td><span class="status-pill ${p.instock ? 's-delivered' : 's-cancelled'}">${p.instock ? 'In Stock' : 'Out'}</span></td>
            <td><div class="toggle-wrap"><div class="toggle ${Math.random()>0.5?'on':''}" onclick="this.classList.toggle('on')"></div></div></td>
            <td><div class="toggle-wrap"><div class="toggle ${p.flash?'on':''}" onclick="this.classList.toggle('on')"></div></div></td>
            <td style="display:flex;gap:6px"><button class="btn btn-ghost btn-sm">Edit</button><button class="btn btn-danger btn-sm">Del</button></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
}

function buildAdminOrders() {
  const statuses = ['s-delivered','s-processing','s-pending','s-cancelled'];
  const sNames = ['Delivered','Processing','Pending','Cancelled'];
  const products = ['Samsung Galaxy S24 Ultra','iPhone 15 Pro Max','Vivo V30 Pro','JBL Tune 770NC','OnePlus 12R','Redmi Note 13 Pro+'];
  const customers = ['Karthik R.','Priya M.','Rajesh K.','Anbu S.','Meena T.','Vijay P.'];
  return `
    <div class="admin-page-title">📦 Orders</div>
    <div style="display:flex;gap:10px;margin-bottom:16px;flex-wrap:wrap">
      ${sNames.map((s,i) => `<button class="btn btn-ghost btn-sm">${s}</button>`).join('')}
    </div>
    <div class="admin-card">
      <table class="admin-table">
        <thead><tr><th>Order ID</th><th>Customer</th><th>Product</th><th>Amount</th><th>Payment</th><th>Date</th><th>Status</th><th>Bill</th></tr></thead>
        <tbody>
          ${[...Array(8)].map((_,i) => {
            const si = Math.floor(Math.random()*4);
            return `<tr>
              <td>#AJX-2025-${1058-i}</td>
              <td>${customers[i%6]}</td>
              <td style="max-width:160px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${products[i%6]}</td>
              <td style="color:var(--gold);font-weight:700">₹${(Math.floor(Math.random()*100000)+5000).toLocaleString('en-IN')}</td>
              <td style="font-size:0.78rem">UPI</td>
              <td style="font-size:0.78rem;color:var(--gray)">Mar ${10+i}, 2025</td>
              <td><span class="status-pill ${statuses[si]}">${sNames[si]}</span></td>
              <td><button class="btn btn-ghost btn-sm" onclick="toast('📄','Bill Generated','PDF bill sent to customer WhatsApp')"><i class="fas fa-file-pdf"></i></button></td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>`;
}

function buildAdminCustomers() {
  return `
    <div class="admin-page-title">👥 Customers</div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:20px">
      <div class="astat"><div class="astat-lbl">Total Customers</div><div class="astat-val">5,247</div></div>
      <div class="astat"><div class="astat-lbl">Online</div><div class="astat-val" style="color:var(--blue)">3,124</div></div>
      <div class="astat"><div class="astat-lbl">Offline</div><div class="astat-val" style="color:var(--gold)">2,123</div></div>
      <div class="astat"><div class="astat-lbl">Diamond+</div><div class="astat-val" style="color:var(--blue)">87</div></div>
    </div>
    <div class="admin-card">
      <div class="admin-card-head"><div class="admin-card-title">Customer List</div></div>
      <table class="admin-table">
        <thead><tr><th>Customer ID</th><th>Name</th><th>WhatsApp</th><th>Tier</th><th>Points</th><th>Total Spent</th><th>Source</th></tr></thead>
        <tbody>
          <tr><td>AJX-ONL-00001</td><td>Arjun Kumar</td><td>+91 98765 43210</td><td><span style="color:var(--blue)">💎 Diamond</span></td><td style="color:var(--gold);font-weight:700">4,850</td><td style="color:var(--gold)">₹4,85,000</td><td><span class="status-pill s-processing">Online</span></td></tr>
          <tr><td>AJX-OFF-00045</td><td>Priya M.</td><td>+91 87654 32109</td><td><span style="color:var(--gold)">🥇 Gold</span></td><td style="color:var(--gold);font-weight:700">2,340</td><td style="color:var(--gold)">₹2,34,000</td><td><span class="status-pill s-delivered">Offline</span></td></tr>
          <tr><td>AJX-ONL-00023</td><td>Karthik R.</td><td>+91 76543 21098</td><td><span style="color:var(--gray)">🥈 Silver</span></td><td style="color:var(--gold);font-weight:700">850</td><td style="color:var(--gold)">₹85,000</td><td><span class="status-pill s-processing">Online</span></td></tr>
        </tbody>
      </table>
    </div>`;
}

function buildAdminLoyalty() {
  return `
    <div class="admin-page-title">⭐ Loyalty Points</div>
    <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin-bottom:20px">
      <div class="astat"><div class="astat-lbl">Bronze</div><div class="astat-val">3,421</div></div>
      <div class="astat"><div class="astat-lbl">Silver</div><div class="astat-val">912</div></div>
      <div class="astat"><div class="astat-lbl" style="color:var(--gold)">Gold</div><div class="astat-val" style="color:var(--gold)">234</div></div>
      <div class="astat"><div class="astat-lbl" style="color:var(--blue)">Diamond</div><div class="astat-val" style="color:var(--blue)">87</div></div>
      <div class="astat"><div class="astat-lbl" style="color:var(--gold)">Elite</div><div class="astat-val" style="color:var(--gold)">12</div></div>
    </div>
    <div class="admin-card">
      <div class="admin-card-head"><div class="admin-card-title">Redemption Requests</div></div>
      <table class="admin-table">
        <thead><tr><th>Customer</th><th>Tier</th><th>Points</th><th>Value</th><th>Order ID</th><th>Action</th></tr></thead>
        <tbody>
          <tr><td>Arjun K.</td><td>💎 Diamond</td><td style="color:var(--gold)">5,000</td><td style="color:var(--green)">₹5,000</td><td>#AJX-2025-1050</td><td style="display:flex;gap:6px"><button class="btn btn-primary btn-sm" onclick="toast('✅','Approved!','Points redemption approved')">Approve</button><button class="btn btn-danger btn-sm">Reject</button></td></tr>
        </tbody>
      </table>
    </div>
    <div class="admin-card" style="margin-top:16px">
      <div class="admin-card-head"><div class="admin-card-title">Add/Deduct Points Manually</div></div>
      <div style="padding:16px;display:flex;gap:12px;flex-wrap:wrap;align-items:flex-end">
        <div class="form-group" style="margin:0"><label class="form-label">Customer Mobile</label><input class="form-input" placeholder="Mobile number" style="width:200px"></div>
        <div class="form-group" style="margin:0"><label class="form-label">Points</label><input class="form-input" type="number" placeholder="e.g. 100" style="width:120px"></div>
        <div class="form-group" style="margin:0"><label class="form-label">Action</label><select class="form-select" style="width:120px"><option>Add</option><option>Deduct</option></select></div>
        <button class="btn btn-primary btn-sm" onclick="toast('✅','Points Updated!','Customer notified via WhatsApp')">Update Points</button>
      </div>
    </div>`;
}

function buildAdminService() {
  return `
    <div class="admin-page-title">🔧 Service Requests</div>
    <div class="admin-card">
      <table class="admin-table">
        <thead><tr><th>Req ID</th><th>Customer</th><th>Device</th><th>Problem</th><th>Date</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>
          <tr><td>#SV-001</td><td>Karthik R.</td><td>Samsung S23</td><td>Screen Damage</td><td>Mar 18</td><td><span class="status-pill s-pending">Pending Quote</span></td><td><button class="btn btn-primary btn-sm" onclick="toast('📱','Quotation Sent!','WhatsApp message delivered to customer')">Send Quote</button></td></tr>
          <tr><td>#SV-002</td><td>Meena T.</td><td>iPhone 14</td><td>Battery + Charging</td><td>Mar 17</td><td><span class="status-pill s-processing">In Progress</span></td><td><button class="btn btn-ghost btn-sm">Update</button></td></tr>
          <tr><td>#SV-003</td><td>Vijay P.</td><td>OnePlus 11</td><td>Software Hanging</td><td>Mar 16</td><td><span class="status-pill s-delivered">Completed</span></td><td><button class="btn btn-ghost btn-sm">Bill</button></td></tr>
        </tbody>
      </table>
    </div>`;
}

function buildAdminGiveaway() {
  return `
    <div class="admin-page-title">🏆 Giveaway Management</div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:20px">
      <div class="astat"><div class="astat-lbl">Total Entries</div><div class="astat-val" style="color:var(--gold)">6,547</div><div class="astat-chg up">Goal: 10,000</div></div>
      <div class="astat"><div class="astat-lbl">Today's Entries</div><div class="astat-val">34</div><div class="astat-chg up">+6 this hour</div></div>
      <div class="astat"><div class="astat-lbl">Prize Pool</div><div class="astat-val">₹1,00,000</div></div>
      <div class="astat"><div class="astat-lbl">Winners</div><div class="astat-val">2</div><div class="astat-chg">₹50,000 each</div></div>
    </div>
    <div class="admin-card">
      <div class="admin-card-head">
        <div class="admin-card-title">Recent Giveaway Entries</div>
        <button class="btn btn-primary btn-sm" onclick="toast('🎰','Draw Initiated!','Random winner selection started...')"><i class="fas fa-dice"></i> Draw Winner Now</button>
      </div>
      <table class="admin-table">
        <thead><tr><th>Giveaway ID</th><th>Customer</th><th>Order ID</th><th>Purchase</th><th>Date</th></tr></thead>
        <tbody>
          <tr><td style="color:var(--gold);font-weight:700">AJX-GW-06547</td><td>Karthik R.</td><td>#AJX-2025-1058</td><td style="color:var(--gold)">₹1,24,999</td><td>Mar 19, 2025</td></tr>
          <tr><td style="color:var(--gold);font-weight:700">AJX-GW-06546</td><td>Priya M.</td><td>#AJX-2025-1057</td><td style="color:var(--gold)">₹1,34,900</td><td>Mar 19, 2025</td></tr>
          <tr><td style="color:var(--gold);font-weight:700">AJX-GW-06545</td><td>Meena T.</td><td>#AJX-2025-1055</td><td style="color:var(--gold)">₹39,999</td><td>Mar 18, 2025</td></tr>
        </tbody>
      </table>
    </div>`;
}

function buildAdminDelivery() {
  return `
    <div class="admin-page-title">🚚 Delivery Settings</div>
    <div class="admin-card">
      <div class="admin-card-head"><div class="admin-card-title">Delivery Charge Configuration</div></div>
      <div style="padding:20px;display:flex;flex-direction:column;gap:18px;max-width:540px">
        <div class="form-group"><label class="form-label">Standard Delivery Charge (₹)</label><input class="form-input" value="80" type="number" id="del-charge"><div style="font-size:0.75rem;color:var(--gray);margin-top:4px">Current: ₹80 per order</div></div>
        <div class="form-group"><label class="form-label">Free Delivery Above (₹)</label><input class="form-input" value="10000" type="number" id="del-free"><div style="font-size:0.75rem;color:var(--gray);margin-top:4px">Orders above this amount get free delivery</div></div>
        <div style="background:var(--dark3);border-radius:var(--radius-sm);padding:14px">
          <div style="font-weight:700;color:var(--gold);margin-bottom:10px;font-size:0.85rem">Special Zones</div>
          <div style="display:flex;gap:10px;margin-bottom:10px;align-items:center">
            <span style="font-size:0.82rem;color:var(--white);width:140px">Within 20KM (Local)</span>
            <input class="form-input" value="0" type="number" style="width:100px">
            <span style="font-size:0.75rem;color:var(--green)">Free Surprise Delivery zone</span>
          </div>
          <div style="display:flex;gap:10px;align-items:center">
            <span style="font-size:0.82rem;color:var(--white);width:140px">Outstation (India Post)</span>
            <input class="form-input" value="80" type="number" style="width:100px">
            <span style="font-size:0.75rem;color:var(--gray)">India Post Speed Post</span>
          </div>
        </div>
        <div class="form-group"><label class="form-label">AfterShip API Key</label><input class="form-input" placeholder="sk-aftership-xxxxx" id="aftership-key"><div style="font-size:0.72rem;color:var(--gray);margin-top:4px">For live tracking updates via WhatsApp</div></div>
        <div class="form-group"><label class="form-label">India Post Consignment (Manual)</label><input class="form-input" placeholder="Enter consignment number for order..."></div>
        <button class="btn btn-primary" onclick="toast('✅','Delivery Settings Saved!','Changes applied immediately')"><i class="fas fa-save"></i> Save Settings</button>
      </div>
    </div>`;
}

function buildAdminSettings() {
  return `
    <div class="admin-page-title">⚙️ General Settings</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
      <div class="admin-card">
        <div class="admin-card-head"><div class="admin-card-title">Business Info</div></div>
        <div style="padding:16px;display:flex;flex-direction:column;gap:12px">
          <div class="form-group" style="margin:0"><label class="form-label">Shop Name</label><input class="form-input" value="Ajivex Mobile Shop"></div>
          <div class="form-group" style="margin:0"><label class="form-label">Phone / WhatsApp</label><input class="form-input" value="+91 98765 43210" type="tel"></div>
          <div class="form-group" style="margin:0"><label class="form-label">Email</label><input class="form-input" value="info@ajivex.com" type="email"></div>
          <div class="form-group" style="margin:0"><label class="form-label">GST Number</label><input class="form-input" placeholder="33XXXXX0000A1ZX"><div style="font-size:0.7rem;color:var(--gray);margin-top:3px">Leave blank if not registered. Toggle below to show on bills.</div></div>
          <div class="toggle-wrap"><div class="toggle" onclick="this.classList.toggle('on')"></div><span class="toggle-lbl">Show GST on Bills</span></div>
          <button class="btn btn-primary btn-sm" onclick="toast('✅','Saved','Business info updated')"><i class="fas fa-save"></i> Save</button>
        </div>
      </div>
      <div class="admin-card">
        <div class="admin-card-head"><div class="admin-card-title">Social Media Links</div></div>
        <div style="padding:16px;display:flex;flex-direction:column;gap:12px">
          <div class="form-group" style="margin:0"><label class="form-label"><i class="fab fa-instagram" style="color:#E1306C;margin-right:6px"></i>Instagram</label><input class="form-input" placeholder="https://instagram.com/ajivexmobile"></div>
          <div class="form-group" style="margin:0"><label class="form-label"><i class="fab fa-facebook-f" style="color:#1877F2;margin-right:6px"></i>Facebook</label><input class="form-input" placeholder="https://facebook.com/ajivexmobile"></div>
          <div class="form-group" style="margin:0"><label class="form-label"><i class="fab fa-youtube" style="color:#FF0000;margin-right:6px"></i>YouTube</label><input class="form-input" placeholder="https://youtube.com/@ajivexmobile"></div>
          <div class="form-group" style="margin:0"><label class="form-label"><i class="fab fa-whatsapp" style="color:#25D366;margin-right:6px"></i>WhatsApp Business</label><input class="form-input" placeholder="+91 98765 43210"></div>
          <button class="btn btn-primary btn-sm" onclick="toast('✅','Links Updated','Social links updated on website')"><i class="fas fa-save"></i> Save Links</button>
        </div>
      </div>
      <div class="admin-card">
        <div class="admin-card-head"><div class="admin-card-title">Feature Toggles</div></div>
        <div style="padding:16px;display:flex;flex-direction:column;gap:14px">
          <div class="toggle-wrap"><div class="toggle on" onclick="this.classList.toggle('on')"></div><span class="toggle-lbl">Flash Sale Active</span></div>
          <div class="toggle-wrap"><div class="toggle on" onclick="this.classList.toggle('on')"></div><span class="toggle-lbl">Giveaway Active</span></div>
          <div class="toggle-wrap"><div class="toggle on" onclick="this.classList.toggle('on')"></div><span class="toggle-lbl">Loyalty Points Active</span></div>
          <div class="toggle-wrap"><div class="toggle on" onclick="this.classList.toggle('on')"></div><span class="toggle-lbl">Surprise Delivery Bookings</span></div>
          <div class="toggle-wrap"><div class="toggle" onclick="this.classList.toggle('on')"></div><span class="toggle-lbl">Cash on Delivery (Online)</span></div>
          <div class="toggle-wrap"><div class="toggle on" onclick="this.classList.toggle('on')"></div><span class="toggle-lbl">WhatsApp Notifications</span></div>
          <div class="toggle-wrap"><div class="toggle" onclick="this.classList.toggle('on')"></div><span class="toggle-lbl">AI Advisor (needs API key)</span></div>
        </div>
      </div>
      <div class="admin-card">
        <div class="admin-card-head"><div class="admin-card-title">Admin Security</div></div>
        <div style="padding:16px;display:flex;flex-direction:column;gap:12px">
          <div class="form-group" style="margin:0"><label class="form-label">Admin Username</label><input class="form-input" value="ajivex_admin"></div>
          <div class="form-group" style="margin:0"><label class="form-label">New Password</label><input class="form-input" type="password" placeholder="New password"></div>
          <div class="form-group" style="margin:0"><label class="form-label">Confirm Password</label><input class="form-input" type="password" placeholder="Confirm password"></div>
          <div class="toggle-wrap"><div class="toggle" onclick="this.classList.toggle('on')"></div><span class="toggle-lbl">2FA via WhatsApp (Phase 2)</span></div>
          <button class="btn btn-primary btn-sm" onclick="toast('🔐','Password Updated!','Admin credentials changed')">Update Password</button>
        </div>
      </div>
    </div>`;
}

function buildAdminAI() {
  return `
    <div class="admin-page-title">🤖 AI Config</div>
    <div class="admin-card">
      <div class="admin-card-head"><div class="admin-card-title">AI Phone Advisor Configuration</div></div>
      <div style="padding:20px;max-width:540px;display:flex;flex-direction:column;gap:16px">
        <div style="background:rgba(212,175,55,0.08);border:1px solid rgba(212,175,55,0.2);border-radius:var(--radius-sm);padding:14px;font-size:0.82rem;color:var(--gray-light)">
          <strong style="color:var(--gold);display:block;margin-bottom:5px">ℹ️ How it works</strong>
          Paste your AI API key below. The website's AI Advisor will use your API to generate real personalized phone recommendations for customers.
        </div>
        <div class="form-group" style="margin:0"><label class="form-label">AI API Endpoint URL</label><input class="form-input" placeholder="https://your-ai-api.com/v1/chat" id="ai-endpoint"></div>
        <div class="form-group" style="margin:0"><label class="form-label">API Key</label><input class="form-input" type="password" placeholder="sk-your-api-key-here" id="ai-apikey"></div>
        <div class="form-group" style="margin:0"><label class="form-label">Model Name</label><input class="form-input" placeholder="e.g. gpt-4, claude-3, your-model" id="ai-model"></div>
        <div class="form-group" style="margin:0"><label class="form-label">System Prompt</label><textarea class="form-textarea" placeholder="You are a mobile phone expert for Ajivex Mobile Shop in Karur, Tamil Nadu. Recommend top 3 phones based on customer needs..."></textarea></div>
        <div class="toggle-wrap"><div class="toggle" onclick="this.classList.toggle('on')"></div><span class="toggle-lbl">Enable Live AI Advisor on Website</span></div>
        <button class="btn btn-primary" onclick="toast('✅','AI Config Saved!','Live AI mode will activate if key is valid')"><i class="fas fa-save"></i> Save & Test</button>
      </div>
    </div>`;
}

function buildAdminCoupons() {
  return `
    <div class="admin-page-title">🏷️ Coupons</div>
    <div style="display:flex;justify-content:space-between;margin-bottom:16px">
      <div></div>
      <button class="btn btn-primary btn-sm" onclick="toast('➕','New Coupon','Create coupon — Phase 2 with DB')"><i class="fas fa-plus"></i> Add Coupon</button>
    </div>
    <div class="admin-card">
      <table class="admin-table">
        <thead><tr><th>Code</th><th>Discount</th><th>Type</th><th>Min Order</th><th>Uses</th><th>Expiry</th><th>Active</th></tr></thead>
        <tbody>
          <tr><td style="font-family:var(--font-head);color:var(--gold);font-weight:800">AJIVEX10</td><td>10%</td><td>Samsung Only</td><td>₹10,000</td><td>23/100</td><td>Apr 30</td><td><div class="toggle on" onclick="this.classList.toggle('on')"></div></td></tr>
          <tr><td style="font-family:var(--font-head);color:var(--gold);font-weight:800">KARUR20</td><td>20%</td><td>All Products</td><td>₹25,000</td><td>7/50</td><td>Mar 31</td><td><div class="toggle on" onclick="this.classList.toggle('on')"></div></td></tr>
          <tr><td style="font-family:var(--font-head);color:var(--gold);font-weight:800">WELCOME50</td><td>5%</td><td>First Order</td><td>₹5,000</td><td>156/∞</td><td>Dec 31</td><td><div class="toggle on" onclick="this.classList.toggle('on')"></div></td></tr>
        </tbody>
      </table>
    </div>`;
}

function buildAdminFlash() {
  return `
    <div class="admin-page-title">⚡ Flash Sales</div>
    <div class="admin-card" style="margin-bottom:16px">
      <div class="admin-card-head"><div class="admin-card-title">Create Flash Sale</div></div>
      <div style="padding:16px;display:grid;grid-template-columns:1fr 1fr;gap:12px">
        <div class="form-group" style="margin:0"><label class="form-label">Sale Name</label><input class="form-input" placeholder="e.g. Weekend Mega Sale"></div>
        <div class="form-group" style="margin:0"><label class="form-label">Discount %</label><input class="form-input" type="number" placeholder="15"></div>
        <div class="form-group" style="margin:0"><label class="form-label">Start Date & Time</label><input class="form-input" type="datetime-local"></div>
        <div class="form-group" style="margin:0"><label class="form-label">End Date & Time</label><input class="form-input" type="datetime-local"></div>
        <div class="form-group" style="grid-column:span 2;margin:0"><label class="form-label">Apply to</label><select class="form-select"><option>All Products</option><option>Samsung Only</option><option>Apple Only</option><option>Accessories</option><option>Select Specific Products</option></select></div>
        <div style="grid-column:span 2">
          <div class="toggle-wrap" style="margin-bottom:10px"><div class="toggle on" onclick="this.classList.toggle('on')"></div><span class="toggle-lbl">Auto activate at scheduled time</span></div>
          <button class="btn btn-primary btn-sm" onclick="toast('⚡','Flash Sale Created!','Will auto-activate at scheduled time')"><i class="fas fa-bolt"></i> Schedule Sale</button>
        </div>
      </div>
    </div>`;
}

function buildAdminWhatsApp() {
  return `
    <div class="admin-page-title">💬 WhatsApp Automation (WATI)</div>
    <div style="background:rgba(37,211,102,0.08);border:1px solid rgba(37,211,102,0.2);border-radius:var(--radius-sm);padding:14px;margin-bottom:16px;font-size:0.82rem;color:var(--gray-light)">
      <strong style="color:#25D366;display:block;margin-bottom:5px">Connect WATI in Phase 2</strong>
      WATI API key → connect below. All automation templates will activate automatically.
    </div>
    <div class="admin-card">
      <div class="admin-card-head"><div class="admin-card-title">WATI Configuration</div></div>
      <div style="padding:16px;max-width:480px;display:flex;flex-direction:column;gap:12px">
        <div class="form-group" style="margin:0"><label class="form-label">WATI API Endpoint</label><input class="form-input" placeholder="https://live-xxx.wati.io/api"></div>
        <div class="form-group" style="margin:0"><label class="form-label">WATI Access Token</label><input class="form-input" type="password" placeholder="Bearer token from WATI dashboard"></div>
        <button class="btn btn-primary btn-sm" onclick="toast('✅','WATI Connected!','WhatsApp automation is now active')">Connect WATI</button>
      </div>
    </div>
    <div class="admin-card" style="margin-top:16px">
      <div class="admin-card-head"><div class="admin-card-title">Automation Templates</div></div>
      <div style="padding:14px;display:flex;flex-direction:column;gap:10px">
        ${[
          ['Order Confirmation', 'Sent immediately after purchase', true],
          ['Delivery Update', 'India Post tracking updates', true],
          ['24hr Thank You', 'With Google review link', true],
          ['Tier Upgrade Alert', 'When customer reaches new tier', true],
          ['Abandoned Cart (2hr)', 'Remind to complete purchase', false],
          ['Birthday Bonus', 'Auto points on birthday', true],
          ['Back in Stock', 'For wishlist items', false],
          ['Giveaway ID', 'Auto send unique GW ID', true],
        ].map(([t,d,on]) => `
          <div style="display:flex;align-items:center;justify-content:space-between;padding:12px;background:var(--dark3);border-radius:var(--radius-sm)">
            <div><div style="font-weight:700;color:var(--white);font-size:0.85rem">${t}</div><div style="font-size:0.72rem;color:var(--gray);margin-top:2px">${d}</div></div>
            <div class="toggle ${on?'on':''}" onclick="this.classList.toggle('on')"></div>
          </div>`).join('')}
      </div>
    </div>`;
}

function buildAdminContent() {
  return `
    <div class="admin-page-title">🖼️ Content Management</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
      <div class="admin-card">
        <div class="admin-card-head"><div class="admin-card-title">Banners</div><button class="btn btn-primary btn-sm" onclick="toast('🖼️','Banner Added','New banner will appear on site')"><i class="fas fa-plus"></i> Add Banner</button></div>
        <div style="padding:14px;display:flex;flex-direction:column;gap:10px">
          <div style="background:var(--dark3);border-radius:8px;padding:12px;display:flex;align-items:center;gap:10px;justify-content:space-between">
            <div><div style="font-weight:700;color:var(--white);font-size:0.82rem">Hero Banner 1</div><div style="font-size:0.7rem;color:var(--green)">Active</div></div>
            <div style="display:flex;gap:6px"><button class="btn btn-ghost btn-sm">Edit</button><button class="btn btn-danger btn-sm">Del</button></div>
          </div>
        </div>
      </div>
      <div class="admin-card">
        <div class="admin-card-head"><div class="admin-card-title">Document Uploads</div></div>
        <div style="padding:14px;display:flex;flex-direction:column;gap:10px">
          ${[['Warranty Details PDF','Upload'],['T&C Document','Upload'],['Surprise Gift T&C','Upload'],['Challenge T&C','Upload']].map(([n,a]) => `
            <div style="background:var(--dark3);border-radius:8px;padding:12px;display:flex;align-items:center;justify-content:space-between">
              <span style="font-size:0.82rem;color:var(--white)">${n}</span>
              <button class="btn btn-outline btn-sm" onclick="toast('📄','${n}','File upload coming in Phase 2')"><i class="fas fa-upload"></i> ${a}</button>
            </div>`).join('')}
        </div>
      </div>
      <div class="admin-card">
        <div class="admin-card-head"><div class="admin-card-title">Blog Posts</div><button class="btn btn-primary btn-sm" onclick="toast('✍️','New Post','Blog editor — Phase 2')"><i class="fas fa-plus"></i> New Post</button></div>
        <div style="padding:14px;display:flex;flex-direction:column;gap:8px">
          ${['Best Mobiles Under ₹20,000 in 2025','iPhone 15 Pro vs Samsung S24 Ultra','How to Make Your Phone Battery Last Longer'].map(t => `
            <div style="background:var(--dark3);border-radius:8px;padding:10px 12px;display:flex;justify-content:space-between;align-items:center">
              <span style="font-size:0.8rem;color:var(--white)">${t}</span>
              <button class="btn btn-ghost btn-sm">Edit</button>
            </div>`).join('')}
        </div>
      </div>
      <div class="admin-card">
        <div class="admin-card-head"><div class="admin-card-title">FAQ Management</div></div>
        <div style="padding:14px;font-size:0.82rem;color:var(--gray)">7 FAQs active on website. Edit/reorder in Phase 2 with CMS.</div>
      </div>
    </div>`;
}

function buildAdminReports() {
  return `
    <div class="admin-page-title">📊 Reports & Analytics</div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:20px">
      <div class="astat"><div class="astat-lbl">This Month</div><div class="astat-val">₹24,50,000</div><div class="astat-chg up">+18% vs last</div></div>
      <div class="astat"><div class="astat-lbl">Orders</div><div class="astat-val">342</div></div>
      <div class="astat"><div class="astat-lbl">Avg Order Value</div><div class="astat-val">₹71,637</div></div>
      <div class="astat"><div class="astat-lbl">Loyalty Credits Issued</div><div class="astat-val">₹24,500</div></div>
    </div>
    <div class="admin-card">
      <div class="admin-card-head"><div class="admin-card-title">Export Reports</div></div>
      <div style="padding:16px;display:flex;gap:10px;flex-wrap:wrap">
        <button class="btn btn-primary btn-sm" onclick="toast('📊','Downloading','Monthly report PDF generating...')"><i class="fas fa-file-pdf"></i> Monthly PDF Report</button>
        <button class="btn btn-ghost btn-sm" onclick="toast('📊','Downloading','Excel report generating...')"><i class="fas fa-file-excel"></i> Excel Export</button>
        <button class="btn btn-ghost btn-sm" onclick="toast('📊','Downloading','Order data CSV...')"><i class="fas fa-file-csv"></i> Orders CSV</button>
        <button class="btn btn-ghost btn-sm" onclick="toast('📊','Downloading','Customer data CSV...')"><i class="fas fa-users"></i> Customer CSV</button>
      </div>
    </div>`;
}

function buildAdminPayments() {
  return `
    <div class="admin-page-title">💳 Payments</div>
    <div class="admin-card">
      <div class="admin-card-head">
        <div class="admin-card-title">Transaction History</div>
        <select class="sort-select" style="width:180px"><option>All Payments</option><option>UPI</option><option>Card</option><option>Cash</option><option>EMI</option></select>
      </div>
      <table class="admin-table">
        <thead><tr><th>Txn ID</th><th>Order</th><th>Amount</th><th>Method</th><th>Date</th><th>Status</th></tr></thead>
        <tbody>
          <tr><td>pay_XXXX1234</td><td>#AJX-2025-1058</td><td style="color:var(--gold);font-weight:700">₹1,24,999</td><td>UPI (GPay)</td><td>Mar 19</td><td><span class="status-pill s-delivered">Success</span></td></tr>
          <tr><td>pay_XXXX1233</td><td>#AJX-2025-1057</td><td style="color:var(--gold);font-weight:700">₹1,34,900</td><td>Credit Card</td><td>Mar 19</td><td><span class="status-pill s-delivered">Success</span></td></tr>
          <tr><td>pay_XXXX1232</td><td>#AJX-2025-1056</td><td style="color:var(--gold);font-weight:700">₹4,499</td><td>Cash</td><td>Mar 18</td><td><span class="status-pill s-delivered">Success</span></td></tr>
        </tbody>
      </table>
    </div>`;
}

function buildAdminReferrals() {
  return `
    <div class="admin-page-title">🔗 Referrals</div>
    <div class="admin-card">
      <table class="admin-table">
        <thead><tr><th>Referrer</th><th>New Customer</th><th>Purchase</th><th>Points Given</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>
          <tr><td>Arjun K. (AJX-ARJ001)</td><td>Karthik R.</td><td style="color:var(--gold)">₹24,999</td><td style="color:var(--green)">100+100 pts</td><td><span class="status-pill s-pending">Pending</span></td><td style="display:flex;gap:6px"><button class="btn btn-primary btn-sm" onclick="toast('✅','Referral Approved','Points added to both accounts')">Approve</button><button class="btn btn-danger btn-sm">Reject</button></td></tr>
        </tbody>
      </table>
    </div>`;
}

function buildAdminReviews() {
  return `
    <div class="admin-page-title">⭐ Reviews</div>
    <div class="admin-card">
      <table class="admin-table">
        <thead><tr><th>Customer</th><th>Rating</th><th>Review</th><th>Date</th><th>Action</th></tr></thead>
        <tbody>
          <tr><td>Arjun K.</td><td style="color:var(--gold)">★★★★★ 5.0</td><td style="max-width:200px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">Amazing service! Got mystery gift too...</td><td>Mar 12</td><td style="display:flex;gap:6px"><button class="btn btn-ghost btn-sm" onclick="toast('✅','Approved','Review now visible')">Approve</button><button class="btn btn-danger btn-sm">Delete</button></td></tr>
          <tr><td>Priya M.</td><td style="color:var(--gold)">★★★★★ 5.0</td><td style="max-width:200px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">Surprise delivery for husband birthday...</td><td>Feb 28</td><td style="display:flex;gap:6px"><button class="btn btn-ghost btn-sm" onclick="toast('✅','Approved','Review now visible')">Approve</button><button class="btn btn-danger btn-sm">Delete</button></td></tr>
        </tbody>
      </table>
    </div>`;
}

function buildAdminInventory() {
  return `
    <div class="admin-page-title">📦 Inventory (Admin Only)</div>
    <div style="background:rgba(212,175,55,0.08);border:1px solid rgba(212,175,55,0.2);border-radius:var(--radius-sm);padding:12px;margin-bottom:16px;font-size:0.82rem;color:var(--gray-light)">
      <i class="fas fa-info-circle" style="color:var(--gold);margin-right:6px"></i>Products with 0 stock are automatically hidden from the website. Only admin can see this section.
    </div>
    <div class="admin-card">
      <table class="admin-table">
        <thead><tr><th>Product</th><th>Brand</th><th>Stock</th><th>IMEI Count</th><th>Low Stock Alert</th><th>Update</th></tr></thead>
        <tbody>
          ${PRODUCTS.slice(0,6).map(p => `
          <tr>
            <td>${p.name}</td>
            <td style="text-transform:uppercase;font-size:0.75rem;color:var(--gold)">${p.brand}</td>
            <td><input type="number" value="${Math.floor(Math.random()*20)+1}" style="background:var(--dark3);border:1px solid rgba(255,255,255,0.07);border-radius:6px;color:var(--white);font-family:var(--font-body);font-size:0.82rem;padding:5px 8px;width:70px;outline:none"></td>
            <td style="color:var(--gray)">${Math.floor(Math.random()*15)+1} IMEIs</td>
            <td><input type="number" value="3" style="background:var(--dark3);border:1px solid rgba(255,255,255,0.07);border-radius:6px;color:var(--white);font-family:var(--font-body);font-size:0.82rem;padding:5px 8px;width:60px;outline:none"></td>
            <td><button class="btn btn-ghost btn-sm" onclick="toast('✅','Stock Updated','Changes saved')">Save</button></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
}

function buildAdminSurprise() {
  return `
    <div class="admin-page-title">🎁 Surprise Delivery</div>
    <div class="admin-card">
      <div class="admin-card-head"><div class="admin-card-title">Pending Bookings</div></div>
      <table class="admin-table">
        <thead><tr><th>Booking ID</th><th>Sender</th><th>Recipient</th><th>Date/Time</th><th>Proof</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>
          <tr><td>#SD-001</td><td>Anbu S.</td><td>Rekha A. — Karur</td><td>Mar 20, 4:00 PM</td><td><span class="status-pill s-delivered">Uploaded</span></td><td><span class="status-pill s-pending">Pending</span></td><td style="display:flex;gap:4px"><button class="btn btn-primary btn-sm" onclick="toast('✅','Confirmed!','Team notified for delivery')">Confirm</button><button class="btn btn-danger btn-sm">Cancel</button></td></tr>
        </tbody>
      </table>
    </div>`;
}

// ─────────────────────────────────────
// SERVICE WIZARD
// ─────────────────────────────────────
let svData = { step: 1, device: null, brand: null };

function wizNext(step) {
  if (step === 1) {
    const name = document.getElementById('sv-name').value.trim();
    const wa = document.getElementById('sv-wa').value.trim();
    if (!name || wa.replace(/\D/g,'').length < 10) { toast('⚠️','Fill Details','Please fill all required fields'); return; }
    svData.name = name; svData.wa = wa;
  }
  if (step === 4) {
    const probs = [...document.querySelectorAll('.problem-chip.selected')].map(c => c.textContent.trim());
    const other = document.getElementById('sv-other').value.trim();
    svData.problems = probs;
    const summary = document.getElementById('sv-summary-content');
    if (summary) {
      summary.innerHTML = `<div>Name: <strong>${svData.name}</strong></div>
        <div>WhatsApp: <strong>${svData.wa}</strong></div>
        <div>Device: <strong>${svData.device || 'Not selected'}</strong></div>
        <div>Brand: <strong>${svData.brand || 'Not selected'}</strong></div>
        <div>Model: <strong>${document.getElementById('sv-model')?.value || '—'}</strong></div>
        <div>Problems: <strong>${probs.join(', ') || '—'}</strong></div>
        ${other ? `<div>Other: <strong>${other}</strong></div>` : ''}`;
    }
  }
  goWizStep(step, step + 1);
}

function wizBack(step) {
  goWizStep(step, step - 1);
}

function goWizStep(from, to) {
  document.getElementById('ws' + from).classList.remove('active');
  document.getElementById('ws' + to).classList.add('active');
  for (let i = 1; i <= 5; i++) {
    const c = document.getElementById('wc' + i);
    const l = document.getElementById('wl' + i);
    if (!c) continue;
    c.classList.remove('active', 'done');
    if (l) l.classList.remove('done');
    if (i < to) { c.classList.add('done'); c.textContent = '✓'; if (l) l.classList.add('done'); }
    else if (i === to) { c.classList.add('active'); c.textContent = String(i); }
    else { c.textContent = String(i); }
  }
}

function selectDevice(el, type) {
  document.querySelectorAll('[onclick^="selectDevice"]').forEach(d => {
    d.style.borderColor = 'rgba(255,255,255,0.07)';
    d.style.background = 'var(--dark3)';
  });
  el.style.borderColor = 'var(--gold)';
  el.style.background = 'var(--gold-dim)';
  svData.device = type;
  const next = document.getElementById('ws2-next');
  if (next) next.disabled = false;
}

function selectBrand(el, brand) {
  document.querySelectorAll('.brand-opt').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  svData.brand = brand;
}

function toggleProblem(el) {
  el.classList.toggle('selected');
}

// ─────────────────────────────────────
// DASHBOARD TABS
// ─────────────────────────────────────
function setDashTab(tab, el) {
  ['orders','wishlist','coupons','referral','profile'].forEach(t => {
    const d = document.getElementById('dash-' + t);
    if (d) d.style.display = 'none';
  });
  const target = document.getElementById('dash-' + tab);
  if (target) target.style.display = 'block';
  document.querySelectorAll('[onclick^="setDashTab"]').forEach(btn => {
    btn.style.color = 'var(--gray-light)';
    btn.style.background = 'none';
  });
  if (el) {
    el.style.color = 'var(--gold)';
    el.style.background = 'var(--gold-dim)';
  }
}

// ─────────────────────────────────────
// LOCATION DETECT
// ─────────────────────────────────────
function detectLocation() {
  if (!navigator.geolocation) { toast('📍','Location','Karur, Tamil Nadu'); return; }
  toast('📍','Detecting...','Getting your location');
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      document.getElementById('nav-loc').textContent = 'Your Location';
      toast('📍','Location Set!','Delivery calculated for your area');
    },
    () => toast('📍','Location','Karur, Tamil Nadu')
  );
}

// ─────────────────────────────────────
// MOBILE MENU
// ─────────────────────────────────────
function toggleMenu() {
  const m = document.getElementById('mobile-menu');
  const isOpen = m.style.display === 'flex';
  m.style.display = isOpen ? 'none' : 'flex';
  m.style.flexDirection = 'column';
}
function closeMenu() {
  const m = document.getElementById('mobile-menu');
  m.style.display = 'none';
}

// ─────────────────────────────────────
// WELCOME POPUP
// ─────────────────────────────────────
function closeWelcome() {
  document.getElementById('welcome-popup').classList.remove('show');
  localStorage.setItem('ajivex_visited', '1');
}

// ─────────────────────────────────────
// SOCIAL PROOF TOASTS
// ─────────────────────────────────────
let proofIdx = 0;
function showProofToast() {
  const p = SOCIAL_PROOFS[proofIdx % SOCIAL_PROOFS.length];
  proofIdx++;
  const el = document.getElementById('proof-toast');
  document.getElementById('pt-name').textContent = p.name;
  document.getElementById('pt-msg').textContent = p.msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 4000);
}

// ─────────────────────────────────────
// INIT
// ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Load all product carousels
  loadCarousels();

  // Flash timer
  updateFlashTimer();
  updateDetailTimer();

  // Welcome popup after 3s (first visit)
  if (!localStorage.getItem('ajivex_visited')) {
    setTimeout(() => {
      document.getElementById('welcome-popup').classList.add('show');
    }, 3000);
  }

  // Social proof toasts every 15s
  setTimeout(() => {
    showProofToast();
    setInterval(showProofToast, 15000);
  }, 8000);

  // Set cat-bar active to home
  document.getElementById('cat-home')?.classList.add('active');
});
