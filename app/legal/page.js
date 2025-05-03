'use client'

import { motion } from 'framer-motion'

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">Legal Information</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Intellectual Property</h2>
            <p className="text-gray-300 mb-4">
              All content, features, and functionality of BrahmGPT, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, are the exclusive property of BrahmGPT and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. User Responsibilities</h2>
            <p className="text-gray-300 mb-4">
              Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. Users agree to notify BrahmGPT immediately of any unauthorized use of their account or any other breach of security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Limitation of Liability</h2>
            <p className="text-gray-300 mb-4">
              BrahmGPT shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service. In no event shall BrahmGPT's total liability to you for all damages exceed the amount paid by you to BrahmGPT in the last six months.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Governing Law</h2>
            <p className="text-gray-300 mb-4">
              These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which BrahmGPT operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Changes to Legal Terms</h2>
            <p className="text-gray-300 mb-4">
              BrahmGPT reserves the right to modify these legal terms at any time. We will notify users of any changes by posting the new terms on this page. Your continued use of the service after any such changes constitutes your acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Contact Information</h2>
            <p className="text-gray-300">
              For any legal inquiries or concerns, please contact us at:
              <br />
              Email: legal@brahmgpt.com
              <br />
              Address: [Your Company Address]
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  )
} 