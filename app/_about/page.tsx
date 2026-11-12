import TeamPage from '@/features/Team/TeamPage';
import ChakraProvider from '@/components/ChakraProvider';
import type { Metadata } from 'next';
import { getAssetPath } from '@/lib/basePath';

export const metadata: Metadata = {
    title: 'About Brainlife.io',
    description:
        'Brainlife.io is a free, open-source cloud computing platform for reproducible neuroscience. Learn about our mission, platform history, leadership, and global community.',
    openGraph: {
        title: 'About Brainlife.io',
        description:
            'Brainlife.io is a free, open-source cloud computing platform for reproducible neuroscience. Learn about our mission, platform history, leadership, and global community.',
        images: [getAssetPath('/og-image.png')],
    },
};

export default function AboutPageRoute() {
    return (
        <ChakraProvider>
            <TeamPage />
        </ChakraProvider>
    );
}

