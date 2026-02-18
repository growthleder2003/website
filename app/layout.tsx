import type { Metadata } from 'next';
import { Poppins, Open_Sans, Nunito } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import CursorEffect from '@/components/CursorEffect';
import WhatsAppButton from '@/components/WhatsAppButton';
import { OrganizationSchema } from '@/components/SchemaMarkup';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const poppins = Poppins({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-heading',
});

const openSans = Open_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-body',
});

const nunito = Nunito({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://growthleder.com'),
  title: {
    default: 'Growth Leder | Lead Generation • Virtual Assistance • Outreach Services',
    template: '%s | Growth Leder',
  },
  description: 'Growth Leder is a results-driven service-based company specializing in lead generation, virtual assistance, outreach services, CRM management, and automation workflows. We help UK and US businesses grow, scale, and operate more efficiently.',
  keywords: ['lead generation services', 'virtual assistance', 'outreach services', 'CRM management', 'automation workflows', 'business growth', 'digital outreach', 'lead generation', 'virtual support', 'CRM setup', 'workflow automation', 'UK business support', 'US business support'],
  authors: [{ name: 'Growth Leder' }],
  creator: 'Growth Leder',
  publisher: 'Growth Leder',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Growth Leder | Lead Generation • Virtual Assistance • Outreach Services',
    description: 'Results-driven service-based company helping businesses grow, scale, and operate more efficiently.',
    url: 'https://growthleder.com',
    siteName: 'Growth Leder',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Growth Leder Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Growth Leder',
    description: 'Results-driven service-based company helping businesses grow, scale, and operate more efficiently.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  verification: {
    google: 'verification_token', // Replace with your verification token
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable} ${nunito.variable}`}>
      <body>
        <div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
        <CursorEffect />
        <OrganizationSchema />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        <BackToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
