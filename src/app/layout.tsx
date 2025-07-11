import './globals.css';
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import { Oswald } from 'next/font/google';
import FloatingCallNow from '@/components/floating-call-now';
import DelayedModal from '@/components/deleayedModal';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-oswald',
});

export const metadata: Metadata = {
  title: 'Impact Academy of Human Excellence',
  description: 'Empowering future leaders through education',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" className={oswald.variable}>
      <body className="font-oswald">
        <main className="min-h-screen relative bg-white">
          <DelayedModal />
          <Header />
          {children}
          <FloatingCallNow />
          <Footer />
        </main>
      </body>
    </html>
  )
}
