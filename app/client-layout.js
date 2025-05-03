'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import ChatInterface from './components/ChatInterface'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Documentation', href: '/docs' },
  { name: 'API', href: '/api' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Support', href: '/support' }
]

export default function ClientLayout({ children }) {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                BrahmGPT
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Sign In
              </button>
              <button 
                onClick={() => setIsChatOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-t border-gray-800">
        <div className="flex justify-around items-center h-16">
          {navigation.slice(0, 4).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow pt-16 pb-16 md:pb-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">BrahmGPT</h3>
              <p className="text-gray-300">
                The world's most advanced AI coding assistant.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Product</h3>
              <ul className="space-y-2">
                <li><Link href="/features" className="text-gray-300 hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/docs" className="text-gray-300 hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="/api" className="text-gray-300 hover:text-white transition-colors">API</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/support" className="text-gray-300 hover:text-white transition-colors">Support</Link></li>
                <li><Link href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms</Link></li>
                <li><Link href="/security" className="text-gray-300 hover:text-white transition-colors">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} BrahmGPT. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chat Interface */}
      <ChatInterface isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  )
} 