// =========================================================
// JugraM Portfolio — content + interactions
// Edit the arrays below to update skills, projects and services.
// =========================================================

(() => {
  // ---------- Content ----------
  const skills = [
    { title: "Data analytics", icon: "chart", items: ["Python", "pandas", "Excel", "Data cleaning", "Charts & reports"] },
    { title: "Web development", icon: "code", items: ["Flask", "HTML", "CSS", "JavaScript", "Jinja"] },
    { title: "Backend & cloud", icon: "db", items: ["Firebase Auth", "Firestore", "SQL", "REST APIs"] },
    { title: "Networking", icon: "net", items: ["Cisco Packet Tracer", "DNS", "Routing", "Subnetting"] }
  ];

  const projects = [
    {
      name: "Lagoon Sales Analytics", status: "Group project", category: "Data",
      desc: "A Flask dashboard that analyzes sales data from food stalls, turning daily records into charts and summaries stall owners can read at a glance.",
      tags: ["Flask", "Python", "Charts"], art: "bars"
    },
    {
      name: "Internet Cafe Revenue", status: "Project", category: "Web",
      desc: "A Flask web app for tracking and analyzing an internet cafe's revenue, with reports on income over time.",
      tags: ["Flask", "Python", "Reports"], art: "line"
    },
    {
      name: "GMeet Focus Tracker", status: "Chrome extension", category: "Web",
      desc: "A Chrome extension that tracks student engagement and focus during Google Meet classes, with Firebase sign-in and Firestore storage.",
      tags: ["JavaScript", "Firebase", "Chrome API"], art: "eye"
    },
    {
      name: "Lectern", status: "In progress", wip: true, category: "Web",
      desc: "My own storage app for lecture notes: one place to keep PPTs, PDFs and other class files organized.",
      tags: ["Web app", "File storage"], art: "files"
    },
    {
      name: "Data Science Capstone", status: "Group research", category: "Data",
      desc: "Our group's undergraduate data science and machine learning research project, focused on a Philippines-based topic.",
      tags: ["Machine learning", "Research"], art: "dots"
    },
    {
      name: "Packet Tracer Network", status: "Coursework", category: "Networking",
      desc: "A simulated network in Cisco Packet Tracer covering DNS, routing and troubleshooting between devices.",
      tags: ["Cisco", "DNS", "Routing"], art: "net"
    }
  ];

  const services = [
    { title: "Data cleaning", icon: "broom", desc: "Fix messy Excel or CSV files: duplicates, blanks, inconsistent formats and typos." },
    { title: "Simple reports", icon: "table", desc: "Organize your data into tidy tables and summaries you can share with your team." },
    { title: "Charts", icon: "chart", desc: "Turn numbers into clear charts that show what's actually going on." }
  ];

  // ---------- Helpers ----------
  const $ = (sel) => document.querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const tagList = (arr) => `<ul class="tags">${arr.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;

  const ACC = "#38BDF8", TXT = "#F8FAFC", MUT = "#94A3B8", BRD = "#334155";

  const icons = {
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    code: '<path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/>',
    db: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
    net: '<rect x="9" y="2" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="16" y="16" width="6" height="6" rx="1"/><path d="M12 8v4M5 16v-4h14v4"/>',
    broom: '<path d="M14 4l6 6M4 20l8-8M9 11l4 4-5 5H4v-4z"/>',
    table: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M3 15h18M9 4v16"/>'
  };
  const icon = (k) => `<div class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icons[k]}</svg></div>`;

  // Project thumbnails — palette colours only
  const art = {
    bars: [40, 64, 52, 84, 70, 100].map((h, i) =>
      `<rect x="${70 + i * 44}" y="${135 - h}" width="28" height="${h}" rx="5" fill="${ACC}" opacity="${0.35 + i * 0.13}"/>`).join(""),
    line: `<path d="M40 120 100 98 160 106 220 70 280 78 360 38V150H40Z" fill="${ACC}" opacity=".1"/>
           <polyline points="40,120 100,98 160,106 220,70 280,78 360,38" fill="none" stroke="${ACC}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
           <circle cx="360" cy="38" r="6" fill="${ACC}"/>`,
    eye: `<ellipse cx="200" cy="80" rx="92" ry="44" fill="none" stroke="${BRD}" stroke-width="3"/>
          <circle cx="200" cy="80" r="30" fill="${ACC}"/><circle cx="200" cy="80" r="12" fill="#0B1120"/>
          <circle cx="208" cy="72" r="4" fill="${TXT}"/>`,
    files: `<rect x="138" y="38" width="80" height="96" rx="8" fill="#172033" stroke="${BRD}" stroke-width="2" transform="rotate(-8 178 86)"/>
            <rect x="182" y="30" width="82" height="102" rx="8" fill="#172033" stroke="${ACC}" stroke-width="2"/>
            <rect x="196" y="50" width="52" height="8" rx="4" fill="${ACC}"/>
            <rect x="196" y="68" width="40" height="6" rx="3" fill="${MUT}"/><rect x="196" y="82" width="46" height="6" rx="3" fill="${MUT}"/>`,
    dots: Array.from({ length: 18 }, (_, i) => {
      const x = 60 + (i * 53) % 290, y = 30 + (i * 37) % 100;
      return `<circle cx="${x}" cy="${y}" r="${i % 3 ? 5 : 8}" fill="${i % 4 ? MUT : ACC}" opacity="${i % 4 ? 0.6 : 1}"/>`;
    }).join("") + `<line x1="50" y1="135" x2="360" y2="30" stroke="${ACC}" stroke-width="2" stroke-dasharray="6 6"/>`,
    net: `<g stroke="${BRD}" stroke-width="3"><line x1="200" y1="50" x2="110" y2="112"/><line x1="200" y1="50" x2="290" y2="112"/><line x1="200" y1="50" x2="200" y2="116"/></g>
          <rect x="172" y="28" width="56" height="40" rx="8" fill="${ACC}"/>
          <g fill="#172033" stroke="${MUT}" stroke-width="2"><rect x="88" y="100" width="44" height="30" rx="6"/><rect x="178" y="106" width="44" height="30" rx="6"/><rect x="268" y="100" width="44" height="30" rx="6"/></g>`
  };

  // ---------- Render ----------
  $("#skillGrid").innerHTML = skills.map((s) => `
    <div class="card skill reveal">
      ${icon(s.icon)}
      <h3>${esc(s.title)}</h3>
      ${tagList(s.items)}
    </div>`).join("");

  $("#projectGrid").innerHTML = projects.map((p) => `
    <article class="card project reveal" data-cat="${esc(p.category)}">
      <div class="thumb"><svg viewBox="0 0 400 160" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${art[p.art]}</svg></div>
      <div class="project-body">
        <div class="project-top"><span class="status${p.wip ? " wip" : ""}">${esc(p.status)}</span></div>
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.desc)}</p>
        ${tagList(p.tags)}
      </div>
    </article>`).join("");

  $("#serviceGrid").innerHTML = services.map((s) => `
    <div class="card service reveal">
      ${icon(s.icon)}
      <h3>${esc(s.title)}</h3>
      <p>${esc(s.desc)}</p>
    </div>`).join("");

  // ---------- Project filters ----------
  const cats = ["All", ...new Set(projects.map((p) => p.category))];
  const filterBox = $("#filters");
  filterBox.innerHTML = cats.map((c, i) =>
    `<button class="filter" role="tab" aria-selected="${i === 0}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
  filterBox.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter");
    if (!btn) return;
    filterBox.querySelectorAll(".filter").forEach((b) => b.setAttribute("aria-selected", b === btn));
    const cat = btn.dataset.cat;
    document.querySelectorAll(".project").forEach((card) => {
      card.hidden = cat !== "All" && card.dataset.cat !== cat;
    });
  });

  // ---------- Mobile menu ----------
  const menuBtn = $("#menuBtn"), navLinks = $("#navLinks");
  const closeMenu = () => { navLinks.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); };
  menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  navLinks.addEventListener("click", (e) => { if (e.target.closest("a")) closeMenu(); });

  // ---------- Nav border on scroll + active link ----------
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const linkFor = (id) => navLinks.querySelector(`a[href="#${id}"]`);
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        const link = linkFor(en.target.id);
        if (link && en.isIntersecting) {
          navLinks.querySelectorAll("a").forEach((a) => a.classList.remove("active"));
          link.classList.add("active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach((s) => sectionObserver.observe(s));

    // ---------- Scroll reveal ----------
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); revealObserver.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
  }

  // ---------- Contact form (demo) ----------
  // To receive real messages: use Formspree (formspree.io) and set
  // <form action="https://formspree.io/f/YOUR_ID" method="POST">, then remove this handler.
  const form = $("#contactForm"), status = $("#formStatus");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = $("#cName").value.trim();
    const email = $("#cEmail").value.trim();
    const msg = $("#cMsg").value.trim();
    status.classList.remove("ok");
    if (!name || !msg || !/^\S+@\S+\.\S+$/.test(email)) {
      status.textContent = "Please fill in your name, a valid email and a message.";
      return;
    }
    status.textContent = `Thanks, ${name}! Your message is ready — connect this form to Formspree to receive it.`;
    status.classList.add("ok");
    form.reset();
  });

  // ---------- Footer year ----------
  $("#year").textContent = new Date().getFullYear();
})();