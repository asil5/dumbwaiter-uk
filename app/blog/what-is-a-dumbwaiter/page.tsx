import type { Metadata } from "next"
import Link from "next/link"
import { site } from "../../config"

export const metadata: Metadata = {
  title: "What Is a Dumbwaiter? The Complete Guide | Dumbwaiter UK",
  description:
    "What is a dumbwaiter, how does it work, and who needs one? A plain-English guide from a London dumbwaiter specialist covering types, uses, costs and regulations.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a dumbwaiter lift?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A dumbwaiter is a small freight lift designed to carry goods — not people — between floors of a building. They are used in restaurants, hotels, care homes, and residential properties to move food, laundry, documents, or stock without manual carrying.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a dumbwaiter and a service lift?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In practice, the terms are often used interchangeably. Technically, a dumbwaiter is a smaller unit (typically up to 100kg capacity) while a service lift or goods lift can carry heavier loads. Both are designed for goods only — not passengers.",
      },
    },
    {
      "@type": "Question",
      name: "Does a dumbwaiter need a LOLER inspection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if it is used in a commercial premises. Under LOLER 1998, any lifting equipment used in the workplace must be thoroughly examined every 6 months by a competent engineer. Purely residential dumbwaiters fall outside LOLER but should still be regularly serviced.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a dumbwaiter cost in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A new dumbwaiter installation in the UK typically costs between £4,500 and £12,000 depending on the number of floors, capacity, and specification. Repair costs range from £150 to £800 for most common faults.",
      },
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is a Dumbwaiter? The Complete Guide",
  description:
    "A plain-English guide to dumbwaiters — what they are, how they work, who uses them, and what they cost in the UK.",
  author: { "@type": "Person", name: "Asil", url: "https://dumbwaiter.uk/about" },
  publisher: { "@type": "Organization", name: "Dumbwaiter UK", url: "https://dumbwaiter.uk" },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
}

export default function WhatIsADumbwaiterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-300 text-sm font-medium uppercase tracking-widest mb-3">Guide</p>
          <h1 className="text-4xl font-bold leading-tight mb-4">
            What Is a Dumbwaiter? The Complete Guide
          </h1>
          <p className="text-slate-300 text-lg">
            A plain-English explanation from a London dumbwaiter engineer — what they are,
            how they work, who needs one, and what to expect on cost.
          </p>
        </div>
      </section>

      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-10 text-slate-700 leading-relaxed">

          <section>
            <p>
              I get asked this question more than almost any other. A restaurant manager calls asking about
              a &ldquo;food lift&rdquo;. A care home director enquires about a &ldquo;service lift&rdquo;.
              A homeowner wants something to carry shopping from the garage to the kitchen. Often, they are
              all describing the same thing: a dumbwaiter.
            </p>
            <p className="mt-3">
              I&apos;m Asil, and I install, repair, and maintain dumbwaiters across London.
              In this guide I&apos;ll explain exactly what a dumbwaiter is, the different types available,
              who uses them and why, and what you should know before buying or repairing one.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The Simple Answer: What a Dumbwaiter Does</h2>
            <p>
              A dumbwaiter is a small freight lift. It carries goods — food, laundry, documents, stock —
              between floors of a building. It does <strong>not</strong> carry people.
            </p>
            <p className="mt-3">
              The car (the box that moves) sits inside a shaft, guided by rails, and is driven by an
              electric motor. You load the car at one floor, press a button, and it travels to another floor
              where someone unloads it. Simple in principle; the engineering is what varies.
            </p>
            <p className="mt-3">
              The name &ldquo;dumbwaiter&rdquo; comes from the 18th century — a piece of furniture used to
              hold dishes at dinner so servants weren&apos;t needed in the room. The modern mechanical version
              does the same job: moving things between floors so people don&apos;t have to carry them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Types of Dumbwaiter Available in the UK</h2>
            <p>
              Not all dumbwaiters are the same. The right type depends on what you&apos;re carrying,
              how often you&apos;re using it, and your building&apos;s layout.
            </p>
            <div className="mt-4 space-y-4">
              <div className="border border-slate-200 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 mb-1">Electric rope or chain dumbwaiter</h3>
                <p className="text-sm text-slate-600">
                  The most common type in commercial settings. An electric motor drives the car via steel
                  ropes or chains. Reliable, low maintenance, suitable for frequent use. Capacity typically
                  50–250kg. Found in most London restaurants and hotels.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 mb-1">Hydraulic dumbwaiter</h3>
                <p className="text-sm text-slate-600">
                  Powered by a hydraulic ram rather than ropes. Smooth, quiet, and good for heavier loads.
                  Requires a machine room or hydraulic unit nearby. Often chosen for care homes and
                  high-end residential installations.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 mb-1">Manual dumbwaiter</h3>
                <p className="text-sm text-slate-600">
                  Rope-and-pulley systems, occasionally still found in older London buildings. No motor,
                  no electrics — pulled by hand. Increasingly rare; most are now converted to electric.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 mb-1">Residential dumbwaiter</h3>
                <p className="text-sm text-slate-600">
                  Smaller, lighter-duty units designed for home use — carrying shopping, wine, or laundry.
                  Capacity typically 25–50kg. Quieter and more compact than commercial versions.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Who Uses Dumbwaiters?</h2>
            <p>
              Across London, I work on dumbwaiters in a wide range of settings. The use case is almost always
              the same: moving things efficiently between floors without staff carrying them.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong>Restaurants and cafés</strong> — moving food from the kitchen on one floor to the
                service area on another. This is the most common application I see.
              </li>
              <li>
                <strong>Hotels</strong> — room service, laundry, and linen movement between floors.
              </li>
              <li>
                <strong>Care homes</strong> — meal delivery and laundry without staff carrying heavy loads
                up stairs. LOLER compliance is critical here.
              </li>
              <li>
                <strong>Pubs and bars</strong> — moving stock and kegs from a cellar to the bar.
              </li>
              <li>
                <strong>Offices</strong> — document and mail movement between floors.
              </li>
              <li>
                <strong>Private homes</strong> — carrying shopping, wine, or laundry in multi-storey
                properties.
              </li>
            </ul>
            <p className="mt-3">
              If your team is regularly carrying heavy items up and down stairs, a dumbwaiter is almost
              certainly worth the investment — both for efficiency and staff welfare.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Dumbwaiter vs Food Lift vs Service Lift: Is There a Difference?</h2>
            <p>
              Technically, yes. In practice, the terms are often used interchangeably — and even engineers
              don&apos;t always agree on the definitions.
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-3 font-semibold text-slate-900 border border-slate-200">Term</th>
                    <th className="text-left p-3 font-semibold text-slate-900 border border-slate-200">Typical capacity</th>
                    <th className="text-left p-3 font-semibold text-slate-900 border border-slate-200">Common use</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-slate-200">Dumbwaiter</td>
                    <td className="p-3 border border-slate-200">25–100kg</td>
                    <td className="p-3 border border-slate-200">Restaurants, homes, offices</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 border border-slate-200">Food lift / kitchen lift</td>
                    <td className="p-3 border border-slate-200">50–150kg</td>
                    <td className="p-3 border border-slate-200">Hospitality, healthcare</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200">Service lift / goods lift</td>
                    <td className="p-3 border border-slate-200">100–500kg+</td>
                    <td className="p-3 border border-slate-200">Retail, warehouses, hotels</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              When you call me, don&apos;t worry about the exact terminology. Describe what you need to move,
              how often, and between which floors — and I&apos;ll tell you exactly what will work.
              You can see <Link href="/services" className="text-blue-700 hover:underline">all the systems we install and service here</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What Does a Dumbwaiter Cost in the UK?</h2>
            <p>
              I&apos;ll be direct: most companies won&apos;t publish prices. I will.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>New installation (2 floors):</strong> £4,500–£7,000 for a standard commercial unit</li>
              <li><strong>New installation (3+ floors):</strong> £7,000–£12,000+ depending on shaft work</li>
              <li><strong>Residential installation:</strong> £3,500–£6,000</li>
              <li><strong>Repair:</strong> £150–£800 for most common faults</li>
              <li><strong>Annual maintenance contract:</strong> from £200/year (2 LOLER inspections + 1 service)</li>
            </ul>
            <p className="mt-3">
              The biggest variable in installation cost is the shaft. If the building already has a suitable
              shaft or void, costs drop significantly. If new structural work is needed, costs rise.
              For a detailed breakdown, read my{" "}
              <Link href="/blog/how-much-does-a-dumbwaiter-cost-in-london" className="text-blue-700 hover:underline">
                full guide to dumbwaiter costs in London
              </Link>.
            </p>
            <p className="mt-3">
              You can also check our{" "}
              <Link href="/pricing" className="text-blue-700 hover:underline">pricing page</Link>{" "}
              for current rates on repairs and maintenance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Do Dumbwaiters Need Servicing and Inspections?</h2>
            <p>
              Yes — and if yours is in a commercial premises, it is a legal requirement.
            </p>
            <p className="mt-3">
              Under{" "}
              <a
                href="https://www.hse.gov.uk/work-equipment-machinery/loler.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                LOLER 1998 (Lifting Operations and Lifting Equipment Regulations)
              </a>
              , commercial dumbwaiters must be thoroughly examined by a competent engineer at least every
              6 months. The examination produces a certificate — without it, you are operating illegally.
            </p>
            <p className="mt-3">
              Beyond the legal requirement, regular servicing keeps the unit running reliably and catches
              small problems before they become expensive breakdowns. A motor that is starting to struggle
              costs £80 to adjust; left unattended, it costs £400–£600 to replace.
              If you&apos;re unsure when your unit was last inspected,{" "}
              <Link href="/dumbwaiter-repair-london" className="text-blue-700 hover:underline">
                get in touch and I&apos;ll carry out a health check
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "What is a dumbwaiter lift?",
                  a: "A dumbwaiter is a small freight lift that carries goods — not people — between floors. Common in restaurants, hotels, care homes, and homes. It runs on an electric motor inside a shaft.",
                },
                {
                  q: "What is the difference between a dumbwaiter and a service lift?",
                  a: "The terms are often used interchangeably. Strictly, dumbwaiters are smaller (up to 100kg) while service lifts handle heavier loads. Both are goods-only — no passengers.",
                },
                {
                  q: "Does a dumbwaiter need a LOLER inspection?",
                  a: "Yes, if it is in a commercial building. LOLER 1998 requires a thorough examination every 6 months by a qualified engineer. Residential units are exempt but should still be regularly serviced.",
                },
                {
                  q: "How much does a dumbwaiter cost in the UK?",
                  a: "New installations typically cost £4,500–£12,000 depending on floors, capacity, and shaft requirements. Repairs cost £150–£800 for most faults. Annual maintenance contracts start from £200.",
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
              Need a Dumbwaiter Specialist in London?
            </h2>
            <p className="text-slate-600 mb-6">
              Whether you need a repair, a LOLER inspection, or a new installation, I cover all of London —
              from Enfield to Chelsea, Camden to Canary Wharf. No jargon, no call-out surprises.
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
            <Link href="/blog/signs-your-dumbwaiter-needs-repair" className="text-blue-700 hover:underline">Signs Your Dumbwaiter Needs Repair</Link>
            {" · "}
            <Link href="/services" className="text-blue-700 hover:underline">Our Services</Link>
          </p>
        </div>
      </section>
    </>
  )
}
