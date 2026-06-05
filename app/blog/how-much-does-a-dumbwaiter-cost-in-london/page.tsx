import type { Metadata } from "next"
import Link from "next/link"
import { site } from "../../config"

export const metadata: Metadata = {
  title: "How Much Does a Dumbwaiter Cost in London? (2026 Price Guide)",
  description:
    "Honest dumbwaiter installation costs in London for 2026. Residential from £4,500, commercial from £7,000. Includes LOLER, maintenance, and smart upgrade costs. Written by a London lift engineer.",
}

export default function DumbwaiterCostLondonPage() {
  return (
    <article className="py-16 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Breadcrumb */}
        <nav className="text-sm text-slate-400 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-600">Dumbwaiter Cost London</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            How Much Does a Dumbwaiter Cost in London?
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed mb-6">
            A straight-talking guide to dumbwaiter installation costs in London — covering residential,
            commercial, and industrial systems, plus what pushes the price up or down.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 pb-8 border-b border-slate-100">
            <span>By Asil — London Lift Engineer</span>
            <span>·</span>
            <span>5 June 2026</span>
            <span>·</span>
            <span>6 min read</span>
          </div>
        </header>

        {/* Body content */}
        <div className="space-y-6 text-slate-700 leading-relaxed">

          <p>
            If you've tried to get a straight answer on dumbwaiter pricing in London, you already know
            the problem: most companies won't publish any numbers until you've given them your details
            and sat through a sales call. This guide gives you real price ranges so you can make an
            informed decision before picking up the phone.
          </p>
          <p>
            I'm a lift engineer based in London. I've installed and repaired dumbwaiters in homes,
            restaurants, hotels, and warehouses across Greater London. These are the actual price ranges
            I work within — not marketing estimates.
          </p>

          {/* Section 1 — Overview table */}
          <h2 className="text-2xl font-bold mt-12 mb-2 text-slate-900 pt-4">
            Dumbwaiter Installation Costs at a Glance
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Type</th>
                  <th className="px-4 py-3 text-left font-semibold">Price Range (inc. VAT)</th>
                  <th className="px-4 py-3 text-left font-semibold">Typical Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Residential</td>
                  <td className="px-4 py-3 text-blue-700 font-semibold">£4,500 – £9,000</td>
                  <td className="px-4 py-3 text-slate-600">Homes, flats, listed buildings</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-3 font-medium">Commercial</td>
                  <td className="px-4 py-3 text-blue-700 font-semibold">£7,000 – £14,000</td>
                  <td className="px-4 py-3 text-slate-600">Restaurants, cafés, hotels, retail</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Industrial</td>
                  <td className="px-4 py-3 text-blue-700 font-semibold">£9,000 – £18,000</td>
                  <td className="px-4 py-3 text-slate-600">Large commercial, high-demand sites</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            These are total installed prices — they include the unit, shaft construction (if required),
            landing doors, electrical work, commissioning, and the LOLER certificate. They are not
            supply-only prices.
          </p>

          {/* Section 2 — Residential */}
          <h2 className="text-2xl font-bold mt-10 mb-2 text-slate-900">
            Residential Dumbwaiter Cost: £4,500 – £9,000
          </h2>

          <p>
            The most common residential job is a two-floor system connecting a ground-floor kitchen to a
            first-floor dining room, or a basement utility area to the main living level. Load capacity
            is typically 50–100 kg.
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2 text-slate-800">What's included</h3>
          <ul className="space-y-2 list-none pl-0">
            {[
              "Dumbwaiter unit (electro-mechanical drive)",
              "Shaft construction or lining (where no existing shaft is present)",
              "Two landing doors with safety interlocks",
              "Electrical connection and controls",
              "Commissioning and test run",
              "LOLER Thorough Examination certificate",
              "12-month warranty on parts and labour",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-blue-600 mt-0.5 shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-2 text-slate-800">What pushes residential costs higher</h3>
          <ul className="space-y-2 list-none pl-0">
            {[
              "Listed building status — specialist materials and council approval may be required",
              "Three or more floors — each additional floor adds a landing door and structural work",
              "Tight or awkward access — narrow stairwells or basement conversions take longer",
              "No existing shaft — building a new shaft from scratch adds £1,000–£3,000",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-slate-400 mt-0.5 shrink-0">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Section 3 — Commercial */}
          <h2 className="text-2xl font-bold mt-10 mb-2 text-slate-900">
            Commercial Dumbwaiter Cost: £7,000 – £14,000
          </h2>

          <p>
            Commercial systems are the most common job I do. Restaurants, cafés, private members clubs,
            and boutique hotels all use dumbwaiters to move food, crockery, and supplies between floors
            without staff carrying heavy loads on stairs.
          </p>
          <p>
            The higher cost reflects heavier-duty equipment (100–250 kg capacity), more frequent use
            cycles, and the complexity of integrating with an existing commercial kitchen environment.
            Commercial systems also need to comply with workplace health and safety regulations.
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2 text-slate-800">Key cost drivers in commercial settings</h3>
          <ul className="space-y-2 list-none pl-0">
            {[
              "Number of floors — a 4-floor restaurant system costs significantly more than 2-floor",
              "Load capacity — 250 kg systems use heavier drive mechanisms",
              "Out-of-hours installation — many restaurants need night or weekend work to avoid disruption",
              "Existing shaft vs. new build — a new shaft through a commercial building requires structural sign-off",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-slate-400 mt-0.5 shrink-0">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Section 4 — Industrial */}
          <h2 className="text-2xl font-bold mt-10 mb-2 text-slate-900">
            Industrial Dumbwaiter Cost: £9,000 – £18,000
          </h2>

          <p>
            Industrial systems handle 250–500 kg loads and are often found in hotels with high-volume
            kitchens, NHS facilities, warehouses, and large retail operations. These are custom-engineered
            to the site — standard off-the-shelf units rarely work at this scale.
          </p>
          <p>
            The engineering complexity, structural requirements, and bespoke nature of these installations
            place them at the top of the price range. They also require more detailed LOLER documentation
            and are subject to more frequent mandatory inspection intervals.
          </p>

          {/* Section 5 — Additional costs */}
          <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-900">
            Additional Costs to Budget For
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Service</th>
                  <th className="px-4 py-3 text-left font-semibold">Typical Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["Annual Maintenance Contract", "From £200/year"],
                  ["LOLER Thorough Examination (biennial)", "From £120"],
                  ["Emergency Callout", "From £150 + parts"],
                  ["ESP32 Smart / IoT Upgrade", "From £500"],
                  ["Structural Works (if required)", "£1,000 – £3,000"],
                ].map(([service, cost]) => (
                  <tr key={service} className="odd:bg-white even:bg-slate-50">
                    <td className="px-4 py-3">{service}</td>
                    <td className="px-4 py-3 font-medium">{cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold mt-8 mb-2 text-slate-800">LOLER — what it is and why it matters</h3>
          <p>
            LOLER (Lifting Operations and Lifting Equipment Regulations 1998) applies to all dumbwaiters
            used in a workplace context. It requires a Thorough Examination by a competent person at
            least every 12 months (or 6 months if people could be carried). The certificate should be
            kept on site. A new installation includes the first LOLER certificate — ongoing compliance
            is the owner's responsibility.
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2 text-slate-800">Smart upgrades: ESP32 IoT controls</h3>
          <p>
            If you have an older dumbwaiter with basic push-button controls, it's often possible to
            retrofit a smart control system using an ESP32 microcontroller. This can add floor-call
            displays, app-based monitoring, fault alerts, and usage logging — useful for busy commercial
            kitchens where downtime is costly. Cost starts at around £500 depending on the existing system.
          </p>

          {/* Section 6 — How to get a quote */}
          <h2 className="text-2xl font-bold mt-10 mb-2 text-slate-900">
            How to Get an Accurate Quote
          </h2>

          <p>
            Price ranges are a starting point — the only way to get an accurate figure is a site survey.
            Key questions that determine the final price:
          </p>

          <ul className="space-y-2 list-none pl-0 mt-3">
            {[
              "How many floors does the system need to serve?",
              "Is there an existing shaft, or does one need to be built?",
              "What is the maximum load the system needs to carry?",
              "Is the building listed or subject to planning restrictions?",
              "How accessible is the installation area?",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-blue-600 mt-0.5 shrink-0">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-4">
            We offer free site surveys across Greater London. We'll assess your space, confirm the
            right system for your needs, and provide a detailed written quote — no obligation, no hard sell.
          </p>

        </div>

        {/* CTA Block */}
        <div className="mt-16 bg-blue-700 text-white rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold mb-3">Get a Free Site Survey & Quote</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            We cover all of Greater London. Surveys are free with no obligation — and you'll have a
            written quote in hand before you commit to anything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-700 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Book a Free Survey
            </Link>
            <a
              href={`tel:${site.phone}`}
              className="border border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Call {site.phone}
            </a>
          </div>
        </div>

        {/* Back to blog */}
        <div className="mt-10 text-center">
          <Link href="/blog" className="text-sm text-blue-600 hover:underline">
            ← Back to all guides
          </Link>
        </div>

      </div>
    </article>
  )
}
