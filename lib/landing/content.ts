/**
 * All editable copy and lists for the landing page live here, so a wording change never
 * touches a component. Links come from lib/constants.ts.
 */
import { EXTERNAL_LINKS } from '@/lib/constants';
import type { Motif } from './motifs';
import type { HeroVariant } from './pairs';

/** Public datasets live on the connects site, not the portal's /datasets page. */
const PUBLIC_DATASETS = 'https://connects.brainlife.io/public-datasets';

export const NAV = [
  { label: 'Apps', href: EXTERNAL_LINKS.APPS },
  { label: 'Datasets', href: PUBLIC_DATASETS },
  { label: 'Publications', href: 'https://connects.brainlife.io/research' },
  { label: 'Docs', href: EXTERNAL_LINKS.DOCS },
];

export const HERO = {
  eyebrow: 'Open platform · The University of Texas at Austin',
  headline: 'Brain data across scales. One place to analyze, share and publish it.',
  lede: 'Electron and light microscopy, PS-OCT, MRI, fMRI, EEG and MEG. Run reproducible analyses on shared supercomputers, look at the results in your browser, publish them with a DOI.',
  primary: { label: 'Start a project', href: EXTERNAL_LINKS.PORTAL },
  secondary: { label: 'Browse Apps and Datasets', href: EXTERNAL_LINKS.APPS },
  captions: {
    field: ['Across scales', 'electron microscopy → lightsheet → PS-OCT → MRI'],
    lens: ['Across scales', 'nm → cm, read inward'],
    ruler: ['Nine orders of magnitude', 'what each instrument resolves · which viewer opens it'],
  } as Record<HeroVariant, [string, string]>,
};

/** Figures that are not derived from the data files. Confirm against the warehouse before a release. */
export const STATS = [
  { value: '400+', label: 'Apps' },
  { value: '5,000+', label: 'users' },
  { value: '300+', label: 'public datasets' },
  // publications count is appended from pubs.json at render time
  { value: 'nm → cm', label: 'scales' },
];
export const FUNDING_LINE = 'Free for researchers · funded by NIH, NSF, DoD, Kavli, Wellcome';

export const SCALES = {
  eyebrow: 'Measurements across scales',
  title: 'Every representation of the brain, from synapses to systems.',
  text: 'Stylised views of the datatypes that are live on the platform today, in the order of the scale they measure. Upload your own or import from public archives; 139 datatypes keep Apps interoperable.',
  more: { label: 'Browse public datasets →', href: PUBLIC_DATASETS },
  axis: ['nm · synapses', 'µm · cells', 'mm · circuits', 'cm · systems', 'whole brain'],
  importFrom: ['OpenNeuro', 'BossDB', 'DANDI', 'ezBIDS (DICOM → BIDS)', 'Your computer'],
  formats: ['BIDS', 'NIfTI', 'OME-Zarr 0.5', 'Neuroglancer precomputed', 'TRX', 'NWB', 'FIF'],
};

/** One tile per datatype family, ordered by the scale it measures (smallest first). */
export const TILES: { art: Motif; title: string; sub: string }[] = [
  { art: 'em', title: 'Electron microscopy', sub: 'nm · Neuroglancer' },
  { art: 'lightsheet', title: 'Lightsheet microscopy', sub: 'µm · OME-Zarr' },
  { art: 'oct', title: 'PS-OCT · tract tracing', sub: 'µm–mm · Zarr' },
  { art: 'tracts', title: 'White-matter tracts', sub: 'dMRI · TRX' },
  { art: 'surface', title: 'Brain surfaces', sub: 'GIfTI · parcellations' },
  { art: 'matrix', title: 'Connectivity matrices', sub: 'connectome · CSV' },
  { art: 'fmri', title: 'Functional maps', sub: 'fMRI · BIDS' },
  { art: 'meg', title: 'MEG · EEG', sub: 'FIF · NWB' },
];

export const PUBLICATIONS = {
  eyebrow: 'From the publications',
  title: 'Science published on brainlife, with the people who made it.',
  text: 'Every card is a record from the publication registry: title, DOI, authors and institutions, and the clips and banner images the authors attached. The order shuffles on each visit.',
  moreHref: 'https://connects.brainlife.io/research',
  /** titles matching this are hidden (test records) */
  hide: /^(test|demo|pilot)\b/i,
  cards: 12,
};

export const APPS = {
  eyebrow: 'Apps',
  title: '400+ Apps, run on shared supercomputers.',
  text: 'Any GitHub repository becomes a containerized App. Jobs run on TACC, Jetstream2 and ACCESS, and every output opens in NiiVue or Neuroglancer. Each card names what the App does and who maintains it.',
  more: { label: 'Browse all Apps →', href: EXTERNAL_LINKS.APPS },
  cards: 12,
};

export const PEOPLE = {
  eyebrow: 'People',
  title: 'Built by the people who publish on it.',
  text: 'Authors of the most recent publications, pulled from the publication registry so this never goes stale.',
  href: 'https://connects.brainlife.io/research',
};

export const FOOTER = {
  left: 'brainlife.io · Pestilli Lab, The University of Texas at Austin',
  links: [
    { label: 'GitHub', href: EXTERNAL_LINKS.GITHUB },
    { label: 'Contact', href: EXTERNAL_LINKS.CONTACT },
  ],
  licence: 'Code MIT · content CC BY 4.0',
};

/** Tools ecosystem. `role` drives the badge; keep names as the projects spell them. */
export type ToolRole = 'brainlife' | 'upcoming' | 'partner' | 'used' | 'supported';
export const TOOL_ROLE_LABEL: Record<ToolRole, string> = {
  brainlife: 'brainlife product', upcoming: 'upcoming', partner: 'partner project', used: 'tool we use', supported: 'supported tool',
};
export const ECOSYSTEM = {
  eyebrow: 'Tools ecosystem',
  title: 'The tools around the platform, and the ones it runs.',
  text: 'brainlife builds a few tools of its own, partners on others, and wraps the community’s standard software as Apps so it runs on shared compute without installation.',
  tools: [
    { name: 'ezBIDS', role: 'brainlife' as ToolRole, desc: 'DICOM to BIDS in the browser, with NiiVue built in.', href: EXTERNAL_LINKS.EZBIDS },
    { name: 'DICOMpare', role: 'brainlife' as ToolRole, desc: 'Check scanner protocols against a reference before data leaves the site.', href: EXTERNAL_LINKS.DICOMPARE },
    { name: 'ezGov', role: 'upcoming' as ToolRole, desc: 'Data-sharing governance made simple: agreements, access, provenance.', href: EXTERNAL_LINKS.EZGOV },
    { name: 'NiiVue', role: 'partner' as ToolRole, desc: 'WebGL2 viewer for volumes, surfaces and streamlines on any device.', href: 'https://niivue.com' },
    { name: 'Neuroglancer', role: 'used' as ToolRole, desc: 'Google’s WebGL viewer for terabyte EM and microscopy volumes.', href: 'https://github.com/google/neuroglancer' },
    { name: 'FreeSurfer', role: 'supported' as ToolRole, desc: 'Cortical surfaces and parcellations from T1w.', href: 'https://surfer.nmr.mgh.harvard.edu' },
    { name: 'FSL', role: 'supported' as ToolRole, desc: 'Brain extraction, registration, diffusion and fMRI tools.', href: 'https://fsl.fmrib.ox.ac.uk' },
    { name: 'MRtrix3', role: 'supported' as ToolRole, desc: 'Diffusion preprocessing and anatomically constrained tractography.', href: 'https://www.mrtrix.org' },
    { name: 'DIPY', role: 'supported' as ToolRole, desc: 'Diffusion imaging in Python: denoising, models, tracking.', href: 'https://dipy.org' },
    { name: 'fMRIPrep', role: 'supported' as ToolRole, desc: 'Robust functional MRI preprocessing.', href: 'https://fmriprep.org' },
    { name: 'QSIPrep', role: 'supported' as ToolRole, desc: 'Diffusion MRI preprocessing and reconstruction.', href: 'https://qsiprep.readthedocs.io' },
    { name: 'ANTs', role: 'supported' as ToolRole, desc: 'Registration, segmentation and template building.', href: 'https://github.com/ANTsX/ANTs' },
  ],
  more: 'and 400+ more as Apps',
};

/** Infrastructure the platform runs on. Grouped so the row reads at a glance; text only, no logos. */
export const INFRASTRUCTURE = {
  eyebrow: 'Infrastructure',
  title: 'Containers, an orchestrator, and public compute.',
  groups: [
    { label: 'Containers', items: ['Docker', 'Singularity / Apptainer'] },
    { label: 'Orchestration', items: ['Amaretti (brainlife’s workflow service)'] },
    { label: 'Compute', items: ['TACC', 'Jetstream2 cloud', 'EGI cloud', 'ACCESS'] },
    { label: 'Storage', items: ['AWS Open Data', 'Object storage for OME-Zarr and precomputed volumes'] },
  ],
};

/** Small UI strings that are not section copy. Kept here so every visible word is in one file. */
/** Staging builds (NEXT_PUBLIC_PREVIEW=1) show the review bar to everyone, with this feedback link. */
export const PREVIEW = {
  label: 'Preview build · not the live site',
  feedbackLabel: 'Leave feedback',
  /** Opens a pre-filled GitHub issue; {state} is replaced with the hero/pair the reviewer is looking at. */
  feedbackHref: 'https://github.com/brainlife/landing-next/issues/new?title=Landing%20page%20feedback&labels=landing-v3&body='
    + encodeURIComponent('**What I was looking at:** {state}\n\n**What works:**\n\n**What does not:**\n\n**Suggestions:**\n'),
};

export const LABELS = {
  signIn: 'Sign in',
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  publicationsWithDois: 'publications with DOIs',
  importFrom: 'Import from',
  formats: 'Formats',
  video: 'Video',
  clip: 'clip', clips: 'clips',
  noMedia: 'No media yet',
  clipUnavailable: 'Clip unavailable here · open the publication',
  authorsOnPage: 'Authors on the publication page',
  andMore: (n: number) => `and ${n} more`,
  neuroglancerViews: 'Neuroglancer views',
  publicationFallback: 'brainlife publication',
  maintainedBy: 'Maintained by',
  runs: 'runs', users: 'users',
  appFallbackDesc: 'See the repository for details.',
  appFallbackTag: 'App',
  pause: 'Pause auto-advance', play: 'Resume auto-advance',
};
