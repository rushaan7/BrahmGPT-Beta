'use client'

import { motion } from 'framer-motion'

const milestones = [
  {
    year: '2023',
    title: 'The Beginning',
    description: 'BrahmGPT was born from a vision to revolutionize software development with AI.',
    icon: '🎯'
  },
  {
    year: '2024',
    title: 'Breakthrough',
    description: 'Achieved 98.7% accuracy in code completion, surpassing all competitors.',
    icon: '🚀'
  },
  {
    year: '2024',
    title: 'Global Launch',
    description: 'Released to developers worldwide, transforming how code is written.',
    icon: '🌍'
  }
]

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief AI Scientist',
    bio: 'Former lead researcher at OpenAI, specializing in large language models.',
    image: '/team/sarah.jpg'
  },
  {
    name: 'Alex Rodriguez',
    role: 'Head of Engineering',
    bio: 'Built scalable systems at Google and Amazon, now leading our engineering team.',
    image: '/team/alex.jpg'
  },
  {
    name: 'Priya Patel',
    role: 'Product Director',
    bio: 'Product leader with experience at GitHub and Microsoft.',
    image: '/team/priya.jpg'
  }
]

const values = [
  {
    title: 'Innovation',
    description: 'Pushing the boundaries of what\'s possible with AI',
    icon: '💡'
  },
  {
    title: 'Excellence',
    description: 'Delivering the highest quality AI coding assistance',
    icon: '⭐'
  },
  {
    title: 'Community',
    description: 'Building a global community of developers',
    icon: '🤝'
  },
  {
    title: 'Security',
    description: 'Ensuring the highest standards of code security',
    icon: '🔒'
  }
]

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
          About BrahmGPT
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          We're on a mission to revolutionize software development with the world's most advanced AI coding assistant.
        </p>
      </motion.div>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-12 mb-16 text-center"
      >
        <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          To empower developers worldwide with AI that understands code better than any other system,
          enabling them to build better software, faster, and with greater confidence.
        </p>
      </motion.div>

      {/* Values */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <span className="text-4xl mb-4 block">{value.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Journey</h2>
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6"
            >
              <div className="flex items-center space-x-4">
                <span className="text-4xl">{milestone.icon}</span>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-500 font-semibold">{milestone.year}</span>
                    <h3 className="text-xl font-semibold">{milestone.title}</h3>
                  </div>
                  <p className="text-gray-400 mt-2">{milestone.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Team */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-800">
                {/* Add team member image here */}
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-blue-500 mb-2">{member.role}</p>
              <p className="text-gray-400">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Join Us */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Join Our Mission</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          We're always looking for talented individuals who share our passion for
          revolutionizing software development with AI.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          View Open Positions
        </button>
      </motion.div>
    </div>
  )
} 