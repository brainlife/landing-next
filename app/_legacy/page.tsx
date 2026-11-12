import LandingPage from '@/features/Landing/LandingPage';
import ChakraProvider from '@/components/ChakraProvider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Brainlife.io (previous landing page)',
    robots: { index: false },
};

/** The previous landing page, kept for comparison while the new one settles. */
export default function Legacy() {
    return (
        <ChakraProvider>
            <LandingPage />
        </ChakraProvider>
    );
}
