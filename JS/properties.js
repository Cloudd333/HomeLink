// ── Property Data ────────────────────────────────────────
const properties = [
    {
        id: 1,
        name: "Beautiful Family Home",
        location: "Sandton, Johannesburg",
        price: 5000000,
        type: "house",
        beds: 4,
        baths: 3,
        size: 320,
        status: "For Sale",
        badge: "Featured",
        image: "../images/Exotic_home1_exterior.jpg"
    },
    {
        id: 2,
        name: "Villa in the Open Lands",
        location: "Constantia, Cape Town",
        price: 7000000,
        type: "villa",
        beds: 6,
        baths: 6,
        size: 580,
        status: "For Sale",
        badge: "New",
        image: "../images/villa1.jpg"
    },
    {
        id: 3,
        name: "Exclusive Townhouse",
        location: "Umhlanga, Durban",
        price: 10000000,
        type: "townhouse",
        beds: 5,
        baths: 4,
        size: 420,
        status: "For Sale",
        badge: "",
        image: "../images/5_Ruebe-4a05524d.jpg"
    },
    {
        id: 4,
        name: "Modern City Apartment",
        location: "Cape Town City Bowl",
        price: 2800000,
        type: "apartment",
        beds: 2,
        baths: 2,
        size: 95,
        status: "For Sale",
        badge: "New",
        image: "../images/villa2.jpg"
    },
    {
        id: 5,
        name: "Luxury Golf Estate",
        location: "Pretoria East",
        price: 15000000,
        type: "estate",
        beds: 5,
        baths: 4,
        size: 650,
        status: "For Sale",
        badge: "Featured",
        image: "../images/villa6.jpg"
    },
    {
        id: 6,
        name: "Charming Suburban Home",
        location: "Stellenbosch, Western Cape",
        price: 3500000,
        type: "house",
        beds: 3,
        baths: 2,
        size: 210,
        status: "For Sale",
        badge: "",
        image: "../images/villa4.jpg"
    }
];

// ── State ────────────────────────────────────────────────
let filteredProperties = [...properties];
let currentPage = 1;
const cardsPerPage = 6;

// ── Format Price ─────────────────────────────────────────
function formatPrice(price) {
    return 'R ' + price.toLocaleString('en-ZA');
}

// ── Render Cards ─────────────────────────────────────────
function renderCards() {
    const grid = document.getElementById('propertyGrid');
    const start = (currentPage - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    const pageProperties = filteredProperties.slice(start, end);

    if (pageProperties.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: var(--space-3xl) 0;">
                <p style="font-size: 18px; color: var(--text-muted);">No properties match your search.</p>
                <button class="btn btn-outline" style="margin-top: var(--space-lg);" onclick="resetFilters()">
                    Clear Filters
                </button>
            </div>`;
        return;
    }

    grid.innerHTML = pageProperties.map(p => `
        <div class="property-card" onclick="window.location.href='property-detail.html?id=${p.id}'">
            <div class="property-card-img">
                <img src="${p.image}" alt="${p.name}">
                <div class="property-card-badges">
                    <span class="badge badge-navy">${p.status}</span>
                    ${p.badge ? `<span class="badge badge-olive">${p.badge}</span>` : ''}
                </div>
                <button class="property-card-save" onclick="event.stopPropagation()" title="Save property">♡</button>
            </div>
            <div class="property-card-body">
                <div class="property-price">${formatPrice(p.price)}</div>
                <div class="property-name">${p.name}</div>
                <div class="property-location">📍 ${p.location}</div>
                <div class="property-features">
                    <div class="property-feature">🛏 <span>${p.beds} Beds</span></div>
                    <div class="property-feature">🚿 <span>${p.baths} Baths</span></div>
                    <div class="property-feature">📐 <span>${p.size} m²</span></div>
                </div>
            </div>
        </div>
    `).join('');

    // Update results count and pagination
    const total = filteredProperties.length;
    const totalPages = Math.ceil(total / cardsPerPage);

    document.getElementById('resultsCount').textContent =
        `Showing ${Math.min(end, total)} of ${total} properties`;
    document.getElementById('pageInfo').textContent =
        `Page ${currentPage} of ${totalPages}`;
    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = currentPage === totalPages;
}

// ── Apply Filters ────────────────────────────────────────
function applyFilters() {
    const location = document.getElementById('filterLocation').value.toLowerCase();
    const type = document.getElementById('filterType').value;
    const minPrice = parseInt(document.getElementById('filterMinPrice').value) || 0;
    const maxPrice = parseInt(document.getElementById('filterMaxPrice').value) || Infinity;
    const sort = document.getElementById('filterSort').value;

    filteredProperties = properties.filter(p => {
        const matchLocation = !location || p.location.toLowerCase().includes(location);
        const matchType = !type || p.type === type;
        const matchPrice = p.price >= minPrice && p.price <= maxPrice;
        return matchLocation && matchType && matchPrice;
    });

    if (sort === 'price-low') {
        filteredProperties.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
        filteredProperties.sort((a, b) => b.price - a.price);
    }

    currentPage = 1;
    renderCards();
}

// ── Reset Filters ────────────────────────────────────────
function resetFilters() {
    document.getElementById('filterLocation').value = '';
    document.getElementById('filterType').value = '';
    document.getElementById('filterMinPrice').value = '';
    document.getElementById('filterMaxPrice').value = '';
    document.getElementById('filterSort').value = 'newest';
    filteredProperties = [...properties];
    currentPage = 1;
    renderCards();
}

// ── Pagination ───────────────────────────────────────────
function changePage(direction) {
    const totalPages = Math.ceil(filteredProperties.length / cardsPerPage);
    currentPage = Math.max(1, Math.min(currentPage + direction, totalPages));
    renderCards();
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

// ── Init ─────────────────────────────────────────────────
renderCards();