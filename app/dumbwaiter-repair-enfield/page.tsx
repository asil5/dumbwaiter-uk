import type { Metadata } from "next"
import Link from "next/link"
import { site } from "../config"

export const metadata: Metadata = {
  title: "Dumbwaiter Repair Enfield | Local Engineer | Dumbwaiter UK",
  description:
    "Local dumbwaiter repair in Enfield. Emergency callouts, all makes and models. LOLER compliant. Free quote — call 020 8058 6674.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you cover Enfield for dumbwaiter repairs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Enfield is one of our core service areas. We cover all of EN1, EN2, EN3 and surrounding postcodes including Southgate, Edmonton and Palmers Green.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a dumbwaiter repair take in Enfield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most standard repairs are completed in a single visit of 1–3 hours. For complex faults or parts that need ordering, we'll give you a clear timeline on the day.",
      },
    },
    {
      "@type": "Question",
      name: "Is LOLER inspection required for dumbwaiters in Enfield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Any dumbwaiter or service lift used in a commercial premises in Enfield must be examined every 6 months under LOLER regulations. We issue same-day certificates.",
      },
    },
  ],
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dumbwaiter Repair Enfield",
  provider: { "@type": "LocalBusiness", name: "Dumbwaiter UK" },
  areaServed: "Enfield",
  description:
    "Local dumbwaiter and service lift repair in Enfield, North London. Fast response, all brands, LOLER compliant.",
  telephone: "02080586674",
}

const faqs = [
  {
    q: "Do you cover Enfield for dumbwaiter repairs?",
    a: "Yes — Enfield is one of our core service areas. We cover all of EN1, EN2, EN3 and surrounding postcodes including Southgate, Edmonton and Palmers Green.",
  },
  {
    q: "How long does a dumbwaiter repair take?",
    a: "Most standard repairs are completed in a single visit of 1–3 hours. For complex faults or parts that need ordering, we'll give you a clear timeline on the day.",
  },
  {
    q: "Is LOLER inspection required for my dumbwaiter?",
    a: "Yes. Commercial dumbwaiters must be examined every 6 months under LOLER regulations. We carry out inspections and issue certificates on the same day.",
  },
]

export default function DumbwaiterRepairEnfieldPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-300 font-medium text-sm uppercase tracking-widest mb-3">
            Local Engineer · North London
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Dumbwaiter Repair Enfield
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mb-8">
            Fast, local dumbwaiter and service lift repairs across Enfield — EN1, EN2, EN3 and
            surrounding areas. Emergency callouts, all brands, LOLER compliant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${site.phone}`}
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg text-center"
            >
              Call {site.phone}
            </a>
            <a
              href={`https://wa.me/${site.whatsapp.replace("+", "")}`}
              className="border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg text-center"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Your Local Dumbwaiter Engineer in Enfield</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Enfield has a high concentration of restaurants, cafés, and food businesses — particularly
            along Church Street, the town centre, and the industrial estates of Brimsdown and Ponders End.
            Many of these rely on dumbwaiters and food lifts to keep kitchens running efficiently across
            multiple floors.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Dumbwaiter UK is based in North London and covers all of Enfield as a primary service area.
            Whether your dumb waiter has stopped working entirely or is showing early warning signs,
            our engineers can be with you quickly — same day for emergencies.
          </p>
          <p className="text-slate-600 leading-relaxed">
            We service all types of goods lift and service lift systems: electric dumbwaiters,
            hydraulic food lifts, rope and cable systems, and modern IoT-controlled units. We carry
            common parts on every van to maximise the chance of a first-visit fix.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Dumbwaiter Services in Enfield</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Dumbwaiter Repair",
                desc: "Fast fault diagnosis and repair for all dumbwaiter and service lift types. Emergency same-day callouts across Enfield.",
                href: "/dumbwaiter-repair-london",
              },
              {
                title: "LOLER Inspection",
                desc: "Statutory 6-monthly LOLER Thorough Examination for commercial dumbwaiters. Certificate issued same day.",
                href: "/loler-inspection-london",
              },
              {
                title: "Maintenance Contracts",
                desc: "Annual service contracts covering your LOLER inspections and a full preventative maintenance visit. From £200/year.",
                href: "/services#maintenance",
              },
            ].map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="bg-white rounded-xl p-6 border border-slate-100 hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Areas Covered Near Enfield</h2>
          <p className="text-slate-600 mb-4">
            We cover all of Enfield including EN1, EN2, EN3 and the following local areas:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Enfield Town", "Enfield Lock", "Enfield Highway", "Southgate",
              "Edmonton", "Palmers Green", "Winchmore Hill", "Ponders End",
              "Brimsdown", "Freezywater", "Bush Hill Park",
            ].map((area) => (
              <span key={area} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Also serving */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-500 text-sm mb-3">Also serving:</p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {[
              { name: "London (all boroughs)", href: "/dumbwaiter-repair-london" },
              { name: "Barnet", href: "/dumbwaiter-repair-barnet" },
              { name: "North London", href: "/dumbwaiter-repair-north-london" },
              { name: "Tottenham", href: "/dumbwaiter-repair-tottenham" },
              { name: "Camden", href: "/dumbwaiter-repair-camden" },
              { name: "Islington", href: "/dumbwaiter-repair-islington" },
            ].map((area) => (
              <Link key={area.href} href={area.href} className="text-blue-700 hover:underline font-medium">
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need a dumbwaiter engineer in Enfield?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Local coverage · Same-day response · All brands · Transparent pricing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${site.phone}`}
              className="bg-white text-blue-700 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Call {site.phone}
            </a>
            <Link
              href="/contact"
              className="border border-white/40 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
