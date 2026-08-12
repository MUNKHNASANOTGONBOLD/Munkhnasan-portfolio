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
  { label: "Financing supported", value: "$850M+", note: "ADB · EBRD · IFC · World Bank bond and lending issuance" },
  { label: "Client financing secured", value: "$15M+", note: "300+ business & funding proposals" },
  { label: "Graduate GPA", value: "3.92", note: "M.S. Data Analytics, exp. 2027" },
  { label: "Experience", value: "5+ yrs", note: "Financial services, private businesses, and government organization data analysis" },
];

type LedgerEntry = {
  period: string;
  role: string;
  org: string;
  type: "Full-time" | "Internship" | "Current";
  lines: string[];
};

const LEDGER: LedgerEntry[] = [
  {
    period: "Jan 2026 — May 2026",
    role: "Data Analyst Intern",
    org: "MDThink — State of Maryland",
    type: "Internship",
    lines: [
      "Supported Medicaid analytics and enterprise reporting by validating and reconciling large healthcare datasets across multiple reporting environments.",
      "Developed advanced SQL queries using joins, CTEs, subqueries, and window functions for reporting extracts, reconciliation logic, and validation analysis.",
      "Performed source-to-target data mapping, data profiling, and data quality assessments ensuring completeness, consistency, and reporting accuracy.",
      "Designed and executed validation frameworks including control totals, variance analysis, duplicate checks, and row-level reconciliation.",
      "Conducted root cause analysis to identify and resolve reporting discrepancies, improving reliability of healthcare reporting datasets.",
      "Validated datasets in AWS cloud environments including Redshift, Athena, and Glue under HIPAA compliance and audit-readiness requirements.",
    ],
  },
  {
    period: "Sep 2025 — Dec 2025",
    role: "Data Analyst Intern",
    org: "Index Analytics",
    type: "Internship",
    lines: [
      "Designed and developed enterprise BI dashboards using Power BI and Tableau supporting operational reporting and executive decision-making.",
      "Built advanced Power BI semantic models with 100+ DAX measures supporting enterprise analytics initiatives.",
      "Implemented Row-Level Security (RLS) to strengthen governance, secure reporting access, and maintain compliance standards.",
      "Validated production reporting datasets and conducted detailed reconciliation, exception analysis, and data quality checks.",
      "Contributed to data warehouse design, Oracle data modeling, and reporting modernization initiatives.",
      "Developed automation scripts using Python, SQL, and Unix Shell scripting; worked with Git and Azure DevOps CI/CD pipelines supporting deployment and reporting lifecycle management.",
    ],
  },
  {
    period: "Jun 2025 — Sep 2025",
    role: "Data Analyst Intern",
    org: "Trustco Bank — USA",
    type: "Internship",
    lines: [
      "Analyzed financial and risk datasets supporting banking operations, compliance reporting, and business analytics initiatives.",
      "Developed and automated reporting logic improving reporting consistency and operational efficiency.",
      "Built Tableau dashboards for KPI reporting, operational monitoring, and performance tracking.",
      "Supported audit and regulatory reporting processes through data validation, reconciliation, and financial data integrity activities.",
    ],
  },
  {
    period: "Feb 2024 — Jun 2025",
    role: "Debt Analyst",
    org: "Governor's Office of the Capital City — Ulaanbaatar",
    type: "Full-time",
    lines: [
      "Analyzed the Capital City's debt portfolio, financing structure, borrowing capacity, repayment obligations, and fiscal impact to support long-term financial planning and investment decisions.",
      "Prepared financial models, debt repayment schedules, cash flow projections, funding scenarios, and analytical reports for large-scale public investment and infrastructure projects.",
      "Conducted debt sustainability analysis, financial risk assessment, compliance review, and repayment capacity analysis for domestic and international borrowing initiatives.",
      "Collaborated with ADB, EBRD, IFC, World Bank, global investors, and domestic financial institutions to support project financing, funding negotiations, and strategic infrastructure development.",
      "Contributed to financing initiatives including a $95M ADB loan, $25M EBRD loan, $500M foreign bond issuance, ₮500B domestic bond issuance, and $87.2M IFC-related bond issuance.",
    ],
  },
  {
    period: "Jan 2021 — Jun 2025",
    role: "Financial Analyst",
    org: "Time Power Rich — Mongolia",
    type: "Full-time",
    lines: [
      "Analyzed financial, business, and market data to support investment proposals, project planning, and funding decisions for small and medium-sized enterprises.",
      "Prepared 300+ business and funding proposals, helping client companies secure over ₮50 billion in approved financing.",
      "Conducted financial feasibility studies, ROI analysis, revenue forecasting, cost analysis, and profitability assessments.",
      "Built financial models, cash flow projections, repayment schedules, and investment analysis reports to evaluate project sustainability.",
      "Identified financial risks, funding gaps, and cost drivers to support better investment and lending decisions.",
    ],
  },
  {
    period: "Apr 2022 — Feb 2024",
    role: "Budget Analyst",
    org: "Governor's Office of the Capital City — Ulaanbaatar",
    type: "Full-time",
    lines: [
      "Managed city budget planning, expenditure analysis, and fiscal reporting activities; developed annual and mid-term financial plans supporting government budgeting initiatives.",
      "Presented budget proposals and expenditure analysis reports to government stakeholders and leadership teams, supporting approval of annual and mid-term city budgets (2022–2024).",
      "Ensured adherence to fiscal compliance standards and reporting requirements.",
    ],
  },
  {
    period: "Apr 2021 — Apr 2022",
    role: "Financial Analyst",
    org: "NAMO LLC — Mongolia",
    type: "Full-time",
    lines: [
      "Managed budgeting, forecasting, investment analysis, and cost control reporting.",
      "Developed business plans, investment proposals, and operational financial reports.",
      "Conducted ROI analysis and financial risk assessments supporting business operations.",
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
    period: "Jan 2026",
    title: "The Anatomy of a World Bank Loan",
    blurb:
      "Cleaned and modeled the World Bank's public IDA portfolio — 11,404 credits/grants across 131 countries — into a Power BI star schema and an interactive dashboard.",
    tags: ["Python", "Power BI", "DAX"],
    href: "https://www.linkedin.com/pulse/anatomy-world-bank-loan-munkhnasan-otgonbold-9ilee/",
    image: "/projects/worldbank.svg",
  },
  {
    period: "Dec 2025",
    title: "The SBA Loans I Wrote at a Coffee Shop — 249,000 Rows Later",
    blurb:
      "Cleaned, mapped, and analyzed 249,000+ real SBA 7(a) loan records via Excel → SSIS → SQL Server → Tableau, then wrote up the full story on LinkedIn.",
    tags: ["SQL Server", "SSIS", "Tableau", "Excel"],
    href: "https://www.linkedin.com/pulse/sba-loans-i-wrote-coffee-shop-ended-249000-rows-munkhnasan-otgonbold-yg8te/",
    image: "/projects/sba.svg",
  },
  {
    period: "Nov 2025",
    title: "The Other Side of the Ledger: What Customer Data Looks Like",
    blurb:
      "Full EDA-to-visualization pipeline on 5,002 messy finance transactions — discovery, cleaning, standardization, feature engineering, and reporting in Python.",
    tags: ["Python", "pandas", "NumPy", "Matplotlib"],
    href: "https://www.linkedin.com/pulse/other-side-ledger-what-customer-data-looks-like-munkhnasan-otgonbold-1kste/",
    image: "/projects/ledger.svg",
  },
  {
    period: "2025",
    title: "The Hidden Cost of Healthcare Billing",
    blurb:
      "Multi-layer data pipeline analyzing claim denial rates and provider performance, built in Snowflake with a Tableau dashboard layer.",
    tags: ["SQL", "Snowflake", "Tableau"],
    href: "https://www.linkedin.com/pulse/hidden-cost-healthcare-billing-munkhnasan-otgonbold-zlrce/",
    image: "/projects/healthcare.svg",
  },
  {
    period: "Feb 2026",
    title: "IFC Investment Services Projects",
    blurb:
      "Explored IFC's global private-sector investment dataset — project structures, financial products, and country-level distribution — and published the full analysis on LinkedIn.",
    tags: ["SQL", "Power BI", "Excel"],
    href: "https://www.linkedin.com/pulse/ifc-investment-services-projects-munkhnasan-otgonbold-b878e/",
    image: "/projects/ifc.svg",
  },
];

const SKILLS = [
  {
    group: "BI & Visualization",
    items: ["Power BI (DAX, RLS)", "Tableau (LOD, calculated fields)", "KPI dashboards"],
  },
  {
    group: "Data & Code",
    items: ["SQL (joins, CTEs, window functions)", "Python (pandas, numpy, matplotlib)", "SQL Server · Oracle", "AWS (Redshift, Athena, Glue)"],
  },
  {
    group: "Governance",
    items: ["Metadata & data catalog", "Data lineage & dictionaries", "Data governance frameworks", "Quality controls & reconciliation"],
  },
  {
    group: "Tools & Domain",
    items: ["Advanced Excel", "Jira · Azure DevOps · Git", "Financial services & lending data"],
  },
];

const EDUCATION = [
  { degree: "M.S. Data Analytics", org: "University of the Potomac", note: "Expected 2027 · GPA 3.92" },
  { degree: "MBA, Project Management", org: "University of Finance and Economics", note: "2021–2022 · GPA 3.6" },
  { degree: "Bachelor's Degree, Finance", org: "National University of Mongolia", note: "Sep 2017 – Jun 2021 · Best Graduate" },
];

const CERTS = [
  { name: "Python", org: "Tech2high", date: "Aug 2025" },
  { name: "SQL Advanced Querying & Data Analytics", org: "Tech2high", date: "Aug 2025" },
  { name: "City Finance — World Bank Group", org: "The World Bank Group", date: "Apr 2025" },
  { name: "Microsoft Power BI", org: "PowerBI Consultant · ID PBIMON00000104", date: "Sep 2023" },
  { name: "Tableau Desktop I, II", org: "Novelsoft", date: "Oct 2023" },
  { name: "Project Management", org: "Ganzorig Business School", date: "Sep 2022" },
];

function LedgerRule() {
  return <div className="h-px w-full bg-rule" />;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-paper bg-ledger">
      {/* Statement header */}
      <header className="border-b-2 border-navy">
        <div className="mx-auto max-w-5xl px-6 py-6 flex flex-wrap items-baseline justify-between gap-2">
          <div className="font-mono text-xs tracking-widest text-navy uppercase">
            Statement No. 2026-08 · Arlington / DC
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-ink/70 hover:text-navy transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero / Statement of Standing */}
      <section id="standing" className="mx-auto max-w-5xl px-6 pt-16 pb-12">
        <div className="grid sm:grid-cols-[1fr_auto] gap-8 items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold mb-4">
              Statement of Professional Standing
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl font-semibold text-navy leading-[1.05] mb-4">
              Munkhnasan
              <br />
              Otgonbold
            </h1>
            <div className="flex gap-3 mb-6">
              <a
                href="https://www.linkedin.com/in/munkhnasan-otgonbold-b319b6161"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-ink text-paper flex items-center justify-center hover:bg-navy transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://github.com/MUNKHNASANOTGONBOLD"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-ink text-paper flex items-center justify-center hover:bg-navy transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.809 1.304 3.495.997.108-.775.42-1.305.763-1.605-2.665-.303-5.467-1.333-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a
                href="mailto:munkhnasanotgonbold92@gmail.com"
                aria-label="Gmail"
                className="w-9 h-9 rounded-lg bg-ink text-paper flex items-center justify-center hover:bg-navy transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2 4h20v16H2V4zm2 2v.01L12 12l8-5.99V6H4zm16 12V8.24l-8 6-8-6V18h16z"/>
                </svg>
              </a>
            </div>
            <p className="max-w-2xl text-lg text-ink/80 leading-relaxed">
              Data Analyst with 5+ years across institutional finance, private business, and
              government organization — building Power BI, Tableau dashboards for finance and
              portfolio reporting, applying AI-enabled data quality workflows, and turning complex
              datasets into decision-ready insight. Completing an M.S. in Data Analytics, GPA 3.92.
            </p>
          </div>
          <div className="w-32 h-32 sm:w-40 sm:h-40 border-2 border-navy shrink-0 relative overflow-hidden bg-paper2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/headshot.jpg"
              alt="Munkhnasan Otgonbold"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center bg-navy text-paper font-mono text-xs uppercase tracking-wider px-5 py-3 hover:bg-navy2 transition-colors"
          >
            Open Account — Contact
          </a>
          <a
            href="#ledger"
            className="inline-flex items-center border border-navy text-navy font-mono text-xs uppercase tracking-wider px-5 py-3 hover:bg-navy/5 transition-colors"
          >
            View Ledger
          </a>
          <a
            href="/Munkhnasan-Otgonbold-Resume.pdf"
            download
            className="inline-flex items-center gap-2 border border-gold text-gold font-mono text-xs uppercase tracking-wider px-5 py-3 hover:bg-gold/10 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6">
        <LedgerRule />
      </div>

      {/* Account summary */}
      <section id="account" className="mx-auto max-w-5xl px-6 py-14">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-navy/70 mb-6">
          02 · Account Summary
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 border border-rule">
          {METRICS.map((m, i) => (
            <div
              key={m.label}
              className={`p-5 ${i % 2 === 0 ? "sm:border-r" : ""} ${
                i < 2 ? "border-b sm:border-b-0" : ""
              } sm:[&:not(:last-child)]:border-r border-rule`}
            >
              <div className="font-mono text-2xl sm:text-3xl tabular text-gain font-medium mb-1">
                {m.value}
              </div>
              <div className="text-sm text-ink/70">{m.label}</div>
              <div className="text-xs text-ink/45 mt-1">{m.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills — moved here, below account summary */}
      <section id="holdings" className="mx-auto max-w-5xl px-6 py-14">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-navy/70 mb-6">
          05 · Holdings — Skills
        </p>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
          {SKILLS.map((s) => (
            <div key={s.group}>
              <h4 className="font-serif text-navy font-semibold mb-3">{s.group}</h4>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs px-2.5 py-1.5 bg-paper2 border border-rule text-ink/75"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ledger — experience */}
      <section id="ledger" className="mx-auto max-w-5xl px-6 py-14">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-navy/70 mb-6">
          03 · General Ledger — Experience
        </p>
        <div className="border-t border-rule">
          {LEDGER.map((entry) => (
            <div key={entry.role} className="border-b border-rule py-6 grid sm:grid-cols-[140px_1fr] gap-3 sm:gap-8">
              <div>
                <div className="font-mono text-xs text-ink/50 tabular">{entry.period}</div>
                <span
                  className={`inline-block mt-2 font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border ${
                    entry.type === "Current"
                      ? "border-gain text-gain"
                      : entry.type === "Internship"
                      ? "border-gold text-gold"
                      : "border-navy/40 text-navy/70"
                  }`}
                >
                  {entry.type}
                </span>
              </div>
              <div>
                <h3 className="font-serif text-xl text-navy font-semibold">{entry.role}</h3>
                <p className="font-mono text-xs text-ink/60 mb-3">{entry.org}</p>
                <ul className="space-y-1.5">
                  {entry.lines.map((l) => (
                    <li key={l} className="text-sm text-ink/80 leading-relaxed flex gap-2">
                      <span className="text-gold shrink-0">—</span>
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-5xl px-6 py-14">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-navy/70 mb-6">
          04 · Statements — Projects
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-rule bg-paper2 hover:border-navy transition-colors overflow-hidden"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-40 object-cover border-b border-rule"
              />
              <div className="p-5">
                <div className="font-mono text-xs text-ink/50 tabular mb-2">{p.period}</div>
                <h3 className="font-serif text-lg text-navy font-semibold leading-snug mb-2 group-hover:underline">
                  {p.title}
                </h3>
                <p className="text-sm text-ink/75 leading-relaxed mb-4">{p.blurb}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] uppercase tracking-wide px-2 py-1 border border-rule text-ink/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="font-mono text-xs text-gold group-hover:underline">
                  Read on LinkedIn →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Instruments — education & certifications */}
      <section id="instruments" className="mx-auto max-w-5xl px-6 py-14">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-navy/70 mb-6">
          06 · Education &amp; Certifications
        </p>
        <div className="grid sm:grid-cols-2 gap-10">
          <div>
            <h4 className="font-serif text-navy font-semibold mb-4">Education</h4>
            <div className="space-y-4">
              {EDUCATION.map((e) => (
                <div key={e.degree} className="border-l-2 border-gold pl-4">
                  <div className="font-serif text-ink font-medium">{e.degree}</div>
                  <div className="font-mono text-xs text-ink/60">{e.org}</div>
                  <div className="font-mono text-xs text-gain mt-0.5">{e.note}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-serif text-navy font-semibold mb-4">Certifications</h4>
            <ul className="space-y-3">
              {CERTS.map((c) => (
                <li key={c.name} className="text-sm text-ink/80 flex gap-2">
                  <span className="text-gold shrink-0">—</span>
                  <span>
                    {c.name}
                    <span className="block font-mono text-xs text-ink/50 mt-0.5">
                      {c.org} · {c.date}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6">
        <LedgerRule />
      </div>

      {/* Contact / footer */}
      <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-navy/70 mb-6">
          07 · Contact
        </p>
        <div className="grid sm:grid-cols-[1fr_auto] items-end gap-8">
          <div>
            <h2 className="font-serif text-3xl text-navy font-semibold mb-3">
              Open a line of communication.
            </h2>
            <p className="text-ink/70 max-w-lg">
              Looking for Data Analyst, BI, and data governance roles. Reach out directly —
              details below.
            </p>
          </div>
          <div>
            <div className="flex gap-3 mb-5">
              <a
                href="https://www.linkedin.com/in/munkhnasan-otgonbold-b319b6161"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-ink text-paper flex items-center justify-center hover:bg-navy transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://github.com/MUNKHNASANOTGONBOLD"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-xl bg-ink text-paper flex items-center justify-center hover:bg-navy transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.809 1.304 3.495.997.108-.775.42-1.305.763-1.605-2.665-.303-5.467-1.333-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a
                href="mailto:munkhnasanotgonbold92@gmail.com"
                aria-label="Gmail"
                className="w-10 h-10 rounded-xl bg-ink text-paper flex items-center justify-center hover:bg-navy transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2 4h20v16H2V4zm2 2v.01L12 12l8-5.99V6H4zm16 12V8.24l-8 6-8-6V18h16z"/>
                </svg>
              </a>
            </div>
            <div className="font-mono text-sm space-y-1 text-right sm:text-left">
              <div>
                <a href="mailto:munkhnasanotgonbold92@gmail.com" className="text-navy hover:underline">
                  munkhnasanotgonbold92@gmail.com
                </a>
              </div>
              <div>
                <a href="tel:+15712380015" className="text-navy hover:underline">
                  571-238-0015
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/MUNKHNASANOTGONBOLD"
                  className="text-navy hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/MUNKHNASANOTGONBOLD
                </a>
              </div>
              <div className="text-ink/50">Arlington, VA</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-rule">
        <div className="mx-auto max-w-5xl px-6 py-6 font-mono text-[11px] text-ink/45 flex justify-between">
          <span>Munkhnasan Otgonbold — Statement generated {new Date().getFullYear()}</span>
          <span>Balance carried forward →</span>
        </div>
      </footer>
    </main>
  );
}
