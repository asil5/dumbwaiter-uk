import type { Metadata } from "next"
import Link from "next/link"
import { site } from "./config"

export const metadata: Metadata = {
  title: "Dumbwaiter UK — London's Dumbwaiter Specialist",
  description:
    "London's commercial dumbwaiter specialist. Dumb waiter install, repair & maintenance for restaurants, hotels & homes. Transparent pricing, fast response.",
  keywords: [
    "dumbwaiter London",
    "commercial dumbwaiter",
    "dumb waiter London",
    "dumbwaiter installation London",
    "dumb waiter company London",
  ],
}

const services = [
  {
    title: "Installation",
    desc: "New dumbwaiter systems designed and installed for restaurants, hotels, and residential properties across London.",
    icon: "🔧",
    href: "/services#installation",
  },
  {
    title: "Repair",
    desc: "Fast emergency and scheduled repairs. We work on all major dumbwaiter brands and models.",
    icon: "⚡",
    href: "/services#repair",
  },
  {
    title: "Maintenance",
    desc: "Annual LOLER inspections and service contracts to keep your dumbwaiter running safely and reliably.",
    icon: "🛡️",
    href: "/services#maintenance",
  },
]

const reasons = [
  { title: "Transparent Pricing", desc: "Full price breakdowns upfront — no hidden costs or surprise invoices." },
  { title: "Fast Response", desc: "Emergency callouts across London. Same-day response for urgent repairs." },
  { title: "LOLER Compliant", desc: "All work carried out in full compliance with UK lifting regulations." },
  { title: "Smart Upgrades", desc: "IoT-enabled controls and monitoring for modern dumbwaiter systems." },
]

const locationAreas = [
  { name: "Enfield", href: "/dumbwaiter-repair-enfield" },
  { name: "North London", href: "/dumbwaiter-repair-north-london" },
  { name: "Barnet", href: "/dumbwaiter-repair-barnet" },
  { name: "Tottenham", href: "/dumbwaiter-repair-tottenham" },
  { name: "Camden", href: "/dumbwaiter-repair-camden" },
  { name: "Islington", href: "/dumbwaiter-repair-islington" },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-300 font-medium text-sm uppercase tracking-widest mb-4">
            London's Dumbwaiter Specialist
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Dumbwaiter Installation,<br className="hidden md:block" /> Repair & Maintenance
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Expert service for restaurants, hotels, and homes across London.
            Transparent pricing. Fast response. LOLER compliant.
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
              View Pricing
            </Link>
          </div>
          <p className="mt-6 text-slate-400 text-sm">
            Or call us directly:{" "}
            <a href={`tel:${site.phone}`} className="text-white font-medium hover:underline">
              {site.phone}
            </a>
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-slate-500 text-center mb-12 max-w-xl mx-auto">
            Full-spectrum dumbwaiter expertise — from new installations to emergency repairs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-700 transition-colors">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose Dumbwaiter UK?</h2>
          <p className="text-slate-500 text-center mb-12 max-w-xl mx-auto">
            We do things differently from most lift companies.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="p-6 rounded-xl border border-slate-200">
                <h3 className="font-bold text-lg mb-2">{r.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="bg-blue-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Transparent Pricing — No Surprises</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Unlike most lift companies, we publish our pricing. See exactly what to expect before you call.
          </p>
          <Link
            href="/pricing"
            className="bg-white text-blue-700 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors inline-block text-lg"
          >
            See Our Prices
          </Link>
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Areas We Cover</h2>
          <p className="text-slate-500 text-center mb-8">
            We cover all of London and surrounding counties. Click your area for local dumbwaiter services.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-8">
            {locationAreas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="bg-white border border-slate-200 rounded-lg px-4 py-3 text-center text-sm font-medium text-slate-700 hover:border-blue-400 hover:text-blue-700 transition-colors"
              >
                {area.name}
              </Link>
            ))}
          </div>
          <p className="text-center text-slate-500 text-sm">
            Also covering Haringey, Southgate, Hertfordshire, Essex, Surrey and Kent.{" "}
            <Link href="/contact" className="text-blue-700 font-semibold hover:underline">
              Check your area →
            </Link>
          </p>
          <p className="text-slate-400 text-sm text-center mt-4">
            Also known as a dumb waiter or service lift — we install, repair and maintain all types of small goods lifts across London.
          </p>
        </div>
      </section>
    </>
  )
}
