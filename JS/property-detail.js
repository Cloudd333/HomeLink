// ── SVG Icons ─────────────────────────────────────────────
const icons = {
    location: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    beds: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>`,
    baths: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><line x1="3" y1="12" x2="21" y2="12"/></svg>`,
    size: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/></svg>`,
    parking: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`
};

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
    },
    4: {
        title: "Modern City Apartment",
        location: "Cape Town City Bowl",
        price: "R 2 800 000",
        status: "For Sale",
        badge: "New",
        beds: 2,
        baths: 2,
        size: 95,
        parking: 1,
        description: "A sophisticated city apartment in the vibrant Cape Town City Bowl, offering sweeping views of Table Mountain and the harbour. Featuring an open-plan living and dining area, a sleek contemporary kitchen, and a private balcony perfect for sundowners. Walking distance to De Waterkant, the V&A Waterfront, and Cape Town's finest restaurants.",
        images: [
            "../images/home4_exterior.jpg",
            "../images/home4_kitchen.jpg",
            "../images/home4_landscape.jpg",
            "../images/home4_bathroom.jpg"
        ],
        mapQuery: "Cape Town City Bowl, Cape Town, South Africa"
    },
    5: {
        title: "Luxury Golf Estate",
        location: "Pretoria East",
        price: "R 15 000 000",
        status: "For Sale",
        badge: "Featured",
        beds: 5,
        baths: 4,
        size: 650,
        parking: 3,
        description: "An opulent residence within one of Pretoria East's most exclusive gated golf estates. Set on a generous stand overlooking manicured fairways, this home offers grand double-volume living areas, a chef's kitchen, home theatre, and an expansive entertainer's patio with a heated pool. 24-hour security, fibre connectivity and clubhouse access included.",
        images: [
            "../images/home1_kitchen.jfif",
            "../images/home1_exterior.jfif",
            "../images/home1_bathroom.jfif",
            "../images/home1_lounge.jfif"
        ],
        mapQuery: "Pretoria East, Pretoria, South Africa"
    },
    6: {
        title: "Charming Suburban Home",
        location: "Stellenbosch, Western Cape",
        price: "R 3 500 000",
        status: "For Sale",
        badge: "",
        beds: 3,
        baths: 2,
        size: 210,
        parking: 2,
        description: "A beautifully maintained family home in the leafy suburbs of Stellenbosch, moments from world-renowned wine estates and top academic institutions. This warm and inviting property features a well-appointed kitchen, generous bedrooms, a sun-drenched stoep and an established garden ideal for families. A rare find at an exceptional price point.",
        images: [
            "../images/home3_interior.jpg",
            "../images/home3_lounge.jpg",
            "../images/home3_bedroom1.jpg",
            "../images/home3_bedroom2.jpg"
        ],
        mapQuery: "Stellenbosch, Western Cape, South Africa"
    },
    7: {
        title: "Waterfront Penthouse",
        location: "V&A Waterfront, Cape Town",
        price: "R 18 500 000",
        status: "For Sale",
        badge: "Featured",
        beds: 3,
        baths: 3,
        size: 280,
        parking: 2,
        description: "A rare and remarkable penthouse perched above the iconic V&A Waterfront, offering unobstructed views of Table Mountain, Robben Island and the Atlantic Ocean. Featuring floor-to-ceiling glazing, a wrap-around terrace, bespoke Italian kitchen and three en-suite bedrooms. World-class restaurants, boutiques and the Cape Town International Convention Centre are moments away.",
        images: [
            "../images/home6_lounge.jfif",
            "../images/home6_kitchen.jfif",
            "../images/home6_bedroom.jfif",
            "../images/home6_bathroom.jfif"
        ],
        mapQuery: "V&A Waterfront, Cape Town, South Africa"
    },
    8: {
        title: "Contemporary Bushveld Retreat",
        location: "Hoedspruit, Limpopo",
        price: "R 6 200 000",
        status: "For Sale",
        badge: "New",
        beds: 4,
        baths: 3,
        size: 390,
        parking: 2,
        description: "A striking contemporary home set within a private wildlife estate on the edge of the Kruger National Park. This architect-designed retreat blends seamlessly into its natural surroundings with exposed stone, timber accents, and expansive glass walls that frame the bushveld beyond. Enjoy morning coffee on the deck as wildlife roams freely below.",
        images: [
            "../images/home7_exterior.jpg",
            "../images/home7_kitchen.jpg",
            "../images/home7_bathroom.jpg",
            "../images/home7_bedroom.jpg"
        ],
        mapQuery: "Hoedspruit, Limpopo, South Africa"
    },
    9: {
        title: "Heritage Manor House",
        location: "Franschhoek, Western Cape",
        price: "R 12 000 000",
        status: "For Sale",
        badge: "",
        beds: 6,
        baths: 5,
        size: 720,
        parking: 4,
        description: "A magnificent heritage manor set on a private wine farm in the heart of the Franschhoek Valley. This meticulously restored Cape Dutch homestead features six spacious bedrooms, original yellowwood floors, soaring beamed ceilings, a grand reception hall and extensive wine cellar. The estate includes mature vineyards, a guest cottage and sweeping mountain views.",
        images: [
            "../images/home10_exterior.jpg",
            "../images/home10_bar.jpg",
            "../images/home10_kitchen.jpg",
            "../images/home10_lounge.jpg"
        ],
        mapQuery: "Franschhoek, Western Cape, South Africa"
    },
    10: {
        title: "Sleek Garden Apartment",
        location: "Rosebank, Johannesburg",
        price: "R 1 950 000",
        status: "For Sale",
        badge: "New",
        beds: 2,
        baths: 1,
        size: 88,
        parking: 1,
        description: "A stylish ground-floor apartment in a boutique Rosebank development, offering direct access to a private landscaped garden. The interior is finished to a high standard with engineered oak flooring, a contemporary open-plan kitchen and generous natural light throughout. Ideally positioned within walking distance of the Rosebank Mall, the Gautrain station, and the Zone.",
        images: [
            "../images/home8_exterior.jpeg",
            "../images/home8_kitchen.jpeg",
            "../images/home8_lounge.jpeg",
            "../images/home8_bedroom.jpeg"
        ],
        mapQuery: "Rosebank, Johannesburg, South Africa"
    },
    11: {
        title: "Clifftop Ocean Villa",
        location: "Clifton, Cape Town",
        price: "R 22 000 000",
        status: "For Sale",
        badge: "Featured",
        beds: 5,
        baths: 5,
        size: 610,
        parking: 3,
        description: "One of Clifton's most coveted addresses, this exceptional villa cascades down the cliff face with breathtaking views of the Atlantic Ocean and the renowned Clifton beaches below. Each of the five en-suite bedrooms captures the panorama, while the infinity pool, sundecks and alfresco dining terrace make this a true entertainer's paradise. Privacy, prestige and position at the pinnacle.",
        images: [
            "../images/home5_exterior.jfif",
            "../images/home5_lounge.jfif",
            "../images/home5_kitchen.jfif",
            "../images/home5_bedroom.jfif"
        ],
        mapQuery: "Clifton, Cape Town, South Africa"
    },
    12: {
        title: "Gated Townhouse Complex",
        location: "Morningside, Durban",
        price: "R 4 100 000",
        status: "For Sale",
        badge: "",
        beds: 3,
        baths: 2,
        size: 195,
        parking: 2,
        description: "A sophisticated townhouse within an exclusive gated complex in the prestigious Morningside suburb of Durban. This well-appointed home features an open-plan kitchen and lounge flowing onto a private patio, three generous bedrooms and a double garage. The complex offers 24-hour manned security, a communal pool and beautifully landscaped grounds.",
        images: [
            "../images/home9_exterior.jpg",
            "../images/home9_kitchen.jpg",
            "../images/home9_lounge.jpg",
            "../images/home9_bathroom.jpg"
        ],
        mapQuery: "Morningside, Durban, South Africa"
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
            <span class="detail-feature-icon">${icons.beds}</span>
            <span class="detail-feature-value">${property.beds}</span>
            <span class="detail-feature-label">Bedrooms</span>
        </div>
        <div class="detail-feature">
            <span class="detail-feature-icon">${icons.baths}</span>
            <span class="detail-feature-value">${property.baths}</span>
            <span class="detail-feature-label">Bathrooms</span>
        </div>
        <div class="detail-feature">
            <span class="detail-feature-icon">${icons.size}</span>
            <span class="detail-feature-value">${property.size}</span>
            <span class="detail-feature-label">m² Floor Area</span>
        </div>
        <div class="detail-feature">
            <span class="detail-feature-icon">${icons.parking}</span>
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
    document.getElementById('detailLocation').innerHTML = `${icons.location} ${p.location}`;
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