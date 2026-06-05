// ── Property Data ────────────────────────────────────────
const properties = {
    1: {
        title: "Beautiful Family Home",
        location: "Sandton, Johannesburg",
        price: "R 5 000 000",
        status: "For Sale",
        badge: "Featured",
        beds: 4,
        baths: 3,
        size: 320,
        parking: 2,
        description: "A stunning family home nestled in the heart of Sandton. This property boasts a spacious open-plan living area, modern kitchen with top-of-the-range finishes, and a beautiful landscaped garden perfect for entertaining. Located minutes from top schools, shopping centres and major highways.",
        images: [
            "../images/home2_patio.jfif",
            "../images/home2_interior.jfif",
            "../images/home2_kitchen.jfif",
            "../images/home2_exterior.jfif"
        ],
        mapQuery: "Sandton, Johannesburg, South Africa"
    },
    2: {
        title: "Villa in the Open Lands",
        location: "Constantia, Cape Town",
        price: "R 7 000 000",
        status: "For Sale",
        badge: "New",
        beds: 6,
        baths: 6,
        size: 580,
        parking: 3,
        description: "An exceptional villa set against the breathtaking backdrop of the Constantia Valley. This magnificent property offers six en-suite bedrooms, a resort-style pool, wine cellar, and panoramic mountain views. The finest craftsmanship and materials throughout make this a truly world-class residence.",
        images: [
            "../images/villa1.jpg",
            "../images/villa2.jpg",
            "../images/villa3.jpg",
            "../images/villa5.jpg"
        ],
        mapQuery: "Constantia, Cape Town, South Africa"
    },
    3: {
        title: "Exclusive Townhouse",
        location: "Umhlanga, Durban",
        price: "R 10 000 000",
        status: "For Sale",
        badge: "",
        beds: 5,
        baths: 4,
        size: 420,
        parking: 2,
        description: "A prestigious townhouse in the sought-after Umhlanga Rocks precinct. Offering breathtaking ocean views, this architecturally designed home features generous living spaces, a gourmet kitchen, rooftop terrace and direct beach access. The ultimate in coastal luxury living.",
        images: [
            "../images/5_Ruebe-4a05524d.jpg",
            "../images/7_Ruebe_4-5591ef79.jpg",
            "../images/2_Ruebe_3-ea6b1c86.jpg",
            "../images/3_Ruebe-65c869b2.jpg"
        ],
        mapQuery: "Umhlanga, Durban, South Africa"
    }
};

// ── Read property ID from URL ────────────────────────────
function getPropertyId() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    return properties[id] ? id : 1;
}

// ── Swap main image ──────────────────────────────────────
function setMainImage(src) {
    const main = document.getElementById('mainImage');
    main.style.opacity = '0';
    setTimeout(() => {
        main.src = src;
        main.style.opacity = '1';
    }, 200);
}

// ── Build thumbnail gallery ──────────────────────────────
function buildThumbnails(images) {
    const container = document.getElementById('thumbnails');
    container.innerHTML = images.map((src, i) => `
        <img 
            src="${src}" 
            alt="Property view ${i + 1}"
            class="thumbnail ${i === 0 ? 'active' : ''}"
            onclick="selectThumbnail(this, '${src}')"
        >
    `).join('');
}

function selectThumbnail(el, src) {
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    setMainImage(src);
}

// ── Build feature pills ──────────────────────────────────
function buildFeatures(property) {
    const container = document.getElementById('detailFeatures');
    container.innerHTML = `
        <div class="detail-feature">
            <span class="detail-feature-icon">🛏</span>
            <span class="detail-feature-value">${property.beds}</span>
            <span class="detail-feature-label">Bedrooms</span>
        </div>
        <div class="detail-feature">
            <span class="detail-feature-icon">🚿</span>
            <span class="detail-feature-value">${property.baths}</span>
            <span class="detail-feature-label">Bathrooms</span>
        </div>
        <div class="detail-feature">
            <span class="detail-feature-icon">📐</span>
            <span class="detail-feature-value">${property.size}</span>
            <span class="detail-feature-label">m² Floor Area</span>
        </div>
        <div class="detail-feature">
            <span class="detail-feature-icon">🚗</span>
            <span class="detail-feature-value">${property.parking}</span>
            <span class="detail-feature-label">Parking</span>
        </div>
    `;
}

// ── Build map embed ──────────────────────────────────────
function buildMap(query) {
    const encoded = encodeURIComponent(query);
    const iframe = document.getElementById('propertyMap');
    iframe.src = `https://maps.google.com/maps?q=${encoded}&output=embed&z=14`;
}

// ── Load full property ───────────────────────────────────
function loadProperty() {
    const id = getPropertyId();
    const p = properties[id];

    // Page title
    document.title = `${p.title} | HomeLink`;

    // Main image
    document.getElementById('mainImage').src = p.images[0];

    // Badges
    document.getElementById('detailBadges').innerHTML = `
        <span class="badge badge-navy">${p.status}</span>
        ${p.badge ? `<span class="badge badge-olive">${p.badge}</span>` : ''}
    `;

    // Text content
    document.getElementById('detailTitle').textContent = p.title;
    document.getElementById('detailLocation').innerHTML = `📍 ${p.location}`;
    document.getElementById('detailPrice').textContent = p.price;
    document.getElementById('detailDescription').textContent = p.description;

    // Thumbnails, features, map
    buildThumbnails(p.images);
    buildFeatures(p);
    buildMap(p.mapQuery);

    // Share buttons
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(p.title);
    document.querySelector('.share-facebook').href =
        `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    document.querySelector('.share-twitter').href =
        `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
    document.querySelector('.share-linkedin').href =
        `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
    document.querySelector('.share-whatsapp').href =
        `https://wa.me/?text=${title}%20${url}`;
}

// ── Inquiry form ─────────────────────────────────────────
function handleInquiry(event) {
    event.preventDefault();
    const success = document.getElementById('inquirySuccess');
    success.style.display = 'block';
    event.target.reset();
    setTimeout(() => success.style.display = 'none', 5000);
}

// ── Navbar scroll ────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ── Main image fade transition ───────────────────────────
document.getElementById('mainImage').style.transition = 'opacity 0.2s ease';

// ── Init ─────────────────────────────────────────────────
loadProperty();