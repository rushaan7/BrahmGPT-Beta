'use client'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900/20 to-purple-900/20" />
      <div className="container mx-auto px-4 z-10">
        <h1 className="text-6xl md:text-8xl font-bold text-center mb-6 text-blue-400">
          BrahmGPT
        </h1>
        <p className="text-xl md:text-2xl text-center text-gray-300 max-w-3xl mx-auto">
          Advanced AI by Novasphere, Backed by Government of India
        </p>
      </div>
    </section>
  )
} 