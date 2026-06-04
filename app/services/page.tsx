import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Dumbwaiter installation, repair, maintenance and smart upgrades across London. LOLER compliant. Commercial and residential.",
}

const services = [
  {
    id: "installation",
    title: "New Installation",
    subtitle: "Residential & Commercial",
    desc: "We design and install dumbwaiter systems tailored to your building — whether it's a listed townhouse, a busy restaurant, or a modern hotel. Every installation is engineered to fit the space and meet UK safety standards.",
    details: [
      "Free site survey and consultation",
      "Custom shaft construction if required",
      "Load capacities from 50kg to 300kg+",
      "2-floor to multi-floor systems",
      "Full LOLER commissioning certificate",
      "12-month workmanship warranty",
    ],
    customers: ["Restaurants & cafés", "Hotels & hospitality", "Residential & listed buildings", "Retail & offices"],
  },
  {
    id: "repair",
    title: "Emergency Repair",
    subtitle: "Fast Response Across London",
    desc: "A broken dumbwaiter stops your operation. We offer fast-response repairs across London for all makes and models — commercial and residential. Call us and we'll aim to get you running the same day.",
    details: [
      "Same-day response for emergencies",
      "All brands and models serviced",
      "Genuine and compatible spare parts",
      "Transparent callout and labour rates",
      "No fix, no fee on agreed repairs",
    ],
    customers: ["Restaurants with broken food lifts", "Hotels with stuck service lifts", "Homeowners", "Facilities managers"],
  },
  {
    id: "maintenance",
    title: "Maintenance & Servicing",
    subtitle: "LOLER Inspections & Annual Contracts",
    desc: "UK law requires dumbwaiters to be thoroughly examined every 6 months under LOLER. We offer annual maintenance contracts that include your statutory inspections plus a full service visit — keeping you compliant and avoiding breakdowns.",
    details: [
      "LOLER Thorough Examination every 6 months",
      "Annual service and safety check",
      "Priority response on breakdowns",
      "Maintenance report provided",
      "Contracts from £200/year",
    ],
    customers: ["Existing installation owners", "Commercial premises", "Landlords & property managers"],
  },
  {
    id: "smart",
    title: "Smart Upgrades",
    subtitle: "IoT Controls & Remote Monitoring",
    desc: "Modernise your existing dumbwaiter with smart controls. We design and build ESP32-based systems that add remote monitoring, fault alerts, and usage tracking — a unique offering not available from most lift companies.",
    details: [
      "Remote status monitoring via smartphone",
      "Fault and overload alerts",
      "Usage logging and reports",
      "Compatible with most existing systems",
      "Custom control panel design",
    ],
    customers: ["Restaurant groups", "Hotels with multiple units", "Property developers"],
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-slate-300 text-lg">
            Expert dumbwaiter services for London's restaurants, hotels, and homes.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-20">
          {services.map((s) => (
            <div key={s.id} id={s.id} className="scroll-mt-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <p className="text-blue-700 font-semibold text-sm uppercase tracking-widest mb-2">
                    {s.subtitle}
                  </p>
                  <h2 className="text-3xl font-bold mb-4">{s.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-6">{s.desc}</p>
                  <Link
                    href="/contact"
                    className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    Get a Quote
                  </Link>
                </div>

                <div className="space-y-4">
                  <div className="bg-slate-50 rounded-xl p-6">
                    <p className="font-semibold mb-3">What's included:</p>
                    <ul className="space-y-2">
                      {s.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-slate-700">
                          <span className="text-blue-600 mt-0.5">✓</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-6">
                    <p className="font-semibold mb-3">Suitable for:</p>
                    <ul className="space-y-1">
                      {s.customers.map((c) => (
                        <li key={c} className="text-sm text-slate-600">· {c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <hr className="mt-16 border-slate-100" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-blue-100 mb-8">Free site surveys for all new installations. No obligation.</p>
          <Link
            href="/contact"
            className="bg-white text-blue-700 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors inline-block"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  )
}
