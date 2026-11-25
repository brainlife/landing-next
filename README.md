<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="public/brand/brainlife-mark-lightblue-orange-app-on-dark.svg">
    <img src="public/brand/brainlife-mark-lightblue-orange-app-on-light.svg" alt="brainlife.io" width="140">
  </picture>
</p>

<h1 align="center">landing-next</h1>

<p align="center">
  The brainlife.io landing site. Brain data across scales: one place to analyze, share and publish it.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-active-brightgreen.svg" alt="Status: active">
  <a href="https://brainlife.io"><img src="https://img.shields.io/badge/brainlife.io-site-3b9fd0.svg" alt="brainlife.io"></a>
  <a href="https://brainlife.io/docs"><img src="https://img.shields.io/badge/Docs-brainlife.io%2Fdocs-005981.svg" alt="Documentation"></a>
  <a href="https://doi.org/10.1038/s41592-024-02237-2"><img src="https://img.shields.io/badge/DOI-10.1038%2Fs41592--024--02237--2-e57536.svg" alt="Nature Methods paper"></a>
</p>

## 🧠 At a glance

| | |
|---|---|
| 🧭 **What** | Public landing site for brainlife.io: the home page (`/`) and About (`/about`), with live landing data fetched at build time |
| 🧱 **Stack** | Next.js 16 (App Router, static export) · React 19 · TypeScript · Chakra UI · Tailwind CSS · Framer Motion / GSAP · Three.js · Leaflet |
| 🌐 **Deploys to** | GitHub Pages at [brainlife.github.io/landing-next](https://brainlife.github.io/landing-next/) on every push to `main` ([`deploy.yml`](.github/workflows/deploy.yml)); `npm run build-prod` builds for `https://brainlife.io` |
| 🎨 **Brand** | Marks, palette and usage in [`public/brand/`](public/brand) |

## 🚀 Quick start

You need Node.js 20 or later.

```bash
git clone https://github.com/brainlife/landing-next && cd landing-next
npm ci
npm run dev            # http://localhost:3000
```

| Command | What it does |
|---|---|
| `npm run build` | Static export to `out/` (base path `/landing-next` in production, override with `NEXT_PUBLIC_BASE_PATH`) |
| `npm run build-prod` | Build for the root of `https://brainlife.io` |
| `npm run landing:data` | Refresh the landing data (counts, publications) used by the build |
| `npm test` | Check assets and landing data |
| `npm run lint` | ESLint |

To preview a branch before review, run [`deploy-preview.yml`](.github/workflows/deploy-preview.yml) in your fork (it never deploys from this repository).

## 🗂️ Layout

`app/` holds the routes (`page.tsx` home, `about/`; folders starting with `_` are parked pages that are not routed), `features/` the page sections, `components/` the navbar and footer, `public/brand/` the brainlife marks and `scripts/` the data and asset checks. Agent notes: [AGENTS.md](AGENTS.md).

## 🔗 Related repositories

| Repository | Role |
|---|---|
| [brainlife-lite](https://github.com/brainlife/brainlife-lite) | The brainlife.io web app |
| [docs-next](https://github.com/brainlife/docs-next) | New documentation site |
| [ezbids](https://github.com/brainlife/ezbids) | Neuroscience data to BIDS, from instruments to shared datasets |

## 📚 Citing

If you use brainlife.io in your work, please cite:

> Hayashi S, Caron BA, Heinsfeld AS, et al. brainlife.io: a decentralized and open-source cloud platform to support neuroscience research. *Nature Methods* 21:809–813 (2024). [doi:10.1038/s41592-024-02237-2](https://doi.org/10.1038/s41592-024-02237-2)

## 💰 Funding

brainlife.io is developed by the Pestilli Lab at The University of Texas at Austin and is publicly funded; acknowledging that support helps keep it running.

<details>
<summary>Grants (verified list, from <a href="https://github.com/brainlife/ezbids/blob/master/CREDITS.md#funding">ezbids CREDITS.md</a>)</summary>

| Funder | Award | Title |
|---|---|---|
| NIH NINDS | [U24NS140384](https://reporter.nih.gov/project-details/U24NS140384) | BRAIN CONNECTS: The Axonal Projectome EXchange (APEX) |
| NIH NIMH | [R01MH126699](https://reporter.nih.gov/project-details/R01MH126699) | Community-driven development of BIDS |
| NIH NIBIB | [R01EB030896](https://reporter.nih.gov/project-details/R01EB030896) | CRCNS US-France: open science and cloud computing of MEEG |
| NIH NIBIB | [R01EB029272](https://reporter.nih.gov/project-details/R01EB029272) | CRCNS US-France: lowering the barrier of entry to network neuroscience |
| NSF | [BCS-1636893](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1636893), [2148729](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2148729) | BD Spokes: Advanced Computational Neuroscience Network |
| NSF | [BCS-1734853](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1734853), [2203524](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2203524) | NCS-FO: Connectome mapping algorithms |
| NSF | [IIS-1912270](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1912270), [2148700](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2148700) | CRCNS US-German: DataLad |
| NSF | [ACI-1916518](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1916518) | BD Hubs: Midwest Big Data Hub |
| Wellcome Trust | [226486](https://grantnav.threesixtygiving.org/grant/360G-Wellcome-226486_Z_22_Z) | Developing an international governance framework to advance global brain and mental health data equity and innovation |

</details>

## 🤝 Contributing

Issues and pull requests are welcome in this repository. For help using brainlife.io, see the [documentation](https://brainlife.io/docs).

## ⚖️ License

This repository does not include a license file yet.

<p align="center"><sub>brainlife.io · Brain data across scales. One place to analyze, share and publish it. · The University of Texas at Austin</sub></p>
