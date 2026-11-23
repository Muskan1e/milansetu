/* ============================================================
   MILANSETU MATRIMONY WEBSITE
   Shared JavaScript for all pages

   1. Icons (inline SVG, no external files)
   2. Shared header + footer
   3. Member card, home profiles
   4. Browse page: search, chip filters, pagination
   5. Home page testimonial slider (arrow buttons)
   6. Favourite, contact, interest, newsletter, video button
============================================================ */

/* ------------------------------------------------------------
   1. ICONS
   Use in HTML as:  <i data-icon="pin"></i>
------------------------------------------------------------ */
const S = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
const icons = {
    bell: `<svg ${S}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`,
    pin: `<svg ${S}><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    cap: `<svg ${S}><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/></svg>`,
    heart: `<svg ${S}><path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/></svg>`,
    shield: `<svg ${S}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>`,
    award: `<svg ${S}><circle cx="12" cy="8" r="6"/><path d="M15.5 13.9 17 22l-5-3-5 3 1.5-8.1"/></svg>`,
    star: `<svg ${S}><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21l1.2-6.9-5-4.9 6.9-1z"/></svg>`,
    users: `<svg ${S}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/></svg>`,
    lock: `<svg ${S}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
    search: `<svg ${S}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
    left: `<svg ${S}><path d="m15 18-6-6 6-6"/></svg>`,
    right: `<svg ${S}><path d="m9 18 6-6-6-6"/></svg>`,
    refresh: `<svg ${S}><path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg>`,
    phone: `<svg ${S}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></svg>`,
    chat: `<svg ${S}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/></svg>`,
    calendar: `<svg ${S}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`,
    play: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.9l10.5-6.5a1 1 0 0 0 0-1.8L9.5 4.6A1 1 0 0 0 8 5.5Z"/></svg>`,
    mail: `<svg ${S}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`,
    verified: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#6d4fd1"/><path d="m7.5 12.5 3 3 6-6.5" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`
};

/* Fill every <i data-icon="name"></i> placed in the HTML pages. */
function paintIcons(root = document) {
    root.querySelectorAll("[data-icon]").forEach((el) => {
        if (!el.firstElementChild) el.innerHTML = icons[el.dataset.icon] || "";
    });
}

/* ------------------------------------------------------------
   2. SHARED HEADER AND FOOTER
------------------------------------------------------------ */
const nav = [
    ["membership.html", "Membership"],
    ["browse-profile.html", "Browse Profile"],
    ["success-stories.html", "Success Stories"],
    ["contact-us.html", "Help"]
];

const current = location.pathname.split("/").pop() || "index.html";

document.getElementById("header").innerHTML = `
    <header class="site-header">
        <div class="container nav-wrap">
            <a class="brand" href="index.html" aria-label="MilanSetu home">
                <img src="assets/milansetu-logo.png" alt="MilanSetu">
            </a>

            <nav id="nav" aria-label="Main navigation">
                ${nav.map(([url, title]) => `
                    <a class="${current === url ? "active" : ""}" href="${url}">${title}</a>
                `).join("")}
            </nav>

            <div class="header-tools">
                <button class="bell" aria-label="Notifications">
                    ${icons.bell}
                    <span class="bell-dot"></span>
                </button>
                <a class="avatar" href="profile-details.html?id=me" aria-label="My profile">
                    <img src="assets/images/avatar.jpg" alt="My profile">
                </a>
                <button class="mobile-menu" id="mobile-menu" aria-label="Open navigation menu">☰</button>
            </div>
        </div>
    </header>
`;

document.getElementById("footer").innerHTML = `
    <footer class="footer">
        <div class="container footer-grid">
            <div>
                <img src="assets/milansetu-logo-gold.png" alt="MilanSetu" class="footer-logo">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce diam lectus, finibus et erat a.
                </p>
                <div class="socials">
                    <a href="#" aria-label="Google">G</a>
                    <a href="#" aria-label="LinkedIn">in</a>
                    <a href="#" aria-label="Instagram">♥</a>
                    <a href="#" aria-label="Facebook">f</a>
                </div>
            </div>

            <div>
                <h4>Quick Link</h4>
                <a href="index.html">About us</a>
                <a href="success-stories.html">Success stories</a>
                <a href="membership.html">Plan</a>
            </div>

            <div>
                <h4>Support</h4>
                <a href="contact-us.html">Help center</a>
                <a href="contact-us.html">Privacy Policy</a>
                <a href="contact-us.html">Terms &amp; Condition</a>
                <a href="contact-us.html">Safety tips</a>
                <a href="contact-us.html">Report &amp; Support</a>
            </div>

            <div>
                <h4>Subscribe To Our Newsletter</h4>
                <p>mattis leo, quis auctor nibh nibh eu libero.</p>
                <form id="newsletter" class="newsletter">
                    <input type="email" required placeholder="Enter your email" aria-label="Email address">
                    <button>Subscribe</button>
                </form>
                <p class="newsletter-note" id="newsletter-note" role="status"></p>
            </div>
        </div>

        <div class="container footer-bottom">
            <span>©2026 MilanSetu Matrimony. All Rights Reserved</span>
        </div>
    </footer>
`;

paintIcons();

/* Mobile navigation toggle */
document.getElementById("mobile-menu").addEventListener("click", () => {
    document.getElementById("nav").classList.toggle("open");
});

/* ------------------------------------------------------------
   3. MEMBER CARD + HOME PROFILES
------------------------------------------------------------ */
function card(member) {
    return `
        <article class="member-card">
            <div class="member-image">
                <img src="${member.image}" alt="${member.name}" loading="lazy">
                <span class="verified">${icons.verified} Verified</span>
            </div>

            <div class="member-info">
                <h3>${member.name}, ${member.age}</h3>
                <p class="role">${member.profession}</p>
                <p class="meta"><span class="ico">${icons.pin}</span>${member.city}</p>
                <p class="meta"><span class="ico">${icons.cap}</span>${member.education}</p>

                <div class="member-actions">
                    <a href="profile-details.html?id=${member.id}">View Profile</a>
                    <button class="favorite" aria-label="Add to favourites" aria-pressed="false">${icons.heart}</button>
                </div>
            </div>
        </article>
    `;
}

const homeProfiles = document.getElementById("home-profiles");
if (homeProfiles) {
    homeProfiles.innerHTML = window.members
        .filter((m) => m.featured)
        .sort((a, b) => a.featured - b.featured)
        .map(card).join("");
}

/* ------------------------------------------------------------
   3b. PROFILE DETAILS PAGE
   Reads ?id= from the URL and shows that member's own photo and details.
------------------------------------------------------------ */
const profileRoot = document.getElementById("profile-root");
if (profileRoot) {
    const requested = new URLSearchParams(location.search).get("id") || "1";
    const member = requested === "me"
        ? window.me
        : window.members.find((m) => String(m.id) === requested) || window.members[0];

    const surnames = ["Gupta", "Sen", "Roy", "Kapoor", "Das", "Mehta", "Iyer", "Khan"];
    const fatherNames = ["Subhro", "Rajesh", "Anil", "Vikram", "Sanjay", "Ravi", "Manoj", "Deepak"];
    const motherNames = ["Sohini", "Sunita", "Kavita", "Meena", "Rekha", "Anita", "Poonam", "Shobha"];
    const k = member.id === "me" ? 0 : (Number(member.id) - 1) % 8;
    const year = 2026 - member.age - 1;
    const dob = `${String((k * 3) % 27 + 1).padStart(2, "0")}/${String((k * 5) % 12 + 1).padStart(2, "0")}/${year}`;
    const hobbies = member.hobbies || ["Travelling", "Writing", "Fitness"];
    const photos = member.photos || [member.image];
    const surname = member.name.split(" ").slice(1).join(" ") || surnames[k];
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a velit at nisl vestibulum vehicula a dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Donec mattis, arcu vel mattis tempor, leo nunc rutrum arcu.";

    profileRoot.innerHTML = `
        <div class="detail-card">
          <div class="detail-left">
            <img alt="${member.name}" class="detail-portrait" src="${member.image}"/>
            <h2>${member.name}, ${member.age}</h2>
            <p class="detail-sub">${member.profession} &middot; ${member.city}</p>
            <div class="detail-rows">
              <p><span>Date of birth</span><b>${dob}</b></p>
              <p><span>Profession</span><b>${member.profession}</b></p>
              <p><span>Location</span><b>${member.city}</b></p>
              <p><span>Mother tongue</span><b>${member.language}</b></p>
              <p><span>Religion</span><b>${member.religion}</b></p>
            </div>
            <a class="pink-link" href="contact-us.html">View all</a>
          </div>

          <div class="detail-right">
            <h3>Photos</h3>
            <div class="thumbs">
              ${photos.map((src, i) => `<img alt="${member.name} photo ${i + 1}" src="${src}"/>`).join("")}
            </div>

            <h3>Interest &amp; Hobbies</h3>
            <div class="tags">${hobbies.map((h) => `<span>${h}</span>`).join("")}</div>

            <h3>About</h3>
            <p class="detail-about">${lorem}</p>

            <h3>Family Details</h3>
            <div class="detail-rows">
              <p><span>Father's name</span><b>${fatherNames[k]} ${surname}</b></p>
              <p><span>Mother's name</span><b>${motherNames[k]} ${surname}</b></p>
              <p><span>Siblings</span><b>1 Sister</b></p>
              <p><span>Family type</span><b>Nuclear</b></p>
            </div>
            <a class="pink-link" href="contact-us.html">View all</a>

            <div class="detail-buttons">
              <button class="btn" id="interest">♡ Send Interest</button>
              <a class="btn-outline" href="contact-us.html">Contact</a>
            </div>
          </div>
        </div>`;
    document.title = `${member.name} | MilanSetu`;
}

/* ------------------------------------------------------------
   4. BROWSE PAGE: text search, chip filters, pagination
------------------------------------------------------------ */
const profileList = document.getElementById("browse-profiles");

if (profileList) {
    const PAGE_SIZE = 9;
    const state = { page: 1, query: "", location: "", chips: {} };

    const ageRanges = { "20 - 24": [20, 24], "24 - 26": [24, 26], "26 - 28": [26, 28], "28 - 30": [28, 30] };

    // Chip groups shown in the "Filter By" panel
    const groups = [
        { key: "gender", title: "Looking For", options: ["Bride", "Groom"] },
        { key: "age", title: "Age", options: Object.keys(ageRanges) },
        { key: "language", title: "Language", options: ["Bengali", "Hindi", "Punjabi", "Urdu"] },
        { key: "caste", title: "Cast", options: ["SC", "Brahmin", "Kulin", "Mahisya", "General"] },
        { key: "marital", title: "Marital Status", options: ["Divorce", "None"] },
        { key: "religion", title: "Religious", options: ["Hindu", "Buddhist", "Muslim", "Other"] },
        { key: "country", title: "Location", options: ["India", "USA", "Other"] },
        { key: "citizen", title: "Citizenship", options: ["India", "Other"] }
    ];

    const chipHost = document.getElementById("chip-groups");
    chipHost.innerHTML = groups.map((g) => `
        <div class="chip-group">
            <h4>${g.title}</h4>
            <div class="chips">
                ${g.options.map((o) => `<button type="button" class="chip" data-key="${g.key}" data-value="${o}">${o}</button>`).join("")}
            </div>
        </div>
    `).join("");

    const matches = (m) => {
        const c = state.chips;
        const text = `${m.name} ${m.city} ${m.profession}`.toLowerCase();
        if (state.query && !text.includes(state.query)) return false;
        if (state.location && !m.city.toLowerCase().includes(state.location)) return false;
        if (c.gender && m.gender !== c.gender) return false;
        if (c.age) { const [lo, hi] = ageRanges[c.age]; if (m.age < lo || m.age > hi) return false; }
        if (c.language && m.language !== c.language) return false;
        if (c.caste && m.caste !== c.caste) return false;
        if (c.religion && m.religion !== c.religion) return false;
        // Sample data is all India / unmarried / Indian citizens, so these filters only narrow for other values
        if (c.country && c.country !== "India") return false;
        if (c.citizen && c.citizen !== "India") return false;
        if (c.marital && c.marital === "Divorce") return false;
        return true;
    };

    const render = () => {
        let list = window.members.filter(matches);

        const pages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
        state.page = Math.min(state.page, pages);
        const shown = list.slice((state.page - 1) * PAGE_SIZE, state.page * PAGE_SIZE);

        profileList.innerHTML = shown.length
            ? shown.map(card).join("")
            : `<p class="empty">No matching profiles found. Try removing a filter.</p>`;

        document.getElementById("pagination").innerHTML =
            `<button data-go="prev" aria-label="Previous page">${icons.left}</button>` +
            Array.from({ length: pages }, (_, i) =>
                `<button data-go="${i + 1}" class="${i + 1 === state.page ? "active" : ""}">${i + 1}</button>`).join("") +
            `<button data-go="next" aria-label="Next page">${icons.right}</button>`;
    };

    chipHost.addEventListener("click", (e) => {
        const chip = e.target.closest(".chip");
        if (!chip) return;
        const { key, value } = chip.dataset;
        const already = chip.classList.contains("selected");
        chipHost.querySelectorAll(`.chip[data-key="${key}"]`).forEach((c) => c.classList.remove("selected"));
        if (already) delete state.chips[key];
        else { chip.classList.add("selected"); state.chips[key] = value; }
        state.page = 1;
        render();
    });

    document.getElementById("search-form").addEventListener("submit", (e) => {
        e.preventDefault();
        state.query = document.getElementById("query").value.trim().toLowerCase();
        const loc = document.getElementById("loc").value;
        state.location = loc === "Location" ? "" : loc.toLowerCase();
        state.page = 1;
        render();
    });

    document.getElementById("reset").addEventListener("click", () => {
        state.chips = {}; state.query = ""; state.location = ""; state.page = 1;
        chipHost.querySelectorAll(".chip").forEach((c) => c.classList.remove("selected"));
        document.getElementById("query").value = "";
        document.getElementById("loc").selectedIndex = 0;
        render();
    });

    document.getElementById("show-result").addEventListener("click", () => {
        render();
        document.getElementById("results-top").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    document.getElementById("pagination").addEventListener("click", (e) => {
        const b = e.target.closest("button");
        if (!b) return;
        const go = b.dataset.go;
        if (go === "prev") state.page = Math.max(1, state.page - 1);
        else if (go === "next") state.page += 1;
        else state.page = Number(go);
        render();
        document.getElementById("results-top").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    render();
}

/* ------------------------------------------------------------
   5. HOME PAGE TESTIMONIAL SLIDER
   Main card shows the current story, the small card on the right
   shows the next one. Arrow buttons move through the stories.
------------------------------------------------------------ */
const slider = document.getElementById("story-slider");

if (slider) {
    const stories = window.stories;
    let index = 0;

    const draw = () => {
        const now = stories[index];
        const next = stories[(index + 1) % stories.length];
        slider.querySelector(".story-main img").src = now.image;
        slider.querySelector(".story-main img").alt = now.names;
        slider.querySelector(".story-main blockquote").textContent = `“${now.text}”`;
        slider.querySelector(".story-main h3").textContent = now.names;
        slider.querySelector(".story-next img").src = next.image;
        slider.querySelector(".story-next img").alt = next.names;
    };

    const move = (step) => {
        index = (index + step + stories.length) % stories.length;
        slider.classList.add("swap");
        setTimeout(() => { draw(); slider.classList.remove("swap"); }, 160);
    };

    document.getElementById("story-prev").addEventListener("click", () => move(-1));
    document.getElementById("story-next").addEventListener("click", () => move(1));
    draw();
}

/* ------------------------------------------------------------
   6. SMALL INTERACTIONS
------------------------------------------------------------ */
document.addEventListener("click", (event) => {
    const heart = event.target.closest(".favorite");
    if (heart) {
        const on = heart.classList.toggle("chosen");
        heart.setAttribute("aria-pressed", on);
    }
});

const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        document.getElementById("contact-feedback").textContent =
            "Thank you! Your message has been received.";
        contactForm.reset();
    });
}

const interestButton = document.getElementById("interest");
if (interestButton) {
    interestButton.addEventListener("click", () => {
        interestButton.textContent = "✓ Interest Sent";
        interestButton.disabled = true;
    });
}

const newsletterForm = document.getElementById("newsletter");
if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
        event.preventDefault();
        document.getElementById("newsletter-note").textContent = "Thank you for subscribing!";
        newsletterForm.reset();
    });
}

const playButton = document.getElementById("play-video");
if (playButton) {
    playButton.addEventListener("click", () => {
        const note = document.getElementById("video-note");
        note.textContent = "Add your wedding video URL in js/app.js to connect this play button.";
        note.classList.add("show");
        setTimeout(() => note.classList.remove("show"), 3500);
    });
}
