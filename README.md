<div align="center">
  <img src="assets/logo.svg" alt="Brainlife Logo" width="90" height="90" />
  <h1>Brainlife Web Portal</h1>
  <p><strong>Cloud-powered neuroscience computing, FAIR data governance, and AI-assisted neuroimaging pipelines.</strong></p>

  <p>
    <a href="https://brainlife.io"><img src="https://img.shields.io/badge/Production-brainlife.io-2693d8.svg" alt="Brainlife.io" /></a>
    <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-16.3-black?logo=next.js" alt="Next.js" /></a>
    <a href="https://react.dev"><img src="https://img.shields.io/badge/React-19-61dafb?logo=react" alt="React 19" /></a>
    <a href="https://chakra-ui.com"><img src="https://img.shields.io/badge/Chakra--UI-v2-319795?logo=chakraui" alt="Chakra UI" /></a>
    <a href="https://play.google.com/store/apps/details?id=com.brainlife.mobile"><img src="https://img.shields.io/badge/Google%20Play-Android%20App-34a853?logo=googleplay" alt="Google Play" /></a>
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License" />
  </p>
</div>

---

## 🧠 About Brainlife

[Brainlife.io](https://brainlife.io) is a free, open-source cloud computing platform for neuroscience data analysis. It empowers researchers to standardize, process, visualize, and share complex neuroimaging datasets (MRI, MEG, EEG, and microscopy) across distributed high-performance computing (HPC) clusters and cloud providers.

This repository houses the modern **Next.js web portal and landing platform**, replacing legacy static engines with a dynamic, reactive, and beautifully animated frontend.

---

## ✨ Features & Architecture

### 🚀 Landing Page (`/`)
* **Hero Visual Stage**: High-impact introduction featuring interactive neuroimaging background stages.
* **Stage-to-Process Pipeline**: Interactive step-by-step pipeline diagram demonstrating raw data ingestion, BIDS curation, and Slurm HPC dispatch.
* **Expanding Media Reel**: High-definition video showcase featuring **dMRI Track Density Imaging**, **PS-OCT 3D Volumetric Imaging**, and **Axonal Micro-Connectomics**.
* **Ecosystem Products Grid**:
  * **ezBIDS**: Automated in-browser DICOM/NIfTI to BIDS converter with AI metadata curation.
  * **ezGov**: FAIR data governance, access controls, and IRB compliance workflows.
  * **DICOMpare**: Multi-subject header difference inspector to identify protocol drift.
  * **SKAI**: AI Copilot for neuroscience—dispatching Slurm pipelines, querying open datasets, and analyzing outputs via conversational NLP.
* **Interactive Ecosystem Graph**: Visual topology showing interconnected computing apps, datasets, pipelines, and publications.
* **Sponsors & Compute Infrastructure**: Backed by **NSF**, **NIH**, **UT Austin**, **Indiana University**, **AWS**, **Microsoft Azure**, and national supercomputing centers.

---

### 👥 Team & Lab Community (`/team`)
* **Interactive Timeline Journey**: Chronological milestones and history of Brainlife development.
* **Member Directory & Alumni Network**: Filterable roster by research domain (Neuroscience, Engineering, Cloud HPC, UI/UX).
* **Member Inspection Modal**: Detailed modal drawer highlighting biographies, publications, GitHub, LinkedIn, and Google Scholar links.

---

### 📱 Brainlife Mobile (`/mobile`)
* **Mobile Companion Showcase**: Monitor long-running compute jobs, receive push notifications for pipeline completions, and explore datasets on iOS and Android.
* **Store Links**: Direct access to the [Google Play Store](https://play.google.com/store/apps/details?id=com.brainlife.mobile&pcampaignid=web_share) and Apple App Store.

---

### 🔬 Users & Scientific Impact (`/users`)
* **Global Researcher Map**: Interactive Leaflet map displaying active neuroscience labs worldwide.
* **Research Spotlights**: Featured publications and breakthrough studies powered by Brainlife pipelines.
* **Persona Matrix**: Tailored workflows for Principal Investigators, Postdocs, Clinicians, and Students.

---

### ℹ️ About & Governance (`/about`)
* Comprehensive overview of Brainlife's mission, open science governance, institutional partnerships, and citations.

---

## 🛠️ Tech Stack

| Domain | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **UI Components** | [Chakra UI v2](https://chakra-ui.com/) + [Emotion](https://emotion.sh/) |
| **Styling** | Vanilla CSS + [Tailwind CSS v4](https://tailwindcss.com/) |
| **Motion & Animation** | [Framer Motion](https://www.framer.com/motion/) + [GSAP 3 (ScrollTrigger)](https://greensock.com/gsap/) |
| **Smooth Scrolling** | [Lenis](https://lenis.darkroom.engineering/) |
| **3D & Mapping** | [Three.js](https://threejs.org/) + [Leaflet](https://leafletjs.com/) |
| **Iconography** | [Lucide React](https://lucide.dev/) |

---

## 📁 Repository Structure

```text
landing-next/
├── app/                        # Next.js App Router root & routes
│   ├── layout.tsx              # Root HTML layout with providers & smooth scroll
│   ├── page.tsx                # Main Landing Page entrypoint
│   ├── about/                  # About page route
│   ├── mobile/                 # Mobile app showcase route
│   ├── team/                   # Team & Alumni route
│   └── users/                  # Users, Publications & Research route
├── assets/                     # Vector SVGs, product mockups, and images
│   ├── landing/                # Visual media, reels, and screenshots
│   ├── team/                   # Team member avatars & photos
│   ├── logo.svg                # Brainlife core emblem
│   └── skai.svg                # SKAI AI Copilot vector logo
├── components/                 # Global UI widgets & navigation
│   ├── Navbar.tsx              # Sticky dynamic glassmorphic header
│   ├── Footer.tsx              # Portal footer & quick links
│   └── NewProjectModal.tsx     # Project creation modal trigger
├── contexts/                   # Global React state (AuthContext, etc.)
├── features/                   # Modular feature domains
│   ├── Landing/                # Landing page sub-sections & visualizers
│   ├── Team/                   # Team timeline, member grid & modal
│   ├── Mobile/                 # Mobile features, preview & CTA
│   └── Users/                  # User map, persona matrix & spotlight
├── lib/                        # Helpers, math utilities, and constants
├── public/                     # Static public assets served at root
└── theme.ts                    # Custom Chakra UI dark-mode theme & tokens
```

---

## ⚡ Getting Started

### Prerequisites

* **Node.js**: `v20.x` or later (LTS recommended)
* **Package Manager**: `npm`, `pnpm`, or `yarn`

### 1. Clone the Repository

```bash
git clone https://github.com/brainlife/landing-next.git
cd landing-next
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with hot-reloading.

### 4. Build for Production

```bash
npm run build
npm start
```

### 5. Lint & Code Quality

```bash
npm run lint
```

---

## 🤝 Contributing

We welcome contributions from the scientific and open-source communities!

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/amazing-feature`.
3. Commit your changes with clear messages: `git commit -m 'feat: add amazing feature'`.
4. Push to your branch: `git push origin feature/amazing-feature`.
5. Open a Pull Request for review.

---

## 📄 License & Funding

* **License**: Distributed under the [MIT License](LICENSE).
* **Funding**: Brainlife is supported by the **National Science Foundation (NSF)** (Awards 1734853, 1636653, 1916518) and the **National Institutes of Health (NIH)** (Awards R01EB029272, R01EB030896).
