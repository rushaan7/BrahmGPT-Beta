'use client'

import { motion } from 'framer-motion'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 mb-4">
              By accessing or using BrahmGPT, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. User Accounts</h2>
            <p className="text-gray-300 mb-4">
              To use certain features of the service, you must register for an account. You agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Service Usage</h2>
            <p className="text-gray-300 mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li>Use the service for any illegal purpose</li>
              <li>Violate any laws in your jurisdiction</li>
              <li>Attempt to gain unauthorized access to the service</li>
              <li>Interfere with or disrupt the service</li>
              <li>Use the service to generate harmful or malicious content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Content and Intellectual Property</h2>
            <p className="text-gray-300 mb-4">
              All content generated through the service is subject to our content guidelines. You retain ownership of your input, but grant us a license to use the content for service improvement and development.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Service Modifications</h2>
            <p className="text-gray-300 mb-4">
              We reserve the right to modify or discontinue, temporarily or permanently, the service with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
            <p className="text-gray-300 mb-4">
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
            <p className="text-gray-300">
              For any questions about these Terms, please contact us at:
              <br />
              Email: terms@brahmgpt.com
              <br />
              Address: [Your Company Address]
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  )
} 