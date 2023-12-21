
import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Saadhit',
  description: 'Pharma Marketing agency',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <Navbar />
      {children}
      
      </body>
    </html>
  )
}
