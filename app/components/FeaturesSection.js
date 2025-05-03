'use client'

const features = [
  {
    title: 'State-of-the-Art AI',
    description: 'Powered by advanced neural networks and cutting-edge technology.',
    icon: '🚀'
  },
  {
    title: 'Government Backed',
    description: 'Developed with support from the Government of India.',
    icon: '🏛️'
  },
  {
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security and 99.9% uptime guarantee.',
    icon: '🔒'
  }
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
          Why Choose BrahmGPT?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-blue-400">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 