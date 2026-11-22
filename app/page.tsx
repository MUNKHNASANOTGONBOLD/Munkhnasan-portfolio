"use client";
import { useEffect, useRef, useState } from "react";
import "./preview/preview.css";
const NAV = [
  { href: "#standing", label: "01 · Standing" },
  { href: "#account", label: "02 · Account Summary" },
  { href: "#ledger", label: "03 · Experience" },
  { href: "#projects", label: "04 · Projects" },
  { href: "#holdings", label: "05 · Skills" },
  { href: "#instruments", label: "06 · Education" },
  { href: "#contact", label: "07 · Contact" },
];

const METRICS = [
  { label: "Financial records analyzed", value: "1M+", note: "SQL · Python · Advanced Excel" },
  { label: "Megaprojects modeled", value: "24", note: "Cash-flow forecasts · repayment schedules · debt capacity" },
  { label: "Infrastructure financing supported", value: "~$850M", note: "Municipal funding · budget and debt-service capacity" },
  { label: "Reporting time reduced", value: "83%", note: "Approximately 12 hours reduced to 2 hours" },
];

type LedgerEntry = {
  period: string;
  role: string;
  org: string;
  type: "Full-time" | "Contract" | "Internship" | "Leadership" | "Current";
  lines: string[];
};

const LEDGER: LedgerEntry[] = [
  {
    period: "Jul 2026 to Aug 2026",
    role: "Operations Analyst Intern",
    org: "Digital Factory",
    type: "Internship",
    lines: [
      "Analyzed operational and financial data with SQL and Python and built Power BI dashboards to identify cost drivers and support budgeting and forecasting.",
      "Presented dashboard findings and recommended short-term resourcing changes.",
    ],
  },
  {
    period: "Jan 2026 to May 2026",
    role: "Data Analyst Intern",
    org: "MDThink",
    type: "Internship",
    lines: [
      "Validated healthcare datasets with targeted SQL queries, built Power BI dashboards with 100+ DAX measures and row-level security, and automated weekly reporting workflows with Python and SQL.",
    ],
  },
  {
    period: "Oct 2025 to Dec 2025",
    role: "Data Analyst Intern",
    org: "Trustco Bank",
    type: "Internship",
    lines: [
      "Analyzed financial and risk data with Python, automated SSIS reporting, and built Tableau KPI dashboards; reconciled Oracle datasets using metadata management and Azure DevOps to resolve discrepancies in compliance reports.",
    ],
  },
  {
    period: "Apr 2022 to Jun 2025",
    role: "Budget & Debt Analyst",
    org: "Governor's Office of the Capital City, Ulaanbaatar, Mongolia",
    type: "Full-time",
    lines: [
      "Analyzed more than 1 million financial records across 70+ municipal organizations using SQL, Python, and advanced Excel, and built Tableau dashboards for executive oversight.",
      "Automated weekly, monthly, quarterly, and annual financial reporting, cutting preparation time from about 12 hours to 2 hours (83%).",
      "Presented expenditure variances and financial performance, and drafted recommendations for the Mayor, Chief of Staff, and senior municipal officials.",
      "As Secretary of the Capital Raising Working Group, assessed funding needs for Ulaanbaatar's 24 megaprojects against municipal budgets and debt-service capacity and helped coordinate approximately $850 million in infrastructure financing.",
    ],
  },
  {
    period: "Apr 2021 to Apr 2022",
    role: "Financial and Business Analyst",
    org: "NAMO LLC",
    type: "Full-time",
    lines: [
      "Managed financial statements using internal planning models and automation tools, reducing manual tasks by 48%.",
      "Developed and maintained 20+ financial forecasting and projection models for budgeting, cash-flow planning, expenditure analysis, and financial performance monitoring.",
      "Built KPI dashboards to track budget variances and cash flow and presented findings to executives to support budgeting and forecasting decisions.",
    ],
  },
];

type ProjectEntry = {
  period: string;
  title: string;
  blurb: string;
  tags: string[];
  href: string;
  image: string;
};

const PROJECTS: ProjectEntry[] = [
  {
    period: "Oct 2026",
    title: "WMATA Bus Operations Analytics",
    blurb: "I collected 1,143,917 GPS observations in about 24.7 hours and used SQL to select 20,261 samples for comparing reported schedule deviations by route and hour.",
    tags: ["Python", "SQL", "SQLite", "Tableau", "API"],
    href: "https://www.linkedin.com/pulse/i-tracked-114-million-bus-gps-records-across-dc-heres-otgonbold-ztrpe/",
    image: "/projects/wmata.svg",
  },
  {
    period: "2026",
    title: "Consumer Complaint Analytics",
    blurb: "I explored 261,392 consumer complaints in Tableau and used LLM-assisted text classification and summarization to identify recurring issues.",
    tags: ["Tableau", "KPI Reporting", "Trend Analysis", "Text Classification"],
    href: "https://www.linkedin.com/pulse/after-transaction-what-261392-consumer-complaints-otgonbold-gbrze/",
    image: "/projects/customer-complaints.svg",
  },
  {
    period: "Jan 2026",
    title: "World Bank Loan Portfolio Analytics",
    blurb:
      "I cleaned 11,404 IDA financing records across 131 countries and built a Power BI-ready star schema, an Excel model workbook, and HTML dashboard prototypes.",
    tags: ["Python", "Power BI", "DAX"],
    href: "https://www.linkedin.com/pulse/anatomy-world-bank-loan-munkhnasan-otgonbold-9ilee/",
    image: "/projects/worldbank.svg",
  },
  {
    period: "Dec 2025",
    title: "SBA Loan Portfolio Analytics",
    blurb:
      "My team analyzed about 249,000 public SBA loan records. We mapped the source fields and wrote SQL to compare approvals by lender, district, industry, and fiscal year.",
    tags: ["SQL Server", "SSIS", "Tableau", "Excel"],
    href: "https://www.linkedin.com/pulse/sba-loans-i-wrote-coffee-shop-ended-249000-rows-munkhnasan-otgonbold-yg8te/",
    image: "/projects/sba.svg",
  },
  {
    period: "Nov 2025",
    title: "Financial Transaction Analytics",
    blurb:
      "I cleaned 5,002 synthetic practice transactions in pandas, calculated net amounts and fee percentages, and charted the results in a Jupyter notebook.",
    tags: ["Python", "pandas", "NumPy", "Matplotlib"],
    href: "https://www.linkedin.com/pulse/other-side-ledger-what-customer-data-looks-like-munkhnasan-otgonbold-1kste/",
    image: "/projects/ledger.svg",
  },
  {
    period: "2025",
    title: "The Hidden Cost of Healthcare Billing",
    blurb:
      "I used Snowflake SQL to check a healthcare billing practice dataset and prepared Tableau views for claims, appointments, and prior authorizations.",
    tags: ["SQL", "Snowflake", "SSIS", "Tableau"],
    href: "https://www.linkedin.com/pulse/hidden-cost-healthcare-billing-munkhnasan-otgonbold-zlrce/",
    image: "/projects/healthcare.svg",
  },
  {
    period: "Feb 2026",
    title: "IFC Investment Services Projects",
    blurb:
      "I cleaned 7,083 public IFC disclosures covering 172 countries and built an HTML dashboard to explore investment instruments, industries, and geography.",
    tags: ["Excel", "Python", "SQL"],
    href: "https://www.linkedin.com/pulse/ifc-investment-services-projects-munkhnasan-otgonbold-b878e/",
    image: "/projects/ifc.svg",
  },
];

const SKILLS = [
  {
    group: "BI & Visualization",
    items: ["Power BI (DAX, RLS, semantic models)", "Tableau (LOD, calculated fields, dashboards)", "Advanced Excel"],
  },
  {
    group: "Querying & Analytics",
    items: ["SQL (joins, CTEs, window functions)", "Python (pandas, NumPy, Matplotlib)"],
  },
  {
    group: "Databases & Cloud",
    items: ["SQL Server", "Oracle", "Snowflake", "AWS (Redshift, Athena, Glue)", "SQL Server Data Tools"],
  },
  {
    group: "Governance & Data Quality",
    items: ["Metadata & Data Catalogs", "Data Lineage & Dictionaries", "Governance Frameworks", "Validation & Reconciliation"],
  },
  {
    group: "Tools & Workflow",
    items: ["Jira", "Azure DevOps", "Git", "SSIS", "Alteryx"],
  },
  {
    group: "Finance",
    items: ["Investment Analysis", "Public Finance", "Project Financing", "Financial Modeling", "Cash Flow Analysis", "DCF & ROI Analysis", "Budgeting", "Forecasting", "Variance Analysis"],
  },
];

const EDUCATION = [
  { degree: "M.S. in Data Analytics, Business Analytics Concentration", org: "University of the Potomac, USA", note: "2025 – 2027 · GPA 3.91" },
  { degree: "MBA, Project Management", org: "University of Finance and Economy, Mongolia", note: "Aug 2021 – Jul 2022 · GPA 3.60" },
  { degree: "BBA, Finance", org: "National University of Mongolia", note: "Sep 2017 – Jun 2021" },
];

const PROFESSIONAL_DEVELOPMENT = [
  { name: "SQL (Advanced)", org: "HackerRank", date: "2026" },
  { name: "Data Analyst Bootcamp", org: "Advanced SQL, Python & Reporting · Tech2high", date: "2025" },
  { name: "Tableau Desktop I & II", org: "Novelsoft · Tableau Partner", date: "2023" },
  { name: "Microsoft Power BI: Intermediate Level", org: "Power BI Consultant", date: "2023" },
  { name: "Project Management", org: "Ganzorig Business School", date: "2022" },
];

const AWARDS = [
  { name: "Best Employee Award", org: "Governor's Office of the Capital City", date: "2024" },
  { name: "Best Graduate Award", org: "National University of Mongolia", date: "2021" },
];


const categories = ["All", ...Array.from(new Set(SKILLS.map(group => group.group)))];
const anchors = [
  ["about", "About"], ["skills", "Skills"], ["work", "Work"],
  ["experience", "Experience"], ["achievements", "Achievements"],
  ["education", "Education"], ["contact", "Contact"]
];

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach(n => n.classList.add("shown"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add("shown"); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function Counter({ text }: {text:string}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(text);
  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const match = text.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
    if (!match) return;
    const [, prefix, raw, suffix] = match;
    let raf = 0;
    const observer = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return;
      const start = performance.now();
      const decimal = raw.includes(".");
      const tick = (time:number) => {
        const p = Math.min(1, (time-start)/1100);
        const eased = 1-Math.pow(1-p, 3);
        setValue(prefix + (decimal ? (Number(raw)*eased).toFixed(raw.split(".")[1].length) : Math.round(Number(raw)*eased)) + suffix);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.5 });
    observer.observe(node);
    return () => { observer.disconnect(); cancelAnimationFrame(raf); };
  }, [text]);
  return <span ref={ref}>{value}</span>;
}

function Icon({name}:{name:"arrow"|"plus"|"external"}) {
  return <span aria-hidden="true">{name==="plus" ? "＋" : name==="arrow" ? "↗" : "↗"}</span>;
}

export default function PreviewPage() {
  useReveal();
  const [active, setActive] = useState("about");
  const [menu, setMenu] = useState(false);
  const [skillCategory, setSkillCategory] = useState("All");
  const [selectedSkill, setSelectedSkill] = useState<string|null>(null);
  const [selectedProject, setSelectedProject] = useState(0);
  const [expandedExperience, setExpandedExperience] = useState<number[]>(LEDGER.map((_,i)=>i));
  const [expandedAward, setExpandedAward] = useState<number|null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {if (e.isIntersecting) setActive(e.target.id);});
    }, {rootMargin:"-30% 0px -55% 0px"});
    anchors.forEach(([id]) => {const node = document.getElementById(id); if(node) observer.observe(node);});
    return () => observer.disconnect();
  }, []);
  const groups = SKILLS.filter(group => skillCategory==="All" || skillCategory===group.group);
  const selectedMatches = selectedSkill
    ? PROJECTS.filter(project => project.tags.some(tag => selectedSkill.toLowerCase().includes(tag.toLowerCase()) || tag.toLowerCase().includes(selectedSkill.toLowerCase())))
    : [];
  return <main className="mugi-v2" id="top">
    <div className="grain" aria-hidden="true" />
    <header className="nav-shell">
      <a className="brand" href="#top" aria-label="Mason, back to top">MAS<span className="brand-star">✳</span>N<span className="brand-dot">.</span></a>
      <nav className={"floating-nav "+(menu?"nav-open":"")} aria-label="Main navigation">
        {anchors.map(([id,label]) => <a key={id} href={"#"+id} className={active===id?"current":""} onClick={()=>setMenu(false)}>{label}</a>)}
      </nav>
      <a href="/Munkhnasan-Otgonbold-Resume.pdf" download className="nav-resume">Resume <span>↗</span></a>
      <button className="menu-toggle" onClick={()=>setMenu(!menu)} aria-expanded={menu} aria-controls="mobile-nav">{menu?"Close":"Menu"} <span>☰</span></button>
    </header>
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-overline"><span className="status-pulse"/> AVAILABLE FOR ANALYTICS OPPORTUNITIES <span className="hero-index">PORTFOLIO / 2026</span></div>
      <div className="hero-main">
        <div className="hero-copy">
          <div className="eyebrow">FINANCE × DATA × IMPACT</div>
          <h1 id="hero-title">Data analyst<br/>with a background<br/>in <em>municipal finance.</em></h1>
          <p className="hero-sub">Hi, I&apos;m <strong>Mason.</strong> I’ve analyzed data since my first finance role. I use SQL, Python, Power BI, and Tableau to check data, automate reports, and explain what changed.</p>
          <div className="hero-actions">
            <a className="pill-btn dark" href="#work">Explore my work <Icon name="arrow"/></a>
            <a className="pill-btn light" href="#about">Get to know me <span>↓</span></a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Decorative professional portfolio feature">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <div className="hero-feature">
            <div className="feature-label">DATA INTO DECISIONS <span>01 / 04</span></div>
            <div className="feature-spark" aria-hidden="true"><span style={{height:"24%"}}/><span style={{height:"42%"}}/><span style={{height:"35%"}}/><span style={{height:"68%"}}/><span style={{height:"55%"}}/><span style={{height:"83%"}}/><span style={{height:"100%"}}/></div>
            <div className="feature-bottom"><b>83%</b><small>LESS REPORTING TIME<br/>12 HOURS → 2 HOURS</small></div>
          </div>
          <span className="visual-stamp">ANALYZE<br/>DESIGN<br/>IMPROVE ↗</span>
        </div>
      </div>
      <div className="hero-footer"><span>BASED IN ARLINGTON, VA</span><a href="#about">SCROLL TO EXPLORE ↓</a><span>DATA WITH PURPOSE © 2026</span></div>
    </section>
    <section id="about" className="section about-section">
      <div className="section-meta reveal"><span>01 / THE HUMAN BEHIND THE DATA</span><span>ABOUT ME</span></div>
      <div className="about-layout">
        <div className="reveal">
          <h2 className="section-title">Hi, I&apos;m <em>Mason.</em></h2>
          <p className="about-lead">M.S. Data Analytics candidate specializing in Business Analytics.</p>
          <div className="body-copy">
            <p>At NAMO, I analyzed budget variances and cash flow, built forecasts, and presented KPI dashboards to executives. In Ulaanbaatar’s municipal government, I analyzed more than a million financial records and cut recurring report preparation from about 12 hours to two.</p>
            <p>I use SQL and Python to profile and validate datasets and automate recurring reports. I build Power BI and Tableau dashboards with access controls where needed and apply data quality and metadata practices to help teams rely on the results.</p>
            <p>I’m looking for internships in data analytics, BI and reporting, or financial analytics.</p>
          </div>
          <div className="about-links"><a href="https://www.linkedin.com/in/munkhnasan-otgonbold-b319b6161" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/MUNKHNASANOTGONBOLD" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://public.tableau.com/app/profile/munkhnasan.otgonbold/vizzes" target="_blank" rel="noreferrer">Tableau Public ↗</a></div>
        </div>
        <div className="profile-card reveal" tabIndex={0}>
          <div className="id-card-top"><span>PROFESSIONAL IDENTITY</span><span>✳ MASON / 001</span></div>
          <div className="profile-photo"><img src="/headshot.jpg" alt="Munkhnasan Otgonbold" /></div>
          <div className="profile-identity"><span>THE PERSON BEHIND THE NUMBERS</span><h3>Munkhnasan<br/>Otgonbold</h3><p>Finance & Data Analytics</p></div>
          <div className="id-card-bottom"><span>ARLINGTON, VIRGINIA</span><span>ANALYST · BUILDER</span></div>
        </div>
      </div>
    </section>
    <section id="skills" className="section skills-section">
      <div className="section-meta reveal"><span>02 / MY TOOLKIT</span><span>SKILLS & CAPABILITIES</span></div>
      <div className="skills-heading reveal"><h2 className="section-title">Tools I <em>use</em></h2><p>Choose a skill to see where I’ve used it.</p></div>
      <div className="filter-row" role="group" aria-label="Filter skills by category">
        {categories.map(c=><button key={c} className={"filter-chip "+(c===skillCategory?"selected":"")} onClick={()=>{setSkillCategory(c);setSelectedSkill(null)}} aria-pressed={c===skillCategory}>{c}</button>)}
      </div>
      <div className="skill-board">
        {groups.flatMap(group=>group.items.map((item,i)=>({item,group:group.group,i}))).map(({item,group,i})=><button type="button" key={group+item} className={"skill-tile "+(selectedSkill===item?"chosen":"")} onClick={()=>setSelectedSkill(selectedSkill===item?null:item)} aria-pressed={selectedSkill===item}>
          <small>{String(i+1).padStart(2,"0")}</small><strong>{item.split(/[ (]/).map(s=>s[0]||"").join("").slice(0,3).toUpperCase()}</strong><span>{item}</span>
        </button>)}
      </div>
      <div className="skill-detail" aria-live="polite"><div><span className="eyebrow">SELECTED CAPABILITY</span><h3>{selectedSkill||"Choose a skill above"}</h3></div><div><span className="eyebrow">RELATED PROJECTS</span><p>{selectedSkill ? (selectedMatches.length ? selectedMatches.map(p=>p.title).join(" · ") : "Explore the complete project collection for related work.") : "Tap any tile to explore the toolkit."}</p></div></div>
    </section>
    <section id="work" className="section work-section">
      <div className="section-meta reveal"><span>03 / SELECTED WORK</span><span>THE PROJECT ARCHIVE</span></div>
      <div className="work-heading reveal"><h2 className="section-title">Selected <em>projects</em></h2><p>Open a case study for the data source, methods, and findings.</p></div>
      <div className="projects-grid" aria-label="Portfolio projects">
        {PROJECTS.map((p,i)=><article key={p.title} className="project-grid-card">
          <div className="project-grid-art"><img src={p.image} alt={p.title+" project banner"} loading="lazy"/></div>
          <div className="project-grid-info">
            <div className="eyebrow">PROJECT {String(i+1).padStart(2,"0")} / {p.period}</div>
            <h3>{p.title}</h3><p>{p.blurb}</p>
            <div className="tag-row">{p.tags.map(t=><span key={t}>{t}</span>)}</div>
            <a className="pill-btn dark" href={p.href} target={p.href.startsWith("/") ? undefined : "_blank"} rel={p.href.startsWith("/") ? undefined : "noopener noreferrer"}>Read full case study <Icon name="external"/></a>
          </div>
        </article>)}
      </div>
      <div className="work-cta"><span>MORE DATA STORIES & DASHBOARDS</span><a href="https://public.tableau.com/app/profile/munkhnasan.otgonbold/vizzes" target="_blank" rel="noopener noreferrer">Explore my Tableau portfolio ↗</a></div>
    </section>
    <section id="experience" className="section experience-section">
      <div className="section-meta reveal"><span>04 / CAREER JOURNEY</span><span>EXPERIENCE</span></div>
      <h2 className="section-title reveal">Work <em>experience</em></h2>
      <p className="section-intro reveal">From investment decisions to operational intelligence. Select any role to expand its complete description.</p>
      <div className="timeline">
        {LEDGER.map((e,i)=>{const open=expandedExperience.includes(i);return <article className="timeline-entry reveal" key={e.period+e.org+e.role}>
          <div className="timeline-period"><span>{e.period}</span><i/></div>
          <button className="timeline-card" aria-expanded={open} onClick={()=>setExpandedExperience(old=>open?old.filter(n=>n!==i):[...old,i])}>
            <div className="timeline-top"><span className="eyebrow">{e.type}</span><span>{open?"−":"＋"}</span></div><h3>{e.role}</h3><p className="timeline-org">{e.org}</p>
            {open && <ul className="timeline-details">{e.lines.map(line=><li key={line}>{line}</li>)}</ul>}
          </button>
        </article>})}
      </div>
    </section>
    <section id="achievements" className="section achievement-section">
      <div className="section-meta reveal"><span>05 / IMPACT IN NUMBERS</span><span>ACHIEVEMENTS</span></div>
      <h2 className="section-title reveal">Results from <em>my work</em></h2>
      <div className="achievement-grid">
        {METRICS.map((m,i)=><div key={m.label} className="metric-card reveal"><span className="metric-index">0{i+1} / 04</span><div className="metric-number"><Counter text={m.value}/></div><h3>{m.label}</h3><p>{m.note}</p></div>)}
      </div>
      <div className="impact-note reveal">
        <h3>Behind every number is a decision.</h3>
        <p>My municipal financing experience included preparing documentation for a $500M international revenue-backed bond, proposals for approximately $180M in domestic municipal bonds, and coordinating financing documentation for an $87.2M energy storage project. I supported these transactions through financial analysis, documentation, and coordination.</p>
      </div>
      <div className="awards-block"><div className="subhead"><span>RECOGNITION</span><h3>Proud <em>moments.</em></h3></div><div className="award-list">{AWARDS.map((a,i)=><button key={a.name} className="award-row" onClick={()=>setExpandedAward(expandedAward===i?null:i)} aria-expanded={expandedAward===i}><span className="award-index">0{i+1}</span><span className="award-name">{a.name}{expandedAward===i&&<small>{a.org}</small>}</span><span className="award-date">{a.date}</span><span className="award-icon">{expandedAward===i?"−":"＋"}</span></button>)}</div></div>
    </section>
    <section id="education" className="section education-section">
      <div className="section-meta reveal"><span>06 / ALWAYS LEARNING</span><span>EDUCATION & GROWTH</span></div>
      <h2 className="section-title reveal">Always <em>learning.</em></h2>
      <div className="education-layout">
        <div className="reveal"><h3 className="column-label">EDUCATION</h3>{EDUCATION.map(e=><article className="edu-card" key={e.degree}><h4>{e.degree}</h4><p>{e.org}</p><span>{e.note}</span></article>)}</div>
        <div className="reveal"><h3 className="column-label">CERTIFICATIONS & PROFESSIONAL DEVELOPMENT</h3>{PROFESSIONAL_DEVELOPMENT.map((c,i)=><article className="certificate-row" key={c.name}><span>{String(i+1).padStart(2,"0")}</span><div><h4>{c.name}</h4><p>{c.org}</p></div><span>{c.date}</span></article>)}</div>
      </div>
    </section>
    <section id="contact" className="contact-section">
      <div className="section-meta"><span>07 / WHAT'S NEXT?</span><span>GET IN TOUCH</span></div>
      <h2>Let&apos;s make<br/><em>something matter.</em></h2>
      <p>Open to Data Analyst, Business Analyst, BI, Financial Analyst, and Operations Analyst opportunities.</p>
      <a className="contact-email" href="mailto:munkhnasanotgonbold92@gmail.com">Let&apos;s talk <Icon name="arrow"/></a>
      <div className="contact-links"><a href="mailto:munkhnasanotgonbold92@gmail.com">Email ↗</a><a href="tel:+15712380015">Phone ↗</a><a href="https://www.linkedin.com/in/munkhnasan-otgonbold-b319b6161" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/MUNKHNASANOTGONBOLD" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://public.tableau.com/app/profile/munkhnasan.otgonbold/vizzes" target="_blank" rel="noreferrer">Tableau ↗</a><a href="/Munkhnasan-Otgonbold-Resume.pdf" download>Resume ↗</a></div>
      <footer><span>© {new Date().getFullYear()} MUNKHNASAN OTGONBOLD</span><span>DESIGNED WITH INTENTION · BUILT WITH DATA</span><a href="/legacy">ORIGINAL PORTFOLIO ↗</a><a href="#top">BACK TO TOP ↑</a></footer>
    </section>
  </main>;
}
