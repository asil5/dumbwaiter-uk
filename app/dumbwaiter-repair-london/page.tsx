import type { Metadata } from "next"
import Link from "next/link"
import { site } from "../config"

export const metadata: Metadata = {
  title: "Dumbwaiter Repair London | Same-Day Response | Dumbwaiter UK",
  description:
    "Fast dumbwaiter repair across London. All brands. LOLER compliant. Same-day emergency callouts. Call 020 8058 6674.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly can you repair a dumbwaiter in London?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer same-day emergency response across London. For non-urgent repairs we typically attend within 24–48 hours.",
      },
    },
    {
      "@type": "Question",
      name: "Do you repair all dumbwaiter brands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work on all major brands including Stannah, Husbands, Sheridan, Otis service lifts, and custom-built systems.",
      },
    },
    {
      "@type": "Question",
      name: "Is a LOLER inspection required for dumbwaiters in London?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Under UK law, dumbwaiters used in commercial premises must be thoroughly examined every 6 months under LOLER regulations. We issue compliance certificates on the same day.",
      },
    },
  ],
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dumbwaiter Repair London",
  provider: { "@type": "LocalBusiness", name: "Dumbwaiter UK" },
  areaServed: "London",
  description:
    "Fast emergency and scheduled dumbwaiter repair across London. All brands and models serviced. LOLER compliant.",
  telephone: "02080586674",
}

const faqs = [
  {
    q: "How quickly can you repair a dumbwaiter in London?",
    a: "We offer same-day emergency response across London. For non-urgent repairs we typically attend within 24–48 hours.",
  },
  {
    q: "Do you repair all dumbwaiter brands?",
    a: "Yes — we work on all major brands including Stannah, Husbands, Sheridan, Otis service lifts, and custom-built systems.",
  },
  {
    q: "Is a LOLER inspection required for my dumbwaiter?",
    a: "Yes. UK law requires commercial dumbwaiters to be thoroughly examined every 6 months under LOLER regulations. We issue same-day certificates.",
  },
]

export default function DumbwaiterRepairLondonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-300 font-medium text-sm uppercase tracking-widest mb-3">
            London-Wide Coverage
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Dumbwaiter Repair London
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mb-8">
            Same-day emergency repairs across all London boroughs. We fix all makes and models
            of dumbwaiter and service lift — fast, reliable, LOLER compliant.
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
        <div className="max-w-4xl mx-auto prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold mb-4">Fast Dumbwaiter Repairs Across London</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            A broken dumbwaiter or service lift can stop your business in its tracks — whether you run a
            restaurant in Soho, a hotel in Kensington, or a multi-storey residential property in Islington.
            Dumbwaiter UK provides fast, professional dumbwaiter repair across all London boroughs,
            with same-day emergency response for urgent callouts.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Our engineers are experienced with all types of dumbwaiter and service lift systems —
            from food lifts in busy commercial kitchens to goods lifts in residential townhouses.
            We carry common spare parts on every van, so most repairs are completed in a single visit.
          </p>
          <p className="text-slate-600 leading-relaxed">
            All repair work is fully LOLER compliant. Where an inspection is due, we can carry out your
            statutory LOLER Thorough Examination on the same visit and issue your compliance certificate
            the same day.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">What We Repair</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Electric dumbwaiter systems",
              "Hydraulic service lifts",
              "Food lifts and kitchen dumbwaiters",
              "Goods lifts and heavy-duty service lifts",
              "Cable and rope systems",
              "Control panels and call stations",
              "Door interlocks and safety devices",
              "Motor and gearbox faults",
              "Stannah, Husbands & Sheridan systems",
              "Custom-built and bespoke units",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-slate-100">
                <span className="text-blue-600 font-bold mt-0.5">✓</span>
                <span className="text-slate-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Why Choose Dumbwaiter UK for Repairs?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Same-Day Emergency Response",
                desc: "We prioritise emergency callouts. If your dumbwaiter breaks down during service, call us and we'll aim to reach you the same day.",
              },
              {
                title: "All Brands & Models",
                desc: "We service all major manufacturers including Stannah, Husbands, Sheridan, and Otis service lifts, as well as older and custom-built systems.",
              },
              {
                title: "Transparent Pricing",
                desc: "Fixed callout rates, no hidden fees. You'll know the cost before we start. See our pricing page for full details.",
              },
              {
                title: "LOLER Compliant",
                desc: "All work meets UK lifting equipment regulations. We issue LOLER Thorough Examination certificates on the same day.",
              },
            ].map((item) => (
              <div key={item.title} className="p-6 border border-slate-200 rounded-xl">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
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
              { name: "Enfield", href: "/dumbwaiter-repair-enfield" },
              { name: "Barnet", href: "/dumbwaiter-repair-barnet" },
              { name: "North London", href: "/dumbwaiter-repair-north-london" },
              { name: "Camden", href: "/dumbwaiter-repair-camden" },
              { name: "Islington", href: "/dumbwaiter-repair-islington" },
              { name: "Tottenham", href: "/dumbwaiter-repair-tottenham" },
            ].map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="text-blue-700 hover:underline font-medium"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Dumbwaiter broken? Call us now.</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Same-day response across London. All brands. Transparent pricing.
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
