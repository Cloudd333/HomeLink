// ── Navbar scroll effect ─────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ── Reveal on scroll ─────────────────────────────────────
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(el => observer.observe(el));

// ── Stat counters ─────────────────────────────────────────
function animateCounter(id, target, duration = 2000) {
    const el = document.getElementById(id);
    if (!el) return;
    let start = 0;
    const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        el.textContent = Math.floor(progress * target);
        if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
}

// Trigger counters when stats bar enters view
const statsBar = document.querySelector('.stats-bar');
const statsObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        animateCounter('statProperties', 500);
        animateCounter('statClients', 1200);
        animateCounter('statCities', 12);
        animateCounter('statYears', 4);
        statsObserver.disconnect();
    }
}, { threshold: 0.5 });

if (statsBar) statsObserver.observe(statsBar);

// Hero background zoom 
const heroBg = document.getElementById('heroBg');
if (heroBg) {
    window.addEventListener('load', () => {
        heroBg.classList.add('loaded');
    });
}