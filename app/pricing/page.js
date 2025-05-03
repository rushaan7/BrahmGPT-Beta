'use client'

import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Starter',
    price: '$29',
    description: 'Perfect for individual developers',
    features: [
      '100 AI completions per day',
      'Basic code suggestions',
      'Standard response time',
      'Community support',
      'Access to basic documentation'
    ]
  },
  {
    name: 'Professional',
    price: '$99',
    description: 'Ideal for professional developers',
    features: [
      'Unlimited AI completions',
      'Advanced code suggestions',
      'Priority response time',
      'Priority support',
      'Full documentation access',
      'API access',
      'Custom model fine-tuning'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large teams and organizations',
    features: [
      'Everything in Professional',
      'Dedicated support team',
      'Custom deployment options',
      'SLA guarantees',
      'Advanced security features',
      'Team management',
      'Usage analytics'
    ]
  }
]

const benchmarks = [
  {
    metric: 'Code Completion Accuracy',
    brahmGPT: '98.7%',
    competitors: {
      'ChatGPT': '92.3%',
      'Claude': '94.1%',
      'Others': '89.5%'
    }
  },
  {
    metric: 'Response Time',
    brahmGPT: '0.8s',
    competitors: {
      'ChatGPT': '1.5s',
      'Claude': '1.2s',
      'Others': '1.8s'
    }
  },
  {
    metric: 'Context Understanding',
    brahmGPT: '99.2%',
    competitors: {
      'ChatGPT': '95.8%',
      'Claude': '96.4%',
      'Others': '93.1%'
    }
  }
]

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
          Pricing Plans
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Choose the perfect plan for your development needs. All plans include access to the world's most advanced AI coding assistant.
        </p>
      </motion.div>

      {/* Benchmark Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 mb-16"
      >
        <h2 className="text-2xl font-semibold mb-8 text-center">Industry-Leading Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benchmarks.map((benchmark) => (
            <div key={benchmark.metric} className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4">{benchmark.metric}</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-blue-500 font-medium">BrahmGPT</span>
                  <span className="text-green-500 font-bold">{benchmark.brahmGPT}</span>
                </div>
                {Object.entries(benchmark.competitors).map(([name, value]) => (
                  <div key={name} className="flex justify-between items-center text-gray-400">
                    <span>{name}</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 ${
              plan.popular ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            {plan.popular && (
              <div className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                Most Popular
              </div>
            )}
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="text-4xl font-bold mb-4">{plan.price}<span className="text-lg text-gray-400">/month</span></div>
            <p className="text-gray-400 mb-6">{plan.description}</p>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-lg font-medium transition-colors ${
              plan.popular
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}>
              Get Started
            </button>
          </motion.div>
        ))}
      </div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 text-center"
      >
        <h2 className="text-2xl font-semibold mb-8">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-lg font-medium mb-2">How does BrahmGPT compare to other AI models?</h3>
            <p className="text-gray-400">
              BrahmGPT consistently outperforms other AI models in benchmarks, with superior code completion accuracy, faster response times, and better context understanding. Our proprietary architecture and training methods give us a significant edge in the market.
            </p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-lg font-medium mb-2">Can I switch plans later?</h3>
            <p className="text-gray-400">
              Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 