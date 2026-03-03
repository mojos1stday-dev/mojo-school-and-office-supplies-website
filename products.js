// ═══════════════════════════════════════════════
//  MOJO School & Office Supplies — Product Catalog
//  To add a product: copy a block below and fill in
//  the fields. Set cat to one of:
//  writing | school-office | paper | arts | packaging | bundles
// ═══════════════════════════════════════════════

const PRODUCTS = [

  // ── WRITING MATERIALS ────────────────────────────────────────
  {
    name: "Pilot Whiteboard Marker",
    desc: "Sold Per Piece",
    price: 65,
    cat: "writing",
    badge: "bestseller",    // "bestseller" | "popular" | ""
    img: ""                 // leave empty for placeholder; add image filename when ready e.g. "pilot-whiteboard.jpg"
  },
  {
    name: "Whiteboard Marker HBW Office",
    desc: "White Board 213 — Sold Per Piece",
    price: 29,
    cat: "writing",
    badge: "popular",
    img: ""
  },
  {
    name: "Pilot Permanent Marker Broad",
    desc: "Sold Per Piece",
    price: 42,
    cat: "writing",
    badge: "popular",
    img: ""
  },
  {
    name: "Pilot Permanent Marker Fine",
    desc: "Sold Per Piece",
    price: 42,
    cat: "writing",
    badge: "",
    img: ""
  },
  {
    name: "Highlighter HBW Marker",
    desc: "Sold Per Piece — Assorted Colors",
    price: 17,
    cat: "writing",
    badge: "",
    img: ""
  },
  {
    name: "Stabilo Boss Highlighter",
    desc: "Sold Per Piece",
    price: 45,
    cat: "writing",
    badge: "",
    img: ""
  },
  {
    name: "Pencil Mongol Original",
    desc: "No. 1, 2 & 3 — Sold Per Piece",
    price: 13,
    cat: "writing",
    badge: "bestseller",
    img: ""
  },
  {
    name: "HBW Correction Fluid",
    desc: "12ml",
    price: 28,
    cat: "writing",
    badge: "",
    img: ""
  },
  {
    name: "HBW Mechanical Lead Tube",
    desc: "Refill Lead",
    price: 10,
    cat: "writing",
    badge: "",
    img: ""
  },
  {
    name: "Refill MyGel Dong-A 0.5mm",
    desc: "Sold Per Piece",
    price: 20,
    cat: "writing",
    badge: "",
    img: ""
  },

  // ── SCHOOL & OFFICE SUPPLIES ─────────────────────────────────
  {
    name: "Joy Binder Clip",
    desc: "Per Box — Metal Double Clip, Black",
    price: 18,
    cat: "school-office",
    badge: "",
    img: ""
  },
  {
    name: "HBW Stapler No. 9902",
    desc: "#10 Staple Wire",
    price: 38,
    cat: "school-office",
    badge: "popular",
    img: ""
  },
  {
    name: "HBW Medium Puncher",
    desc: "No. 42347S",
    price: 110,
    cat: "school-office",
    badge: "",
    img: ""
  },
  {
    name: "Plastic Ruler Transparent Prince",
    desc: "12 inches",
    price: 30,
    cat: "school-office",
    badge: "",
    img: ""
  },
  {
    name: "Whiteboard Eraser Magnetic Boho",
    desc: "White Board Eraser",
    price: 30,
    cat: "school-office",
    badge: "",
    img: ""
  },
  {
    name: "Needle Book Happy Lady",
    desc: "Needle Set Rust Proof — 60 pcs",
    price: 60,
    cat: "school-office",
    badge: "",
    img: ""
  },

  // ── PAPER SUPPLIES ───────────────────────────────────────────
  {
    name: "Writing Pad Paper Victory",
    desc: "Grade 1, 2, 3 & 4 Pad Paper",
    price: 238,
    cat: "paper",
    badge: "popular",
    img: ""
  },
  {
    name: "Writing Notebook Composition",
    desc: "Hotdog / Wide Ruled",
    price: 215,
    cat: "paper",
    badge: "popular",
    img: ""
  },
  {
    name: "Colored Memo Pads Avia Colors",
    desc: "Assorted Colors — Per Pack",
    price: null,  // set price when confirmed
    cat: "paper",
    badge: "",
    img: ""
  },

  // ── ARTS & CRAFTS ────────────────────────────────────────────
  {
    name: "Watercolor Painting Book",
    desc: "With Paint and Brush for Kids",
    price: 40,
    cat: "arts",
    badge: "",
    img: ""
  },
  {
    name: "Color Oil Pastel 12 Colors",
    desc: "TruColor — Per Box",
    price: null,  // set price when confirmed
    cat: "arts",
    badge: "",
    img: ""
  },

  // ── PACKAGING & WRAPPING ─────────────────────────────────────
  {
    name: "Masking Tape Armour",
    desc: "Sold Per Piece — 3 Sizes Available",
    price: 25,
    cat: "packaging",
    badge: "bestseller",
    img: ""
  },
  {
    name: "Joy Metal Tape Dispenser",
    desc: "Packaging Tape Dispenser No. 700M",
    price: 110,
    cat: "packaging",
    badge: "",
    img: ""
  },

  // ── BUNDLES ──────────────────────────────────────────────────
  {
    name: "Back to School Starter Pack",
    desc: "Complete Bundle — Grades 1 to 4",
    price: 170,
    cat: "bundles",
    badge: "bestseller",
    img: ""
  },
  {
    name: "Grade 1 Bundle Pack",
    desc: "Complete School Supplies for Grade 1",
    price: 180,
    cat: "bundles",
    badge: "",
    img: ""
  }

]; // end PRODUCTS


// ═══════════════════════════════════════════════
//  Category metadata (label, icon, colors)
// ═══════════════════════════════════════════════
const CAT_META = {
  "writing":      { label: "Writing Materials",     color: "#0A82CF", bg: "#E4F3FC" },
  "school-office":{ label: "School & Office",        color: "#10B981", bg: "#ECFDF5" },
  "paper":        { label: "Paper Supplies",          color: "#6366F1", bg: "#EEF2FF" },
  "arts":         { label: "Arts & Crafts",           color: "#EC4899", bg: "#FDF2F8" },
  "packaging":    { label: "Packaging & Wrapping",    color: "#F59E0B", bg: "#FFFBEB" },
  "bundles":      { label: "Bundle",                  color: "#EE4D2D", bg: "#FFF1EE" }
};


// ═══════════════════════════════════════════════
//  Build WhatsApp pre-filled message link
// ═══════════════════════════════════════════════
function buildWALink(name, price) {
  const priceStr = price ? ` (₱${price})` : '';
  const msg = `Hi Mojo! I'd like to order: ${name}${priceStr}`;
  return `https://wa.me/639369571663?text=${encodeURIComponent(msg)}`;
}


// ═══════════════════════════════════════════════
//  Render products into the grid
// ═══════════════════════════════════════════════
function renderProducts(filter) {
  const grid    = document.getElementById('catalogGrid');
  const counter = document.getElementById('productCount');
  if (!grid) return;

  const list = filter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.cat === filter);

  counter.textContent = `Showing ${list.length} product${list.length !== 1 ? 's' : ''}`;

  grid.innerHTML = list.map((p, i) => {
    const meta   = CAT_META[p.cat] || { label: p.cat, color: '#0A82CF', bg: '#E4F3FC' };
    const waLink = buildWALink(p.name, p.price);
    const delay  = Math.min(i * 45, 400);

    // Price display
    const priceHtml = p.price !== null && p.price !== undefined
      ? `<div class="pc-price">₱<strong>${p.price}</strong></div>`
      : `<div class="pc-price-ask">Message for price</div>`;

    // Badge
    const badgeHtml = p.badge === 'bestseller'
      ? `<div class="pc-badge pc-badge-best"><i class="fas fa-fire"></i> Bestseller</div>`
      : p.badge === 'popular'
      ? `<div class="pc-badge pc-badge-pop"><i class="fas fa-star"></i> Popular</div>`
      : '';

    // Image — shows real <img> if img filename provided, otherwise placeholder
    const imgHtml = p.img
      ? `<img src="images/${p.img}" alt="${p.name}" class="pc-real-img" loading="lazy" />`
      : `<div class="pc-placeholder" style="background:${meta.bg}">
           <i class="fas fa-camera" style="color:${meta.color}"></i>
           <span>Photo Coming Soon</span>
         </div>`;

    return `
      <div class="pc-card" style="animation-delay:${delay}ms" data-cat="${p.cat}">
        ${badgeHtml}
        <div class="pc-img-wrap">
          ${imgHtml}
        </div>
        <div class="pc-body">
          <span class="pc-cat-badge" style="color:${meta.color};background:${meta.bg}">${meta.label}</span>
          <h3 class="pc-name">${p.name}</h3>
          <p class="pc-desc">${p.desc}</p>
          <div class="pc-footer">
            ${priceHtml}
            <a href="${waLink}" target="_blank" rel="noopener" class="pc-order-btn">
              <i class="fab fa-whatsapp"></i> Order
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}


// ═══════════════════════════════════════════════
//  Filter button interactions
// ═══════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  renderProducts('all');

  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(btn.dataset.cat);
    });
  });
});
