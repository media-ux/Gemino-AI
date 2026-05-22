/* global React, ReactDOM */
const { useState, useEffect, useRef } = React;

/* ====================== ICONS ====================== */
const Icon = ({ children, size = 16, sw = 1.6 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);
const IArrowR  = (p) => <Icon {...p}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></Icon>;
const IArrowUR = (p) => <Icon {...p}><path d="M7 17 17 7"/><path d="M7 7h10v10"/></Icon>;
const ICheck   = (p) => <Icon {...p}><polyline points="20 6 9 17 4 12"/></Icon>;
const IPlus    = (p) => <Icon {...p}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></Icon>;
const ISend    = (p) => <Icon {...p}><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></Icon>;
const IDown    = (p) => <Icon {...p}><polyline points="6 9 12 15 18 9"/></Icon>;
const IMail    = (p) => <Icon {...p}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></Icon>;
const ILogo    = (p) => <Icon {...p}><circle cx="12" cy="12" r="9"/></Icon>;

/* ====================== CONTENT ====================== */
const COPY = {
  de: {
    nav: { products: "Produkte", projects: "Projekte", about: "Über Uns", contact: "Kontakt", cta: "Gespräch Buchen" },
    heroLocation: "Gemino AI GmbH · Leipzig",
    heroTitle: ["KI, die ", "Entscheidungen", " trifft."],
    heroSub: "Fünf Produktlinien für den deutschen Mittelstand. Von Prozessautomatisierung über Förderberatung bis zur maßgeschneiderten KI-Entwicklung.",
    pills: ["DSGVO-Konform", "EU AI Act Ready", "ISO 27001"],
    primary: "Beratung Anfragen",
    secondary: "Produkte Entdecken",
    scroll: "Scroll",
    stats: [
      { n: "50+", k: "Projekte Umgesetzt" },
      { n: "98%", k: "Kundenzufriedenheit" },
      { n: "6", k: "Aktive Mandanten" },
      { n: "+34%", k: "Ø Effizienzsteigerung" },
    ],
    thesis: [
      { num: "01", label: "These",     parts: ["Der deutsche Mittelstand braucht keine ", "weiteren Tools", ". Er braucht Systeme, die Prozesse eigenständig steuern, Entscheidungen treffen und ", "Ergebnisse liefern", "."] },
      { num: "02", label: "Ansatz",    parts: ["Wir bauen ", "agentic KI", " — Systeme, die innerhalb definierter Grenzen autonom handeln. Keine Chatbots. Keine Dashboards. ", "Operative Infrastruktur", "."] },
      { num: "03", label: "Förderung", parts: ["Bis zu ", "80% Förderung", " durch KfW, BAFA und Landesprogramme. Wir identifizieren, beantragen und begleiten — damit ", "KI bezahlbar wird", "."] },
    ],
    productsSection: {
      num: "04", eyebrow: "Produkte",
      title: ["Fünf ", "Produktlinien"],
      sub: "Jede Linie adressiert einen konkreten Engpass — von operativer Ineffizienz bis Finanzierungszugang.",
    },
    products: [
      { id: "optivx",     code: "01", key: "Produktlinie 01", name: "OptiVX",     label: "Intelligente Automatisierung",
        body: "Workflow-Automatisierung, Predictive Analytics, Echtzeit-Monitoring, API-Integration und industrielle Datenverträge. Agentic KI-Systeme, die Geschäftsprozesse eigenständig steuern — 24/7, ohne manuelle Eingriffe. Durchschnittliche Effizienzsteigerung: 34%.",
        meta: [["Domäne", "Operations"], ["Deployment", "On-Premise / Cloud"], ["Effizienz", "+34% Ø"], ["Status", "Produktiv"]] },
      { id: "eduvx",      code: "02", key: "Produktlinie 02", name: "EduVX",      label: "KI-Schulungen",
        body: "Executive Workshops, Hands-on Trainings, Strategie-Masterclasses und zertifizierte Programme. KI-Kompetenz für jede Ebene.",
        meta: [["Format", "Workshop / Cohort"], ["Zielgruppe", "Exec → Team"], ["Zertifizierung", "Inklusive"], ["Sprache", "DE / EN"]] },
      { id: "researchvx", code: "03", key: "Produktlinie 03", name: "ResearchVX", label: "Strategieberatung",
        body: "Marktanalyse, KI-Readiness-Assessment, Use-Case-Identifikation und Technologie-Roadmapping. Datengetriebene Entscheidungsgrundlagen für Geschäftsführung und Vorstand.",
        meta: [["Output", "Roadmap / Assessment"], ["Dauer", "4–12 Wochen"], ["Lieferung", "Bericht + Workshop"], ["Audience", "C-Level"]] },
      { id: "fundingvx",  code: "04", key: "Produktlinie 04", name: "FundingVX",  label: "Finanzierungsberatung",
        body: "Fördermittelidentifikation, Antragsbegleitung, Business-Case-Modellierung und Investor-Matching. KfW, BAFA und Landesprogramme — 30–80% Projektförderung.",
        meta: [["Förderquote", "30–80%"], ["Programme", "KfW / BAFA / Land"], ["Erfolgsquote", "92%"], ["Service", "End-to-end"]] },
      { id: "customvx",   code: "05", key: "Produktlinie 05", name: "CustomVX",   label: "Maßgeschneiderte Softwareentwicklung",
        body: "Individuelle ML-Modelle, Enterprise-Integration, Cloud- und On-Premise-Deployment, laufende Wartung und Support. Von der Konzeption bis zum Produktivbetrieb — alles aus einer Hand. Modulare Microservices-Architekturen für Bioökonomie- und Industrieanwendungen — cloud-agnostisch, edge-fähig und audit-ready. Aktiv in den Branchen Industrie, Energie, Gesundheit, Finanz, Handel und Bildung.",
        meta: [["Stack", "Python / TS / Go"], ["Branchen", "6 aktive"], ["Modell", "Build → Run → Support"], ["SLA", "24/7 verfügbar"]] },
    ],
    philosophy: {
      num: "05", eyebrow: "Philosophie",
      title: ["Keine Theorie. ", "Produktion", "."],
      lead: "Jedes System, das Gemino AI ausliefert, läuft zuerst im eigenen EX-Ökosystem. 15 Unternehmen, 4 Kontinente — dieselbe agentic Infrastruktur, die wir unseren Mandanten anbieten.",
      kicker: "Wenn wir sagen, es funktioniert, meinen wir: Es läuft seit Monaten in Produktion.",
      photoTag: "Leipzig · HQ",
    },
    projectsSection: {
      num: "06", eyebrow: "Projekte",
      title: ["Aktive ", "Mandanten"],
      sub: "Sechs laufende Projekte quer durch Industrie, Energie und Beratung.",
    },
    projects: [
      { num: "00", tag: "R&D Focus",        name: "AUTOBIO-KI — Cloud Architecture",     desc: "Cloud-Infrastruktur und sichere Datenverträge für ein KI-gesteuertes biologisches Produktionssystem. Skalierbares Evaluierungs- und Robotiksystem für die automatisierte Bioproduktion.", featured: true },
      { num: "01", tag: "KI-Beratung",      name: "MindWaves AI Solutions GmbH",        desc: "Digitaler Zwilling und autonome Laborberatung. Agentic Systeme für Mandantenintelligenz und Pipeline-Management." },
      { num: "02", tag: "Nachhaltigkeit",   name: "Innogaia GmbH",                       desc: "Nachhaltigkeitsgetriebene KI-Lösungen. Automatisierte ESG-Berichterstattung und Prozessoptimierung." },
      { num: "03", tag: "Computer Vision",  name: "Seraf Technologies",                  desc: "Computer Vision für industrielle Qualitätskontrolle. Echtzeit-Fehlererkennung in der Fertigung." },
      { num: "04", tag: "Fertigung",        name: "Reichmann Systemtechnik GmbH",        desc: "Produktionsprozessoptimierung und Predictive Maintenance. KI-gestützte Wartungsplanung." },
      { num: "05", tag: "Energie I",        name: "Energaia Labs GmbH — Energiemanagement",   desc: "Intelligente Energiemanagementsysteme. Verbrauchsoptimierung durch agentic Monitoring." },
      { num: "06", tag: "Energie II",       name: "Energaia Labs GmbH — Smart Grid",          desc: "Dezentrale Energieverteilung und Smart-Grid-Integration. Autonome Laststeuerung." },
    ],
    research: {
      num: "07", eyebrow: "Forschung & Entwicklung",
      title: ["Forschung & ", "Entwicklung"],
      lead: "Gemino AI erforscht neue Architekturen für industrielle Datenverträge und engagiert sich für die Skalierung industrieller KI-Infrastruktur in Deutschland.",
      project: {
        code: "AUTOBIO-KI",
        tagline: "Skalierbares Evaluierungs- und Robotiksystem für die Automatisierte Produktion von Hochleistungsbiomasse durch KI-Integration.",
        meta: [
          ["Target Programme", "BMBF — „Zukunft der Wertschöpfung\u201c"],
          ["Rolle",            "Lead Data Architect — Cloud-Infrastruktur & Datenarchitektur"],
        ],
        body: "Gemino AI entwickelt Konzepte für modulare Microservices-Architekturen und sichere Datenpipelines, um industrielle Produktionssysteme skalierbar und cloud-agnostisch betreibbar zu machen.",
        contribTitle: "Beitrag von Gemino AI",
        contrib: [
          "Spezifikation industrieller KPIs und Datenverträge",
          "Entwicklung der Cloud-Infrastruktur (Microservices-Architektur)",
          "Sichere Edge-to-Cloud-Datenpipelines",
          "Modulare, cloud-agnostische Deployment-Architektur",
        ],
        partnersLabel: "Research Network",
        partners: "MindWaves AI, Energaia Labs, Epic Technologies, Robert Boyle Institut",
      },
    },
    ecosystem: {
      eyebrow: "Ökosystem",
      title: ["Teil des ", "EX", " Ökosystems"],
      p1: "Gemino AI GmbH ist die deutsche KI-Tochtergesellschaft von EX AI — Teil der globalen EX Venture Gruppe. Gegründet von Julien Uhlig, mit Sitz in Leipzig.",
      p2: "Deutsches Team, deutsche Sprache, deutsche Compliance. Dieselbe agentic Technologie, die 15 Unternehmen auf 4 Kontinenten antreibt — optimiert für den Mittelstand.",
      link: "EX AI Entdecken",
      complianceLabel: "Compliance & Zertifizierung",
      compliance: ["DSGVO-Konform", "EU AI Act Ready", "ISO 27001", "BMBF R&D Focus", "HRB 39902 · AG Leipzig", "USt-IdNr. DE453856380"],
    },
    cta: {
      title: ["Bereit für ", "echte", " KI?"],
      sub: "Wir arbeiten mit Unternehmen, die über Chatbots hinausgewachsen sind und Systeme brauchen, die tatsächlich operieren.",
      form: { title: "Direkt Schreiben", reply: "Antwort < 24h", name: "Name", company: "Unternehmen", email: "E-Mail", interest: "Interesse", message: "Nachricht", legal: "Mit dem Absenden stimmen Sie unserer Datenverarbeitung gemäß DSGVO zu.", submit: "Anfrage senden", successTitle: "Vielen Dank.", successBody: "Wir melden uns innerhalb von 24 Stunden." },
    },
    footer: {
      tag: "Industrielle KI-Infrastruktur für den deutschen Mittelstand. Teil von EX AI & EX Venture.",
      legal: ["Gemino AI GmbH · HRB 39902 · AG Leipzig", "Kienberger Allee 4, 12529 Schönefeld", "Geschäftsführer: Julien Uhlig", "USt-IdNr.: DE453856380"],
      navTitle: "Navigation",
      ecoTitle: "Ökosystem",
      contactTitle: "Kontakt",
      contactLines: ["info@gemino.ai", "+49 341 9288107", "Mo–Fr · 09:00–18:00"],
      copyright: "© 2026 Gemino AI GmbH · Teil von EX Venture",
    },
  },
};

/* ====================== NAV ====================== */
function Nav({ scrolled, active, sections, onJump, lang, setLang }) {
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#top" className="nav-brand" onClick={(e) => { e.preventDefault(); onJump("top"); }}>
          <span className="dot" />
          <span><span className="brand-word">GEMINO</span> <span className="brand-ai">AI</span></span>
        </a>
        <div className="nav-links">
          {sections.map(s => (
            <button key={s.id}
                    className={`nav-link ${active === s.id ? "active" : ""}`}
                    onClick={() => onJump(s.id)}>
              {s.label}
            </button>
          ))}
        </div>
        <div className="nav-right">
          <div className="lang-switch">
            {["DE","EN","ES"].map(l => (
              <button key={l} className={lang === l.toLowerCase() ? "active" : ""}
                      onClick={() => setLang(l.toLowerCase())}>{l}</button>
            ))}
          </div>
          <button className="btn-cta" onClick={() => onJump("contact")}>
            Gespräch Buchen <IArrowR size={13} />
          </button>
        </div>
      </div>
    </nav>
  );
}

/* ====================== HERO ====================== */
function Hero({ t, onJump }) {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const fmt = (n) => String(n).padStart(2, "0");
  const tstr = `${fmt(time.getUTCHours()+1)}:${fmt(time.getUTCMinutes())}:${fmt(time.getUTCSeconds())}`;

  return (
    <section id="top" className="hero">
      <div className="grid-bg" />
      <div className="wrap">
        <div className="hero-meta">
          <span className="live-pulse"><span className="live-dot" />{t.heroLocation}</span>
        </div>
        <h1>
          {t.heroTitle[0]}<em>{t.heroTitle[1]}</em>{t.heroTitle[2]}
        </h1>
        <p className="hero-sub">{t.heroSub}</p>
        <div className="hero-pills">
          {t.pills.map((p,i) => (
            <span key={i} className="pill"><span className="ck"><ICheck size={11} /></span>{p}</span>
          ))}
        </div>
        <div className="hero-ctas">
          <button className="btn-primary" onClick={() => onJump("contact")}>
            {t.primary} <span className="arr"><IArrowR size={15} /></span>
          </button>
          <button className="btn-ghost" onClick={() => onJump("products")}>
            {t.secondary}
          </button>
        </div>
      </div>
      <div className="hero-coords">
        <div className="row"><span className="k">LAT</span><span className="v">51.3397°N</span></div>
        <div className="row"><span className="k">LON</span><span className="v">12.3731°E</span></div>
        <div className="row"><span className="k">UTC+1</span><span className="v mono">{tstr}</span></div>
      </div>
      <button className="scroll-cue" onClick={() => onJump("thesis")} style={{ background: "transparent", border: "none", cursor: "pointer" }}>
        <span>{t.scroll}</span>
        <span className="line" />
      </button>
    </section>
  );
}

/* ====================== STATS ====================== */
function StatsStrip({ t }) {
  return (
    <section className="stats">
      <div className="wrap">
        <div className="stats-grid">
          {t.stats.map((s, i) => {
            const m = String(s.n).match(/^([+-]?[0-9]+)(.*)$/);
            const num = m ? m[1] : s.n;
            const unit = m ? m[2] : "";
            return (
              <div className="cell" key={i}>
                <div className="stat-num">{num}<span className="unit">{unit}</span></div>
                <div className="stat-k">{s.k}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ====================== THESIS ====================== */
function Thesis({ t }) {
  return (
    <section id="thesis" className="thesis">
      <div className="wrap">
        <div className="sec-eyebrow">
          <span className="num">→</span>
          <span className="bar" />
          <span>Grundsätze</span>
        </div>
        <div>
          {t.thesis.map((row, i) => (
            <div className="thesis-row" key={i}>
              <div className="thesis-num">{row.num}</div>
              <div className="thesis-label">{row.label}</div>
              <div className="thesis-body">
                {row.parts.map((p, idx) =>
                  idx % 2 === 1 ? <em key={idx}>{p}</em> : <span key={idx}>{p}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ====================== PRODUCTS ====================== */
function Products({ t }) {
  const [open, setOpen] = useState("optivx");
  return (
    <section id="products" className="section products">
      <div className="grid-bg" />
      <div className="wrap">
        <div className="sec-header">
          <div className="sec-header-left">
            <div className="sec-eyebrow">
              <span className="num">{t.productsSection.num}</span>
              <span className="bar" />
              <span>{t.productsSection.eyebrow}</span>
            </div>
            <h2 className="sec-title">
              {t.productsSection.title[0]}<em>{t.productsSection.title[1]}</em>
            </h2>
          </div>
          <p className="sec-sub">{t.productsSection.sub}</p>
        </div>
        <div className="product-list">
          {t.products.map((p) => (
            <div key={p.id} className={`product-row ${open === p.id ? "open" : ""}`}>
              <button className="product-head" onClick={() => setOpen(open === p.id ? null : p.id)}>
                <span className="product-num">{p.code} /</span>
                <span className="product-key">{p.key}</span>
                <span className="product-name">
                  <span className="accent">{p.name}</span>
                  <span className="dash">—</span>
                  <span className="label">{p.label}</span>
                </span>
                <span className="product-chev"><IPlus size={14} sw={2} /></span>
              </button>
              <div className="product-body">
                <div className="product-body-inner">
                  <p className="product-desc">{p.body}</p>
                  <div className="product-meta">
                    {p.meta.map((m, i) => (
                      <div className="product-meta-row" key={i}>
                        <span className="product-meta-k">{m[0]}</span>
                        <span className="product-meta-v">{m[1]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ====================== PHILOSOPHY ====================== */
function Philosophy({ t }) {
  return (
    <section id="philosophy" className="philosophy">
      <div className="wrap">
        <div>
          <div className="sec-eyebrow">
            <span className="num">{t.philosophy.num}</span>
            <span className="bar" />
            <span>{t.philosophy.eyebrow}</span>
          </div>
          <h2>
            {t.philosophy.title[0]}<em>{t.philosophy.title[1]}</em>{t.philosophy.title[2]}
          </h2>
          <p className="lead">{t.philosophy.lead}</p>
          <p className="kicker">{t.philosophy.kicker}</p>
        </div>
        <div className="philosophy-img">
          <img src="https://gemino.ai/feature-landing.jpg" alt="Gemino AI feature" loading="lazy" />
          <div className="overlay" />
          <div className="tag">{t.philosophy.photoTag}</div>
        </div>
      </div>
    </section>
  );
}

/* ====================== PROJECTS ====================== */
function Projects({ t, onJump }) {
  return (
    <section id="projects" className="section projects">
      <div className="wrap">
        <div className="sec-header">
          <div className="sec-header-left">
            <div className="sec-eyebrow">
              <span className="num">{t.projectsSection.num}</span>
              <span className="bar" />
              <span>{t.projectsSection.eyebrow}</span>
            </div>
            <h2 className="sec-title">
              {t.projectsSection.title[0]}<em>{t.projectsSection.title[1]}</em>
            </h2>
          </div>
          <p className="sec-sub">{t.projectsSection.sub}</p>
        </div>
        <div className="projects-grid">
          {t.projects.map((p, i) => p.featured ? (
            <div className="project-card featured" key={i}>
              <div>
                <div className="top">
                  <span className="project-num">{p.num}</span>
                  <span className="project-tag">{p.tag}</span>
                </div>
                <h4 className="project-name" style={{ marginTop: 18 }}>{p.name}</h4>
                <p className="project-desc">{p.desc}</p>
                <button className="featured-cta" onClick={() => onJump("research")}>
                  R&D Details <IArrowR size={13} />
                </button>
              </div>
              <div className="featured-right">
                <div className="row"><span className="k">Focus</span><span className="v">Cloud Infrastructure</span></div>
                <div className="row"><span className="k">Role</span><span className="v">Lead Data Architect</span></div>
                <div className="row"><span className="k">Status</span><span className="v">R&D Pipeline</span></div>
              </div>
              <div className="arrow"><IArrowUR size={18} sw={1.5} /></div>
            </div>
          ) : (
            <div className="project-card" key={i}>
              <div className="top">
                <span className="project-num">{p.num}</span>
                <span className="project-tag">{p.tag}</span>
              </div>
              <div>
                <h4 className="project-name">{p.name}</h4>
                <p className="project-desc">{p.desc}</p>
              </div>
              <div className="arrow"><IArrowUR size={18} sw={1.5} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ====================== RESEARCH (AUTOBIO-KI) ====================== */
function Research({ t }) {
  const r = t.research;
  const p = r.project;
  return (
    <section id="research" className="research">
      <div className="grid-bg" />
      <div className="wrap">
        <div className="sec-header">
          <div className="sec-header-left">
            <div className="sec-eyebrow">
              <span className="num">{r.num}</span>
              <span className="bar" />
              <span>{r.eyebrow}</span>
            </div>
            <h2 className="sec-title">
              {r.title[0]}<em>{r.title[1]}</em>
            </h2>
          </div>
          <p className="sec-sub">{r.lead}</p>
        </div>

        <article className="research-card">
          <div className="research-card-head">
            <div className="research-badge">
              <span className="dot" /> R&D FOCUS · BIOECONOMY
            </div>
          </div>

          <h3 className="research-code">{p.code}</h3>
          <p className="research-tagline">{p.tagline}</p>

          <div className="research-grid">
            <div className="research-meta">
              {p.meta.map((m, i) => (
                <div className="research-meta-row" key={i}>
                  <span className="k">{m[0]}</span>
                  <span className="v">{m[1]}</span>
                </div>
              ))}
            </div>
            <div className="research-body">
              <p className="research-body-lead">{p.body}</p>
              <div className="research-contrib-label">{p.contribTitle}</div>
              <ul className="research-contrib">
                {p.contrib.map((c, i) => (
                  <li key={i}>
                    <span className="bullet">/</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="research-partners">
            <span className="k">{p.partnersLabel}</span>
            <span className="v">{p.partners}</span>
          </div>
        </article>
      </div>
    </section>
  );
}

/* ====================== ECOSYSTEM / ABOUT ====================== */
function Ecosystem({ t }) {
  return (
    <section id="about" className="ecosystem">
      <div className="wrap">
        <div className="ecosystem-img">
          <img src="https://gemino.ai/story-landing.jpg" alt="Gemino AI Team Leipzig" loading="lazy" />
          <div className="overlay" />
        </div>
        <div>
          <div className="sec-eyebrow">
            <span className="bar" />
            <span>{t.ecosystem.eyebrow}</span>
          </div>
          <h2>
            {t.ecosystem.title[0]}<em>{t.ecosystem.title[1]}</em>{t.ecosystem.title[2]}
          </h2>
          <p>{t.ecosystem.p1}</p>
          <p>{t.ecosystem.p2}</p>
          <a className="ecosystem-link" href="https://ex-ai.co" target="_blank" rel="noopener">
            {t.ecosystem.link} <IArrowR size={13} />
          </a>
          <div className="compliance">
            <div className="compliance-label">{t.ecosystem.complianceLabel}</div>
            <div className="compliance-list">
              {t.ecosystem.compliance.map((c, i) => (
                <span key={i} className="pill"><span className="ck"><ICheck size={11} /></span>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ====================== CTA + CONTACT FORM ====================== */
function CTA({ t }) {
  const [form, setForm] = useState({ name: "", company: "", email: "", interest: "OptiVX", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | done
  const onChange = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.name) return;
    setStatus("sending");
    setTimeout(() => setStatus("done"), 900);
  };
  return (
    <section id="contact" className="cta-final">
      <div className="wrap">
        <div className="sec-eyebrow" style={{ justifyContent: "center" }}>
          <span className="bar" />
          <span>08 · Kontakt</span>
          <span className="bar" />
        </div>
        <h2>{t.cta.title[0]}<em>{t.cta.title[1]}</em>{t.cta.title[2]}</h2>
        <p>{t.cta.sub}</p>
        <div className="btns">
          <a className="btn-primary" href="mailto:info@gemino.ai">
            <IMail size={15} /> info@gemino.ai
          </a>
          <a className="btn-ghost" href="tel:+493419288107">
            +49 341 9288107
          </a>
        </div>
        <div className="contact-form">
          {status === "done" ? (
            <div className="success">
              <div className="ck-big"><ICheck size={20} sw={2.2} /></div>
              <h4>{t.cta.form.successTitle}</h4>
              <p>{t.cta.form.successBody}</p>
            </div>
          ) : (
            <form onSubmit={onSubmit}>
              <div className="title">
                <h3>{t.cta.form.title}</h3>
                <span className="reply">● {t.cta.form.reply}</span>
              </div>
              <div className="field-group">
                <div className="field">
                  <label>{t.cta.form.name}</label>
                  <input required value={form.name} onChange={onChange("name")} placeholder="Max Mustermann" />
                </div>
                <div className="field">
                  <label>{t.cta.form.company}</label>
                  <input value={form.company} onChange={onChange("company")} placeholder="GmbH / AG / KG" />
                </div>
              </div>
              <div className="field-group">
                <div className="field">
                  <label>{t.cta.form.email}</label>
                  <input type="email" required value={form.email} onChange={onChange("email")} placeholder="name@firma.de" />
                </div>
                <div className="field">
                  <label>{t.cta.form.interest}</label>
                  <select value={form.interest} onChange={onChange("interest")}>
                    <option>OptiVX</option>
                    <option>EduVX</option>
                    <option>ResearchVX</option>
                    <option>FundingVX</option>
                    <option>CustomVX</option>
                  </select>
                </div>
              </div>
              <div className="field-group single">
                <div className="field">
                  <label>{t.cta.form.message}</label>
                  <textarea value={form.message} onChange={onChange("message")} placeholder="Erzählen Sie uns von Ihrem Projekt…" />
                </div>
              </div>
              <div className="submit-row">
                <span className="legal">{t.cta.form.legal}</span>
                <button type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "…" : <><ISend size={13} sw={2} /> {t.cta.form.submit}</>}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ====================== FOOTER ====================== */
function Footer({ t, onJump }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <span style={{ display: "inline-flex", width: 24, height: 24, borderRadius: 6, background: "linear-gradient(135deg, #38bdf8, #6366f1)", alignItems: "center", justifyContent: "center", color: "#030911", fontWeight: 500, fontSize: 13 }}>G</span>
              <span className="name">GEMINO <span className="ai">AI</span></span>
            </div>
            <p className="footer-tag">{t.footer.tag}</p>
            <div className="footer-legal">
              {t.footer.legal.map((l, i) => <div key={i}>{l}</div>)}
            </div>
          </div>
          <div className="footer-col">
            <h5>{t.footer.navTitle}</h5>
            <ul>
              <li><a onClick={(e) => { e.preventDefault(); onJump("products"); }} href="#products">{t.nav.products}</a></li>
              <li><a onClick={(e) => { e.preventDefault(); onJump("projects"); }} href="#projects">{t.nav.projects}</a></li>
              <li><a onClick={(e) => { e.preventDefault(); onJump("about"); }} href="#about">{t.nav.about}</a></li>
              <li><a onClick={(e) => { e.preventDefault(); onJump("contact"); }} href="#contact">{t.nav.contact}</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>{t.footer.ecoTitle}</h5>
            <ul>
              <li><a href="https://ex-ai.co" target="_blank" rel="noopener">EX AI</a></li>
              <li><a href="https://exventure.co" target="_blank" rel="noopener">EX Venture</a></li>
              <li><a href="https://julien-uhlig.com" target="_blank" rel="noopener">Julien Uhlig</a></li>
              <li><a href="https://mindwaves-consult.com" target="_blank" rel="noopener">MindWaves AI</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>{t.footer.contactTitle}</h5>
            <ul>
              {t.footer.contactLines.map((l, i) => <li key={i}>{l}</li>)}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{t.footer.copyright}</span>
          <span style={{ display: "flex", gap: 20 }}>
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
            <a href="#">AGB</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ====================== SIDE RAIL ====================== */
function SideRail({ active, sections, visible, onJump }) {
  return (
    <div className={`section-rail ${visible ? "visible" : ""}`}>
      {sections.map((s, i) => (
        <button key={s.id}
                className={`rail-item ${active === s.id ? "active" : ""}`}
                onClick={() => onJump(s.id)}>
          <span className="bar" />
          <span>{String(i+1).padStart(2,"0")} · {s.short}</span>
        </button>
      ))}
    </div>
  );
}

/* ====================== APP ====================== */
function App() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("top");
  const [railVisible, setRailVisible] = useState(false);
  const [lang, setLang] = useState("de");

  const t = COPY[lang] || COPY.de;

  const sections = [
    { id: "thesis",      label: t.nav.products /* not exact */, short: "Grundsätze" },
    { id: "products",    label: t.nav.products,                 short: "Produkte" },
    { id: "philosophy",  label: t.nav.about,                    short: "Philosophie" },
    { id: "projects",    label: t.nav.projects,                 short: "Projekte" },
    { id: "research",    label: "Forschung & Entwicklung",      short: "F&E" },
    { id: "about",       label: t.nav.about,                    short: "Ökosystem" },
    { id: "contact",     label: t.nav.contact,                  short: "Kontakt" },
  ];

  // Nav uses subset
  const navSections = [
    { id: "products", label: t.nav.products },
    { id: "projects", label: t.nav.projects },
    { id: "about",    label: t.nav.about },
    { id: "contact",  label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setRailVisible(y > window.innerHeight * 0.6 && y < document.body.scrollHeight - window.innerHeight * 1.4);

      // find which section we're in
      let current = "top";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) {
          current = s.id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onJump = (id) => {
    if (id === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <Nav scrolled={scrolled} active={active} sections={navSections} onJump={onJump} lang={lang} setLang={setLang} />
      <Hero t={t} onJump={onJump} />
      <StatsStrip t={t} />
      <Thesis t={t} />
      <Products t={t} />
      <Philosophy t={t} />
      <Projects t={t} onJump={onJump} />
      <Research t={t} />
      <Ecosystem t={t} />
      <CTA t={t} />
      <Footer t={t} onJump={onJump} />
      <SideRail active={active} sections={sections} visible={railVisible} onJump={onJump} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
