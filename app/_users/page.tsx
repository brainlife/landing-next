import UsersPage from '@/features/Users/UsersPage';
import ChakraProvider from '@/components/ChakraProvider';
import type { Metadata } from 'next';
import { getAssetPath } from '@/lib/basePath';

export const metadata: Metadata = {
    title: 'Users & Community | Brainlife.io',
    description:
        'Brainlife is developed for you, by people like you. Empowering students, computer scientists, and data scientists with cloud-based neuroimaging.',
    openGraph: {
        title: 'Users & Community | Brainlife.io',
        description:
            'Brainlife is developed for you, by people like you. Empowering students, computer scientists, and data scientists with cloud-based neuroimaging.',
        images: [getAssetPath('/og-image.png')],
    },
};

export default function UsersPageRoute() {
    return (
        <ChakraProvider>
            <UsersPage />
        </ChakraProvider>
    );
}
