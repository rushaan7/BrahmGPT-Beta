'use client'

import { motion } from 'framer-motion'

const supportOptions = [
  {
    title: 'Technical Support',
    description: 'Get help with technical issues and implementation',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Account Support',
    description: 'Help with billing, subscriptions, and account management',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Feature Requests',
    description: 'Suggest new features or improvements',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
  }
]

const faqs = [
  {
    question: 'How do I get started with BrahmGPT?',
    answer: 'Getting started is easy! Simply sign up for an account, choose your plan, and follow our quick start guide. Our intuitive interface will have you up and running in minutes.'
  },
  {
    question: 'What makes BrahmGPT better than other AI coding assistants?',
    answer: 'BrahmGPT consistently outperforms other AI models in benchmarks, with superior code completion accuracy (98.7%), faster response times (0.8s), and better context understanding (99.2%). Our proprietary architecture and training methods give us a significant edge in the market.'
  },
  {
    question: 'How secure is my code with BrahmGPT?',
    answer: 'Security is our top priority. We use state-of-the-art encryption and follow industry best practices to ensure your code remains private and secure. All data is encrypted in transit and at rest.'
  },
  {
    question: 'Can I use BrahmGPT with my existing development tools?',
    answer: 'Yes! BrahmGPT integrates seamlessly with popular IDEs and development tools. We provide plugins and extensions for VS Code, JetBrains IDEs, and more.'
  }
]

export default function SupportPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
          Support
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Get help and support for the world's most advanced AI coding assistant.
        </p>
      </motion.div>

      {/* Support Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {supportOptions.map((option, index) => (
          <motion.div
            key={option.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 text-center"
          >
            <div className="text-blue-500 mb-4 flex justify-center">
              {option.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
            <p className="text-gray-400 mb-6">{option.description}</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Help
            </button>
          </motion.div>
        ))}
      </div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 mb-16"
      >
        <h2 className="text-2xl font-semibold mb-8 text-center">Contact Us</h2>
        <form className="max-w-2xl mx-auto space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Subject
            </label>
            <input
              type="text"
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Send Message
          </button>
        </form>
      </motion.div>

      {/* FAQs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6"
            >
              <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Response Time */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-16 text-center"
      >
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 inline-block">
          <h2 className="text-2xl font-semibold mb-4">Average Response Time</h2>
          <p className="text-4xl font-bold text-blue-500 mb-2">15 minutes</p>
          <p className="text-gray-400">
            Our support team is available 24/7 to help you with any questions or issues.
          </p>
        </div>
      </motion.div>
    </div>
  )
} 