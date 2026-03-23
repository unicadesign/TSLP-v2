import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Nav, Footer, fadeUp } from './LandingPage'

export default function PrivacyPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="bg-surface min-h-screen flex flex-col items-center text-white font-sans overflow-x-clip">
      <motion.div
        initial="hidden"
        animate="visible"
        className="sticky top-0 z-50 w-full flex flex-col items-center pt-5 md:pt-10 px-4 md:px-6 pb-2"
      >
        <Nav />
      </motion.div>

      <motion.main
        initial="hidden"
        animate="visible"
        className="w-full max-w-[860px] mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-20 md:pb-32"
      >
        <motion.h1 variants={fadeUp} custom={0} className="text-3xl md:text-[42px] font-extrabold text-white font-sans leading-tight mb-4">
          Privacy Policy
        </motion.h1>
        <motion.p variants={fadeUp} custom={1} className="text-sm text-text-muted font-inter mb-12 md:mb-16">
          Last updated: March 2025
        </motion.p>

        <motion.div variants={fadeUp} custom={2} className="space-y-10 text-text-primary font-inter text-sm md:text-base leading-[1.8]">
          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">1. Introduction</h2>
            <p>
              TownSquare (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, applications, and services (collectively, the &quot;Services&quot;).
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p>
              We may collect information that you provide directly to us, such as when you connect a wallet, use our Services, or contact us for support. This may include wallet addresses, transaction data, and any information you voluntarily provide.
            </p>
            <p className="mt-4">
              We may also automatically collect certain information when you access or use our Services, including your IP address, browser type, operating system, referring URLs, and information about how you interact with our Services.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p>
              We use the information we collect to: (a) provide, maintain, and improve our Services; (b) process transactions and send related information; (c) respond to your comments, questions, and requests; (d) monitor and analyze trends, usage, and activities; (e) detect, investigate, and prevent fraudulent transactions and other illegal activities; and (f) comply with legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">4. Blockchain Data</h2>
            <p>
              Please note that transactions on blockchain networks are public by nature. When you interact with our Services, your wallet address and transaction details are recorded on the blockchain and are publicly accessible. We cannot delete or modify information stored on a blockchain.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the information we collect. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">6. Third-Party Services</h2>
            <p>
              Our Services may contain links to third-party websites, services, or applications. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. Your continued use of the Services after any changes constitutes your acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:team@townsq.xyz" className="text-purple hover:text-purple-light transition underline">team@townsq.xyz</a>.
            </p>
          </section>
        </motion.div>
      </motion.main>

      <Footer />
    </div>
  )
}
