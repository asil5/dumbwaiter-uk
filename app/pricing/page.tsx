import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent dumbwaiter installation and repair prices in London. Residential from £4,500. Commercial from £7,000. Annual maintenance from £200.",
}

const tiers = [
  {
    name: "Residential",
    range: "£4,500 – £9,000",
    desc: "Private homes, flats, and listed buildings.",
    features: [
      "2-floor system (typical)",
      "50kg – 100kg load capacity",
      "Standard shaft construction",
      "12-month warranty",
      "LOLER certificate",
      "Free site survey",
    ],
    cta: "Get a Home Quote",
    highlight: false,
  },
  {
    name: "Commercial",
    range: "£7,000 – £14,000",
    desc: "Restaurants, cafés, hotels, and retail.",
    features: [
      "2–4 floor systems",
      "100kg – 250kg load capacity",
      "Heavy-duty construction",
      "12-month warranty",
      "LOLER certificate",
      "Free site survey",
      "Priority repair response",
    ],
    cta: "Get a Commercial Quote",
    highlight: true,
  },
  {
    name: "Industrial",
    range: "£9,000 – £18,000",
    desc: "Large commercial and high-demand settings.",
    features: [
      "Multi-floor systems",
      "250kg – 500kg load capacity",
      "Custom engineering",
      "12-month warranty",
      "LOLER certificate",
      "Free site survey",
      "Dedicated account manager",
    ],
    cta: "Get a Quote",
    highlight: false,
  },
]

const extras = [
  { item: "Annual Maintenance Contract", price: "From £200/year" },
  { item: "LOLER Thorough Examination", price: "From £120" },
  { item: "Emergency Callout", price: "From £150 + parts" },
  { item: "Smart IoT Upgrade", price: "From £500" },
  { item: "Structural Works (if required)", price: "£1,000 – £3,000" },
]

export default function PricingPage() {
  return (
    <>
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Transparent Pricing</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Most lift companies won't publish prices. We do. These ranges cover the majority of jobs — exact
            quotes provided after a free site survey.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl border p-8 flex flex-col ${
                t.highlight
                  ? "border-blue-600 shadow-lg shadow-blue-100 relative"
                  : "border-slate-200"
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-1">{t.name}</h2>
                <p className="text-slate-500 text-sm mb-4">{t.desc}</p>
                <p className="text-3xl font-bold text-slate-900">{t.range}</p>
                <p className="text-slate-400 text-xs mt-1">Total installed price (inc. VAT)</p>
              </div>

              <ul className="space-y-2 flex-1 mb-8">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-blue-600 mt-0.5 shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`text-center font-semibold px-6 py-3 rounded-lg transition-colors ${
                  t.highlight
                    ? "bg-blue-700 text-white hover:bg-blue-800"
                    : "border border-slate-300 hover:bg-slate-50 text-slate-800"
                }`}
              >
                {t.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Additional Services</h2>
          <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100">
            {extras.map((e) => (
              <div key={e.item} className="flex justify-between items-center px-6 py-4">
                <span className="text-slate-700">{e.item}</span>
                <span className="font-semibold text-slate-900">{e.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="py-10 px-4">
        <div className="max-w-3xl mx-auto bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h3 className="font-semibold text-amber-900 mb-3">What affects the final price?</h3>
          <ul className="text-sm text-amber-800 space-y-2">
            <li>· Number of floors served — each additional floor adds landing doors and structure</li>
            <li>· Shaft construction — if no existing shaft is available</li>
            <li>· Listed building requirements — may need specialist materials</li>
            <li>· Load capacity — heavier loads require stronger mechanisms</li>
            <li>· Access difficulty — tight spaces or challenging locations</li>
          </ul>
          <p className="mt-4 text-sm text-amber-800 font-medium">
            We provide a detailed written quote after a free site survey — no hidden fees.
          </p>
        </div>
      </section>

      <section className="bg-blue-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Free Site Survey</h2>
          <p className="text-blue-100 mb-8">
            We'll visit, assess your requirements, and provide a detailed written quote at no cost.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-700 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors inline-block"
          >
            Book a Free Survey
          </Link>
        </div>
      </section>
    </>
  )
}
