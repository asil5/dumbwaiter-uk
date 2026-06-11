import type { Metadata } from "next"
import Link from "next/link"
import { site } from "../../config"

export const metadata: Metadata = {
  title: "7 Signs Your Dumbwaiter Needs Repair | Dumbwaiter UK",
  description:
    "Unusual noises, slow movement, door problems — learn the warning signs that your dumbwaiter or service lift needs attention before a costly breakdown.",
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "7 Signs Your Dumbwaiter Needs Repair",
  description:
    "Learn the warning signs that your commercial dumbwaiter or service lift is failing — and what to do before it breaks down completely.",
  author: { "@type": "Organization", name: "Dumbwaiter UK" },
  publisher: { "@type": "Organization", name: "Dumbwaiter UK", url: "https://dumbwaiter.uk" },
  datePublished: "2026-06-01",
  dateModified: "2026-06-09",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I keep using my dumbwaiter if it's making noise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You should have it inspected before continuing regular use. Grinding or scraping noises often indicate worn guides or a failing motor — continuing to operate can cause further damage or a complete breakdown.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a dumbwaiter repair take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most repairs are completed in a single visit of 1–3 hours. We carry common spare parts on every van to maximise first-visit fix rates.",
      },
    },
  ],
}

const signs = [
  {
    number: "01",
    title: "Unusual Noises — Grinding, Scraping, or Clicking",
    body: `A well-maintained dumbwaiter runs quietly. If yours is making grinding, scraping, or repetitive clicking noises, this is usually a sign that something mechanical is wearing or failing.

Common causes include worn guide rollers or rail guides, a deteriorating motor or gearbox, loose mechanical components, or debris in the shaft. Left unaddressed, these issues escalate — a grinding noise today can become a seized motor next week, meaning your food lift is down during service.

What to do: Don't ignore it. Book an inspection before the noise becomes a breakdown.`,
  },
  {
    number: "02",
    title: "Slow or Inconsistent Movement",
    body: `If your dumbwaiter is noticeably slower than it used to be, or if its speed is inconsistent — faster on the way up, sluggish on the way down — this points to motor, brake, or drive system issues.

A gradual slowdown over weeks or months is easy to miss, but it typically indicates motor wear or a deteriorating drive belt or chain. Sudden speed changes may indicate an electrical or control fault.

What to do: Compare current speed with when the system was new. If there's a noticeable difference, have it serviced.`,
  },
  {
    number: "03",
    title: "Doors Not Opening or Closing Properly",
    body: `Landing doors and car doors on a dumbwaiter have safety interlocks — they must be fully closed before the lift moves, and they should open smoothly and fully at each landing.

If doors are sticking, not latching properly, or the lift won't travel until you manually push a door shut, the interlocks are failing. This is both a nuisance and a safety issue — a faulty interlock can allow the lift to travel with a door open, creating a risk of items falling into the shaft.

What to do: Faulty door interlocks are a common repair and straightforward to fix — but shouldn't be left or bypassed.`,
  },
  {
    number: "04",
    title: "The Lift Stops Between Floors",
    body: `A dumbwaiter stopping mid-travel is alarming. Causes range from minor (a simple limit switch fault) to serious (motor overheating, brake failure, or a mechanical obstruction in the shaft).

If your lift has stopped between floors, do not attempt to manually move it. A common mistake is to force the car by hand — this can cause cable or rope damage that turns a minor fault into a major repair.

What to do: Take the system out of use and call an engineer. This is one of our most common emergency callout scenarios in London, and most can be resolved on the same day.`,
  },
  {
    number: "05",
    title: "Control Panel Faults or Error Codes",
    body: `Modern dumbwaiters have electronic control systems with fault detection. If your display is showing error codes, the call buttons are unresponsive, or the panel is behaving erratically, this points to a control system fault.

Electrical faults in dumbwaiters are often caused by water ingress (common in commercial kitchen environments), loose wiring connections, or component failure on the control board. Some faults resolve with a power cycle — but recurring electrical issues need investigation.

What to do: Note any error codes displayed and report them to your engineer. Don't repeatedly reset the system and ignore recurring faults.`,
  },
  {
    number: "06",
    title: "The Lift Is Not Level with the Landing",
    body: `When your dumbwaiter arrives at a floor, it should stop level — the floor of the car should be flush with the landing. If there's a noticeable height difference (the car is above or below the landing), this is a levelling fault.

Levelling issues are usually caused by worn limit switches, brake adjustment problems, or drive chain/belt stretch. Beyond being inconvenient (dishes slide, goods tip), significant mis-levelling is a safety issue.

What to do: A levelling fault is a red flag that the braking or drive system needs attention. Schedule a repair promptly.`,
  },
  {
    number: "07",
    title: "Your LOLER Certificate Has Expired",
    body: `This isn't a mechanical sign — but an expired LOLER Thorough Examination certificate means you are operating your dumbwaiter illegally if it's in a commercial premises.

Under LOLER 1998, commercial dumbwaiters must be examined every 6 months by a competent person. If your certificate has lapsed, you need both a thorough examination and likely a service to ensure the equipment is safe and compliant.

What to do: Check your certificate date now. If it's expired or within 4 weeks of expiry, book your examination. We issue certificates on the same day as the inspection.`,
  },
]

export default function SignsDumbwaiterNeedsRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-300 text-sm font-medium uppercase tracking-widest mb-3">Maintenance Guide</p>
          <h1 className="text-4xl font-bold leading-tight mb-4">
            7 Signs Your Dumbwaiter Needs Repair
          </h1>
          <p className="text-slate-300 text-lg">
            Catch problems early — before a minor fault becomes an expensive breakdown during your busiest service.
          </p>
        </div>
      </section>

      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto">

          <p className="text-slate-600 leading-relaxed mb-12 text-lg">
            Most dumbwaiter breakdowns don't happen without warning. There are usually signs in
            the weeks or months beforehand — noises, slowness, door problems — that are easy to
            dismiss when you're busy. This guide covers the seven most common warning signs, what
            causes them, and what to do before they become a costly emergency repair.
          </p>

          <div className="space-y-12">
            {signs.map((sign) => (
              <section key={sign.number}>
                <div className="flex items-start gap-4 mb-3">
                  <span className="text-blue-600 font-bold text-xl w-10 shrink-0">{sign.number}</span>
                  <h2 className="text-xl font-bold text-slate-900">{sign.title}</h2>
                </div>
                <div className="pl-14">
                  {sign.body.split("\n\n").map((para, i) => (
                    <p key={i} className={`text-slate-600 leading-relaxed ${i < sign.body.split("\n\n").length - 1 ? "mb-3" : ""} ${para.startsWith("What to do") ? "bg-slate-50 border-l-4 border-blue-400 pl-4 py-2 text-sm font-medium text-slate-700" : ""}`}>
                      {para}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="mt-16 border-t border-slate-100 pt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Can I keep using my dumbwaiter if it's making noise?",
                  a: "You should have it inspected before continuing regular use. Grinding or scraping noises often indicate worn guides or a failing motor — continuing to operate can cause further damage or a complete breakdown.",
                },
                {
                  q: "How long does a dumbwaiter repair take?",
                  a: "Most repairs are completed in a single visit of 1–3 hours. We carry common spare parts on every van to maximise first-visit fix rates.",
                },
              ].map((faq) => (
                <div key={faq.q} className="border border-slate-200 rounded-xl p-5">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-sm text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-blue-700 text-white rounded-xl p-8 mt-12">
            <h2 className="text-xl font-bold mb-3">Noticed any of these signs?</h2>
            <p className="text-blue-100 mb-6">
              Don't wait for a breakdown during service. Call us for a same-day inspection across London.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${site.phone}`}
                className="bg-white text-blue-700 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center"
              >
                Call {site.phone}
              </a>
              <Link
                href="/contact"
                className="border border-white/40 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors text-center"
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
            <Link href="/blog/loler-inspection-guide-london" className="text-blue-700 hover:underline">LOLER Inspection Guide</Link>
            {" · "}
            <Link href="/pricing" className="text-blue-700 hover:underline">Repair Pricing</Link>
          </p>
        </div>
      </section>
    </>
  )
}
