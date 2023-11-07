import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import { Footer } from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Travel',
  description: 'Travel UI/UX App for Camping',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className="relative overflow-hidden"></main>
        {children}
        <Footer/></body>
    </html>
  )
}
