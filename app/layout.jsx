import { Fraunces, Inter } from 'next/font/google';
import FloatingContact from '../components/FloatingContact';
import { siteConfig } from './config';
import './globals.css';

const display = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
});

const sans = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'OTA-NEXUS — Hospitality Revenue & Operations Partner',
  description:
    'We run pricing, distribution, direct bookings, and guest operations for independent hotels and small hospitality groups.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        {children}
        <FloatingContact
          whatsapp={siteConfig.contact.whatsapp}
          phone={siteConfig.contact.phone}
        />
      </body>
    </html>
  );
}