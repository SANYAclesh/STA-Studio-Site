/* ============================================================
   main.js — STA Studio
   ============================================================ */

/* ===========================
   TRANSLATIONS
   =========================== */
const translations = {
    uk: {
        nav_tlol: "TLOL", nav_tsr: "TSR", nav_store: "Магазин",
        nav_faq: "FAQ", nav_contacts: "Контакти",
        nav_home: "ГОЛОВНА", nav_games: "ІГРИ",
        hero_eyebrow: "// School Team Art",
        hero_sub: "ІГРИ · МИСТЕЦТВО · ПРОДУКТИ",
        hero_btn1: "ДИВИТИСЬ ІГРИ", hero_btn2: "МАГАЗИН",
        scroll: "ГОРТАЙ",
        games_label: "// НАШІ ПРОЄКТИ",
        games_title: 'FEATURED <span class="accent">GAMES</span>',
        tlol_badge: "ВІДКРИТИЙ СВІТ · ТРИЛЕР",
        tlol_desc: "Головний герой Сандро Вотслей стикається з серйозною проблемою. Його друга Даніеля Самсонова викрали, а правоохоронні органи відмовляються допомагати. Сандро доведеться об'єднатися з різними людьми. Але чи всі вони говорять правду?",
        tsr_badge: "ГОНКИ · ВІДКРИТИЙ СВІТ",
        tsr_desc: 'TSR — це перегони у відкритому світі з особливою фізикою. Вам доведеться дуже вміло "грати з кнопками", щоб утримати машину від занесення у різні боки!',
        crystal_badge: "СКОРО · Гача",
        crystal_soon: "// ІНФОРМАЦІЯ ВІДСУТНЯ — СЛІДКУЙТЕ ЗА НАМИ",
        store_label: "// МЕРЧА", store_title: "МАГАЗИН", store_all: "ПЕРЕГЛЯНУТИ ВСЕ →",
        item1_name: "ХУДІ TLOL", item2_name: "ПОСТЕР TSR", item3_name: "БРЕЛОК CRYSTAL REALMS",
        faq_label: "// ЗАПИТАННЯ", faq_title: "FAQ",
        faq1_q: "Що таке STA Studio?",
        faq1_a: "STA Studio — це School Team Art, творча команда, захоплених розробкою ігор, мистецтвом та інтерактивним сторітелінгом. Ми створюємо оригінальні ігри та продукти, керовані творчістю та командною роботою.",
        faq2_q: "Коли вийде TLOL?",
        faq2_a: "The Limit Of Lies (TLOL) наразі в активній розробці. Ми наполегливо працюємо над якісним продуктом. Підписуйтесь та залишайте контакти, щоб дізнатись про дату виходу першими!",
        faq3_q: "TSR безкоштовна гра?",
        faq3_a: "The Street Racer (TSR) планується як безкоштовна гра. Наша мета — дати якомога більше людей відчути унікальну фізику гоночного процесу.",
        faq4_q: "Що таке Crystal Realms?",
        faq4_a: "Crystal Realms — наш найамбітніший проєкт. Деталі поки що засекречені — більше інформації з'явиться у міру розробки. Слідкуйте за оновленнями!",
        faq5_q: "Як зв'язатись або приєднатись до команди?",
        faq5_a: "Ми завжди раді талановитим та захопленим людям! Якщо ви хочете співпрацювати або приєднатися до STA Studio — зв'яжіться з нами через соціальні мережі. Будемо раді почути вас!",
        faq6_q: "Куди здійснюється доставка товарів?",
        faq6_a: "Наразі ми відправляємо товари до окремих країн Європи та Північної Америки. Всесвітня доставка незабаром! Усі замовлення обробляються протягом 3–5 робочих днів.",
        faq7_q: "📨 Надіслати концепт / ідею",
        faq7_intro: "Маєте ідею для гри, персонажа чи механіки? Надішліть концепт — ми прочитаємо кожне повідомлення!",
        cf_name: "ВАШ НІКНЕЙМ / ІМ'Я",
        cf_name_ph: "Sandro Wattsley",
        cf_email: "EMAIL",
        cf_email_ph: "you@example.com",
        cf_subject: "ТЕМА КОНЦЕПТУ",
        cf_subject_ph: "Назва гри / механіка / персонаж...",
        cf_message: "ОПИС ІДЕЇ",
        cf_msg_ph: "Розкажіть нам більше про вашу ідею...",
        cf_send: "НАДІСЛАТИ →",
        cf_success: "Концепт надіслано! Ми відповімо найближчим часом. Дякуємо!",
        contacts_label: "// ЗВ'ЯЗОК",
        contacts_title: "КОНТАКТИ",
        footer_copy: "© 2026 STA STUDIO · УСІ ПРАВА ЗАХИЩЕНІ",
        stat_genre: "ЖАНР", stat_status: "СТАТУС", stat_platform: "ПЛАТФОРМА",
        btn_more: "ДОКЛАДНІШЕ", btn_play: "▶ ГРАТИ", btn_notify: "СПОВІСТИТИ МЕНЕ",
        m_tlol_tag: "// THE LIMIT OF LIES",
        m_tlol_title: "TLOL — Відкритий світ Трилер",
        m_tlol_body: "Головний герой Сандро Вотслей стикається з серйозною проблемою. Його друга Даніеля Самсонова викрали, а правоохоронні органи відмовляються співпрацювати. Гравцю доведеться об'єднатися з різними людьми. Але чи всі вони говорять правду? Хто насправді такий Даніель Самсонов? Як мафія пов'язана зі світовим урядом? За що насправді заарештували Дурова? Що приховує Діснейленд Париж? Чи є підтримка Європи для України змовою? Сандро має все це з'ясувати у пошуках свого друга.",
        m_tlol_genre: "Відкритий світ", m_tlol_status: "В РОЗРОБЦІ", m_tlol_platform: "ПК",
        m_tlol_play_title: "Незабаром",
        m_tlol_play_body: "TLOL наразі в розробці. Демо незабаром стане доступним. Підписуйтесь, щоб отримати сповіщення!",
        m_tsr_tag: "// THE STREET RACER",
        m_tsr_title: "TSR — Гонки у Відкритому Світі",
        m_tsr_body: "TSR — це гонки у відкритому світі з особливою фізикою. Вам доведеться дуже вміло керувати, щоб утримати машину від занесення! Опановуйте вулиці, відкривайте нові авто та домінуйте в кожній гонці підпільного кола міста.",
        m_tsr_genre: "ГОНКИ", m_tsr_status: "В РОЗРОБЦІ", m_tsr_platform: "ПК",
        m_tsr_play_title: "Незабаром",
        m_tsr_play_body: "TSR наразі в розробці. Демо-версія ще не доступна. Слідкуйте — ми оголосимо, коли можна буде сісти за кермо!",
        m_crystal_tag: "// CRYSTAL REALMS",
        m_crystal_title: "Crystal Realms — ???",
        m_crystal_body: "Наш найзагадковіший проєкт. Crystal Realms наразі на ранньому етапі розробки. Лор, геймплей і деталі розкриватимуться поступово. Одне точно — це буде щось незвичайне.",
        m_crystal_genre: "RPG / ???", m_crystal_status: "РАННЯ РОЗРОБКА", m_crystal_platform: "TBA",
        m_store_all_title: "Магазин відкривається",
        m_store_all_body: "Наш повноцінний магазин мерчу незабаром запуститься! Ми працюємо над ексклюзивним одягом, артпринтами та колекційними предметами для кожної з наших ігор. Підпишіться, щоб дізнатися першими!",
        m_item1_title: "Худі TLOL — $39.99",
        m_item1_body: "Преміальна якість худі з ексклюзивним артом The Limit Of Lies. Розміри S–XXL. Екологічний друк. Відправка по всьому світу.",
        m_item2_title: "Постер TSR — $14.99",
        m_item2_body: "Якісний арт-принт з ключовим візуалом TSR. Розміри A3/A2. Матовий папір 200 г/м². Ідеально для кімнати геймера.",
        m_item3_title: "Брелок Crystal Realms — $9.99",
        m_item3_body: "Металевий емальований брелок з логотипом Crystal Realms. Чудовий колекційний предмет для фанатів гри.",
        btn_wishlist: "ДО ВІШЛІСТА →", btn_notify_me: "🔔 СПОВІСТИТИ ПРО РЕЛІЗ",
        btn_to_cart: "ДО КОШИКА →", btn_sign_up: "ПІДПИСАТИСЬ НА ОНОВЛЕННЯ",
    },
    en: {
        nav_tlol: "TLOL", nav_tsr: "TSR", nav_store: "Store",
        nav_faq: "FAQ", nav_contacts: "Contacts",
        nav_home: "HOME", nav_games: "GAMES",
        hero_eyebrow: "// SCHOOL TEAM ART STUDIO",
        hero_sub: "GAMES · ART · PRODUCTS",
        hero_btn1: "EXPLORE GAMES", hero_btn2: "VISIT STORE",
        scroll: "SCROLL",
        games_label: "// OUR PROJECTS",
        games_title: 'FEATURED <span class="accent">GAMES</span>',
        tlol_badge: "OPEN WORLD · THRILLER",
        tlol_desc: "The main character Sandro Wattsley is faced with a big problem. His friend Dandiel Samsonov has been kidnapped, and law enforcement agencies refuse to cooperate. Sandro will have to team up with a variety of people. But is everyone telling the truth?",
        tsr_badge: "RACING · OPEN WORLD",
        tsr_desc: 'TSR is an open world race with very special physics. You will have to "play with the buttons" very well to keep the car from drifting in different directions!',
        crystal_badge: "COMING SOON · GACHA",
        crystal_soon: "// NO INFO AVAILABLE YET — STAY TUNED",
        store_label: "// MERCHANDISE", store_title: "STORE", store_all: "VIEW ALL →",
        item1_name: "TLOL HOODIE", item2_name: "TSR POSTER", item3_name: "CRYSTAL REALMS KEYCHAIN",
        faq_label: "// QUESTIONS", faq_title: "FAQ",
        faq1_q: "What is STA Studio?",
        faq1_a: "STA Studio is a School Team Art Studio — a creative team of students passionate about game development, art, and interactive storytelling. We create original games and products driven by creativity and collaboration.",
        faq2_q: "When will TLOL be released?",
        faq2_a: "The Limit Of Lies (TLOL) is currently in active development. We're working hard to deliver a polished experience. Follow us and sign up for notifications to be the first to know the release date!",
        faq3_q: "Is TSR free to play?",
        faq3_a: "The Street Racer (TSR) is planned to launch as a free-to-play title. Our focus is on getting the game into as many hands as possible so everyone can experience the unique physics-based racing gameplay.",
        faq4_q: "What is Crystal Realms?",
        faq4_a: "Crystal Realms is our most ambitious project yet. Details are still under wraps — we'll reveal more information as development progresses. Stay tuned and sign up for notifications!",
        faq5_q: "How can I contact or join the team?",
        faq5_a: "We're always open to talented and passionate individuals! If you'd like to collaborate or join STA Studio, reach out through our social channels. We look forward to hearing from you!",
        faq6_q: "Where do you ship store items?",
        faq6_a: "Currently we ship to select countries in Europe and North America. Worldwide shipping is coming soon! All orders are processed within 3–5 business days and you'll receive a tracking number once your item ships.",
        faq7_q: "📨 Submit a concept / idea",
        faq7_intro: "Have an idea for a game, character or mechanic? Send us your concept — we read every message!",
        cf_name: "YOUR NAME / NICKNAME",
        cf_name_ph: "Sandro Wattsley",
        cf_email: "EMAIL",
        cf_email_ph: "you@example.com",
        cf_subject: "CONCEPT TOPIC",
        cf_subject_ph: "Game name / mechanic / character...",
        cf_message: "DESCRIPTION",
        cf_msg_ph: "Tell us more about your idea...",
        cf_send: "SEND CONCEPT →",
        cf_success: "Concept sent! We'll get back to you soon. Thank you!",
        contacts_label: "// GET IN TOUCH",
        contacts_title: "CONTACTS",
        footer_copy: "© 2026 STA STUDIO · ALL RIGHTS RESERVED",
        stat_genre: "GENRE", stat_status: "STATUS", stat_platform: "PLATFORM",
        btn_more: "LEARN MORE", btn_play: "▶ PLAY NOW", btn_notify: "NOTIFY ME",
        m_tlol_tag: "// THE LIMIT OF LIES",
        m_tlol_title: "TLOL — Open World Thriller",
        m_tlol_body: "The main character Sandro Wattsley is faced with a big problem. His friend Daniel Samsonov has been kidnapped, and law enforcement agencies refuse to cooperate. The player will have to team up with a variety of people. But is everyone telling the truth? Who really was Daniel Samsonov? How is the mafia connected to the world government? What was Durov really arrested for? What is Disneyland Paris hiding? Is Europe's support for Ukraine a conspiracy? Sandro will have to find out all this during his journey in search of his friend.",
        m_tlol_genre: "Open World", m_tlol_status: "IN DEV", m_tlol_platform: "PC",
        m_tlol_play_title: "Coming Soon",
        m_tlol_play_body: "TLOL is currently in development. The demo will be available soon. Add it to your wishlist to get notified on launch day!",
        m_tsr_tag: "// THE STREET RACER",
        m_tsr_title: "TSR — Open World Racing",
        m_tsr_body: "TSR is an open world race with very special physics. You will have to \"play with the buttons\" very well to keep the car from drifting in different directions! Master the streets, unlock new vehicles, and dominate every race across the city's underground circuit.",
        m_tsr_genre: "RACING", m_tsr_status: "IN DEV", m_tsr_platform: "PC",
        m_tsr_play_title: "Coming Soon",
        m_tsr_play_body: "TSR is currently in development. The demo build is not yet available. Watch this space — we'll announce when you can get behind the wheel!",
        m_crystal_tag: "// CRYSTAL REALMS",
        m_crystal_title: "Crystal Realms — ???",
        m_crystal_body: "Our most mysterious project. Crystal Realms is currently in early development. Lore, gameplay, and details will be revealed gradually. One thing is certain — it will be unlike anything we've made before.",
        m_crystal_genre: "RPG / ???", m_crystal_status: "EARLY DEV", m_crystal_platform: "TBA",
        m_store_all_title: "Store Coming Soon",
        m_store_all_body: "Our full merch store is launching soon! We're working on exclusive apparel, art prints, and collectibles for each of our games. Sign up to be notified when we go live.",
        m_item1_title: "TLOL Hoodie — $39.99",
        m_item1_body: "Premium quality hoodie featuring exclusive The Limit Of Lies artwork. Available in sizes S–XXL. Printed with eco-friendly inks. Ships worldwide.",
        m_item2_title: "TSR Poster — $14.99",
        m_item2_body: "High-quality art print of the iconic TSR key visual. A3 / A2 sizes available. Printed on 200gsm matte paper. Perfect for any gamer's room.",
        m_item3_title: "CR Keychain — $9.99",
        m_item3_body: "Metal enamel keychain featuring the Crystal Realms logo. A beautiful collector's item for fans of the upcoming game.",
        btn_wishlist: "WISHLIST →", btn_notify_me: "🔔 NOTIFY ON RELEASE",
        btn_to_cart: "ADD TO CART →", btn_sign_up: "SIGN UP FOR UPDATES",
    },
};

/* ===========================
   LANGUAGE
   =========================== */
let currentLang = "uk";

function setLang(lang) {
    currentLang = lang;
    const t = translations[lang];

    document.querySelectorAll("[data-key]").forEach((el) => {
        const key = el.dataset.key;
        if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // Placeholders
    document.querySelectorAll("[data-key-placeholder]").forEach((el) => {
        const key = el.dataset.keyPlaceholder;
        if (t[key] !== undefined) el.placeholder = t[key];
    });

    document.getElementById("lang-uk").classList.toggle("active", lang === "uk");
    document.getElementById("lang-en").classList.toggle("active", lang === "en");
    document.documentElement.lang = lang;
}

/* ===========================
   MODAL DATA
   =========================== */
function getModalData(key) {
    const t = translations[currentLang];
    const map = {
        tlol: {
            tag: t.m_tlol_tag, title: t.m_tlol_title, body: t.m_tlol_body,
            genre: t.m_tlol_genre, status: t.m_tlol_status, platform: t.m_tlol_platform,
            actions: `<button class="btn btn-primary" onclick="closeModal()">${t.btn_wishlist}</button>`,
        },
        "tlol-play": {
            tag: t.m_tlol_tag, title: t.m_tlol_play_title, body: t.m_tlol_play_body, genre: null,
            actions: `<button class="btn btn-primary" onclick="closeModal()">${t.btn_notify_me}</button>`,
        },
        tsr: {
            tag: t.m_tsr_tag, title: t.m_tsr_title, body: t.m_tsr_body,
            genre: t.m_tsr_genre, status: t.m_tsr_status, platform: t.m_tsr_platform,
            actions: `<button class="btn btn-red" onclick="closeModal()">${t.btn_wishlist}</button>`,
        },
        "tsr-play": {
            tag: t.m_tsr_tag, title: t.m_tsr_play_title, body: t.m_tsr_play_body, genre: null,
            actions: `<button class="btn btn-red" onclick="closeModal()">${t.btn_notify_me}</button>`,
        },
        crystal: {
            tag: t.m_crystal_tag, title: t.m_crystal_title, body: t.m_crystal_body,
            genre: t.m_crystal_genre, status: t.m_crystal_status, platform: t.m_crystal_platform,
            actions: `<button class="btn btn-outline" onclick="closeModal()">${t.btn_notify_me}</button>`,
        },
        "store-all": {
            tag: "// STORE", title: t.m_store_all_title, body: t.m_store_all_body, genre: null,
            actions: `<button class="btn btn-primary" onclick="closeModal()">${t.btn_sign_up}</button>`,
        },
        "store-item-1": {
            tag: "// MERCH", title: t.m_item1_title, body: t.m_item1_body, genre: null,
            actions: `<button class="btn btn-primary" onclick="closeModal()">${t.btn_to_cart}</button>`,
        },
        "store-item-2": {
            tag: "// MERCH", title: t.m_item2_title, body: t.m_item2_body, genre: null,
            actions: `<button class="btn btn-red" onclick="closeModal()">${t.btn_to_cart}</button>`,
        },
        "store-item-3": {
            tag: "// MERCH", title: t.m_item3_title, body: t.m_item3_body, genre: null,
            actions: `<button class="btn btn-outline" onclick="closeModal()">${t.btn_to_cart}</button>`,
        },
    };
    return map[key] || null;
}

/* ===========================
   MODAL
   =========================== */
function openModal(key) {
    const d = getModalData(key);
    if (!d) return;
    document.getElementById("modalTag").textContent = d.tag;
    document.getElementById("modalTitle").textContent = d.title;
    document.getElementById("modalBody").textContent = d.body;
    const stats = document.getElementById("modalStats");
    if (d.genre) {
        stats.style.display = "flex";
        document.getElementById("statGenre").textContent = d.genre;
        document.getElementById("statStatus").textContent = d.status || "—";
        document.getElementById("statPlatform").textContent = d.platform || "—";
    } else {
        stats.style.display = "none";
    }
    document.getElementById("modalActions").innerHTML = d.actions || "";
    document.getElementById("modal").classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById("modal").classList.remove("open");
    document.body.style.overflow = "";
}

function closeModalOnOverlay(e) {
    if (e.target === document.getElementById("modal")) closeModal();
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});

/* ===========================
   CURSOR — desktop only, hide on touch
   =========================== */
const isTouchDevice = () => window.matchMedia("(hover: none) and (pointer: coarse)").matches;

const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursorRing");
let mx = 0, my = 0, rx = 0, ry = 0;
let cursorVisible = false;

if (!isTouchDevice()) {
    document.addEventListener("mousemove", (e) => {
        mx = e.clientX;
        my = e.clientY;
        cursor.style.left = mx + "px";
        cursor.style.top = my + "px";
        if (!cursorVisible) {
            cursor.style.opacity = "1";
            ring.style.opacity = "0.6";
            cursorVisible = true;
        }
    });

    document.addEventListener("mouseleave", () => {
        cursor.style.opacity = "0";
        ring.style.opacity = "0";
        cursorVisible = false;
    });

    (function animRing() {
        rx += (mx - rx) * 0.13;
        ry += (my - ry) * 0.13;
        ring.style.left = rx + "px";
        ring.style.top = ry + "px";
        requestAnimationFrame(animRing);
    })();

    document.querySelectorAll("a, button, .faq-q, .store-item, .game-card").forEach((el) => {
        el.addEventListener("mouseenter", () => {
            cursor.style.width = "20px"; cursor.style.height = "20px";
            ring.style.width = "56px"; ring.style.height = "56px";
        });
        el.addEventListener("mouseleave", () => {
            cursor.style.width = "12px"; cursor.style.height = "12px";
            ring.style.width = "36px"; ring.style.height = "36px";
        });
    });
} else {
    // Touch device — hide cursors, restore pointer
    cursor.style.display = "none";
    ring.style.display = "none";
    document.body.style.cursor = "auto";
}

/* ===========================
   BURGER MENU
   =========================== */
function toggleMenu() {
    const burger = document.getElementById("burger");
    const menu = document.getElementById("mobileMenu");
    const isOpen = menu.classList.toggle("open");
    burger.classList.toggle("open", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
}

function closeMenu() {
    document.getElementById("burger").classList.remove("open");
    document.getElementById("mobileMenu").classList.remove("open");
    document.body.style.overflow = "";
}

/* ===========================
   SMOOTH SCROLL
   =========================== */
document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
        const target = document.querySelector(a.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

/* ===========================
   ACTIVE NAV ON SCROLL
   =========================== */
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
    let cur = "";
    sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 130) cur = s.id;
    });
    document.querySelectorAll(".nav-link").forEach((a) => {
        a.classList.remove("active");
        if (a.getAttribute("href") === "#" + cur) a.classList.add("active");
    });
});

/* ===========================
   SCROLL REVEAL
   =========================== */
const observer = new IntersectionObserver(
    (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }); },
    { threshold: 0.08 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

/* ===========================
   FAQ
   =========================== */
function toggleFaq(el) {
    const item = el.parentElement;
    const wasOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
    if (!wasOpen) item.classList.add("open");
}

/* ===========================
   CONCEPT FORM
   =========================== */
function submitConcept(e) {
    e.preventDefault();
    const name    = document.getElementById("cfName").value.trim();
    const email   = document.getElementById("cfEmail").value.trim();
    const subject = document.getElementById("cfSubject").value.trim();
    const message = document.getElementById("cfMessage").value.trim();
    if (!name || !email || !subject || !message) return;

    // Simulate send — replace with real endpoint if needed
    const form = document.getElementById("conceptForm");
    const success = document.getElementById("cfSuccess");
    form.style.display = "none";
    success.style.display = "flex";

    // Also update success text from translations
    const t = translations[currentLang];
    success.querySelector("p").textContent = t.cf_success;
}

/* ===========================
   LOAD IMAGES
   =========================== */
function loadImages() {
    const tlolImg   = document.getElementById("tlol-img");
    const tsrImg    = document.getElementById("tsr-img");
    const crystalImg = document.getElementById("crystal-img");
    if (typeof IMG_TLOL !== "undefined" && tlolImg)    tlolImg.src = IMG_TLOL;
    if (typeof IMG_TSR  !== "undefined" && tsrImg)     tsrImg.src  = IMG_TSR;
    if (typeof IMG_CR   !== "undefined" && crystalImg) crystalImg.src = IMG_CR;
}

/* ===========================
   PARTICLES (desktop only)
   =========================== */
if (!isTouchDevice()) {
    function spawnParticle() {
        const p = document.createElement("div");
        p.className = "particle";
        p.style.left = Math.random() * 100 + "vw";
        const dur = 8 + Math.random() * 12;
        p.style.animationDuration = dur + "s";
        p.style.animationDelay = Math.random() * 3 + "s";
        p.style.setProperty("--drift", Math.random() * 100 - 50 + "px");
        document.body.appendChild(p);
        setTimeout(() => p.remove(), (dur + 4) * 1000);
    }
    setInterval(spawnParticle, 1400);
    for (let i = 0; i < 5; i++) setTimeout(spawnParticle, i * 300);
}

/* ===========================
   LOADER
   =========================== */
function hideLoader() {
    const loader = document.getElementById("loader");
    if (!loader) return;
    loader.classList.add("hidden");
    // Remove from DOM after transition
    setTimeout(() => loader.remove(), 700);
}

/* ===========================
   INIT
   =========================== */
window.addEventListener("DOMContentLoaded", () => {
    loadImages();
    setLang("uk");

    // Hide loader after fonts + images settle (~1.9s matches animation)
    setTimeout(hideLoader, 1900);
});
