'use client'

import { motion } from 'framer-motion'

const sections = [
  {
    title: 'Getting Started',
    items: [
      {
        title: 'Quick Start Guide',
        description: 'Get up and running with BrahmGPT in minutes',
        icon: '🚀'
      },
      {
        title: 'Installation',
        description: 'Detailed installation instructions for all platforms',
        icon: '📥'
      },
      {
        title: 'Basic Usage',
        description: 'Learn the fundamentals of using BrahmGPT',
        icon: '📚'
      }
    ]
  },
  {
    title: 'Core Features',
    items: [
      {
        title: 'Code Completion',
        description: 'Advanced code completion capabilities',
        icon: '⚡'
      },
      {
        title: 'Context Understanding',
        description: 'How BrahmGPT understands your codebase',
        icon: '🧠'
      },
      {
        title: 'Error Detection',
        description: 'Real-time error detection and suggestions',
        icon: '🔍'
      }
    ]
  },
  {
    title: 'Advanced Topics',
    items: [
      {
        title: 'Custom Model Training',
        description: 'Train BrahmGPT on your specific codebase',
        icon: '🎯'
      },
      {
        title: 'API Integration',
        description: 'Integrate BrahmGPT into your workflow',
        icon: '🔌'
      },
      {
        title: 'Performance Optimization',
        description: 'Tips for optimal performance',
        icon: '⚡'
      }
    ]
  }
]

const apiEndpoints = [
  {
    name: 'Code Completion',
    endpoint: '/api/v1/completion',
    method: 'POST',
    description: 'Get AI-powered code completions'
  },
  {
    name: 'Code Analysis',
    endpoint: '/api/v1/analyze',
    method: 'POST',
    description: 'Analyze code for improvements'
  },
  {
    name: 'Error Detection',
    endpoint: '/api/v1/detect-errors',
    method: 'POST',
    description: 'Detect potential errors in code'
  }
]

export default function DocsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
          Documentation
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Comprehensive guides and API references for the world's most advanced AI coding assistant.
        </p>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl mx-auto mb-16"
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Search documentation..."
            className="w-full bg-gray-900/50 backdrop-blur-sm text-white px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </motion.div>

      {/* Documentation Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6"
          >
            <h2 className="text-xl font-semibold mb-6">{section.title}</h2>
            <div className="space-y-4">
              {section.items.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-800/50 transition-colors cursor-pointer"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-medium mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* API Reference */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8"
      >
        <h2 className="text-2xl font-semibold mb-8">API Reference</h2>
        <div className="space-y-6">
          {apiEndpoints.map((endpoint) => (
            <div key={endpoint.name} className="border-b border-gray-800 pb-6 last:border-0">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium">{endpoint.name}</h3>
                <span className="text-sm font-mono bg-gray-800 px-2 py-1 rounded">
                  {endpoint.method}
                </span>
              </div>
              <p className="text-gray-400 mb-4">{endpoint.description}</p>
              <div className="bg-gray-800 rounded-lg p-4">
                <code className="text-sm font-mono text-blue-400">
                  {endpoint.endpoint}
                </code>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Need Help Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-16 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Can't find what you're looking for? Our support team is here to help you
          get the most out of BrahmGPT.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Contact Support
        </button>
      </motion.div>
    </div>
  )
} 