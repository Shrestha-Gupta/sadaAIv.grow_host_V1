# sadaAIv.grow

<p align="center">
  <img src="https://raw.githubusercontent.com/Shrestha-Gupta/sadaAIv.grow_host_V1/main/public/sadaAIv%20Logo_Black.png" alt="sadaAIv.grow" width="220" />
</p>

<p align="center">
  <strong>Turning ideas into structured, technology-enabled execution.</strong>
</p>

<p align="center">
  A production-ready React website for sadaAIv.grow — a technology and execution-focused initiative working across AI automation, digital solutions, web platforms, and campaign execution.
</p>

<p align="center">
  <a href="https://www.sadaaivgrow.in/">Live Website</a> •
  <a href="https://github.com/Shrestha-Gupta/sadaAIv.grow_host_V1">Repository</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" alt="Vite 8" />
  <img src="https://img.shields.io/badge/JavaScript-ESM-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-000000?logo=vercel&logoColor=white" alt="Vercel" />
  <img src="https://img.shields.io/badge/EmailJS-Contact%20Form-FF6A3D" alt="EmailJS" />
</p>

---

## Overview

**sadaAIv.grow** is a modern, responsive company website designed around one core idea: **technology should turn plans into execution**.

The website combines an editorial visual language with interactive motion, structured service information, portfolio case studies, client stories, and a working contact workflow. It is built as a single-page React application with client-side routing and is deployed to Vercel under the production domain **www.sadaaivgrow.in**.

The site presents sadaAIv.grow through two connected capability tracks:

- **Build** — AI automation, digital solutions, web platforms, and custom technology.
- **Run** — campaign execution, social and digital outreach, influencer/community management, and data/performance monitoring.

---

## Live Project

| Resource | Link |
|---|---|
| **Production Website** | https://www.sadaaivgrow.in/ |
| **GitHub Repository** | https://github.com/Shrestha-Gupta/sadaAIv.grow_host_V1 |
| **Deployment Platform** | Vercel |
| **Production Branch** | `main` |

> This repository is the production repository connected to the live sadaAIv.grow website.

---

## What the Website Includes

### Home

The landing page is designed as the primary conversion and positioning experience. It includes:

- Brand introduction and positioning
- Interactive typewriter-style messaging
- Scroll-driven capability cards
- Technology / People / Execution methodology
- Service overview
- Portfolio highlights
- Client and outcome-oriented sections
- Engagement methodology
- Calls-to-action leading to the contact page

### Services

Services are organised into two execution tracks:

#### Build — The Systems

1. **AI Automation & Workflows**
   - AI agents and process automation
   - LLM-powered document pipelines
   - CRM and communication automation
   - Custom GPT integrations
   - Scheduled reporting systems

2. **Digital Solutions & Web Platforms**
   - Marketing websites
   - Landing pages
   - Internal dashboards and portals
   - E-commerce and booking platforms
   - CMS-backed platforms

3. **Custom Technology Solutions**
   - Bespoke software architecture
   - API design and integrations
   - Data pipelines and ETL systems
   - Scalable backend systems

#### Run — The Execution

4. **Campaign Planning & Execution**
   - Campaign strategy and narrative
   - Multi-channel rollout planning
   - On-ground activation management
   - Real-time campaign monitoring

5. **Social Media & Digital Outreach**
   - Content strategy
   - Calendar management
   - Platform-specific content
   - Paid social advertising
   - Community engagement

6. **Influencer & Community Management**
   - Influencer identification and outreach
   - Campaign coordination
   - Community building
   - UGC and ambassador programs

7. **Data, Monitoring & Performance**
   - Live performance dashboards
   - Cross-channel attribution
   - Sentiment and media monitoring
   - KPI tracking and alert systems

### Portfolio

The portfolio presents four case studies with project context, services involved, visuals, and outcome-focused messaging:

- **HPPCHRI — Yuva Sanchar Cancer Awareness Campaign**
  - Healthcare / NGO
  - Campaign planning, digital outreach, and web platform
  - 800+ schools reached, 10K+ registrations, 13+ districts highlighted in the site case study

- **Bikanervala Gorakhpur — Local Digital Connect**
  - F&B / Restaurant
  - Social media growth, local brand connect, and content strategy
  - Organic follower growth from under 300 to 3,400+ highlighted in the site case study

- **Wakhra Swaad — Digital & Menu Optimisation**
  - F&B / Restaurant
  - Website revamp, menu optimisation, and digital solutions
  - Focus on improved footfall and more consistent revenue

- **See City Destination — Search Visibility & Client Retention**
  - Travel & Tourism
  - SEO, client database management, and digital outreach
  - #1 Google ranking for selected Varanasi travel searches highlighted in the site case study

### Insights / Client Stories

The `/blog` and `/insights` routes currently present an editorial-style **Insights / Client Stories** experience rather than a traditional CMS-backed blog.

The page includes detailed stories covering:

- HPPCHRI
- Bikanervala Gorakhpur
- Wakhra Swaad
- See City Destination

Each story combines project context, client perspective, work delivered, and measurable outcomes.

### About

The About experience communicates:

- Company story
- Mission and vision
- Execution-first positioning
- Key differentiators
- Team information

### Contact

The contact page provides a structured lead form with client-side validation for:

- Name
- Organisation
- Email
- Phone
- Service of interest
- Project description

Form submissions are sent using **EmailJS**.

---

## Design & UX

The interface follows an editorial, premium, execution-focused visual direction rather than a conventional SaaS dashboard aesthetic.

### Design characteristics

- Typography-led visual hierarchy
- `Playfair Display` for editorial/display typography
- `Inter` for interface and body content
- `Caveat` for selected handwritten accents
- Minimal light canvas with strong typography
- Orange/accent-driven highlights
- Responsive navigation
- Mobile menu
- Scroll-triggered reveals
- Typewriter text transitions
- Sticky / stacked project cards
- Interactive service cards
- Structured case-study layouts
- Dedicated call-to-action sections

The typography is loaded through Google Fonts in `index.html`.

---

## Technology Stack

### Core

- **React 19** — component-based UI
- **JavaScript / JSX** — application logic and UI
- **Vite 8** — development server and production bundler
- **React Router DOM 7** — client-side routing

### UI / Interaction

- **CSS3** — custom responsive styling and layout
- **Framer Motion** — motion capability available in the project dependencies
- **React Intersection Observer** — viewport/intersection-based interaction support
- **React CountUp** — animated numeric counters
- **Lucide React** — icon system

### Forms / Communication

- **EmailJS Browser SDK** — contact form delivery without a custom backend

### Code Quality

- **Oxlint** — JavaScript/React linting

### Deployment

- **Vercel** — production hosting and deployment

---

## Application Architecture

The application follows a lightweight client-side architecture:

```text
                         ┌──────────────────────────┐
                         │   www.sadaaivgrow.in     │
                         │       Production         │
                         └────────────┬─────────────┘
                                      │
                                      ▼
                         ┌──────────────────────────┐
                         │         Vercel           │
                         │   Build + Static Hosting │
                         └────────────┬─────────────┘
                                      │
                                      ▼
                         ┌──────────────────────────┐
                         │       React + Vite       │
                         │      Client Application  │
                         └────────────┬─────────────┘
                                      │
                ┌─────────────────────┼─────────────────────┐
                │                     │                     │
                ▼                     ▼                     ▼
       ┌────────────────┐   ┌──────────────────┐   ┌─────────────────┐
       │ React Router   │   │ Local Data /     │   │ EmailJS         │
       │ Page Routing   │   │ Static Assets    │   │ Contact Delivery│
       └────────────────┘   └──────────────────┘   └─────────────────┘
```

### Runtime flow

```text
Visitor
   │
   ▼
React Application
   │
   ├── Home
   ├── Services
   ├── Portfolio
   ├── About
   ├── Insights
   └── Contact
          │
          ▼
     Client Validation
          │
          ▼
        EmailJS
          │
          ▼
     Contact Message
```

There is **no custom application backend or database in this repository**. The website is primarily a frontend application, with EmailJS providing the external form-delivery service.

---

## Routes

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Main brand, services, methodology and CTA experience |
| `/about` | About | Story, mission, vision, differentiators and team |
| `/services` | Services | Detailed Build and Run service offerings |
| `/portfolio` | Portfolio | Four project case studies and outcomes |
| `/blog` | Insights | Editorial client stories |
| `/insights` | Insights | Alias route for the Insights page |
| `/blog/:slug` | Blog Post | Dynamic blog-post route component |
| `/contact` | Contact | Lead/contact form |
| `*` | Not Found | Fallback page |

---

## Project Structure

```text
sadaAIv.grow_host_V1/
│
├── public/
│   ├── image/                  # Public project/team imagery
│   ├── favicon.png
│   ├── favicon.svg
│   ├── icons.svg
│   ├── logo.png
│   ├── logo.jpeg
│   ├── sadaAIv Logo_Black.png
│   ├── sadaAIv Logo_White.png
│   └── abc.png
│
├── src/
│   ├── assets/                 # Imported project and brand assets
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   └── ui/
│   │       ├── CubeReveal.jsx
│   │       ├── ProjectCard.jsx
│   │       ├── ScrollReveal.jsx
│   │       ├── ScrollToTop.jsx
│   │       ├── StackedProjects.jsx
│   │       └── TypewriterWord.jsx
│   │
│   ├── data/
│   │   └── content.js          # Services, portfolio, stories, metrics, etc.
│   │
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogPost.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   ├── Portfolio.jsx
│   │   └── Services.jsx
│   │
│   ├── styles/
│   │   ├── index.css
│   │   ├── layout.css
│   │   ├── motion.css
│   │   └── pages.css
│   │
│   ├── utils/
│   │   └── scrollMotion.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

---

## Getting Started

### Prerequisites

Make sure the following are installed:

- **Node.js** — use a current LTS release
- **npm** — included with Node.js
- **Git** — for cloning and version control

Check your installation:

```bash
node --version
npm --version
git --version
```

### Clone the repository

```bash
git clone https://github.com/Shrestha-Gupta/sadaAIv.grow_host_V1.git
cd sadaAIv.grow_host_V1
```

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Vite will start the local development server and print the local URL in the terminal.

### Create a production build

```bash
npm run build
```

### Preview the production build locally

```bash
npm run preview
```

### Run linting

```bash
npm run lint
```

---

## Available Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create an optimized production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

---

## Contact Form & EmailJS

The Contact page uses `@emailjs/browser` to send form submissions directly from the browser.

The implementation is located at:

```text
src/pages/Contact.jsx
```

The form performs client-side validation before calling EmailJS.

### Important security note

Do **not** add private EmailJS credentials, passwords, API secrets, or other sensitive values to the repository.

If the EmailJS configuration is changed in the future, keep the configuration management appropriate for a browser-side integration and review EmailJS restrictions/security settings before deployment.

---

## Deployment

The production website is deployed on **Vercel** and connected to the `main` branch of this repository.

### Standard deployment flow

```text
git push origin main
        │
        ▼
      Vercel
        │
        ▼
   Install dependencies
        │
        ▼
     npm run build
        │
        ▼
 Production Deployment
        │
        ▼
www.sadaaivgrow.in
```

### Vercel configuration

The project does not require a custom `vercel.json` file. Vite's standard production build output is sufficient for the current deployment setup.

For a new Vercel project:

1. Import the GitHub repository.
2. Select the Vite/React project configuration if prompted.
3. Use `npm run build` as the build command.
4. Deploy the project.
5. Configure the required custom domain if deploying under a different domain.

---

## Content Management

This project currently uses **static JavaScript data** rather than a CMS or database.

Most website content can be updated from:

```text
src/data/content.js
```

This file contains structured data for:

- Services
- Portfolio projects
- Insights/client stories
- Team data
- Sectors
- Metrics

Page-specific content and layouts remain inside their respective components under `src/pages/`.

---

## Adding a New Page

To add a new page:

1. Create the page component in `src/pages/`.
2. Import it in `src/App.jsx`.
3. Add a `<Route />` entry.
4. Add the page to the navbar/footer if it should be publicly discoverable.
5. Add responsive styles in `src/styles/pages.css` or the appropriate stylesheet.
6. Test direct navigation and mobile layouts.
7. Run:

```bash
npm run lint
npm run build
```

---

## Updating Portfolio Content

Portfolio content is data-driven through `src/data/content.js`.

A portfolio item can include:

```js
{
  id: 1,
  title: "Project title",
  sector: "Industry / Sector",
  tags: ["Service", "Capability"],
  description: "Project description",
  result: "Outcome or metric",
  liveUrl: "https://example.com",
  image: projectImage
}
```

When adding a project, also add the corresponding image asset and verify its import path.

---

## Motion & Interaction System

The project contains reusable interaction components instead of implementing every animation independently.

### `ScrollReveal`

Provides viewport-based reveal behaviour for sections and content blocks.

### `CubeReveal`

Provides a higher-level reveal wrapper used around major sections.

### `TypewriterWord`

Cycles through contextual words in hero and section headings.

### `StackedProjects`

Creates the stacked/scroll-driven project presentation used by the portfolio.

### `ScrollToTop`

Resets the page position when navigating between routes.

### `scrollMotion.js`

Contains shared scroll-motion utility logic.

---

## Responsive Design

The website is designed for:

- Desktop screens
- Tablets
- Mobile devices

The navigation switches to a mobile menu on smaller viewports, while layouts, typography, cards, and project sections adapt through the site's responsive CSS system.

When making UI changes, test at minimum:

- Mobile portrait
- Tablet width
- Desktop width
- Large desktop width

---

## Performance Considerations

The application is intentionally lightweight at the architecture level:

- Vite production bundling
- Static assets served through Vercel/CDN infrastructure
- Client-side routing
- Reusable React components
- Lazy-loaded imagery in the Insights experience
- No custom backend/database to maintain

Large image assets are present in the repository, so future optimisation work should prioritise image compression and modern formats such as WebP/AVIF where appropriate.

---

## Accessibility Considerations

The current implementation includes several accessibility-oriented practices:

- Semantic navigation and form elements
- `alt` text for major images
- Form labels associated with inputs
- Button and navigation controls
- Mobile navigation toggle with an accessible label
- Responsive typography and layout

Future improvements can include deeper keyboard-navigation auditing, focus-state auditing, contrast testing, and automated accessibility testing.

---

## Security & Production Notes

This is a frontend application and should be treated accordingly.

- Never commit private API keys or secrets.
- Review all browser-exposed third-party credentials before production use.
- Keep dependencies updated and audit vulnerabilities regularly.
- Validate external links and third-party integrations before deployment.
- Avoid putting sensitive customer/client information directly into static frontend data.
- Use a backend service when future features require private credentials, protected APIs, authentication, or sensitive data storage.

---

## Known Limitations

The current architecture intentionally keeps the site simple, but it also means:

- Content is maintained in source files rather than a CMS.
- The contact workflow depends on EmailJS.
- There is no application database in this repository.
- There is no authentication layer.
- Insights/client stories are statically defined.
- Large media files could be optimised further.

These are architectural characteristics of the current version rather than deployment errors.

---

## Suggested Future Improvements

Potential next iterations include:

- Headless CMS integration for Insights and portfolio content
- Image optimisation pipeline
- WebP/AVIF asset migration
- Automated SEO metadata per route
- Open Graph / social sharing metadata
- Sitemap and robots configuration
- Analytics and conversion tracking
- Automated accessibility testing
- Automated CI checks for lint/build
- Contact-form spam protection
- Backend/API layer for advanced lead management
- Content search and filtering for Insights
- Structured case-study pages with richer project metrics

---

## Development Workflow

A recommended workflow for contributors:

```text
Create branch
     ↓
Make UI / content change
     ↓
Run local development server
     ↓
Test desktop + mobile
     ↓
Run lint
     ↓
Run production build
     ↓
Commit changes
     ↓
Push branch / merge to main
     ↓
Vercel production deployment
```

Before merging production changes, verify:

```bash
npm run lint
npm run build
```

---

## Project Philosophy

sadaAIv.grow is positioned around a simple operating principle:

> **Ideas matter only when they become something that works in the real world.**

The website reflects that principle in both its content and implementation: technology, people, and execution are presented as one connected delivery system.

---

## Acknowledgements

Built with:

- React
- Vite
- React Router
- EmailJS
- Framer Motion
- React Intersection Observer
- React CountUp
- Lucide React
- Oxlint
- Vercel

---

## License

No `LICENSE` file is currently included in this repository.

Unless a license is added explicitly, the source code should not be assumed to be available for unrestricted redistribution, modification, or commercial use.

---

## Author / Project

**sadaAIv.grow**

Production website: https://www.sadaaivgrow.in/

GitHub: https://github.com/Shrestha-Gupta/sadaAIv.grow_host_V1

---

<p align="center">
  <strong>sadaAIv.grow</strong><br />
  Build better systems. Execute with structure. Ship what matters.
</p>
