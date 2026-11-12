import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getAssetPath } from "@/lib/basePath";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.NODE_ENV === "production"
    ? "https://brainlife.github.io"
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Brainlife.io Open, Cloud-based Neuroimaging Analysis Platform",
  description: "A free and open-source cloud platform for secure, reproducible neuroimaging research and high-performance computing.",
  icons: {
    icon: [
      { url: getAssetPath('/logo.png'), sizes: '512x512', type: 'image/png' },
      { url: getAssetPath('/icon-192.png'), sizes: '192x192', type: 'image/png' },
      { url: getAssetPath('/icon.png'), sizes: '512x512', type: 'image/png' },
      { url: getAssetPath('/favicon.ico') },
    ],
    apple: [
      { url: getAssetPath('/logo.png'), sizes: '512x512', type: 'image/png' },
    ],
    shortcut: [getAssetPath('/logo.png')],
  },
  openGraph: {
    type: 'website',
    siteName: 'Brainlife.io',
    title: 'Brainlife.io',
    description: 'A free and open-source cloud computing platform for reproducible neuroscience.',
    images: [
      {
        url: getAssetPath('/og-image.png'),
        width: 1200,
        height: 630,
        alt: 'Brainlife.io',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brainlife.io',
    description: 'A free and open-source cloud computing platform for reproducible neuroscience.',
    images: [getAssetPath('/og-image.png')],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" type="image/png" sizes="512x512" href={getAssetPath('/logo.png')} />
        <link rel="icon" type="image/png" sizes="192x192" href={getAssetPath('/icon-192.png')} />
        <link rel="icon" type="image/x-icon" href={getAssetPath('/favicon.ico')} />
        <link rel="shortcut icon" href={getAssetPath('/logo.png')} />
        <link rel="apple-touch-icon" href={getAssetPath('/logo.png')} />
        <link rel="manifest" href={getAssetPath('/manifest.json')} />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
