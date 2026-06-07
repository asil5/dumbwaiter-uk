import type { Metadata } from "next"
import Link from "next/link"
import { site } from "../config"

export const metadata: Metadata = {
  title: "Commercial Dumbwaiter London | Installation & Repair | Dumbwaiter UK",
  description:
    "Commercial dumbwaiter installation & repair in London. Built for restaurants, hotels, care homes & schools. Prices from £7,000. Free site survey.",
}

const sectors = [
  {
    title: "Restaurants & Cafés",
    desc: "Move food and crockery between kitchen and dining floors silently and efficiently — no more staff trips up and down the stairs.",
    icon: "🍽️",
  },
  {
    title: "Hotels",
    desc: "Room service, linen and supplies transported quickly across multiple floors with minimal disruption to guests.",
    icon: "🏨",
  },
  {
    title: "Care Homes",
    desc: "Safe, reliable movement of meals, medication and laundry between floors. Reduces manual handling risks for staff.",
    icon: "🏥",
  },
  {
    title: "Schools & Universities",
    desc: "Canteen deliveries, library book transport and equipment movement made simple with a purpose-built service lift.",
    icon: "🎓",
  },
  {
    title: "Offices & Retail",
    desc: "Files, stock and supplies moved between floors without interrupting your team or blocking passenger lifts.",
    icon: "🏢",
  },
  {
    title: "Pubs & Bars",
    desc: "Barrels, bottles and glassware shifted from cellar to bar floor safely and quickly during busy service.",
    icon: "🍺",
  },
]

const features = [
  { label: "Load Capacity", value: "Up to 300 kg" },
  { label: "Number of Stops", value: "2–6 floors" },
  { label: "Cab Size", value: "Custom to suit your space" },
  { label: "Drive System", value: "Electric — quiet and reliable" },
  { label: "Controls", value: "Simple pushbutton or smart panel" },
  { label: "Compliance", value: "LOLER / PUWER / CE marked" },
]

const pricingTiers = [
  {
    tier: "Standard",
    range: "£7,000 – £9,500",
    desc: "2-stop installation in an existing shaft or purpose-built enclosure. Ideal for restaurants and small hotels.",
  },
  {
    tier: "Mid-Range",
    range: "£9,500 – £12,000",
    desc: "3–4 stops with enhanced cab finish and smart controls. Suited to hotels, care homes and offices.",
  },
  {
    tier: "Premium",
    range: "£12,000 – £14,000+",
    desc: "5–6 stops, heavy-duty capacity, bespoke finishes and IoT monitoring. For large commercial premises.",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Dumbwaiter Installation London",
  provider: {
    "@type": "LocalBusiness",
    name: "Dumbwaiter UK",
    url: "https://dumbwaiter.uk",
    telephone: "02080586674",
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "GB",
    },
  },
  areaServed: { "@type": "City", name: "London" },
  description:
    "Commercial dumbwaiter installation, repair and maintenance for restaurants, hotels, care homes and schools across London.",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "GBP",
    lowPrice: "7000",
    highPrice: "14000",
  },
}

export default function CommercialDumbwaiterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-300 font-medium text-sm uppercase tracking-widest mb-4">
            Commercial Dumbwaiter London
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Commercial Dumbwaiter<br className="hidden md:block" /> Installation & Repair
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Purpose-built service lifts for London restaurants, hotels, care homes and schools.
            Supply-and-install from <strong className="text-white">£7,000</strong>. Free site survey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/pricing"
              className="border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              View Full Pricing
            </Link>
          </div>
          <p className="mt-6 text-slate-400 text-sm">
            Call us directly:{" "}
            <a href={`tel:${site.phone}`} className="text-white font-medium hover:underline">
              {site.phone}
            </a>
          </p>
        </div>
      </section>

      {/* Why commercial premises need a dumbwaiter */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Why Your Business Needs a Commercial Dumbwaiter
          </h2>
          <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
            A commercial dumb waiter (service lift) pays for itself by reducing labour costs, cutting injury risk and speeding up operations across your floors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                heading: "Save Staff Time",
                body: "Stop your team making dozens of trips up and down stairs every shift. A dumbwaiter moves goods in seconds.",
              },
              {
                heading: "Reduce Manual Handling Injuries",
                body: "Heavy trays, barrels and boxes cause back injuries. A service lift removes the risk and keeps your team safe.",
              },
              {
                heading: "Improve Customer Experience",
                body: "Faster service, quieter operation, fewer bottlenecks. Your customers notice the difference even if they never see the lift.",
              },
            ].map((item) => (
              <div key={item.heading} className="p-6 rounded-xl border border-slate-100 shadow-sm">
                <h3 className="font-bold text-lg mb-2">{item.heading}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Who We Work With</h2>
          <p className="text-slate-500 text-center mb-12 max-w-xl mx-auto">
            We install commercial dumbwaiters across all types of London businesses.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Technical Specifications</h2>
          <p className="text-slate-500 text-center mb-12 max-w-xl mx-auto">
            Every commercial dumbwaiter we install is engineered to UK standards and tailored to your premises.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div key={f.label} className="flex flex-col p-5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">{f.label}</span>
                <span className="font-bold text-slate-800 text-lg">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-blue-700 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Commercial Dumbwaiter Pricing</h2>
          <p className="text-blue-100 text-center mb-12 max-w-xl mx-auto">
            Supply and install. All prices include survey, full installation, commissioning and first LOLER inspection. VAT extra.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((t) => (
              <div key={t.tier} className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-xl mb-1">{t.tier}</h3>
                <p className="text-2xl font-bold text-blue-200 mb-4">{t.range}</p>
                <p className="text-blue-100 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-blue-200 text-sm mt-8">
            Final price depends on number of stops, shaft access, cab spec and building type. We provide a fixed written quote after a free site survey.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How the Installation Works</h2>
          <ol className="space-y-6">
            {[
              { step: "1", title: "Free Site Survey", desc: "We visit your premises, measure the space and discuss your requirements. No obligation." },
              { step: "2", title: "Fixed Written Quote", desc: "You receive a detailed quote within 48 hours. The price is fixed — no surprises on the day." },
              { step: "3", title: "Installation", desc: "Our team installs the dumbwaiter with minimal disruption. Most installations complete in 2–4 days." },
              { step: "4", title: "Commissioning & Handover", desc: "We test everything thoroughly, carry out the first LOLER inspection and train your staff to use the lift." },
              { step: "5", title: "Ongoing Support", desc: "Annual maintenance contracts and fast-response repair available to keep your dumbwaiter running reliably." },
            ].map((item) => (
              <li key={item.step} className="flex gap-5 items-start">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Install a Commercial Dumbwaiter?</h2>
          <p className="text-slate-300 text-lg mb-10">
            Get a free site survey and fixed written quote. We cover all of London and the surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-4 rounded-lg transition-colors text-lg"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${site.phone}`}
              className="border border-white/30 hover:bg-white/10 text-white font-semibold px-10 py-4 rounded-lg transition-colors text-lg"
            >
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
