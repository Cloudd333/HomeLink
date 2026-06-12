// ── Blog Data ────────────────────────────────────────────
const posts = [
    {
        id: 1,
        title: "10 Tips for First-Time Home Buyers",
        excerpt: "Buying your first home can feel overwhelming. Here are ten essential tips to help you navigate the process smoothly and confidently.",
        category: "buying",
        categoryLabel: "Buying Tips",
        author: "Alice Johnson",
        date: "12 May 2024",
        readTime: "5 min read",
        image: "../images/blog_img1.jfif"
    },
    {
        id: 2,
        title: "How to Sell Your Home Quickly",
        excerpt: "Learn the secrets to selling your home fast and for the best possible price, from staging to strategic pricing.",
        category: "selling",
        categoryLabel: "Selling Tips",
        author: "Bob Smith",
        date: "28 Apr 2024",
        readTime: "4 min read",
        image: "../images/blog_img2.jfif"
    },
    {
        id: 3,
        title: "Understanding the Current Real Estate Market",
        excerpt: "Get insights into the current South African property market trends and how they affect buyers and sellers in 2024.",
        category: "market",
        categoryLabel: "Market Insights",
        author: "Carol White",
        date: "15 Apr 2024",
        readTime: "6 min read",
        image: "../images/blog_img3.jfif"
    },
    {
        id: 4,
        title: "The Importance of Home Inspections",
        excerpt: "A home inspection is a crucial step in the buying process. Find out why skipping it could cost you dearly.",
        category: "buying",
        categoryLabel: "Buying Tips",
        author: "David Brown",
        date: "3 Apr 2024",
        readTime: "4 min read",
        image: "../images/blog_img4.jfif"
    },
    {
        id: 5,
        title: "Staging Your Home for a Quick Sale",
        excerpt: "Professional staging can make a significant difference when selling your home. Here's how to do it right on any budget.",
        category: "selling",
        categoryLabel: "Selling Tips",
        author: "Alice Johnson",
        date: "20 Mar 2024",
        readTime: "5 min read",
        image: "../images/blog_img5.jfif"
    },
    {
        id: 6,
        title: "Real Estate Investment Tips for Beginners",
        excerpt: "Thinking about investing in South African real estate? Here are the fundamentals every beginner investor needs to know.",
        category: "investment",
        categoryLabel: "Investment",
        author: "David Brown",
        date: "8 Mar 2024",
        readTime: "7 min read",
        image: "../images/blog_img6.jfif"
    }
];

// ── State ────────────────────────────────────────────────
let filteredPosts = [...posts];

// ── Category badge colour ────────────────────────────────
function getCategoryClass(category) {
    const map = {
        buying: 'badge-navy',
        selling: 'badge-olive',
        market: 'badge-frost',
        renting: 'badge-navy',
        investment: 'badge-olive'
    };
    return map[category] || 'badge-frost';
}

// ── Render Posts ─────────────────────────────────────────
function renderPosts() {
    const grid = document.getElementById('blogGrid');
    const empty = document.getElementById('blogEmpty');
    const count = document.getElementById('blogResultsCount');

    if (filteredPosts.length === 0) {
        grid.innerHTML = '';
        empty.style.display = 'block';
        count.textContent = 'No articles found';
        return;
    }

    empty.style.display = 'none';
    count.textContent = `Showing ${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''}`;

    grid.innerHTML = filteredPosts.map(post => `
        <div class="blog-card">
            <div class="blog-card-img">
                <img src="${post.image}" alt="${post.title}">
                <div class="blog-card-category">
                    <span class="badge ${getCategoryClass(post.category)}">${post.categoryLabel}</span>
                </div>
            </div>
            <div class="blog-card-body">
                <div class="blog-card-meta">
                    <span class="blog-card-date">${post.date}</span>
                    <span class="blog-card-read-time">· ${post.readTime}</span>
                </div>
                <h3 class="blog-card-title">${post.title}</h3>
                <p class="blog-card-excerpt">${post.excerpt}</p>
                <div class="blog-card-footer">
                    <span class="blog-card-author">By ${post.author}</span>
                    <a href="#" class="blog-read-more">Read More →</a>
                </div>
            </div>
        </div>
    `).join('');

    // Trigger reveal
    requestAnimationFrame(() => {
        document.querySelectorAll('.blog-card').forEach((card, i) => {
            setTimeout(() => card.classList.add('visible'), i * 80);
        });
    });
}

// ── Filter Posts ─────────────────────────────────────────
function filterPosts() {
    const search = document.getElementById('blogSearch').value.toLowerCase();
    const category = document.getElementById('blogCategory').value;

    filteredPosts = posts.filter(post => {
        const matchSearch = !search ||
            post.title.toLowerCase().includes(search) ||
            post.excerpt.toLowerCase().includes(search);
        const matchCategory = !category || post.category === category;
        return matchSearch && matchCategory;
    });

    renderPosts();
}

// ── Reset Filters ────────────────────────────────────────
function resetFilters() {
    document.getElementById('blogSearch').value = '';
    document.getElementById('blogCategory').value = '';
    filteredPosts = [...posts];
    renderPosts();
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
renderPosts();