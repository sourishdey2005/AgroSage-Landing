import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import ScrollToTop from '@/components/scroll-to-top';

export const metadata: Metadata = {
  title: 'Krishi Mitra AI: India’s Smartest Agriculture Intelligence Platform',
  description: 'AI-powered insights for Farmers, Banks, Agents & Government. Transforming Indian agriculture with precision data and blockchain transparency.',
  keywords: 'agriculture AI, crop yield prediction, Indian farmers, agritech, blockchain agriculture, satellite monitoring',
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%232E7D32' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cline x1='2' y1='12' x2='22' y2='12'/%3E%3Cpath d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'/%3E%3C/svg%3E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark !scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Poppins:wght@700;800&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background-light dark:bg-background-dark font-display text-deep-grey dark:text-white/90 antialiased selection:bg-primary/20 selection:text-primary">
        <div className="relative w-full overflow-x-hidden">
          {children}
          <Toaster />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
