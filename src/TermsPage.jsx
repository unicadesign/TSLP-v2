import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Nav, Footer, fadeUp } from './LandingPage'

function Disclaimer({ children }) {
  return (
    <p className="uppercase text-xs md:text-sm leading-[1.8] text-text-muted mt-4">
      {children}
    </p>
  )
}

export default function TermsPage() {
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
          Terms & Conditions
        </motion.h1>
        <motion.p variants={fadeUp} custom={1} className="text-sm text-text-muted font-inter mb-12 md:mb-16">
          Last updated: March 2025
        </motion.p>

        <motion.div variants={fadeUp} custom={2} className="space-y-10 text-text-primary font-inter text-sm md:text-base leading-[1.8]">

          {/* 14.4 */}
          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">14.4 Digital Asset Protocols</h2>
            <p>
              We do not own or control the underlying software protocols which govern the operation of Digital Assets we support. In general, the underlying protocols are open source; and anyone can use, copy, modify, and distribute them. By using the Services, you acknowledge and agree that we are not responsible for operation of the underlying protocols and that we make no guarantee of their functionality, security, or availability; and the underlying protocols are subject to sudden changes in operating rules (a/k/a &quot;forks&quot;), and that such forks may materially affect the value, function, and/or even the name of the Digital Assets supported by the Services. In the event of a fork, you agree that we may temporarily suspend our operations (with or without advance notice to you) and that we may, in our sole discretion, decide whether to support (or cease supporting) any branch of a forked protocol entirely. You acknowledge and agree that we do not assume any responsibility whatsoever regarding an unsupported branch of a forked protocol.
            </p>
          </section>

          {/* 14.5 */}
          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">14.5 Taxes</h2>
            <p>
              It is your sole responsibility to determine whether, and to what extent, any taxes apply to any activity you conduct through the Services, and to withhold, collect, report, and remit the correct amounts of taxes to the appropriate tax authorities. No communication or information provided to you by TownSquare is intended as, or shall be considered or construed as, legal or tax advice.
            </p>
          </section>

          {/* 15 */}
          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">15. Warranty Disclaimer</h2>
            <p>
              TownSquare has no oversight on or control over any particular Digital Asset or blockchain network. You are responsible for your use of the Services, the functionalities that you enable, transactions engaged through the Services, and access or use of the information derived thereof. You are solely responsible for complying with all applicable laws related to its transactions and activities that directly or indirectly incorporate our provision of the Services. You acknowledge and understand that TownSquare is not registered nor licensed with, nor have the Services or the software contained therein been reviewed by any securities, commodities, or other financial or banking regulator. You further understand that we cannot and do not guarantee or warrant that files available for download from the Services will be free of viruses or other destructive code. You are responsible for implementing sufficient procedures and checkpoints to satisfy your particular requirements for: (a) an appropriate blockchain based utility; (b) anti-virus protection and accuracy of data input and output; (c) your participation in and use of the Services&apos; underlying blockchain and related technologies; and (d) maintaining a means external to our site to reconstruct any lost data.
            </p>
            <Disclaimer>
              TO THE FULLEST EXTENT PROVIDED BY LAW, TOWNSQUARE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY A DISTRIBUTED DENIAL-OF-SERVICE ATTACK, MAN-IN-THE-MIDDLE ATTACK, VIRUSES, OR OTHER TECHNOLOGICALLY HARMFUL MATERIAL THAT MAY INFECT YOUR COMPUTER EQUIPMENT, COMPUTER PROGRAMS, DATA, OR OTHER PROPRIETARY MATERIAL DUE TO YOUR USE OF THE SITE, THE SERVICES, THE TOWNSQUARE MATERIALS, AND ANY PRODUCT, SERVICE OR OTHER ITEM PROVIDED BY OR ON BEHALF OF TOWNSQUARE THROUGH THE SERVICES OR YOUR DOWNLOADING OF ANY MATERIAL POSTED ON IT, OR ON ANY THIRD PARTY WEBSITE LINKED TO IT.
            </Disclaimer>
            <Disclaimer>
              YOUR USE OF THE SERVICES AND ANY SERVICES CONTENT IS AT YOUR SOLE RISK. THE SITE, SERVICES, TOWNSQUARE MATERIALS, AND ANY PRODUCT, SERVICE OR OTHER ITEM PROVIDED BY OR ON BEHALF OF TOWNSQUARE ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. TO THE FULLEST EXTENT LEGALLY PERMISSIBLE, WE, NOR ANY PERSON ASSOCIATED WITH TOWNSQUARE, MAKE, AND WE EXPLICITLY DISCLAIM, ANY AND ALL REPRESENTATIONS OR WARRANTIES OF ANY KIND RELATED THE SITE, SERVICES, TOWNSQUARE MATERIALS, AND ANY PRODUCT, SERVICE OR OTHER ITEM PROVIDED BY OR ON BEHALF OF TOWNSQUARE WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING (WITHOUT LIMITATION) THE WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR A PARTICULAR PURPOSE. NEITHER TOWNSQUARE NOR ANY PERSON ASSOCIATED WITH TOWNSQUARE MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SITE, SERVICES, TOWNSQUARE MATERIALS, AND/OR ANY PRODUCT, SERVICE OR OTHER ITEM PROVIDED BY OR ON BEHALF OF TOWNSQUARE.
            </Disclaimer>
            <Disclaimer>
              TOWNSQUARE AND ANY PERSON ASSOCIATED WITH TOWNSQUARE DO NOT REPRESENT OR WARRANT THAT: (A) ACCESS TO THE SITE, SERVICES, TOWNSQUARE MATERIALS, AND ANY PRODUCT, SERVICE OR OTHER ITEM PROVIDED BY OR ON BEHALF OF TOWNSQUARE WILL BE CONTINUOUS, UNINTERRUPTED, TIMELY, WITHOUT DELAY, ERROR-FREE, SECURE, OR FREE FROM DEFECTS; (B) THAT THE INFORMATION CONTAINED OR PRESENTED ON THE SITE OR SERVICES IS ACCURATE, RELIABLE, COMPLETE, CONCISE, CURRENT, OR RELEVANT; (C) THE SITE, SERVICES, TOWNSQUARE MATERIALS, AND ANY PRODUCT, SERVICE OR OTHER ITEM PROVIDED BY OR ON BEHALF OF TOWNSQUARE OR ANY SOFTWARE CONTAINED THEREIN WILL BE FREE FROM DEFECTS, MALICIOUS SOFTWARE, ERRORS, OR ANY OTHER HARMFUL ELEMENTS, OR THAT ANY OF SUCH WILL BE CORRECTED; OR (D) THE SITE, SERVICES, TOWNSQUARE MATERIALS, AND ANY PRODUCT, SERVICE OR OTHER ITEM PROVIDED BY OR ON BEHALF OF TOWNSQUARE WILL MEET ANY USER&apos;S EXPECTATIONS. THE FOREGOING DOES NOT AFFECT ANY WARRANTIES THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
            </Disclaimer>
          </section>

          {/* 16 */}
          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">16. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless TownSquare, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising out of or relating to: (a) your violation of these Terms; (b) your use of Services, including, but not limited to, your interactions with the Site, Platform, or other features which are accessible on or through the Services; (c) use of or reliance on the Site&apos;s content, services, and products other than as expressly authorized in these Terms; (d) your use or reliance on of any information obtained from the Services; or (e) any other party&apos;s access and use of the Services with your assistance or without your assistance by using any device or account that you own or control.
            </p>
          </section>

          {/* 17 */}
          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">17. Limitation of Liability; Disclaimer of Damage</h2>
            <Disclaimer>
              TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL TOWNSQUARE, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE THE SITE, SERVICES, TOWNSQUARE MATERIALS, AND/OR ANY PRODUCT, SERVICE OR OTHER ITEM PROVIDED BY OR ON BEHALF OF TOWNSQUARE, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE. TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL THE COLLECTIVE LIABILITY OF TOWNSQUARE, AND/OR ITS SUBSIDIARIES, AFFILIATES, LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, AND DIRECTORS, TO ANY PARTY (REGARDLESS OF THE FORM OF ACTION, WHETHER IN CONTRACT, TORT, OR OTHERWISE) EXCEED THE GREATER OF $100 OR THE AMOUNT YOU HAVE PAID DIRECTLY TO TOWNSQUARE FOR THE APPLICABLE SERVICES IN THE LAST SIX MONTHS OUT OF WHICH LIABILITY AROSE. THE FOREGOING DOES NOT AFFECT ANY LIABILITY THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
            </Disclaimer>
          </section>

          {/* 18 */}
          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">18. Dispute Resolution; Waiver of Class Action; Mandatory Arbitration</h2>
            <p className="text-text-muted italic mb-6">
              Please read this section carefully because it waives any right to participate in any class action or other representative action or proceeding. Unless you opt-out of the arbitration by completing the steps below, this section requires you to arbitrate certain disputes and limits the ways in which you can seek relief.
            </p>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">18.1 Waiver of Class Actions and Right to Jury Trial</h3>
            <Disclaimer>
              TO THE EXTENT PERMISSIBLE BY LAW, ANY CLAIMS, CONTROVERSY OR DISPUTE ARISING OUT OF OR RELATED TO THIS AGREEMENT, OR ANY PRODUCTS OR SERVICES PROVIDED IN CONNECTION WITH THE SERVICES (&quot;DISPUTE&quot;) MUST BE BROUGHT IN YOUR INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PUTATIVE CLASS, COLLECTIVE ACTION, OR REPRESENTATIVE PROCEEDING (COLLECTIVELY &quot;CLASS ACTION WAIVER&quot;). THE ARBITRATOR MAY NOT CONSOLIDATE MORE THAN ONE PERSON&apos;S CLAIMS OR ENGAGE IN ANY ARBITRATION ON BEHALF OF A CLASS. YOU AGREE THAT, BY ENTERING INTO THIS AGREEMENT, YOU ARE WAIVING THE RIGHT TO A TRIAL BY JURY AND THE RIGHT TO PARTICIPATE IN A CLASS ACTION.
            </Disclaimer>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">18.2 Informal Resolution</h3>
            <p>
              Before filing a claim against TownSquare, you agree to try to resolve the Dispute by first emailing{' '}
              <a href="mailto:team@townsq.xyz" className="text-purple hover:text-purple-light transition underline">team@townsq.xyz</a>
              {' '}with a description of your claim and proof of your relationship with TownSquare. If we can&apos;t resolve the Dispute within sixty days of our receipt of your first email, you or TownSquare may then submit the Dispute to binding arbitration as provided herein.
            </p>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">18.3 Arbitration Agreement</h3>
            <p>
              With only limited exceptions as described in 18.7 and 18.8 below, all Disputes between you and TownSquare must be resolved by final and binding arbitration. By agreeing to binding arbitration, you and TownSquare expressly waive the right to formal court proceedings including without limitation trial by jury and class action. This Agreement affects interstate commerce, and the enforceability of this Section 18.3 will be substantively and procedurally governed by the Federal Arbitration Act 9 U.S.C. &sect; 1, et. Seq. (&quot;FAA&quot;).
            </p>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">18.4 Conducting Arbitration</h3>
            <p>
              The arbitration shall be conducted by the International Chamber of Commerce (&quot;ICC&quot;) under its Commercial Arbitration Rules (&quot;ICC Rules&quot;) then in effect. These Terms shall govern any conflict between the ICC Rules and these Terms. Unless otherwise ordered by an arbitrator or pursuant to the ICC Rules, any in-person arbitration shall be in English and held remotely to the maximum extent, and administered in the Republic of Panama, or another mutually agreeable location.
            </p>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">18.5 Confidentiality</h3>
            <p>TownSquare, the arbitrator, and you, will each maintain the confidentiality of any arbitration proceedings, judgments, and awards including information shared and produced during the arbitration.</p>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">18.6 Arbitration Time for Filing</h3>
            <p>Any arbitration must be commenced by filing a demand for arbitration within one year after the date the party asserting the claim first knows or reasonably should know of the act, omission or default giving rise to the claim. If applicable law prohibits a one year limitation period for asserting claims, any claim must be asserted within the shortest time period permitted by applicable law. If a claim is not filed within such period, the Dispute is permanently barred.</p>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">18.7 Arbitration Opt-Out</h3>
            <p>
              You can decline this agreement to arbitrate by emailing us at{' '}
              <a href="mailto:contact@townsq.xyz" className="text-purple hover:text-purple-light transition underline">contact@townsq.xyz</a>
              {' '}within thirty days of the date that you first agree to this Agreement (&quot;Opt-Out Period&quot;). To be effective, your email must include your full name, residential address, and a clear statement that you want to opt out of arbitration. If you opt out of arbitration pursuant to this Section 18.7, then Sections 18.5 and 18.6 of these Terms do not apply to you.
            </p>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">18.8 Excepted Claims</h3>
            <p>Notwithstanding this Section 18, there is no requirement to arbitrate, and you and TownSquare may bring an individual small claims action in the small claims court in your and TownSquare respective county of residence as provided under the ICC Rules, or seek only a temporary restraining order or injunction for alleged breach of confidentiality obligations or alleged infringement or misappropriation of intellectual property in any court having jurisdiction provided that, in each case, the action is brought as an individual action and not on a class or representative basis.</p>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">18.9 Severability</h3>
            <p>If any portion of this Section 18 is found to be unenforceable or unlawful for any reason, the unenforceable or unlawful provision shall be severed from these Terms and such severance of the provision(s) shall have no impact whatsoever on the remainder of this Section 18. Further, to the extent that any claims must therefore proceed on a class, collective, consolidated, or representative basis, such claims must be litigated in a civil court of competent jurisdiction and not in arbitration, and the parties agree that litigation of those claims shall be stayed pending the outcome of any individual claims in arbitration.</p>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">18.10 Modification</h3>
            <p>Notwithstanding any provision in this Agreement to the contrary, you and TownSquare agree that if TownSquare makes any future material change to this Section 18, TownSquare will notify you. Your continued use of the Site and/or Services, including the acceptance of products and services offered on the Site following the posting of changes constitutes your acceptance of any such changes.</p>
          </section>

          {/* 19 */}
          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">19. Governing Law</h2>
            <p>This Agreement shall be governed by, and construed and enforced in accordance with, the laws of the Republic of Panama. Without regard to conflict of law rules or principles that would cause the application of the laws of any other jurisdiction. You agree that TownSquare may initiate a proceeding relating to the enforceability or validity of TownSquare intellectual property rights in any court of competent jurisdiction. With respect to any other proceeding not subject to arbitration under this Agreement, the federal and state courts located in the Republic of Panama will have exclusive jurisdiction. You waive any objection to venue in any such courts.</p>
          </section>

          {/* 20 */}
          <section>
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">20. Miscellaneous Terms</h2>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">20.1 Assignment</h3>
            <p>These Terms, and any other document, material, or information referenced herein is particular to you and any attempt that you make to assign, novate, or transfer your rights, interests, liabilities, and/or obligations is null and void, unless you have received TownSquare prior written consent. TownSquare reserves the right to assign our rights without restriction, including without limitation to any of TownSquare affiliates or subsidiaries, or to any successor in interest of any business associated with the Services. Subject to the foregoing, these Terms will bind and inure to the benefit of the parties and their successors and permitted assigns.</p>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">20.2 Term; Survival</h3>
            <p>This Agreement will remain in effect until terminated by either you or TownSquare. We reserve the right to change, suspend or discontinue, or terminate, restrict, or disable your use of or access to, parts or all of the Services or their functionality at any time at our sole discretion and without notice. All sections of this Agreement that by their nature should survive termination shall survive termination.</p>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">20.3 Nonwaiver of Rights</h3>
            <p>TownSquare&apos;s failure or delay in exercising any right, power, or privilege under these Terms shall not operate as a waiver thereof.</p>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">20.4 Severability</h3>
            <p>If any provision of this Agreement shall be determined to be invalid or unenforceable under any rule, law, or regulation, or any governmental agency whether local, state, or federal, such provision shall be interpreted to accomplish the objectives of the provision to the greatest extent possible under any applicable law, and the validity or enforceability of any other provision of the Terms shall not be affected.</p>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">20.5 Force Majeure</h3>
            <p>You acknowledge and consent that the Services are provided by us according to our current technological capability and other business conditions. While we have made every effort to ensure continuity and security of the Services, we are unable to completely foresee and hedge against all legal, technological, and other risks. TownSquare shall not be held liable for delays, failure in performance, or interruption of Services that result directly or indirectly from any cause or condition beyond our reasonable control, including but not limited to: (a) acts of God such as earthquakes, fires, cyclones, explosions, typhoons, monsoons, landslides, lightning, storms, tempests, pandemics, droughts or meteors; (b) acts of war, whether declared or undeclared, including invasion, act of a foreign enemy, hostilities between nations, civil insurrection, or militarily usurped power; and acts of terrorism; (c) civil disorder; (d) embargoes or sanctions; (e) unnatural disasters; (f) labor disputes; (g) failure of telecommunication infrastructure; (h) data breaches or data-processing failure; and/or (i) changes in laws or regulations that may materially affect the Digital Assets and/or blockchain industries.</p>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">20.6 Notice</h3>
            <p>Any notices or other communications provided by us under these Terms including those regarding modifications to these Terms will be posted online, in the Services, or through other electronic communication. You agree and consent to receive electronically all communications, agreements, documents, notices, and disclosures that we provide in connection with your use of the Services.</p>

            <h3 className="text-base font-semibold text-white mt-6 mb-2">20.7 Entire Agreement</h3>
            <p>These Terms and every other term or condition applicable to you including any document incorporated by reference herein constitute the entire agreement and understanding between you and TownSquare as to the subject matter hereof, and supersede any and all prior discussions, agreements, and understandings of any kind (including any prior versions of these Terms). Unless otherwise this Agreement or other agreement between you and TownSquare specifically states otherwise, these Terms govern and control any conflict between these Terms and any other agreement you may have with TownSquare.</p>
          </section>
        </motion.div>
      </motion.main>

      <Footer />
    </div>
  )
}
