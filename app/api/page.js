'use client'

import { motion } from 'framer-motion'

const apiFeatures = [
  {
    title: 'Code Completion API',
    description: 'Get real-time code suggestions with 98.7% accuracy',
    endpoint: '/api/v1/completion',
    method: 'POST',
    example: {
      request: {
        code: 'function calculateTotal(items) {\n  return items.',
        language: 'javascript',
        context: 'e-commerce application'
      },
      response: {
        suggestions: [
          'reduce((sum, item) => sum + item.price, 0)',
          'map(item => item.price).reduce((a, b) => a + b, 0)'
        ],
        confidence: 0.987
      }
    }
  },
  {
    title: 'Code Analysis API',
    description: 'Analyze code for improvements and potential issues',
    endpoint: '/api/v1/analyze',
    method: 'POST',
    example: {
      request: {
        code: 'const data = fetch("/api/data").then(r => r.json())',
        language: 'javascript'
      },
      response: {
        suggestions: [
          'Add error handling',
          'Use async/await syntax',
          'Add type checking'
        ],
        issues: [
          {
            type: 'error',
            message: 'Missing error handling for fetch request',
            line: 1
          }
        ]
      }
    }
  },
  {
    title: 'Context Understanding API',
    description: 'Get AI-powered understanding of your codebase',
    endpoint: '/api/v1/understand',
    method: 'POST',
    example: {
      request: {
        code: 'class UserService {\n  async getUser(id) {\n    // ...\n  }\n}',
        language: 'typescript'
      },
      response: {
        analysis: {
          purpose: 'User management service',
          dependencies: ['Database', 'AuthService'],
          complexity: 'Low',
          suggestions: ['Add input validation', 'Implement caching']
        }
      }
    }
  }
]

const integrations = [
  {
    name: 'VS Code',
    description: 'Seamless integration with Visual Studio Code',
    icon: '💻'
  },
  {
    name: 'JetBrains',
    description: 'Full support for all JetBrains IDEs',
    icon: '🚀'
  },
  {
    name: 'GitHub',
    description: 'Direct integration with GitHub repositories',
    icon: '📦'
  },
  {
    name: 'GitLab',
    description: 'Native support for GitLab workflows',
    icon: '🔧'
  }
]

export default function ApiPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
          API Reference
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Powerful APIs that make BrahmGPT the most advanced AI coding assistant.
          Outperforming competitors with superior accuracy and speed.
        </p>
      </motion.div>

      {/* API Features */}
      <div className="space-y-12 mb-16">
        {apiFeatures.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">{feature.title}</h2>
              <span className="text-sm font-mono bg-gray-800 px-3 py-1 rounded">
                {feature.method} {feature.endpoint}
              </span>
            </div>
            <p className="text-gray-400 mb-6">{feature.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Request</h3>
                <pre className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
                  <code className="text-sm text-blue-400">
                    {JSON.stringify(feature.example.request, null, 2)}
                  </code>
                </pre>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Response</h3>
                <pre className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
                  <code className="text-sm text-green-400">
                    {JSON.stringify(feature.example.response, null, 2)}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Integrations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold mb-8 text-center">Popular Integrations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <span className="text-4xl mb-4 block">{integration.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{integration.name}</h3>
              <p className="text-gray-400">{integration.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Performance Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 text-center"
      >
        <h2 className="text-2xl font-semibold mb-8">API Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-4xl font-bold text-blue-500 mb-2">99.9%</p>
            <p className="text-gray-400">Uptime</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-500 mb-2">0.8s</p>
            <p className="text-gray-400">Average Response Time</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-500 mb-2">1M+</p>
            <p className="text-gray-400">API Calls per Day</p>
          </div>
        </div>
      </motion.div>

      {/* Get Started */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-16 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Join thousands of developers who are already using BrahmGPT's powerful APIs
          to build better software, faster.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Get API Key
        </button>
      </motion.div>
    </div>
  )
} 