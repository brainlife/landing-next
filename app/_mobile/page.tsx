import MobilePage from '@/features/Mobile/MobilePage';
import ChakraProvider from '@/components/ChakraProvider';
import type { Metadata } from 'next';
import { getAssetPath } from '@/lib/basePath';

export const metadata: Metadata = {
    title: 'Brainlife Mobile',
    description:
        'Access your neuroimaging data, monitor supercomputing pipelines in real-time, and stay connected with your lab from iOS and Android devices.',
    openGraph: {
        title: 'Brainlife Mobile',
        description:
            'Access your neuroimaging data, monitor supercomputing pipelines in real-time, and stay connected with your lab from iOS and Android devices.',
        images: [getAssetPath('/og-image.png')],
    },
};

export default function MobilePageRoute() {
    return (
        <ChakraProvider>
            <MobilePage />
        </ChakraProvider>
    );
}
