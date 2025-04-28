import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import TopInfoBar from '@/components/TopInfoBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import { menuItems } from './page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Impact Academy',
  description: 'Empowering future leaders through education',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen relative">
          <TopInfoBar/>
          <Header />
          <div className="sticky top-0 z-50 bg-white shadow-lg">
            <Navigation menuItems={menuItems} />
          </div>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
