import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the team behind Dumbwaiter UK. Specialist dumbwaiter engineers based in London with years of hands-on experience.",
}

const credentials = [
  "LOLER (Lifting Operations and Lifting Equipment Regulations) compliant",
  "Public liability insurance — fully covered",
  "Experience with listed buildings and heritage properties",
  "IoT and smart controls expertise",
  "All major dumbwaiter brands serviced",
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About Dumbwaiter UK</h1>
          <p className="text-slate-300 text-lg">
            Specialist engineers. Honest advice. London-based.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Dumbwaiter UK is a London-based specialist in dumbwaiter and service lift systems.
                  We focus exclusively on this area — so when you call us, you're speaking to someone who
                  installs, repairs, and maintains dumbwaiters every day.
                </p>
                <p>
                  Our background combines traditional lift engineering with modern technology. We bring
                  the same precision required for installing a system in a listed Victorian townhouse as
                  we do for a busy commercial kitchen — every installation is treated as bespoke.
                </p>
                <p>
                  We're based in London and cover the whole of Greater London plus surrounding counties.
                  We don't sub-contract work out — the engineer who surveys your property is the same
                  person who does the installation and any follow-up service.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4">Credentials & Compliance</h3>
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
                <h3 className="font-bold text-lg mb-2">Why We Publish Our Prices</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Most lift companies make you call for a quote before sharing any pricing. We think
                  that's frustrating. We publish our price ranges so you can decide if we're the right
                  fit before picking up the phone — no pressure, no hard sell.
                </p>
              </div>
            </div>
          </div>

          <hr className="my-16 border-slate-100" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-xl border border-slate-200">
              <p className="text-4xl font-bold text-blue-700 mb-2">100%</p>
              <p className="text-slate-600 text-sm">London-based — no remote offices or call centres</p>
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

      <section className="bg-blue-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to talk?</h2>
          <p className="text-blue-100 mb-8">
            No sales pitch. Just straight answers and an honest quote.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-700 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
