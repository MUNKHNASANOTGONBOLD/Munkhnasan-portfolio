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
  { label: "Client financing secured", value: "$15M+", note: "300+ business & funding proposals" },
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
    org: "MDThink — State of Maryland (cSMS)",
    type: "Internship",
    lines: [
      "Built Power BI and Tableau dashboards, applying data governance frameworks for audit-ready reporting.",
      "Maintained metadata, data dictionaries, and data catalog documentation; performed profiling and reconciliation across source, staging, and reporting layers.",
      "Supported big-data and data-science initiatives with SQL and Python across AWS (Athena, Redshift, Glue).",
    ],
  },
  {
    period: "Sep 2025 — Dec 2025",
    role: "Data Analyst Intern",
    org: "Index Analytics",
    type: "Internship",
    lines: [
      "Developed Power BI semantic models (100+ DAX measures, RLS) and Tableau dashboards.",
      "Implemented data quality controls and governance processes; used SQL and Python for big-data reporting.",
      "Mentored junior analysts on reporting best practices and validation procedures.",
    ],
  },
  {
    period: "Jun 2025 — Sep 2025",
    role: "Data Analyst Intern",
    org: "Trustco Bank",
    type: "Internship",
    lines: [
      "Analyzed financial services and lending data for banking operations, compliance, and KPI monitoring.",
      "Built Power BI and Tableau dashboards; validated and reconciled financial data against governance standards.",
    ],
  },
  {
    period: "Apr 2022 — Jun 2025",
    role: "Budget & Debt Analyst",
    org: "Governor's Office of the Capital City — Mongolia",
    type: "Full-time",
    lines: [
      "Contributed to financing exceeding $850M: $95M ADB loan, $25M EBRD loan, $500M foreign bond, $160M domestic bond, $87.2M IFC-related issuance.",
      "Collaborated with ADB, EBRD, IFC, and global investors on lending and bond financing.",
      "Best Employee, 2024.",
    ],
  },
  {
    period: "Jul 2022 — Jul 2025",
    role: "Senior Financial Analyst",
    org: "Time Power Rich LLC — Mongolia",
    type: "Full-time",
    lines: [
      "Financial modeling, ROI analysis, and risk assessment across 300+ business and funding proposals.",
      "Helped client SMEs secure over $15M in approved financing. Best Employee, 2023.",
    ],
  },
  {
    period: "Apr 2021 — Apr 2022",
    role: "Financial Manager / Analyst",
    org: "NAMO LLC — Mongolia",
    type: "Full-time",
    lines: [
      "Managed budgeting, forecasting, and lending analysis with financial reporting.",
    ],
  },
];

type ProjectEntry = {
  period: string;
  title: string;
  blurb: string;
  tags: string[];
  href: string;
};

const PROJECTS: ProjectEntry[] = [
  {
    period: "Dec 2025",
    title: "The SBA Loans I Wrote at a Coffee Shop — 249,000 Rows Later",
    blurb:
      "Cleaned, mapped, and analyzed 249,000+ real SBA 7(a) loan records via Excel → SSIS → SQL Server → Tableau, then wrote up the full story on LinkedIn.",
    tags: ["SQL Server", "SSIS", "Tableau", "Excel"],
    href: "https://www.linkedin.com/pulse/sba-loans-i-wrote-coffee-shop-ended-249000-rows-munkhnasan-otgonbold-yg8te/",
  },
  {
    period: "Nov 2025",
    title: "The Other Side of the Ledger: What Customer Data Looks Like",
    blurb:
      "Full EDA-to-visualization pipeline on 5,002 messy finance transactions — discovery, cleaning, standardization, feature engineering, and reporting in Python.",
    tags: ["Python", "pandas", "NumPy", "Matplotlib"],
    href: "https://www.linkedin.com/pulse/other-side-ledger-what-customer-data-looks-like-munkhnasan-otgonbold-1kste/",
  },
  {
    period: "2025",
    title: "The Hidden Cost of Healthcare Billing",
    blurb:
      "Multi-layer data pipeline analyzing claim denial rates and provider performance, built in Snowflake with a Tableau dashboard layer.",
    tags: ["SQL", "Snowflake", "Tableau"],
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7491556304545697794/",
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
  "Google Data Analytics Certification",
  "Tableau Data Analyst Training",
  "SQL Advanced Querying & Data Analytics",
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
              Data Analyst with 5+ years across financial services, lending, and government
              finance — building Power BI and Tableau solutions, maintaining data governance
              and metadata frameworks, and turning complex lending and financial data into
              governance-ready insight. Completing an M.S. in Data Analytics, GPA 3.90.
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
        <div className="grid sm:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-rule p-5 bg-paper2 hover:border-navy transition-colors"
            >
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
            <ul className="space-y-2">
              {CERTS.map((c) => (
                <li key={c} className="text-sm text-ink/80 flex gap-2">
                  <span className="text-gold shrink-0">—</span>
                  <span>{c}</span>
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
