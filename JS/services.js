// ── FAQ Data ─────────────────────────────────────────────
const faqs = [
    {
        question: "How do I start the home buying process?",
        answer: "Contact us to schedule a consultation with one of our agents who will guide you through every step — from understanding your budget and requirements to viewing properties and closing the deal."
    },
    {
        question: "What fees should I expect when selling my home?",
        answer: "Common fees include agent commissions, transfer duties, bond cancellation fees and home preparation costs. Our agents will give you a full breakdown upfront so there are no surprises."
    },
    {
        question: "Can I rent a property without a credit check?",
        answer: "Most landlords require a credit check as part of the application process. However, some may consider alternative arrangements. Our agents can help you navigate your options."
    },
    {
        question: "How can I improve my home's value before selling?",
        answer: "Focus on kerb appeal, minor repairs, fresh paint and decluttering. Professional staging and high-quality photography also make a significant difference in attracting buyers at the right price."
    },
    {
        question: "How long does it take to sell a property?",
        answer: "The timeline varies depending on location, pricing and market conditions. On average, well-priced properties in sought-after areas sell within 4 to 8 weeks. Our team works hard to minimise your time on market."
    },
    {
        question: "Do you offer property management services?",
        answer: "Yes — we offer comprehensive property management for landlords, including tenant screening, lease management, maintenance coordination and monthly reporting."
    }
];

// ── Render FAQ ───────────────────────────────────────────
function renderFAQ() {
    const grid = document.getElementById('faqGrid');
    grid.innerHTML = faqs.map((faq, i) => `
        <div class="faq-item reveal reveal-delay-${(i % 4) + 1}" id="faq-${i}">
            <button class="faq-question" onclick="toggleFAQ(${i})">
                ${faq.question}
                <span class="faq-arrow">▼</span>
            </button>
            <div class="faq-answer">${faq.answer}</div>
        </div>
    `).join('');

    observeReveal();
}

// ── Toggle FAQ ───────────────────────────────────────────
function toggleFAQ(index) {
    const item = document.getElementById(`faq-${index}`);
    const isOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));

    // Open clicked if it was closed
    if (!isOpen) item.classList.add('open');
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
renderFAQ();
observeReveal();