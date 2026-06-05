// ── Team Data ────────────────────────────────────────────
const team = [
    {
        name: "Alice Johnson",
        role: "Chief Executive Officer",
        bio: "Alice brings over 10 years of real estate expertise, leading HomeLink's vision to transform how South Africans find their dream homes.",
        image: "../images/alex-starnes-PK_t0Lrh7MM-unsplash.jpg",
        initial: "A"
    },
    {
        name: "Bob Smith",
        role: "Lead Property Agent",
        bio: "Bob is passionate about matching clients with their perfect property. His deep knowledge of the Johannesburg market is unmatched.",
        image: "../images/diego-suarez-VkdH0Eemwqs-unsplash.jpg",
        initial: "B"
    },
    {
        name: "Carol White",
        role: "Marketing Director",
        bio: "Carol oversees all marketing strategies, ensuring HomeLink reaches the right buyers and sellers across South Africa.",
        image: "../images/christina-wocintechchat-com-m-SJvDxw0azqw-unsplash.jpg",
        initial: "C"
    },
    {
        name: "David Brown",
        role: "Financial Advisor",
        bio: "David guides clients through the financial aspects of property transactions, making complex decisions simple and stress-free.",
        image: "../images/dellon-thomas-uVduOMRIHHg-unsplash.jpg",
        initial: "D"
    }
];

// ── Render Team Cards ────────────────────────────────────
function renderTeam() {
    const grid = document.getElementById('teamGrid');
    grid.innerHTML = team.map((member, i) => `
        <div class="team-card reveal reveal-delay-${i + 1}">
            <div class="team-card-img">
                <img src="${member.image}" alt="${member.name}">
            </div>
            <div class="team-card-body">
                <div class="team-card-name">${member.name}</div>
                <div class="team-card-role">${member.role}</div>
                <p class="team-card-bio">${member.bio}</p>
            </div>
        </div>
    `).join('');

    // Trigger reveal observer on newly created cards
    observeReveal();
}

// ── Scroll Reveal ────────────────────────────────────────
function observeReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => observer.observe(el));
}

// ── Navbar Scroll ────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ── Init ─────────────────────────────────────────────────
renderTeam();
observeReveal();