'use client'

import { motion } from 'framer-motion'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { fadeUp } from '@/lib/constants'

function Disclaimer({ children }: { children: React.ReactNode }) {
  return (
    <p className="uppercase text-xs md:text-sm leading-[1.8] text-text-muted mt-4">
      {children}
    </p>
  )
}

export default function TermsClient() {
  return (
    <>
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
          Terms & Conditions
        </motion.h1>
        <motion.p variants={fadeUp} custom={1} className="text-sm text-text-muted font-inter mb-12 md:mb-16">
          Last updated: March 2025
        </motion.p>

        <motion.div variants={fadeUp} custom={2} className="space-y-10 text-text-primary font-inter text-sm md:text-base leading-[1.8]">
          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">14.4 Digital Asset Protocols</h2>
            <p>
              We do not own or control the underlying software protocols which govern the operation of Digital Assets we support. In general, the underlying protocols are open source; and anyone can use, copy, modify, and distribute them. By using the Services, you acknowledge and agree that we are not responsible for operation of the underlying protocols and that we make no guarantee of their functionality, security, or availability; and the underlying protocols are subject to sudden changes in operating rules (a/k/a &quot;forks&quot;), and that such forks may materially affect the value, function, and/or even the name of the Digital Assets supported by the Services. In the event of a fork, you agree that we may temporarily suspend our operations (with or without advance notice to you) and that we may, in our sole discretion, decide whether to support (or cease supporting) any branch of a forked protocol entirely. You acknowledge and agree that we do not assume any responsibility whatsoever regarding an unsupported branch of a forked protocol.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">14.5 Taxes</h2>
            <p>
              It is your sole responsibility to determine whether, and to what extent, any taxes apply to any activity you conduct through the Services, and to withhold, collect, report, and remit the correct amounts of taxes to the appropriate tax authorities. No communication or information provided to you by TownSquare is intended as, or shall be considered or construed as, legal or tax advice.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">15. Warranty Disclaimer</h2>
            <p>
              TownSquare has no oversight on or control over any particular Digital Asset or blockchain network. You are responsible for your use of the Services, the functionalities that you enable, transactions engaged through the Services, and access or use of the information derived thereof. You are solely responsible for complying with all applicable laws related to its transactions and activities that directly or indirectly incorporate our provision of the Services.
            </p>
            <Disclaimer>
              TO THE FULLEST EXTENT PROVIDED BY LAW, TOWNSQUARE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY A DISTRIBUTED DENIAL-OF-SERVICE ATTACK, MAN-IN-THE-MIDDLE ATTACK, VIRUSES, OR OTHER TECHNOLOGICALLY HARMFUL MATERIAL THAT MAY INFECT YOUR COMPUTER EQUIPMENT, COMPUTER PROGRAMS, DATA, OR OTHER PROPRIETARY MATERIAL DUE TO YOUR USE OF THE SITE, THE SERVICES, THE TOWNSQUARE MATERIALS, AND ANY PRODUCT, SERVICE OR OTHER ITEM PROVIDED BY OR ON BEHALF OF TOWNSQUARE THROUGH THE SERVICES OR YOUR DOWNLOADING OF ANY MATERIAL POSTED ON IT, OR ON ANY THIRD PARTY WEBSITE LINKED TO IT.
            </Disclaimer>
            <Disclaimer>
              YOUR USE OF THE SERVICES AND ANY SERVICES CONTENT IS AT YOUR SOLE RISK. THE SITE, SERVICES, TOWNSQUARE MATERIALS, AND ANY PRODUCT, SERVICE OR OTHER ITEM PROVIDED BY OR ON BEHALF OF TOWNSQUARE ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS.
            </Disclaimer>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">16. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless TownSquare, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising out of or relating to: (a) your violation of these Terms; (b) your use of Services; (c) use of or reliance on the Site&apos;s content; (d) your use or reliance on of any information obtained from the Services; or (e) any other party&apos;s access and use of the Services with your assistance or without your assistance.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">17. Limitation of Liability; Disclaimer of Damage</h2>
            <Disclaimer>
              TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL TOWNSQUARE, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE THE SITE, SERVICES, TOWNSQUARE MATERIALS, AND/OR ANY PRODUCT, SERVICE OR OTHER ITEM PROVIDED BY OR ON BEHALF OF TOWNSQUARE. THE FOREGOING DOES NOT AFFECT ANY LIABILITY THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
            </Disclaimer>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">18. Dispute Resolution; Waiver of Class Action; Mandatory Arbitration</h2>
            <p className="text-text-muted italic mb-6">
              Please read this section carefully because it waives any right to participate in any class action or other representative action or proceeding.
            </p>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">18.1 Waiver of Class Actions and Right to Jury Trial</h3>
            <Disclaimer>
              TO THE EXTENT PERMISSIBLE BY LAW, ANY CLAIMS, CONTROVERSY OR DISPUTE ARISING OUT OF OR RELATED TO THIS AGREEMENT MUST BE BROUGHT IN YOUR INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PUTATIVE CLASS, COLLECTIVE ACTION, OR REPRESENTATIVE PROCEEDING.
            </Disclaimer>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">18.2 Informal Resolution</h3>
            <p>
              Before filing a claim against TownSquare, you agree to try to resolve the Dispute by first emailing{' '}
              <a href="mailto:team@townsq.xyz" className="text-purple hover:text-purple-light transition underline">team@townsq.xyz</a>.
            </p>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">18.3 Arbitration Agreement</h3>
            <p>All Disputes between you and TownSquare must be resolved by final and binding arbitration.</p>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">18.4 Conducting Arbitration</h3>
            <p>The arbitration shall be conducted by the International Chamber of Commerce (&quot;ICC&quot;) under its Commercial Arbitration Rules. Any in-person arbitration shall be administered in the Republic of Panama.</p>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">18.5 Confidentiality</h3>
            <p>TownSquare, the arbitrator, and you, will each maintain the confidentiality of any arbitration proceedings, judgments, and awards.</p>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">18.6 Arbitration Time for Filing</h3>
            <p>Any arbitration must be commenced by filing a demand within one year after the date the party first knows of the act giving rise to the claim.</p>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">18.7 Arbitration Opt-Out</h3>
            <p>
              You can decline this agreement to arbitrate by emailing{' '}
              <a href="mailto:contact@townsq.xyz" className="text-purple hover:text-purple-light transition underline">contact@townsq.xyz</a>{' '}
              within thirty days.
            </p>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">18.8 Excepted Claims</h3>
            <p>You and TownSquare may bring an individual small claims action or seek a temporary restraining order or injunction.</p>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">18.9 Severability</h3>
            <p>If any portion of this Section 18 is found to be unenforceable, the unenforceable provision shall be severed from these Terms.</p>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">18.10 Modification</h3>
            <p>If TownSquare makes any future material change to this Section 18, TownSquare will notify you.</p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">19. Governing Law</h2>
            <p>This Agreement shall be governed by the laws of the Republic of Panama.</p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">20. Miscellaneous Terms</h2>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">20.1 Assignment</h3>
            <p>These Terms are particular to you and any attempt to assign is null and void without TownSquare prior written consent.</p>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">20.2 Term; Survival</h3>
            <p>This Agreement will remain in effect until terminated by either you or TownSquare.</p>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">20.3 Nonwaiver of Rights</h3>
            <p>TownSquare&apos;s failure or delay in exercising any right shall not operate as a waiver thereof.</p>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">20.4 Severability</h3>
            <p>If any provision is determined to be invalid, it shall be interpreted to accomplish the objectives to the greatest extent possible.</p>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">20.5 Force Majeure</h3>
            <p>TownSquare shall not be held liable for delays or failure in performance resulting from causes beyond our reasonable control.</p>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">20.6 Notice</h3>
            <p>Any notices will be posted online or through other electronic communication. You agree to receive electronically all communications.</p>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">20.7 Entire Agreement</h3>
            <p>These Terms constitute the entire agreement and understanding between you and TownSquare as to the subject matter hereof.</p>
          </section>
        </motion.div>
      </motion.main>

      <Footer />
    </>
  )
}
