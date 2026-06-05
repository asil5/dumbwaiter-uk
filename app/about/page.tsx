import type { Metadata } from "next"
import Link from "next/link"
import { site } from "../config"

export const metadata: Metadata = {
  title: "About Dumbwaiter UK | London's Dumbwaiter Specialist",
  description:
    "Meet Asil, the engineer behind Dumbwaiter UK. A London-based lift specialist offering transparent pricing, LOLER compliance, and smart dumbwaiter upgrades across Greater London.",
}

const credentials = [
  "LOLER (Lifting Operations and Lifting Equipment Regulations) compliant",
  "Public liability insurance — fully covered",
  "ESP32 & IoT smart controls expertise",
  "All major dumbwaiter brands serviced and repaired",
  "Experience with listed buildings and heritage properties",
  "No subcontracting — the same engineer surveys, installs, and services",
]

const values = [
  {
    title: "Transparency",
    desc: "We publish our price ranges online. No gimmicks, no 'call for a quote' before you've seen a single number. You should know roughly what something costs before committing your time.",
  },
  {
    title: "Speed",
    desc: "Most repair callouts are attended within 24–48 hours. For commercial clients where a broken dumbwaiter means a kitchen stops working, that matters.",
  },
  {
    title: "Quality",
    desc: "Every installation is LOLER certified. We don't cut corners on safety documentation, structural fixings, or electrical work. The system we hand over is built to last.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-400 font-semibold uppercase tracking-widest text-sm mb-4">
            About Dumbwaiter UK
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Built by an Engineer.<br />Run with Honesty.
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            {site.company} is a London-based specialist in dumbwaiter and service lift systems —
            installations, repairs, maintenance, and smart upgrades.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Story Behind the Company</h2>
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  My name is Asil. I'm a lift and dumbwaiter engineer based in London. Over the years
                  I've installed and repaired hundreds of systems — from Victorian townhouses in
                  Kensington to busy restaurant kitchens in Soho.
                </p>
                <p>
                  I started Dumbwaiter UK because I kept running into the same problem: homeowners and
                  business owners had no idea what a dumbwaiter should cost. Every company they called
                  gave them a vague "we'll need to do a survey first" response before revealing any
                  pricing. The result? People either overpaid, or gave up on the idea entirely.
                </p>
                <p>
                  I thought there was a better way. Publish the price ranges upfront. Be honest about
                  what drives costs up or down. Let the customer decide if it makes sense for them before
                  we've wasted each other's time.
                </p>
                <p>
                  That's still the principle the business runs on.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4">Credentials & Expertise</h3>
                <ul className="space-y-3">
                  {credentials.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-blue-600 mt-0.5 shrink-0">✓</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">ESP32 & Smart Upgrades</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Alongside traditional lift engineering, I specialise in smart control upgrades using
                  ESP32 microcontrollers — adding remote monitoring, floor-call displays, and IoT
                  connectivity to existing dumbwaiter systems. It's a niche skill that most lift companies
                  don't offer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl border border-slate-200 p-8">
                <h3 className="text-xl font-bold text-blue-700 mb-3">{v.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-xl border border-slate-200">
              <p className="text-4xl font-bold text-blue-700 mb-2">100%</p>
              <p className="text-slate-600 text-sm">London-based — no remote offices, no call centres</p>
            </div>
            <div className="p-6 rounded-xl border border-slate-200">
              <p className="text-4xl font-bold text-blue-700 mb-2">All</p>
              <p className="text-slate-600 text-sm">Major brands and models serviced and repaired</p>
            </div>
            <div className="p-6 rounded-xl border border-slate-200">
              <p className="text-4xl font-bold text-blue-700 mb-2">Free</p>
              <p className="text-slate-600 text-sm">Site surveys for all new installations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to talk?</h2>
          <p className="text-blue-100 mb-8">
            No sales pitch. No pressure. Just straight answers and an honest quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-700 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${site.phone}`}
              className="border border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
