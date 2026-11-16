# Product Design Portfolio Website

A production-ready product design portfolio website built with React 19, TypeScript, and Tailwind CSS. Tailored for enterprise product design, operational logistics UX, research methodologies, and AI-assisted workflows.

---

## 1. Running & Building the Website

### Development Mode
```bash
npm run dev
```
Starts the Vite development server binding to `0.0.0.0:3000`.

### Type Checking & Linting
```bash
npm run lint
```
Executes `tsc --noEmit` to validate all TypeScript types.

### Production Build
```bash
npm run build
```
Generates a static production bundle in `dist/`.

---

## 2. Profile & Personal Details Configuration

All personal information, availability, social links, contact email, and CV paths are centralised in a single configuration file:

📁 **`src/config/profileConfig.ts`**

```typescript
export const profile = {
  name: "Nur Evalia Syah",
  fullName: "Nur Evalia Syah binti Sharizad",
  title: "Product Designer",
  roleDescriptor: "Specialising in complex systems, operational UX, research, and AI-assisted workflows",
  location: "Malaysia",
  email: "evaliasyahh@gmail.com",
  linkedInUrl: "https://www.linkedin.com/in/evaliasyahh",
  githubUrl: "https://github.com",
  cvPath: "/cv/NUR_EVALIA_SYAH_BINTI_SHARIZAD-product-designer-cv.pdf",
  cvFilename: "Nur-Evalia-Syah-Product-Designer-CV.pdf",
  availability: "Available for product design & UX opportunities",
  ...
};
```

Updating this file automatically updates:
- Global navigation & mobile menu
- Hero section availability badge and location
- About narrative and metadata grid
- Footer copyright and profile descriptors
- Contact page email, LinkedIn, and mailto triggers

---

## 3. Adding or Replacing the CV

1. Place your updated PDF in the `public/cv/` directory:
   - e.g. `public/cv/YOUR_NAME-product-designer-cv.pdf`
2. Update the `cvPath` and `cvFilename` properties in `src/config/profileConfig.ts`.
3. All "Download CV" buttons across the Header, Hero, About, and Contact pages will immediately serve the new PDF file with the download attribute set.

---

## 4. Adding Project Images and Diagrams

Assets are declared and described centrally in:

📁 **`src/data/assetsManifest.ts`**

To replace an image or placeholder:
1. Export your 2x high-resolution interface screenshot or diagram into `public/assets/projects/` (or import directly).
2. Follow the recommended filename convention:
   `{project}-{section}-{asset-name}.{png|svg|webp}`
3. Update the corresponding entry in `assetsManifest.ts`.
4. Wrap with the `<ImageFrame>` component in `src/pages/CaseStudyDetailPage.tsx`:
   ```tsx
   <ImageFrame asset={assetsManifest["ems2-hero"]}>
     <img src="/assets/projects/ems2-hero.png" alt="..." className="rounded-xl w-full" />
   </ImageFrame>
   ```

---

## 5. Adding Another Case Study

1. Open `src/data/projectsData.ts`.
2. Add a new `Project` object to the `projects` array adhering to the `Project` interface defined in `src/types.ts`:
   - `slug`: unique URL segment (e.g. `my-new-project`)
   - `title`, `cardTitle`, `subtitle`, `cardSummary`
   - `snapshot`: role, timeline, platforms, status
   - `verifiedMetrics`: verified facts only
   - `context`, `problemOverview`, `problems`
   - `researchAndDiscovery`, `keyInsights`, `decisions`
   - `projectedOutcomes`: projected benefits clearly flagged
   - `constraints`, `reflection`
3. The routing in `src/App.tsx` dynamically mounts `/case-studies/:slug` so the new case study will render automatically using the standard 17-part case study template.

---

## 6. How Markdown Files Map to Website Content

The canonical Markdown files from the knowledge base map directly into the typed structure in `src/data/projectsData.ts`:

| Source Markdown File | Website Section & Route |
| :--- | :--- |
| `case-studies/ems2-express.md` | `/case-studies/ems2-express` (Flagship Enterprise Study) |
| `case-studies/detik-arkiv.md` | `/case-studies/detik-arkiv` (Product Concept & Mobile UX) |
| `case-studies/ai-assisted-product-design-workflow.md` | `/case-studies/ai-assisted-product-design-workflow` (AI Systems) |
| `case-studies/master-research-mobile-ux-principles.md` | `/case-studies/master-research-mobile-ux-principles` (UX Research) |
| `README.md` | Hero introduction, positioning, project order |
| `DESIGN_SYSTEM.md` | Cobalt `#1B5CF0`, Teal `#0D9488`, Slate neutrals, Work Sans & Open Sans |
| `CONTENT_GUIDELINES.md` | Evidence levels, projected outcomes callouts, metric verification |
| `ASSET_MANIFEST.md` | `assetsManifest.ts` metadata & technical diagrams |

---

## 7. How Incomplete Content is Excluded

Per the project accuracy guidelines:
- No `[TO FILL]`, `[VERIFY]`, or AI instructions are rendered on public screens.
- Missing or unverified metrics are excluded from `verifiedMetrics` arrays.
- Any unmeasured expected benefits are wrapped in the `<ProjectedOutcome>` notice component, explicitly communicating their pre-deployment or conceptual status.
- Research stages and preliminary principles are transparently labelled as "Ongoing research" and "Preliminary categories".

---

## 8. Configuring the Contact Form Backend

The contact page (`src/pages/ContactPage.tsx`) implements a transparent `mailto:` client launch fallback that requires zero third-party backend to function:
```tsx
window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
```

To connect an automated API backend (e.g. Formspree, Netlify Forms, or Cloud Functions):
1. In `src/pages/ContactPage.tsx`, update the `handleSubmit` function:
   ```tsx
   const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(formData),
   });
   if (response.ok) setSubmitted(true);
   ```
2. The user interface already includes success states, form validation, and accessible feedback.
