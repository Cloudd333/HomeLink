// ── Blog Data ────────────────────────────────────────────
const posts = [
    {
        id: 1,
        title: "10 Tips for First-Time Home Buyers",
        excerpt: "Buying your first home can feel overwhelming. Here are ten essential tips to help you navigate the process smoothly and confidently.",
        category: "buying",
        categoryLabel: "Buying Tips",
        author: "Naledi Dlamini",
        date: "12 May 2024",
        readTime: "5 min read",
        image: "../images/blog_img1.jfif",
        content: `
            <p>Buying your first home is one of the most significant financial decisions you'll ever make. With the right preparation and knowledge, the process can be exciting rather than stressful. Here are ten essential tips to guide you through.</p>

            <h3>1. Get Your Finances in Order First</h3>
            <p>Before you start browsing listings, take a hard look at your financial situation. Review your credit score, calculate your monthly income against your debts, and establish a realistic budget. South African banks typically require a deposit of 10–20% of the purchase price, so knowing what you can afford upfront saves time and disappointment.</p>

            <h3>2. Get Pre-Approved for a Bond</h3>
            <p>A pre-approval letter from a bank or bond originator shows sellers you are a serious buyer. It also gives you a clear ceiling on your budget. Services like ooba or BetterBond can apply to multiple banks simultaneously to secure the best rate.</p>

            <h3>3. Research the Neighbourhood Thoroughly</h3>
            <p>Location is everything in real estate. Visit neighbourhoods at different times of day, check proximity to schools, hospitals, and public transport, and look up crime statistics for the area. A beautiful home in the wrong location can affect your quality of life and resale value.</p>

            <h3>4. Understand All the Costs Involved</h3>
            <p>The purchase price is just the beginning. Budget for transfer duty, bond registration costs, conveyancing attorney fees, home insurance, and moving costs. These can add 8–12% on top of the property price and catch many first-time buyers off guard.</p>

            <h3>5. Work With a Reputable Agent</h3>
            <p>A good agent does more than show you properties — they negotiate on your behalf, flag potential issues, and guide you through the paperwork. Ask for referrals, check their track record, and make sure they are registered with the Property Practitioners Regulatory Authority (PPRA).</p>

            <h3>6. Never Skip the Home Inspection</h3>
            <p>Always commission an independent property inspection before signing an offer to purchase. Inspectors can identify structural issues, electrical faults, plumbing problems, and damp — issues that could cost you hundreds of thousands to fix after transfer.</p>

            <h3>7. Do Not Overextend Yourself</h3>
            <p>Just because a bank approves you for a certain amount does not mean you should spend it all. Leave room in your budget for life's unexpected costs — medical expenses, job changes, or interest rate hikes. A general rule is to keep your bond repayment below 30% of your gross monthly income.</p>

            <h3>8. Read Every Document Carefully</h3>
            <p>The Offer to Purchase is a legally binding contract. Read it in full before signing, and do not hesitate to ask your agent or attorney to explain any clause you do not understand. Pay particular attention to suspensive conditions, voetstoets clauses, and occupation dates.</p>

            <h3>9. Be Patient and Do Not Let Emotion Drive Decisions</h3>
            <p>It is easy to fall in love with a property and overlook red flags. Take your time, view multiple properties, and make decisions based on facts rather than feelings. The right home will come — and when it does, you want to be in a strong, informed position to act.</p>

            <h3>10. Think Long-Term</h3>
            <p>Your first home does not have to be your forever home, but it should be a sound investment. Consider the property's resale potential, the area's development trajectory, and how the home will suit your lifestyle over the next five to ten years.</p>

            <p>Buying a home takes time, patience and careful planning — but it is one of the most rewarding milestones you can achieve. At HomeLink, our agents are here to support you every step of the way.</p>
        `
    },
    {
        id: 2,
        title: "How to Sell Your Home Quickly",
        excerpt: "Learn the secrets to selling your home fast and for the best possible price, from staging to strategic pricing.",
        category: "selling",
        categoryLabel: "Selling Tips",
        author: "Sipho Mokoena",
        date: "28 Apr 2024",
        readTime: "4 min read",
        image: "../images/blog_img2.jfif",
        content: `
            <p>Selling your home quickly without sacrificing price is an art. In a competitive property market, the difference between a home that sells in two weeks and one that languishes for months often comes down to preparation, presentation and pricing strategy.</p>

            <h3>Price It Right From Day One</h3>
            <p>Overpricing is the single biggest reason homes sit on the market. Buyers are well-informed — they have been browsing listings for months and they know what comparable properties are selling for. Work with your agent to conduct a comparative market analysis and price your home competitively from the outset. A correctly priced home generates more interest and can attract multiple offers, sometimes above asking price.</p>

            <h3>First Impressions Begin Online</h3>
            <p>Over 90% of buyers begin their property search online. Your listing photographs are your first — and sometimes only — chance to make an impression. Invest in professional photography. Wide-angle lenses, correct lighting, and thoughtful composition can make a modest home look exceptional. Consider a virtual tour or video walkthrough to capture buyers who cannot view in person immediately.</p>

            <h3>Stage Your Home Strategically</h3>
            <p>Staging is not about decorating — it is about helping buyers visualise themselves living in the space. Declutter every room ruthlessly, depersonalise by removing family photos and personal items, and arrange furniture to maximise the sense of space and flow. Neutral tones on walls and fresh flowers on the counter go a long way.</p>

            <h3>Attend to the Small Things</h3>
            <p>Buyers notice leaking taps, cracked tiles, peeling paint and squeaky doors. These minor defects signal neglect and give buyers ammunition to negotiate the price down. Fix everything you can before listing — the cost is almost always recovered in the sale price.</p>

            <h3>Maximise Your Kerb Appeal</h3>
            <p>The outside of your home sets the expectation for what buyers will find inside. Mow the lawn, trim hedges, repaint the front door, pressure-wash the driveway, and make sure the exterior lighting works. A buyer who is unimpressed before they walk through the front door is already negotiating in their head.</p>

            <h3>Be Flexible With Viewings</h3>
            <p>The more people who view your property, the faster it sells. Make your home available for viewings at evenings and weekends, and keep it show-ready at all times. Every viewing is an opportunity — do not let inconvenience cost you a sale.</p>

            <h3>Choose the Right Agent</h3>
            <p>Your estate agent's marketing reach, negotiation skill, and database of active buyers can make a significant difference to your outcome. Ask prospective agents how they plan to market your property, what their average days-on-market looks like, and what their track record is in your area.</p>

            <p>With the right approach, selling your home can be a smooth, rewarding process. The key is preparation — start early, present well, and price honestly.</p>
        `
    },
    {
        id: 3,
        title: "Understanding the Current Real Estate Market",
        excerpt: "Get insights into the current South African property market trends and how they affect buyers and sellers in 2024.",
        category: "market",
        categoryLabel: "Market Insights",
        author: "Zanele Khumalo",
        date: "15 Apr 2024",
        readTime: "6 min read",
        image: "../images/blog_img3.jfif",
        content: `
            <p>The South African property market in 2024 is one of careful optimism. After a period of interest rate pressure and economic uncertainty, several encouraging trends are beginning to emerge for both buyers and sellers.</p>

            <h3>Interest Rates and Affordability</h3>
            <p>The South African Reserve Bank's prime lending rate has been one of the defining factors shaping the market over the past two years. While rates remain elevated compared to the historic lows of 2021, analysts are cautiously projecting a modest easing cycle in the second half of 2024. For buyers, even a 0.25% rate cut translates into meaningful monthly savings on a bond, and many are positioning themselves ahead of this shift.</p>

            <h3>The Semigration Trend Continues</h3>
            <p>The movement of buyers from Gauteng and other inland provinces to the Western Cape — particularly Cape Town, the Atlantic Seaboard, and the Winelands — shows no signs of slowing. Lifestyle, relative safety, reliable municipal services and strong capital growth continue to attract both local and international buyers to the Western Cape. This has kept Cape Town property prices firm even as other markets softened.</p>

            <h3>Durban and the KwaZulu-Natal Coast</h3>
            <p>Following a difficult period post-July 2021 unrest and the 2022 floods, the KZN property market has shown encouraging resilience. Umhlanga, Ballito and the North Coast remain strong performers, driven by infrastructure investment and the appeal of coastal living at a lower price point than Cape Town.</p>

            <h3>Gauteng: Value Opportunities Emerging</h3>
            <p>Johannesburg and Pretoria offer some of the most compelling value in the country on a price-per-square-metre basis. While load shedding and infrastructure concerns have dampened sentiment, the Johannesburg northern suburbs, Pretoria East and the Waterfall corridor continue to attract investment and offer strong rental yields for investors.</p>

            <h3>The Rental Market Is Strengthening</h3>
            <p>Elevated interest rates have kept many aspirant buyers in the rental pool for longer, driving strong demand for quality rental accommodation. Vacancy rates in well-located residential properties have declined, and rental escalations have recovered above inflation in many nodes. For property investors, this represents a healthy income environment.</p>

            <h3>New Development Activity</h3>
            <p>Mixed-use developments and secure estate living continue to dominate new development pipelines. Buyers are placing increasing value on security, lifestyle amenities, fibre connectivity and backup power solutions — and developers are responding accordingly. Off-plan purchases in well-located new developments have shown strong capital growth on completion.</p>

            <h3>What This Means for You</h3>
            <p>If you are a buyer, 2024 presents a window of opportunity — before the anticipated rate cuts bring more competition back into the market. If you are a seller, correctly priced properties in sought-after locations are still moving efficiently. The key in any market is informed decision-making, and that starts with understanding the environment you are operating in.</p>
        `
    },
    {
        id: 4,
        title: "The Importance of Home Inspections",
        excerpt: "A home inspection is a crucial step in the buying process. Find out why skipping it could cost you dearly.",
        category: "buying",
        categoryLabel: "Buying Tips",
        author: "Thabo Nkosi",
        date: "3 Apr 2024",
        readTime: "4 min read",
        image: "../images/blog_img4.jfif",
        content: `
            <p>In the excitement of finding a home you love, it can be tempting to skip the home inspection — especially in a competitive market where buyers fear losing a property to someone who will not make demands. This is almost always a costly mistake.</p>

            <h3>What Is a Home Inspection?</h3>
            <p>A home inspection is a comprehensive visual assessment of a property's condition, conducted by a qualified and independent inspector. It covers the structural integrity of the building, the roof, electrical systems, plumbing, drainage, damp, and the condition of built-in fixtures and fittings. A thorough inspection report gives you a clear picture of what you are actually buying — not just what you can see during a viewing.</p>

            <h3>The Voetstoets Clause</h3>
            <p>In South African property law, the voetstoets clause — meaning "as is" — is commonly included in sale agreements. This means the buyer accepts the property in its current condition, including defects. However, there is an important distinction: sellers remain liable for latent defects they were aware of but did not disclose. A professional home inspection helps identify these hidden defects before transfer, giving you legal recourse and negotiating power.</p>

            <h3>What Inspectors Commonly Find</h3>
            <p>The most frequently identified issues in South African home inspections include rising damp and moisture penetration, faulty or undersized electrical DB boards, non-compliant geyser installations, roof leaks and deteriorating waterproofing, cracked foundations or subsidence, and substandard DIY plumbing. Many of these issues are invisible to the untrained eye during a standard viewing.</p>

            <h3>The Financial Case for Inspecting</h3>
            <p>A home inspection typically costs between R2 500 and R6 000 depending on the property size and location. Compare this to the cost of replacing a roof (R80 000–R250 000), rewiring a house (R50 000–R150 000), or remediating serious damp (R30 000–R100 000). The inspection fee is genuinely one of the best investments you can make in the purchase process.</p>

            <h3>Using the Inspection Report in Negotiations</h3>
            <p>An inspection report is not designed to kill a deal — it is designed to inform one. If significant defects are found, you have several options: negotiate a price reduction to account for the cost of repairs, request that the seller remediate specific issues before transfer, or in serious cases, withdraw your offer under the relevant suspensive conditions. Your agent and attorney can guide you through this process.</p>

            <h3>How to Choose an Inspector</h3>
            <p>Look for an inspector who is accredited with the South African Institute of Home Inspectors (SAIHI) or a similar professional body. Ask for sample reports to assess the level of detail provided, and ensure the inspector carries professional indemnity insurance. Your HomeLink agent can recommend trusted inspectors in your area.</p>

            <p>Buying a home without an inspection is like buying a car without starting the engine. It might be fine — but you have no way of knowing until it is too late. Protect your investment from the outset.</p>
        `
    },
    {
        id: 5,
        title: "Staging Your Home for a Quick Sale",
        excerpt: "Professional staging can make a significant difference when selling your home. Here's how to do it right on any budget.",
        category: "selling",
        categoryLabel: "Selling Tips",
        author: "Priya Naidoo",
        date: "20 Mar 2024",
        readTime: "5 min read",
        image: "../images/blog_img5.jfif",
        content: `
            <p>Home staging is one of the most effective — and frequently underestimated — tools available to sellers. Done well, it can reduce your time on market, attract stronger offers, and help buyers form an emotional connection with your property from the moment they walk through the door.</p>

            <h3>What Staging Actually Is</h3>
            <p>Staging is not interior decorating, and it is not about spending a lot of money. It is a strategic process of presenting your home in a way that appeals to the broadest possible range of buyers. The goal is to create a space that feels aspirational yet liveable — somewhere buyers can immediately picture their own lives unfolding.</p>

            <h3>Start With a Deep Clean</h3>
            <p>Nothing undermines a property's appeal like a dirty home. Clean every surface, including areas that are easy to overlook — inside cupboards, light fittings, window tracks, grout lines, and skirting boards. If it feels excessive, remember: buyers open cupboards, and they notice grime. A professionally cleaned home signals care and pride of ownership.</p>

            <h3>Declutter Aggressively</h3>
            <p>Remove at least 30–40% of your belongings before listing. This includes excess furniture that makes rooms feel small, personal collections, countertop appliances, and anything that contributes to visual noise. Buyers need to see the space, not your stuff. Consider hiring a storage unit for the duration of the sale — it is a small cost for a potentially significant return.</p>

            <h3>Depersonalise the Space</h3>
            <p>Family photographs, religious items, and personal memorabilia make it harder for buyers to imagine themselves in the home. Pack them away. The goal is to create a neutral, welcoming canvas that feels like it could belong to anyone — because that is exactly what buyers need to feel.</p>

            <h3>Address the Key Rooms First</h3>
            <p>If your budget for staging is limited, focus on the rooms that matter most: the entrance hall (first impressions), the main living area, the kitchen, and the master bedroom. These are the spaces buyers photograph in their minds and discuss on the drive home. Make them count.</p>

            <h3>Light Makes Everything Better</h3>
            <p>Open curtains, clean windows, replace dim bulbs with warm white LED alternatives, and add lamps to dark corners. Bright, well-lit rooms feel larger and more inviting. Schedule viewings during the times of day when your home receives the most natural light.</p>

            <h3>The Power of Small Details</h3>
            <p>Fresh flowers on the kitchen counter, a folded throw on the sofa, new white towels in the bathroom, a bowl of fresh fruit — these small, inexpensive touches create a feeling of warmth and care that photographs beautifully and resonates with buyers in person. The scent of a home matters too: ensure it is neutral and fresh.</p>

            <h3>The Return on Investment</h3>
            <p>Research consistently shows that staged homes sell faster and for higher prices than unstaged equivalents. In South Africa's competitive property market, the investment in staging — even at a modest level — nearly always pays for itself many times over in the final sale price.</p>
        `
    },
    {
        id: 6,
        title: "Real Estate Investment Tips for Beginners",
        excerpt: "Thinking about investing in South African real estate? Here are the fundamentals every beginner investor needs to know.",
        category: "investment",
        categoryLabel: "Investment",
        author: "Riaan van der Merwe",
        date: "8 Mar 2024",
        readTime: "7 min read",
        image: "../images/blog_img6.jfif",
        content: `
            <p>Real estate has long been one of the most reliable wealth-building vehicles available to South Africans. Unlike equities, property is tangible, provides a regular income stream, and tends to hold its value over time. But successful property investment requires knowledge, discipline and a long-term perspective. Here is what every beginner needs to understand.</p>

            <h3>Understand the Two Ways Property Makes Money</h3>
            <p>Property investment generates returns in two primary ways: rental income (the monthly cash flow from a tenant) and capital appreciation (the increase in the property's value over time). The best investments deliver both, but your strategy will depend on your financial goals — are you seeking monthly income now, or building wealth over the long term?</p>

            <h3>Location Remains the Most Important Factor</h3>
            <p>In investment property, location is even more critical than in a primary residence. Look for areas with strong rental demand, good infrastructure, proximity to economic activity, and a trajectory of development and improvement. Nodes like Johannesburg's northern suburbs, Cape Town's Southern Suburbs, and the KZN North Coast have consistently delivered strong returns over the past decade.</p>

            <h3>Run the Numbers Before You Fall in Love</h3>
            <p>Emotion has no place in investment decisions. Before committing to any property, calculate the gross rental yield (annual rent divided by purchase price), account for vacancy periods, levies, rates, maintenance costs, and your bond repayment, and determine your net yield. A property yielding less than 6–7% gross in the current interest rate environment deserves very careful scrutiny.</p>

            <h3>Understand the Tax Implications</h3>
            <p>Rental income is taxable in South Africa, but many expenses are deductible — including bond interest, rates, insurance, maintenance, and agent fees. When you eventually sell, capital gains tax (CGT) will apply to the profit. Consult a tax professional before purchasing an investment property to structure your ownership correctly from the outset.</p>

            <h3>Consider the Sectional Title Advantage</h3>
            <p>For first-time investors, sectional title units — flats, apartments, and townhouses in complexes — often offer lower entry prices, lower maintenance responsibility (much of which falls to the body corporate), and strong rental demand in urban nodes. The trade-off is monthly levy costs and less control over the property's management.</p>

            <h3>Be Realistic About Being a Landlord</h3>
            <p>Managing a rental property takes time, patience and legal knowledge. Tenant screening, lease agreements compliant with the Rental Housing Act, deposit handling, maintenance, and the eviction process all require careful attention. Many investors find it worth the cost to appoint a reputable managing agent — typically 8–10% of monthly rent — to handle these responsibilities professionally.</p>

            <h3>Start Conservatively and Build</h3>
            <p>The most successful property investors typically start with one well-chosen, conservatively financed property, build equity over several years, and then use that equity to fund subsequent acquisitions. Avoid the temptation to over-leverage early — a single vacancy or unexpected repair should not threaten your financial stability.</p>

            <h3>The Long Game</h3>
            <p>Property investment rewards patience. Over a 10 to 20-year horizon, the compounding effect of capital appreciation, rental income growth, and bond repayment creates substantial wealth. The investors who succeed are those who buy well, manage prudently, and resist the urge to sell during temporary market downturns.</p>

            <p>South African real estate, approached with the right knowledge and discipline, remains one of the most compelling investment opportunities available. Start informed, start carefully — and start.</p>
        `
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
                    <button class="blog-read-more" onclick="openPost(${post.id})">Read More →</button>
                </div>
            </div>
        </div>
    `).join('');

    requestAnimationFrame(() => {
        document.querySelectorAll('.blog-card').forEach((card, i) => {
            setTimeout(() => card.classList.add('visible'), i * 80);
        });
    });
}

// ── Modal ─────────────────────────────────────────────────
function openPost(id) {
    const post = posts.find(p => p.id === id);
    if (!post) return;

    document.getElementById('modalCategory').className = `badge ${getCategoryClass(post.category)}`;
    document.getElementById('modalCategory').textContent = post.categoryLabel;
    document.getElementById('modalTitle').textContent = post.title;
    document.getElementById('modalMeta').textContent = `By ${post.author}  ·  ${post.date}  ·  ${post.readTime}`;
    document.getElementById('modalImage').src = post.image;
    document.getElementById('modalImage').alt = post.title;
    document.getElementById('modalBody').innerHTML = post.content;

    const modal = document.getElementById('blogModal');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closePost() {
    const modal = document.getElementById('blogModal');
    modal.classList.remove('open');
    document.body.style.overflow = '';
}

// Close on backdrop click
document.addEventListener('click', (e) => {
    if (e.target.id === 'blogModal') closePost();
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePost();
});

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