import LandingV3Page from '@/features/LandingV3/LandingV3Page';
import type { Metadata } from 'next';
import { getAssetPath } from '@/lib/basePath';

const title = 'brainlife.io · Brain data across scales';
const description = 'Open platform to analyze, share and publish brain data across scales: electron and light microscopy, PS-OCT, MRI, fMRI, EEG and MEG. Reproducible Apps on shared supercomputers, results in the browser, publications with DOIs.';

export const metadata: Metadata = {
    title,
    description,
    openGraph: { title, description, images: [getAssetPath('/og-image.png')] },
    // staging deploys (NEXT_PUBLIC_PREVIEW=1) must not be indexed
    ...(process.env.NEXT_PUBLIC_PREVIEW === '1' ? { robots: { index: false, follow: false } } : {}),
};

export default function Home() {
    return <LandingV3Page />;
}
