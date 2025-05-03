'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ChatInterface from './components/ChatInterface'

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            BrahmGPT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            The world's most advanced AI coding assistant. Get instant help with your code, documentation, and more.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button
              onClick={() => setIsChatOpen(true)}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Try BrahmGPT Now
            </button>
            <button className="bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-700 transition-colors">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800/50 p-8 rounded-xl"
          >
            <h3 className="text-xl font-semibold mb-4">Code Generation</h3>
            <p className="text-gray-300">
              Generate code snippets, functions, and entire applications with just a description.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/50 p-8 rounded-xl"
          >
            <h3 className="text-xl font-semibold mb-4">Code Explanation</h3>
            <p className="text-gray-300">
              Get detailed explanations of complex code and understand how it works.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-800/50 p-8 rounded-xl"
          >
            <h3 className="text-xl font-semibold mb-4">Bug Fixing</h3>
            <p className="text-gray-300">
              Find and fix bugs in your code with AI-powered debugging assistance.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Chat Interface */}
      <ChatInterface isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  )
} 