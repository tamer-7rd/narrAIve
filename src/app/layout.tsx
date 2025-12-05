import './globals.css'
import Header from '@/components/layout/Header'
import { Nunito_Sans, Orbitron } from 'next/font/google'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '900'],
  variable: '--font-logo',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '500'],
  variable: '--font-nunito',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={orbitron.variable}>
      <body className={nunitoSans.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
