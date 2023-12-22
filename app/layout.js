
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'

export const metadata = {
  title: 'Saadhit',
  description: 'Pharma Marketing agency',
}

const DynamicNavbar = dynamic(() => import('../components/Navbar.jsx'), {ssr: false})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <Navbar />
      {children}
      <Footer />
      </body>
    </html>
  )
}
