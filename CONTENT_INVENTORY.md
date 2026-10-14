# Content inventory — baseline main

Source: `app/page.tsx`, `README.md`, repository tree, inspected 2026-10-13. Preserve exact source content before migration.

## Routes and structure
- Next.js 14 App Router, React 18, TypeScript, Tailwind CSS 3. Single home page `app/page.tsx`.
- Seven anchored navigation destinations: #standing, #account, #ledger, #projects, #holdings, #instruments, #contact.
- Header, hero/biography, account metrics, skills, experience ledger, project gallery, education/professional development/awards, contact, footer.

## Projects — five currently published
1. The Anatomy of a World Bank Loan — Jan 2026; 11,404 credits/grants, 131 countries; Python, Power BI, DAX; /projects/worldbank.svg; LinkedIn article.
2. The SBA Loans I Wrote at a Coffee Shop — 249,000 Rows Later — Dec 2025; SQL Server, SSIS, Tableau, Excel; /projects/sba.svg; LinkedIn article.
3. The Other Side of the Ledger — Nov 2025; 5,002 transactions; Python, pandas, NumPy, Matplotlib; /projects/ledger.svg; LinkedIn article.
4. The Hidden Cost of Healthcare Billing — 2025; Snowflake, SSIS, Tableau; /projects/healthcare.svg; LinkedIn article.
5. IFC Investment Services Projects — Feb 2026; 7,083 disclosures, 172 countries; Excel, Python, SQL; /projects/ifc.svg; LinkedIn article.

The homepage does NOT currently list DC bus operations, customer complaints, or a separate finance analysis project. These are possible additions, not original content. Audit their separate repositories before inclusion.

## Experience — nine entries
- Digital Factory — Operations Analyst Intern — Jul–Aug 2026.
- MDThink — Data Analyst Intern — Jan–May 2026.
- Trustco Bank — Data Analyst Intern — Oct–Dec 2025.
- Governor's Office of the Capital City — Project Financing and Debt Analyst — Jan 2024–Jun 2025.
- Governor's Office of the Capital City — Budget Analyst — Apr 2022–Dec 2023.
- NAMO LLC — Financial and Business Analyst — Apr 2021–Apr 2022.
- Time Power Rich LLC — Financial Consultant — 2021–2025.
- InvestradeMN Corporation — Co-Founder & CFO — 2019–2020.
- NUM Startup Club — Founder & President — 2018–2019.

All original experience bullet points remain authoritative in `app/page.tsx`; preserve verbatim in migrated structured content.

## Account metrics — four
1M+ financial records; 24 megaprojects; 300+ business proposals; 83% reporting-time reduction (12 to 2 hours).

## Skills — six groups
BI & Visualization; Querying & Analytics; Databases & Cloud; Governance & Data Quality; Tools & Workflow; Finance. Preserve every item of `SKILLS`.

## Education — three
M.S. Data Analytics (University of the Potomac, Jun 2025–Aug 2027, GPA 3.89); MBA Project Management (University of Finance and Economy, Aug 2021–Jul 2022, GPA 3.60); BBA Finance (National University of Mongolia, Sep 2017–Jun 2021).

## Professional development — nine
Data Analyst Bootcamp; Tableau Desktop I & II; Power BI Intermediate; Project Management; City Finance; FIDIC 2017 Contracts; Green and Sustainability Bonds & Local Debt Management; Executive Certificate in E-Governance; Mobile Payment Development & Application.

## Awards — five
Best Employee Award 2024; Certificate of Honor 2023; Best Graduate Award 2021; Second Place Soybuckthorn Drink 2019; Second Place Warm Data 2018.

## Assets
- `public/headshot.jpg`
- `public/Munkhnasan-Otgonbold-Resume.pdf`
- Five SVG project thumbnails in `public/projects/`.

## External functionality
- LinkedIn profile, GitHub profile, Tableau Public profile, email link, telephone link, five LinkedIn project articles, downloadable resume.
- No Tableau iframe is present in the inspected homepage; Tableau Public is linked externally.
- No contact form or project detail routes currently exist.
- Current metadata in `app/layout.tsx`: title and description; no Open Graph setup seen.
- Current animations: CSS hover transitions and smooth anchor scroll; reduced-motion CSS present.

## Outstanding audit checks
- Compare production deployment to repository (may differ).
- Verify all external links and Tableau dashboards live.
- Inspect binary resume/headshot visually.
- Test responsiveness and accessibility in real browsers.
- Identify any unpublished content not present in main branch.
