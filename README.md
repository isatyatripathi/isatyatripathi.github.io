# Satya Tripathi — Engineering Leadership Portfolio

A recruiter-focused portfolio for Satya Tripathi, built with Next.js App Router,
React, TypeScript, Tailwind CSS, and a small amount of purpose-built CSS. The
site is configured as a static export for the `isatyatripathi.github.io` GitHub
Pages user site.

The visual direction follows the selected dark navy and magenta-purple concept.
It includes a prominent **Core Expertise** section covering engineering
leadership, architecture and practices, modern .NET technology, AWS/Azure cloud
platforms, and responsible AI-assisted engineering.

## Portfolio strategy

The site positions Satya equally for Senior Staff Engineer and Engineering
Manager opportunities. It foregrounds architecture ownership, cloud
modernization, reliable delivery, people leadership, and only approved metrics.
Internal platform names are generalized, and the public telephone number is
intentionally omitted.

See [`docs/PORTFOLIO-STRATEGY.md`](docs/PORTFOLIO-STRATEGY.md) for the complete
strategy, audience, section order, and privacy decisions.

## Technology

- Next.js App Router with static export
- React and TypeScript
- Tailwind CSS utilities plus design-token-driven CSS
- Font Awesome Free icons
- Semantic HTML landmarks and accessible interactions
- Minimal client-side JavaScript for theme, mobile navigation, and reveal effects

## Information architecture

1. Hero and recruiter calls to action
2. Verified career metrics
3. About
4. Career timeline
5. Selected impact
6. Core Expertise
7. Engineering leadership principles
8. Recognition and credentials
9. Resume
10. Contact

Projects and recommendations are omitted until verified public material is
available. This avoids invented or confidential content.

## Color and typography system

The design tokens live at the top of `app/globals.css`.

- Dark background: `#070d1c`
- Dark surface: `#0b162a`
- Primary accent: `#bd43ff`
- Secondary accent: `#e443b4`
- Light background: `#f7f8fc`
- Body typography: an Inter-first, privacy-friendly system stack

The interface supports dark mode, light mode, automatic initial system
preference, and persistent user choice.

## Project structure

```text
app/
  error.tsx
  globals.css
  layout.tsx
  loading.tsx
  not-found.tsx
  page.tsx
  robots.ts
  sitemap.ts
  tailwind.generated.css
components/
  CoreExpertise.tsx
  ExperienceTimeline.tsx
  Footer.tsx
  Header.tsx
  Icon.tsx
  ImpactGrid.tsx
  MetricStrip.tsx
  ResumeCard.tsx
  Reveal.tsx
  SectionHeading.tsx
data/
  portfolio.ts
public/
  icons/
  images/
  resume/Satya-Tripathi-Resume.pdf
  .nojekyll
  site.webmanifest
scripts/
  build-tailwind.mjs
  check-syntax.mjs
styles/
  tailwind-source.css
tests/
  content.test.mjs
types/
  portfolio.ts
.github/workflows/
  deploy.yml
```

## Updating content

Most personal content is centralized in `data/portfolio.ts`. Update that file to
change:

- headline, summary, email, location, and availability
- navigation
- metrics
- experience
- selected impact
- Core Expertise groups and skills
- leadership principles
- awards, education, certifications, and publication
- resume metadata and social links

Type definitions are in `types/portfolio.ts`; UI components should not need to
change for normal content updates.

## Resume integration

The public resume is stored at:

```text
public/resume/Satya-Tripathi-Resume.pdf
```

This is a public-safe edition derived from the supplied resume: the telephone
number is removed and named internal platforms are generalized to match the
approved privacy policy. Keep the private original outside the repository.

Its browser path is:

```text
/resume/Satya-Tripathi-Resume.pdf
```

View and download actions are available in the header, hero, resume section,
and footer. The file is never downloaded without an explicit visitor action.
Replace the PDF at the same path to update it without touching component code.

## Contact model and privacy

The first release uses direct email, LinkedIn, and GitHub links. It intentionally
has no server-backed form, third-party form processor, public phone number, or
tracking script. This keeps GitHub Pages hosting simple and avoids collecting
visitor data through the site.

## SEO and sharing

`app/layout.tsx` contains page title, description, canonical metadata, Open Graph
metadata, and social-card metadata. `app/page.tsx` includes Person, ProfilePage,
and WebSite structured data. The project also contains:

- `app/robots.ts`
- `app/sitemap.ts`
- `public/site.webmanifest`
- optimized social-sharing image and icons

Update the canonical site URL in `app/layout.tsx`, `app/sitemap.ts`,
`app/robots.ts`, and `data/portfolio.ts` before moving to a custom domain.

## Accessibility and responsive behavior

Implemented accessibility measures include semantic landmarks, a skip link,
logical headings, keyboard-operable controls, visible focus styles, accessible
labels for icon-only controls, touch targets of approximately 44 CSS pixels,
reduced-motion handling, print styles, and color tokens with strong contrast.

Responsive layouts are provided for desktop, tablet, and small mobile screens.
The timeline becomes a single-column layout, expertise and impact cards stack,
and navigation becomes a full-screen mobile menu. No essential information is
hover-only.

## Local setup

Requirements:

- Node.js 20.9 or newer; Node.js 22 is used in CI
- npm

Install and run:

```bash
npm install
npm run dev
```

Open the local address printed by Next.js.

## Validation commands

```bash
npm test
npm run check:syntax
npm run typecheck
npm run lint
npm run build
```

`npm run build` creates the deployable static site in `out/` because
`next.config.ts` uses `output: "export"`.

The content tests protect key privacy and factual decisions: the phone number
must not be published, internal platform names must remain generalized, the
approved metrics must exist, and all Core Expertise categories must remain
present.

## GitHub Pages deployment

The workflow at `.github/workflows/deploy.yml` validates and builds the site on
pull requests to `development`. A push to `development`, including a merged pull
request, builds the static `out/` directory and deploys it through GitHub Pages.

One-time repository setting:

1. Open the repository's **Settings → Pages** page.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Merge the feature branch into `development`.
4. Monitor the **Actions** tab until the Pages deployment completes.
5. Verify the homepage, theme switch, mobile navigation, social links, and resume
   view/download actions.

No `basePath` is needed because this is the user site repository named
`isatyatripathi.github.io`. The `.nojekyll` file is copied into the export.

## Feature-branch delivery

Recommended commands after extracting the project into the repository:

```bash
git switch development
git pull
git switch -c feat/nextjs-portfolio
# Replace the old site files with this project.
git add --all
git commit -m "Build recruiter-focused Next.js portfolio"
git push -u origin feat/nextjs-portfolio
```

Open a pull request from `feat/nextjs-portfolio` to `development`, review the
GitHub Actions checks and preview screenshots, then merge.

## Custom domain later

A custom domain is optional. When adding one, configure it in the repository's
Pages settings, add the DNS records supplied by GitHub, enforce HTTPS after DNS
validation, and update all canonical metadata and structured-data URLs. Add a
`public/CNAME` file only after the domain has been chosen.

## Analytics later

Analytics are disabled. A future privacy-friendly integration should be loaded
only when configured, avoid collecting unnecessary personal information, and
limit events to recruiter-relevant actions such as resume downloads, LinkedIn
clicks, GitHub clicks, and email contact actions.

## Final review checklist

- [ ] Name, title, dates, and metrics confirmed
- [ ] Internal platform names remain generalized
- [ ] Telephone number is absent
- [ ] Portrait crop is approved
- [ ] Core Expertise categories and skills are current
- [ ] Resume opens and downloads with the expected filename
- [ ] LinkedIn, GitHub, and email links work
- [ ] Dark and light themes work
- [ ] Mobile menu is keyboard and touch operable
- [ ] No horizontal overflow appears at common breakpoints
- [ ] Reduced-motion and print styles are usable
- [ ] TypeScript, lint, tests, and production build pass in CI
- [ ] GitHub Pages source is set to GitHub Actions
- [ ] Social-sharing preview is reviewed after deployment

## License

MIT — see [`LICENSE`](LICENSE).
