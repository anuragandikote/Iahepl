import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { Oswald, League_Spartan } from 'next/font/google';
import FloatingCallNow from '@/components/floating-call-now';
import DelayedModal from '@/components/delayedModal';
import AnnouncementBar from '@/components/AnnouncementBar';
import Script from 'next/script';

const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const LeagueSpartan = League_Spartan({ subsets: ["latin"], variable: "--font-league-spartan" });

export const metadata: Metadata = {
  title: 'Impact Academy of Human Excellence',
  description: 'Empowering future leaders through education',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.className} ${LeagueSpartan.className}`}>
      <body className="font-oswald">
        <main className="min-h-screen relative bg-white">
          <DelayedModal />
          <AnnouncementBar />
          <Header />
          {children}
          <FloatingCallNow />
          <Footer />
        </main>

        {/* ✅ Google Analytics Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Q0GJG0Z2JD"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q0GJG0Z2JD');
          `}
        </Script>
      </body>
    </html>
  );
}
