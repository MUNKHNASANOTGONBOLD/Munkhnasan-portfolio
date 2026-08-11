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
  { label: "Financing supported", value: "$850M+", note: "ADB · EBRD · IFC · bond issuances" },
  { label: "Client financing secured", value: "$50M+", note: "300+ business & funding proposals" },
  { label: "Graduate GPA", value: "3.90", note: "M.S. Data Analytics, exp. 2027" },
  { label: "Experience", value: "5+ yrs", note: "Financial services, lending & BI" },
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
      "Validated and reconciled large healthcare datasets across multiple Medicaid reporting environments; built advanced SQL (CTEs, window functions) for reporting extracts and root-cause analysis.",
      "Designed validation frameworks — control totals, variance analysis, duplicate checks, row-level reconciliation — and prepared analytics-ready curated datasets for KPI dashboards.",
      "Worked in AWS (Redshift, Athena, Glue) under HIPAA and audit-readiness requirements.",
    ],
  },
  {
    period: "Sep 2025 — Dec 2025",
    role: "Data Analyst Intern",
    org: "Index Analytics",
    type: "Internship",
    lines: [
      "Designed and developed enterprise BI dashboards in Power BI and Tableau, including semantic models with 100+ DAX measures.",
      "Implemented Row-Level Security (RLS) for governance and secure reporting access; validated production reporting datasets via reconciliation and exception analysis.",
      "Built Python/SQL/Unix Shell automation scripts and worked with Git and Azure DevOps CI/CD pipelines to improve reporting efficiency and reduce manual effort.",
    ],
  },
  {
    period: "Jun 2025 — Sep 2025",
    role: "Data Analyst Intern",
    org: "Trustco Bank — USA",
    type: "Internship",
    lines: [
      "Analyzed financial and risk datasets supporting banking operations, compliance reporting, and business analytics initiatives.",
      "Built Tableau dashboards for KPI reporting and operational monitoring; supported audit and regulatory processes through data validation and reconciliation.",
    ],
  },
  {
    period: "Feb 2024 — Jun 2025",
    role: "Debt Analyst",
    org: "Governor's Office of the Capital City — Ulaanbaatar",
    type: "Full-time",
    lines: [
      "Analyzed the Capital City's debt portfolio, financing structure, borrowing capacity, and repayment obligations to support long-term fiscal planning.",
      "Prepared financial models, debt repayment schedules, cash flow projections, and debt sustainability analyses for large-scale public investment projects.",
      "Contributed to financing exceeding $850M — including a $95M ADB loan, $25M EBRD loan, $500M foreign bond, ₮500B domestic bond, and $87.2M IFC-related issuance — collaborating directly with ADB, EBRD, IFC, and the World Bank.",
    ],
  },
  {
    period: "Jan 2021 — Jun 2025",
    role: "Financial Analyst",
    org: "Time Power Rich — Mongolia",
    type: "Full-time",
    lines: [
      "Analyzed financial, business, and market data to support investment proposals and funding decisions for small and medium-sized enterprises.",
      "Prepared 300+ business and funding proposals, helping client companies secure over $50M in approved financing.",
      "Built financial models, cash flow projections, repayment schedules, and investment analysis reports evaluating project sustainability.",
    ],
  },
  {
    period: "Apr 2022 — Feb 2024",
    role: "Budget Analyst",
    org: "Governor's Office of the Capital City — Ulaanbaatar",
    type: "Full-time",
    lines: [
      "Managed city budget planning, expenditure analysis, and fiscal reporting activities; developed annual and mid-term financial plans supporting government budgeting initiatives.",
      "Presented budget proposals and expenditure analysis reports to government stakeholders and leadership teams, supporting the approval of annual and mid-term city budgets (2022–2024).",
    ],
  },
  {
    period: "Apr 2021 — Apr 2022",
    role: "Financial Analyst",
    org: "NAMO LLC — Mongolia",
    type: "Full-time",
    lines: [
      "Managed budgeting, forecasting, investment analysis, and cost control reporting.",
      "Developed business plans, investment proposals, and operational financial reports; conducted ROI and financial risk assessments.",
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
  { degree: "M.S. Data Analytics", org: "University of the Potomac", note: "Expected 2027 · GPA 3.90" },
  { degree: "MBA, Project Management", org: "Finance and Economy University", note: "Graduated" },
  { degree: "BBA, Banking & Finance", org: "National University of Mongolia", note: "Best Graduate, 2021" },
];

const CERTS = [
  { name: "Microsoft Power BI (PowerBI Consultant)", org: "Credential ID PBIMON00000104", date: "Sep 2023" },
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
            <h1 className="font-serif text-5xl sm:text-6xl font-semibold text-navy leading-[1.05] mb-6">
              Munkhnasan
              <br />
              Otgonbold
            </h1>
            <p className="max-w-2xl text-lg text-ink/80 leading-relaxed">
              Data Analyst with 5+ years across financial services, private businesses, and
              government — building Power BI and Tableau solutions, maintaining data governance
              and metadata frameworks, and turning complex data into governance-ready insight.
              Completing an M.S. in Data Analytics, GPA 3.90.
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

      {/* Account summary — signature element */}
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

      {/* Holdings — skills */}
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

      {/* Instruments — education & certifications */}
      <section id="instruments" className="mx-auto max-w-5xl px-6 py-14">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-navy/70 mb-6">
          06 · Instruments — Education &amp; Certifications
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
          <div className="font-mono text-sm space-y-1 text-right sm:text-left">
            <div>
              <a href="mailto:munhnasano0303@gmail.com" className="text-navy hover:underline">
                munhnasano0303@gmail.com
              </a>
            </div>
            <div>
              <a href="tel:+15712380015" className="text-navy hover:underline">
                571-238-0015
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/munkhnasan-otgonbold-b319b6161"
                className="text-navy hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/munkhnasan-otgonbold
              </a>
            </div>
            <div className="text-ink/50">Arlington, VA</div>
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
