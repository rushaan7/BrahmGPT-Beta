'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { marked } from 'marked'
import DOMPurify from 'dompurify'

// Configure marked for GitHub Flavored Markdown
marked.setOptions({
  gfm: true,
  breaks: true,
  highlight: function(code, lang) {
    return code
  }
})

export default function ChatInterface({ isOpen, onClose }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const renderMessage = (content) => {
    try {
      const rawHtml = marked(content)
      const cleanHtml = DOMPurify.sanitize(rawHtml)
      return <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
    } catch (err) {
      console.error('Error rendering markdown:', err)
      return <div>{content}</div>
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      console.log('Sending request to OpenRouter API...')
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer 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',
          'HTTP-Referer': window.location.href,
          'X-Title': 'BrahmGPT',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'deepseek/deepseek-r1:free',
          messages: [{ role: 'user', content: userMessage }],
        }),
      })

      console.log('Response status:', response.status)
      console.log('Response headers:', Object.fromEntries(response.headers.entries()))

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Error response:', errorText)
        throw new Error(`API request failed with status ${response.status}: ${errorText}`)
      }

      const data = await response.json()
      console.log('Full API Response:', data)
      
      if (!data || !data.choices || !data.choices[0] || !data.choices[0].message) {
        console.error('Invalid response structure:', data)
        throw new Error('Invalid response structure from API')
      }

      const content = data.choices[0].message.content
      if (!content) {
        console.error('Empty content in response:', data)
        throw new Error('Empty response content from API')
      }

      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: content
      }])
    } catch (error) {
      console.error('Detailed error:', error)
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `Error: ${error.message}. Please check the console for more details.` 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            className="w-full max-w-4xl h-[80vh] bg-gray-900 rounded-xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <h2 className="text-xl font-semibold text-white">BrahmGPT Chat</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-4 ${
                      message.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-300'
                    }`}
                  >
                    <style jsx global>{`
                      .message-content {
                        line-height: 1.6;
                      }
                      .message-content p {
                        margin-bottom: 1em;
                      }
                      .message-content h1, .message-content h2, .message-content h3 {
                        font-weight: bold;
                        margin: 1em 0 0.5em 0;
                      }
                      .message-content h1 { font-size: 1.5em; }
                      .message-content h2 { font-size: 1.3em; }
                      .message-content h3 { font-size: 1.1em; }
                      .message-content code {
                        background-color: rgba(0, 0, 0, 0.2);
                        padding: 0.2em 0.4em;
                        border-radius: 3px;
                        font-family: monospace;
                      }
                      .message-content pre {
                        background-color: rgba(0, 0, 0, 0.2);
                        padding: 1em;
                        border-radius: 5px;
                        overflow-x: auto;
                        margin: 1em 0;
                      }
                      .message-content pre code {
                        background-color: transparent;
                        padding: 0;
                      }
                      .message-content ul, .message-content ol {
                        margin: 1em 0;
                        padding-left: 1.5em;
                      }
                      .message-content li {
                        margin-bottom: 0.5em;
                      }
                      .message-content blockquote {
                        border-left: 4px solid #4a5568;
                        padding-left: 1em;
                        margin: 1em 0;
                        color: #a0aec0;
                      }
                      .message-content a {
                        color: #63b3ed;
                        text-decoration: underline;
                      }
                      .message-content strong {
                        font-weight: bold;
                        color: #fff;
                      }
                      .message-content em {
                        font-style: italic;
                      }
                    `}</style>
                    <div className="message-content">
                      {message.role === 'user' ? message.content : renderMessage(message.content)}
                    </div>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-800 text-gray-100 rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200" />
                      <span className="text-sm text-gray-400 ml-2">Thinking...</span>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={isLoading}
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  {isLoading ? 'Sending...' : 'Send'}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 