'use client'

import { motion } from 'framer-motion'

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">Security</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Data Protection</h2>
            <p className="text-gray-300 mb-4">
              We implement industry-standard security measures to protect your data:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li>End-to-end encryption for all communications</li>
              <li>Secure data storage with encryption at rest</li>
              <li>Regular security audits and penetration testing</li>
              <li>Compliance with industry security standards</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Account Security</h2>
            <p className="text-gray-300 mb-4">
              To protect your account, we recommend:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li>Using strong, unique passwords</li>
              <li>Enabling two-factor authentication</li>
              <li>Regularly updating your password</li>
              <li>Not sharing your account credentials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Infrastructure Security</h2>
            <p className="text-gray-300 mb-4">
              Our infrastructure is protected by:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li>Firewalls and intrusion detection systems</li>
              <li>DDoS protection</li>
              <li>Regular security updates and patches</li>
              <li>24/7 monitoring and incident response</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Security Best Practices</h2>
            <p className="text-gray-300 mb-4">
              We follow security best practices including:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li>Principle of least privilege</li>
              <li>Regular security training for staff</li>
              <li>Secure development lifecycle</li>
              <li>Vulnerability management program</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Incident Response</h2>
            <p className="text-gray-300 mb-4">
              In the event of a security incident, we:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li>Immediately investigate and contain the incident</li>
              <li>Notify affected users as required by law</li>
              <li>Implement measures to prevent recurrence</li>
              <li>Conduct post-incident reviews</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Reporting Security Issues</h2>
            <p className="text-gray-300 mb-4">
              If you discover a security vulnerability, please report it to:
              <br />
              Email: security@brahmgpt.com
              <br />
              We appreciate your help in keeping our service secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Security Updates</h2>
            <p className="text-gray-300">
              We regularly update our security measures and will notify users of any significant changes to our security practices.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  )
} 