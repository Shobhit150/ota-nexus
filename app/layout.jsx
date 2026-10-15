import { Fraunces, Inter } from 'next/font/google';
import './globals.css';

const display = Fraunces({ subsets: ['latin'], weight: ['400', '500', '600'], style: ['normal', 'italic'], variable: '--font-fraunces' });
const sans = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--font-inter' });

export const metadata = {
  title: 'OTA Nexus | Hospitality Growth, OTA Management & Performance Marketing',
  description: 'OTA Nexus helps hotels, resorts, villas, homestays and vacation rentals get discovered and booked through OTA management, revenue strategy, performance marketing and direct bookings.',
  openGraph: { type: 'website', siteName: 'OTA Nexus', title: 'OTA Nexus | More visibility. More bookings. Better-performing properties.' },
  twitter: { card: 'summary' },
};
export const viewport = { themeColor: '#0a0d14', viewportFit: 'cover' };

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'ProfessionalService', name: 'OTA Nexus',
  description: 'Hospitality growth agency offering OTA management, revenue management, performance marketing, social media, website and direct booking support.',
  telephone: '+91-9560440478', sameAs: ['https://www.instagram.com/ota_nexus'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a href="#main" className=""></a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
