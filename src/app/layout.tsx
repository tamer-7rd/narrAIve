import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Nunito_Sans, Orbitron } from 'next/font/google'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '900'],
  variable: '--font-logo',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
  variable: '--font-nunito',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={orbitron.variable}>
      <body className={nunitoSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
