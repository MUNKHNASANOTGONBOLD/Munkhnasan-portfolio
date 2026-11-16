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
  { label: "Business proposals developed", value: "300+", note: "Financial modeling · ROI · risk assessment" },
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
    period: "Jul 2026 — Aug 2026",
    role: "Operations Analyst Intern",
    org: "Digital Factory",
    type: "Internship",
    lines: [
      "Analyzed operational and financial data and developed dashboards to support budgeting, forecasting, and process improvement.",
    ],
  },
  {
    period: "Jan 2026 — May 2026",
    role: "Data Analyst Intern",
    org: "MDThink",
    type: "Internship",
    lines: [
      "Validated healthcare datasets using SQL Server and AWS; built Power BI dashboards with 100+ DAX measures and access controls, and automated workflows with Python and SQL.",
    ],
  },
  {
    period: "Oct 2025 — Dec 2025",
    role: "Data Analyst Intern",
    org: "Trustco Bank",
    type: "Internship",
    lines: [
      "Analyzed financial and risk data with Python, automated SSIS reporting, and built Tableau KPI dashboards; reconciled Oracle datasets for accurate compliance reporting.",
    ],
  },
  {
    period: "Jan 2024 — Jun 2025",
    role: "Project Financing and Debt Analyst",
    org: "Governor's Office of the Capital City — Ulaanbaatar, Mongolia",
    type: "Full-time",
    lines: [
      "Built and monitored financial models, cash-flow forecasts, and repayment schedules for Ulaanbaatar's 24-megaproject portfolio; analyzed funding requirements against municipal budgets and debt-service capacity using SQL, Advanced Excel, and Python.",
      "Analyzed on-lending arrangements and repayment obligations for a $95M GCF concessional loan administered through ADB, supporting a program targeting 10,000 affordable, climate-resilient homes.",
      "Prepared financing documentation for a $500M international revenue-backed bond for the Selbe subcenter project; coordinated government approvals, Deutsche Bank, BlackRock, and PIMCO as Secretary of the Capital Raising Working Group.",
      "Coordinated financing documentation for an $87.2M battery energy storage project, including $62.2M in commercial financing and $25M in IFC–Canada concessional capital.",
      "Prepared proposals for approximately $180M in domestic municipal bond issuances supporting energy, wastewater, flood protection, and road projects.",
    ],
  },
  {
    period: "Apr 2022 — Dec 2023",
    role: "Budget Analyst",
    org: "Governor's Office of the Capital City — Ulaanbaatar, Mongolia",
    type: "Full-time",
    lines: [
      "Processed and analyzed more than 1 million financial records across 70+ municipal organizations using SQL, Python, and Advanced Excel; developed Tableau dashboards and automated executive reporting.",
      "Automated financial reporting workflows using SQL, Excel, and Python, reducing preparation time from approximately 12 hours to 2 hours (83%) while improving consistency and accuracy.",
      "Led reconciliation and resolution of discrepancies across financial datasets, applying governance and data-quality controls to maintain accuracy and compliance.",
      "Analyzed heating, electricity, and water expenditure requirements for 500+ schools, kindergartens, hospitals, and other public institutions.",
    ],
  },
  {
    period: "Apr 2021 — Apr 2022",
    role: "Financial and Business Analyst",
    org: "NAMO LLC",
    type: "Full-time",
    lines: [
      "Managed 3 financial statements with discounted cash flow analysis and internal planning models linked to automation tools that decreased manual administrative tasks by 48%.",
      "Developed and maintained 20+ financial forecasting and projection models for budgeting, cash-flow planning, expenditure analysis, and financial performance monitoring.",
      "Established a new forecasting, tracking, and management reporting system that improved the availability and accuracy of financial data, increasing reporting accuracy by 14%.",
    ],
  },
  {
    period: "2021 — 2025",
    role: "Financial Consultant",
    org: "Time Power Rich LLC",
    type: "Contract",
    lines: [
      "Developed 300+ business and funding proposals using Excel and Python financial models, ROI analysis, and risk assessments across agriculture, construction, manufacturing, finance, and other sectors.",
      "Mentored 20+ junior analysts in financial modeling, feasibility analysis, and proposal assessment; 10+ mentees subsequently prepared 100+ financing proposals independently.",
    ],
  },
  {
    period: "2019 — 2020",
    role: "Co-Founder & Chief Financial Officer",
    org: "InvestradeMN Corporation",
    type: "Leadership",
    lines: [
      "Co-founded an investment services business and led its financial management and investment service operations.",
    ],
  },
  {
    period: "2018 — 2019",
    role: "Founder & President",
    org: "NUM Startup Club",
    type: "Leadership",
    lines: [
      "Founded and grew a student entrepreneurship club to 200+ members; led 10+ Startup Weekend, Hackathon, and mentorship events reaching 500+ participants.",
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
    title: "WMATA DC Bus Operations — Real-Time Analytics",
    blurb: "Built a Washington, DC bus operations analytics pipeline from WMATA real-time API snapshots through Python and SQLite to SQL route-hour performance metrics and Tableau dashboards. Explored reported deviations and the share of samples over five minutes late.",
    tags: ["Python", "SQL", "SQLite", "Tableau", "API"],
    href: "https://www.linkedin.com/pulse/i-tracked-114-million-bus-gps-records-across-dc-heres-otgonbold-ztrpe/",
    image: "/projects/wmata.svg",
  },
  {
    period: "2026",
    title: "Customer Complaint Analytics",
    blurb: "An analytics portfolio project focused on understanding customer complaints, investigating patterns, and translating findings into actionable reporting. Project methodology and verified results are being documented.",
    tags: ["Data Analytics", "Customer Experience", "Reporting"],
    href: "https://www.linkedin.com/pulse/after-transaction-what-261392-consumer-complaints-otgonbold-gbrze/",
    image: "/projects/customer-complaints.svg",
  },
  {
    period: "Jan 2026",
    title: "The Anatomy of a World Bank Loan",
    blurb:
      "Modeled the World Bank's public IDA portfolio — 11,404 credits and grants across 131 countries — into a Power BI star schema dashboard for portfolio analysis.",
    tags: ["Python", "Power BI", "DAX"],
    href: "https://www.linkedin.com/pulse/anatomy-world-bank-loan-munkhnasan-otgonbold-9ilee/",
    image: "/projects/worldbank.svg",
  },
  {
    period: "Dec 2025",
    title: "The SBA Loans I Wrote at a Coffee Shop — 249,000 Rows Later",
    blurb:
      "Cleaned, mapped, and analyzed 249,000+ real SBA 7(a) loan records end-to-end from Excel through SSIS to a Tableau dashboard.",
    tags: ["SQL Server", "SSIS", "Tableau", "Excel"],
    href: "https://www.linkedin.com/pulse/sba-loans-i-wrote-coffee-shop-ended-249000-rows-munkhnasan-otgonbold-yg8te/",
    image: "/projects/sba.svg",
  },
  {
    period: "Nov 2025",
    title: "The Other Side of the Ledger",
    blurb:
      "Built a full EDA-to-visualization pipeline on 5,002 messy finance transactions, including cleaning, feature engineering, and reporting.",
    tags: ["Python", "pandas", "NumPy", "Matplotlib"],
    href: "https://www.linkedin.com/pulse/other-side-ledger-what-customer-data-looks-like-munkhnasan-otgonbold-1kste/",
    image: "/projects/ledger.svg",
  },
  {
    period: "2025",
    title: "The Hidden Cost of Healthcare Billing",
    blurb:
      "Built a multi-layer Snowflake → SSIS → Tableau pipeline analyzing claim denial rates and provider performance.",
    tags: ["Snowflake", "SSIS", "Tableau"],
    href: "https://www.linkedin.com/pulse/hidden-cost-healthcare-billing-munkhnasan-otgonbold-zlrce/",
    image: "/projects/healthcare.svg",
  },
  {
    period: "Feb 2026",
    title: "IFC Investment Services Projects",
    blurb:
      "Analyzed 7,083 IFC private-sector investment disclosures across 172 countries and 26 original columns, evaluating project structures, financial products, and country distribution.",
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
    items: ["SQL Server", "Oracle", "Snowflake", "AWS (Redshift, Athena, Glue)"],
  },
  {
    group: "Governance & Data Quality",
    items: ["Metadata & Data Catalogs", "Data Lineage & Dictionaries", "Governance Frameworks", "Validation & Reconciliation"],
  },
  {
    group: "Tools & Workflow",
    items: ["Jira", "Azure DevOps", "Git", "SSIS"],
  },
  {
    group: "Finance",
    items: ["Investment Analysis", "Public Finance", "Project Financing", "Financial Modeling", "DCF & ROI Analysis", "Budgeting", "Forecasting", "Variance Analysis"],
  },
];

const EDUCATION = [
  { degree: "M.S. Data Analytics", org: "University of the Potomac, USA", note: "Jun 2025 – Aug 2027 · GPA 3.89" },
  { degree: "MBA, Project Management", org: "University of Finance and Economy, Mongolia", note: "Aug 2021 – Jul 2022 · GPA 3.60" },
  { degree: "BBA, Finance", org: "National University of Mongolia", note: "Sep 2017 – Jun 2021" },
];

const PROFESSIONAL_DEVELOPMENT = [
  { name: "SQL (Advanced)", org: "HackerRank", date: "2026" },
  { name: "Data Analyst Bootcamp", org: "Advanced SQL, Python & Reporting · Tech2high", date: "2025" },
  { name: "Tableau Desktop I & II", org: "Novelsoft · Tableau Partner", date: "2023" },
  { name: "Microsoft Power BI: Intermediate Level", org: "Power BI Consultant", date: "2023" },
  { name: "Project Management", org: "Ganzorig Business School", date: "2022" },
  { name: "City Finance", org: "World Bank Group · Tokyo Development Learning Center", date: "2025" },
  { name: "FIDIC 2017 Contracts: Red & Yellow Books", org: "ECV Consultancy · Batbayar & Partners LLP · CCM", date: "2025" },
  { name: "Green and Sustainability Bonds & Local Debt Management", org: "Ministry of Finance, Mongolia", date: "2024" },
  { name: "Executive Certificate in E-Governance", org: "University of the Potomac", date: "2024" },
  { name: "Mobile Payment Development & Application", org: "Ministry of Commerce, China", date: "2023" },
];

const AWARDS = [
  { name: "Best Employee Award", org: "Governor's Office of the Capital City", date: "2024" },
  { name: "Certificate of Honor", org: "Governor of Ulaanbaatar", date: "2023" },
  { name: "Best Graduate Award", org: "National University of Mongolia", date: "2021" },
  { name: "Second Place — Soybuckthorn Drink", org: "Teacher–Student Startup 2.0 Competition", date: "2019" },
  { name: "Second Place — Warm Data", org: "Teacher–Student Startup 2.0 Competition", date: "2018" },
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
      <a className="brand" href="#top" aria-label="Mason — back to top">MAS<span className="brand-star">✳</span>N<span className="brand-dot">.</span></a>
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
          <h1 id="hero-title">Numbers<br/>tell <em>stories.</em><br/>I find the <span>why.</span></h1>
          <p className="hero-sub">Hi, I&apos;m <strong>Mason.</strong> I turn complex financial and operational data into decisions that matter—through analytics, automation, and clear visual storytelling.</p>
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
          <p className="about-lead">A finance professional with an analyst&apos;s curiosity and a builder&apos;s mindset.</p>
          <div className="body-copy">
            <p>Over the past 4+ years, I&apos;ve worked across government, institutional finance, infrastructure, and private business, using data to solve financial and operational problems. I enjoy turning complex datasets into clear dashboards, automated reporting, forecasting models, and decision-ready insights.</p>
            <p>My work sits at the intersection of data analytics, business and financial analytics, and workflow automation. I work with SQL, Python, Power BI, Tableau, Advanced Excel, and cloud data platforms to make reporting more accurate, useful, and efficient.</p>
            <p>What interests me most is going beyond what happened to understand why it happened, what others may have overlooked, and what we can do next. I&apos;m especially interested in opportunities across data analytics, business intelligence, financial analytics, and analytics automation.</p>
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
      <div className="skills-heading reveal"><h2 className="section-title">Built on <em>curiosity.</em></h2><p>Explore my technical toolkit. Select a skill to see where it shows up in my work.</p></div>
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
      <div className="work-heading reveal"><h2 className="section-title">Things I&apos;ve <em>built.</em></h2><p>Real problems. Real data. Practical insights. Select a project to see its story.</p></div>
      <div className="projects-accordion" aria-label="Interactive projects">
        {PROJECTS.map((p,i)=><article key={p.title} className={"project-panel "+(selectedProject===i?"expanded":"")}>
          <button className="panel-trigger" aria-expanded={selectedProject===i} onClick={()=>setSelectedProject(i)} aria-label={"View "+p.title}><span className="project-num">{String(i+1).padStart(2,"0")}</span><span className="project-vertical">{p.title}</span><span className="project-expand"><Icon name="plus"/></span></button>
          <div className="panel-content" aria-hidden={selectedProject!==i}>
            <div className="project-graphic"><img src={p.image} alt="" loading="lazy"/></div>
            <div className="project-info"><div className="eyebrow">PROJECT {String(i+1).padStart(2,"0")} / {p.period}</div><h3>{p.title}</h3><p>{p.blurb}</p><div className="tag-row">{p.tags.map(t=><span key={t}>{t}</span>)}</div><a className="pill-btn dark" href={p.href} target={p.href.startsWith("/") ? undefined : "_blank"} rel={p.href.startsWith("/") ? undefined : "noopener noreferrer"}>Read full case study <Icon name="external"/></a></div>
          </div>
        </article>)}
      </div>
      <div className="work-cta"><span>MORE DATA STORIES & DASHBOARDS</span><a href="https://public.tableau.com/app/profile/munkhnasan.otgonbold/vizzes" target="_blank" rel="noopener noreferrer">Explore my Tableau portfolio ↗</a></div>
    </section>
    <section id="experience" className="section experience-section">
      <div className="section-meta reveal"><span>04 / CAREER JOURNEY</span><span>EXPERIENCE</span></div>
      <h2 className="section-title reveal">The journey <em>so far.</em></h2>
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
      <h2 className="section-title reveal">Impact, <em>measured.</em></h2>
      <div className="achievement-grid">
        {METRICS.map((m,i)=><div key={m.label} className="metric-card reveal"><span className="metric-index">0{i+1} / 04</span><div className="metric-number"><Counter text={m.value}/></div><h3>{m.label}</h3><p>{m.note}</p></div>)}
      </div>
      <div className="impact-note reveal">
        <h3>Behind every number is a decision.</h3>
        <p>My municipal financing experience included preparing documentation for a $500M international revenue-backed bond, proposals for approximately $180M in domestic municipal bonds, and coordinating financing documentation for an $87.2M energy storage project. These were collaborative institutional efforts, not independently executed transactions.</p>
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
