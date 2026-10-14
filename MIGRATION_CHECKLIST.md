# Migration checklist — Editorial Intelligence 2.0

Status: planning; production remains unchanged.

| Existing source | New destination | Preservation requirement | Status |
|---|---|---|---|
| Header NAV seven anchors | Floating responsive navbar | Preserve existing anchors/redirects | Planned |
| Hero biography and headshot | Animated hero + About + ID card | Full paragraphs and headshot | Planned |
| Four METRICS | Achievements and hero stats | Exact figures and explanatory notes | Planned |
| Six SKILLS groups | Filterable interactive skills | Every item, no fake proficiency | Planned |
| Nine LEDGER entries | Animated experience timeline | Every date, role, organization, bullet | Planned |
| Five PROJECTS | Expanding cards + detail views | Every title, blurb, date, tag, image, link | Planned |
| Three EDUCATION entries | Education timeline | Exact details | Planned |
| Nine PROFESSIONAL_DEVELOPMENT entries | Certifications gallery | Exact names/issuers/dates | Planned |
| Five AWARDS | Achievements/awards | Preserve all | Planned |
| Contact section | Contact footer + actions | All links, email, phone | Planned |
| Resume PDF | Download buttons | Preserve original path | Planned |
| README.md | Remain available | No content deletion | Preserved |

## Implementation sequence
1. Branch `redesign/editorial-intelligence-v2` created from `main`.
2. Inventory and migration documents committed on branch.
3. Build preview route without modifying existing homepage.
4. Extract exact data arrays from `app/page.tsx` into typed content module.
5. Replace visual presentation only after content parity tests.
6. Verify all original anchors, files, project links, and information.
7. Deploy Vercel preview, request approval, then production rollout.

## Acceptance criteria
- 5/5 published projects; 9/9 experience entries; 6/6 skill groups; 3/3 degrees; 9/9 training entries; 5/5 awards; 4/4 account metrics.
- No removed links or media.
- Keyboard-accessible cards and navigation, reduced-motion mode, mobile accordions.
- No invented results, certifications, or project dashboards.
