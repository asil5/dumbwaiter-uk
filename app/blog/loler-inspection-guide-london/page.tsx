import type { Metadata } from "next"
import Link from "next/link"
import { site } from "../../config"

export const metadata: Metadata = {
  title: "LOLER Inspection Guide for Dumbwaiters in London | Dumbwaiter UK",
  description:
    "Everything London business owners need to know about LOLER inspections for dumbwaiters and service lifts. Frequency, costs, certificates, and what happens if you fail.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How often does a dumbwaiter need a LOLER inspection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Commercial dumbwaiters used for lifting people or goods must be thoroughly examined every 6 months under LOLER 1998 regulations. Some lower-risk equipment may qualify for 12-monthly inspection — your engineer will advise.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I don't have a LOLER inspection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Operating lifting equipment without a valid LOLER certificate is a criminal offence under the Lifting Operations and Lifting Equipment Regulations 1998. The HSE can issue improvement notices, prohibition notices, or prosecute. Insurance claims may also be invalid.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a LOLER inspection cost in London?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A LOLER Thorough Examination for a dumbwaiter in London typically costs £120–£250 depending on the type and complexity of the system. Dumbwaiter UK offers combined inspection and service visits from £200.",
      },
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "LOLER Inspection Guide for Dumbwaiters in London",
  description:
    "Complete guide to LOLER inspections for dumbwaiters and service lifts in London — frequency, what's checked, costs, and how to stay compliant.",
  author: { "@type": "Organization", name: "Dumbwaiter UK" },
  publisher: { "@type": "Organization", name: "Dumbwaiter UK", url: "https://dumbwaiter.uk" },
  datePublished: "2026-06-01",
  dateModified: "2026-06-09",
}

export default function LolerInspectionGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-300 text-sm font-medium uppercase tracking-widest mb-3">Guide</p>
          <h1 className="text-4xl font-bold leading-tight mb-4">
            LOLER Inspection Guide for Dumbwaiters in London
          </h1>
          <p className="text-slate-300 text-lg">
            What every London restaurant, hotel, and property owner needs to know about
            keeping their dumbwaiter legally compliant.
          </p>
        </div>
      </section>

      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-10 text-slate-700 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What is LOLER?</h2>
            <p>
              LOLER stands for the <strong>Lifting Operations and Lifting Equipment Regulations 1998</strong>.
              It is a UK legal requirement that applies to any lifting equipment used in the workplace —
              including dumbwaiters, service lifts, food lifts, and goods lifts.
            </p>
            <p className="mt-3">
              The regulations require that all lifting equipment is:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Sufficiently strong and stable for its intended use</li>
              <li>Positioned or installed to minimise risk</li>
              <li>Used safely by competent people</li>
              <li>Subject to regular thorough examination by a competent person</li>
            </ul>
            <p className="mt-3">
              The <strong>Thorough Examination</strong> is the formal inspection that produces the
              compliance certificate. It is not the same as a routine service — it is a legal
              examination carried out by a qualified engineer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Does My Dumbwaiter Need a LOLER Inspection?</h2>
            <p>
              If your dumbwaiter or service lift is used in a <strong>commercial premises</strong> —
              a restaurant, hotel, care home, office, or any business — then yes, LOLER applies.
            </p>
            <p className="mt-3">
              This includes:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Kitchen food lifts and dumb waiters in restaurants and cafés</li>
              <li>Goods lifts and service lifts in hotels and hospitality venues</li>
              <li>Document and goods lifts in offices</li>
              <li>Laundry lifts in care homes and residential developments</li>
              <li>Any small lift used to carry goods between floors in a workplace</li>
            </ul>
            <p className="mt-3">
              <strong>Purely residential dumbwaiters</strong> (in a private home with no business use)
              fall outside LOLER, but it is still good practice to have them inspected for safety.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How Often Is a LOLER Inspection Required?</h2>
            <p>
              For most commercial dumbwaiters, the required frequency is <strong>every 6 months</strong>.
            </p>
            <p className="mt-3">
              The regulations state that equipment used to lift <em>people</em> must be examined at least
              every 6 months. Equipment used <em>only for goods</em> may qualify for 12-monthly inspection
              if a competent person confirms in writing that the longer interval is appropriate.
              In practice, most dumbwaiter engineers recommend maintaining the 6-monthly schedule
              regardless — it protects you legally and catches faults early.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-4">
              <p className="font-semibold text-blue-900">Rule of thumb:</p>
              <p className="text-blue-800 mt-1 text-sm">
                If your dumbwaiter is used in a commercial kitchen, restaurant, or hotel — inspect every 6 months.
                Do not assume 12 months is acceptable without written confirmation from your engineer.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What Does a LOLER Inspection Cover?</h2>
            <p>A Thorough Examination by a competent engineer will typically cover:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Structural integrity of the car, guides, and shaft</li>
              <li>Condition and tension of cables, chains, or hydraulic system</li>
              <li>Electrical safety — motor, controls, wiring, earthing</li>
              <li>Door interlocks and landing door safety devices</li>
              <li>Overload protection and speed governor (where fitted)</li>
              <li>Emergency lowering and manual release mechanisms</li>
              <li>Buffers, limit switches, and safety gear</li>
              <li>Load test (where required)</li>
            </ul>
            <p className="mt-4">
              After the examination, you receive a written report — the <strong>Thorough Examination Report</strong>.
              If the equipment is found to be in good condition, this serves as your compliance certificate.
              If defects are found, they are categorised as either immediately dangerous (must be
              taken out of service) or requiring attention within a specified timeframe.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What Are the Consequences of Not Having a LOLER Certificate?</h2>
            <p>
              Operating lifting equipment without a valid LOLER Thorough Examination report is a
              criminal offence under the Health and Safety at Work Act 1974 and LOLER 1998.
            </p>
            <p className="mt-3">Potential consequences include:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>HSE Improvement Notice</strong> — requiring you to become compliant within a set period</li>
              <li><strong>Prohibition Notice</strong> — immediate shutdown of the equipment until compliant</li>
              <li><strong>Prosecution and unlimited fines</strong> for serious breaches</li>
              <li><strong>Insurance invalidation</strong> — if an accident occurs and you lack a valid certificate, your insurer may refuse to pay out</li>
              <li><strong>Personal liability</strong> for directors and managers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How Much Does a LOLER Inspection Cost in London?</h2>
            <p>
              For a standard dumbwaiter or food lift in London, expect to pay:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Thorough Examination only:</strong> £120–£180</li>
              <li><strong>Inspection + service visit combined:</strong> £200–£350</li>
              <li><strong>Annual maintenance contract (2 inspections + 1 service):</strong> from £200/year</li>
            </ul>
            <p className="mt-3">
              Combining your LOLER inspection with a routine service visit is the most cost-effective
              approach — our engineers can carry out both on a single visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "How often does a dumbwaiter need a LOLER inspection?",
                  a: "Commercial dumbwaiters must be examined every 6 months under LOLER 1998. Some goods-only equipment may qualify for 12-monthly intervals with written confirmation from a competent engineer.",
                },
                {
                  q: "What happens if I don't have a LOLER inspection?",
                  a: "It is a criminal offence. The HSE can issue prohibition notices, improvement notices, or prosecute. Insurance claims may also be invalidated.",
                },
                {
                  q: "How much does a LOLER inspection cost in London?",
                  a: "A Thorough Examination for a dumbwaiter in London typically costs £120–£250. Combined inspection and service visits start from £200.",
                },
              ].map((faq) => (
                <div key={faq.q} className="border border-slate-200 rounded-xl p-5">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-sm text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-slate-50 rounded-xl p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Book a LOLER Inspection in London
            </h2>
            <p className="text-slate-600 mb-6">
              Dumbwaiter UK carries out LOLER Thorough Examinations across London.
              Certificates issued same day. Call us or request a quote online.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${site.phone}`}
                className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors text-center"
              >
                Call {site.phone}
              </a>
              <Link
                href="/contact"
                className="border border-slate-300 text-slate-700 font-semibold px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors text-center"
              >
                Get a Free Quote
              </Link>
            </div>
          </section>

        </div>
      </article>

      <section className="py-8 px-4 border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-slate-400 text-sm text-center">
            Related:{" "}
            <Link href="/dumbwaiter-repair-london" className="text-blue-700 hover:underline">Dumbwaiter Repair London</Link>
            {" · "}
            <Link href="/services#maintenance" className="text-blue-700 hover:underline">Maintenance Contracts</Link>
            {" · "}
            <Link href="/pricing" className="text-blue-700 hover:underline">Pricing</Link>
          </p>
        </div>
      </section>
    </>
  )
}
