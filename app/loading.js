'use client'

import React from 'react'

const Loading = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" />
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
      </div>
    </div>
  )
}

export default Loading 