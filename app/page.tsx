import type { Metadata } from 'next';
import { BASE_PATH } from '@/lib/basePath';

// Entry point for brainlife.io/. Replaces the old Hugo index.html:
// logged-in users (a "jwt" in localStorage, set by the warehouse UI) go to /projects,
// everyone else to the landing page at /about. Runs as an inline script so it fires
// while the HTML is parsed, before React loads.
const ABOUT = `${BASE_PATH}/about/`;
const isPreview = process.env.NEXT_PUBLIC_PREVIEW === '1';

// Preview/staging deploys have no /projects route, so they always go to the landing page.
const script = isPreview
    ? `document.location=${JSON.stringify(ABOUT)};`
    : `try{document.location=localStorage.getItem("jwt")?"/projects":${JSON.stringify(ABOUT)};}catch(e){document.location=${JSON.stringify(ABOUT)};}`;

export const metadata: Metadata = {
    ...(isPreview ? { robots: { index: false, follow: false } } : {}),
};

export default function Entry() {
    return (
        <>
            <script dangerouslySetInnerHTML={{ __html: script }} />
            <noscript>
                <a href={ABOUT}>Continue to brainlife.io</a>
            </noscript>
        </>
    );
}
