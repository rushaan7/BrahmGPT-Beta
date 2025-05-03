import './globals.css'
import { Inter } from 'next/font/google'
import { metadata } from './metadata'
import ClientLayout from './client-layout'

const inter = Inter({ subsets: ['latin'] })

export { metadata }

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-950 text-white min-h-screen antialiased`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
} 