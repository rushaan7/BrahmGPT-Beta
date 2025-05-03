'use client'

import { motion } from 'framer-motion'

const blogPosts = [
  {
    title: 'BrahmGPT Outperforms ChatGPT in Latest AI Benchmarks',
    excerpt: 'Our latest benchmarks show BrahmGPT achieving unprecedented accuracy in code completion and understanding, surpassing all major competitors.',
    date: 'March 15, 2024',
    category: 'Research',
    readTime: '5 min read',
    image: '/blog/benchmarks.jpg'
  },
  {
    title: 'The Future of AI-Assisted Development',
    excerpt: 'How BrahmGPT is revolutionizing the way developers write and maintain code, with real-world examples and success stories.',
    date: 'March 10, 2024',
    category: 'Technology',
    readTime: '8 min read',
    image: '/blog/future.jpg'
  },
  {
    title: 'Breaking Down BrahmGPT\'s Architecture',
    excerpt: 'A deep dive into the technical innovations that make BrahmGPT the most advanced AI coding assistant available today.',
    date: 'March 5, 2024',
    category: 'Technical',
    readTime: '10 min read',
    image: '/blog/architecture.jpg'
  },
  {
    title: 'Case Study: 50% Faster Development with BrahmGPT',
    excerpt: 'How a leading tech company achieved unprecedented development speed by integrating BrahmGPT into their workflow.',
    date: 'February 28, 2024',
    category: 'Case Study',
    readTime: '6 min read',
    image: '/blog/case-study.jpg'
  },
  {
    title: 'The Evolution of AI Code Assistants',
    excerpt: 'From basic autocomplete to BrahmGPT\'s revolutionary context-aware assistance - a look at how far we\'ve come.',
    date: 'February 20, 2024',
    category: 'History',
    readTime: '7 min read',
    image: '/blog/evolution.jpg'
  },
  {
    title: 'Security and Privacy in AI Development',
    excerpt: 'How BrahmGPT maintains the highest standards of security while providing powerful AI assistance.',
    date: 'February 15, 2024',
    category: 'Security',
    readTime: '5 min read',
    image: '/blog/security.jpg'
  }
]

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
          Blog
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Latest insights, updates, and success stories from the world's most advanced AI coding assistant.
        </p>
      </motion.div>

      {/* Featured Post */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-16"
      >
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 bg-gray-800">
            {/* Add featured image here */}
          </div>
          <div className="p-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
                Featured
              </span>
              <span className="text-gray-400">March 15, 2024</span>
              <span className="text-gray-400">5 min read</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              BrahmGPT: The New Standard in AI Development
            </h2>
            <p className="text-gray-400 mb-6">
              Discover how BrahmGPT is setting new benchmarks in AI-assisted development,
              with unprecedented accuracy and performance that leaves competitors behind.
            </p>
            <button className="text-blue-500 hover:text-blue-400 font-medium">
              Read More →
            </button>
          </div>
        </div>
      </motion.div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-gray-900/70 transition-colors"
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-800">
              {/* Add post image here */}
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-blue-500 text-sm">{post.category}</span>
                <span className="text-gray-400 text-sm">{post.date}</span>
                <span className="text-gray-400 text-sm">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-400 mb-4">{post.excerpt}</p>
              <button className="text-blue-500 hover:text-blue-400 font-medium">
                Read More →
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-16 bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Subscribe to our newsletter for the latest updates, tips, and insights about
          AI-assisted development with BrahmGPT.
        </p>
        <div className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Subscribe
          </button>
        </div>
      </motion.div>
    </div>
  )
} 