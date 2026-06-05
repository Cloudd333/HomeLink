// ── Data ─────────────────────────────────────────────────
const savedProperties = [
    {
        id: 1,
        name: "Luxury Apartment in Downtown",
        price: "R 3 500 000",
        image: "../images/Exotic_home1_exterior.jpg"
    },
    {
        id: 2,
        name: "Cozy Cottage by the Lake",
        price: "R 2 500 000",
        image: "../images/villa1.jpg"
    },
    {
        id: 3,
        name: "Modern House with Garden",
        price: "R 4 000 000",
        image: "../images/5_Ruebe-4a05524d.jpg"
    }
];

const notifications = [
    {
        text: "New property listing: Luxury Apartment in Downtown matches your search.",
        time: "2h ago",
        unread: true
    },
    {
        text: "Price drop on Cozy Cottage by the Lake — now R 2 400 000.",
        time: "5h ago",
        unread: true
    },
    {
        text: "New message from your agent regarding your inquiry on Villa in the Open Lands.",
        time: "1d ago",
        unread: true
    },
    {
        text: "Your listing Family House for Sale has received 12 new views.",
        time: "2d ago",
        unread: false
    }
];

const myListings = [
    {
        name: "2-Bedroom Apartment for Rent",
        price: "R 15 000 / month",
        image: "../images/Exotic_home1_exterior.jpg",
        status: "active"
    },
    {
        name: "Family House for Sale",
        price: "R 5 000 000",
        image: "../images/villa1.jpg",
        status: "pending"
    }
];

// ── Render Saved Properties ──────────────────────────────
function renderSaved() {
    const list = document.getElementById('savedList');
    list.innerHTML = savedProperties.map(p => `
        <div class="saved-item" onclick="window.location.href='property-detail.html?id=${p.id}'">
            <img src="${p.image}" alt="${p.name}" class="saved-item-img">
            <div class="saved-item-info">
                <div class="saved-item-name">${p.name}</div>
                <div class="saved-item-price">${p.price}</div>
            </div>
            <button class="saved-item-remove" onclick="event.stopPropagation()" title="Remove">✕</button>
        </div>
    `).join('');
}

// ── Render Notifications ─────────────────────────────────
function renderNotifications() {
    const list = document.getElementById('notifList');
    const unreadCount = notifications.filter(n => n.unread).length;
    document.getElementById('notifBadge').textContent = unreadCount;

    list.innerHTML = notifications.map(n => `
        <div class="notif-item ${n.unread ? 'unread' : ''}">
            <div class="notif-dot"></div>
            <p class="notif-text">${n.text}</p>
            <span class="notif-time">${n.time}</span>
        </div>
    `).join('');
}

// ── Render My Listings ───────────────────────────────────
function renderListings() {
    const list = document.getElementById('myListingsList');
    list.innerHTML = myListings.map(l => `
        <div class="listing-item">
            <img src="${l.image}" alt="${l.name}" class="listing-item-img">
            <div class="listing-item-info">
                <div class="listing-item-name">${l.name}</div>
                <div class="listing-item-price">${l.price}</div>
            </div>
            <span class="listing-item-status status-${l.status}">
                ${l.status.charAt(0).toUpperCase() + l.status.slice(1)}
            </span>
        </div>
    `).join('');
}

// ── Save Profile ─────────────────────────────────────────
function saveProfile() {
    const success = document.getElementById('profileSuccess');
    success.style.display = 'block';
    setTimeout(() => success.style.display = 'none', 4000);
}

// ── Scroll Reveal ────────────────────────────────────────
function observeReveal() {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });
    elements.forEach(el => observer.observe(el));
}

// ── Init ─────────────────────────────────────────────────
renderSaved();
renderNotifications();
renderListings();
observeReveal();