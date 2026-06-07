"use client"
import { useState } from "react"
import { site } from "../config"

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>

    const msg = [
      "New Enquiry - Dumbwaiter UK",
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      data.email ? `Email: ${data.email}` : null,
      `Service: ${data.service}`,
      data.message ? `Message: ${data.message}` : null,
    ]
      .filter(Boolean)
      .join("\n")

    window.open(`https://wa.me/${site.whatsapp.replace("+", "")}?text=${encodeURIComponent(msg)}`, "_blank")
    setStatus("sent")
    form.reset()
  }

  return (
    <>
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-slate-300 text-lg">
            Free site surveys for all new installations. Fast response for repairs.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Contact Details</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 text-blue-700 font-bold">
                  📞
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Phone</p>
                  <a href={`tel:${site.phone}`} className="text-blue-700 hover:underline">
                    {site.phone}
                  </a>
                  <p className="text-slate-500 text-sm mt-1">Mon–Sat, 7am–7pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0 text-2xl">
                  💬
                </div>
                <div>
                  <p className="font-semibold text-slate-900">WhatsApp</p>
                  <a
                    href={`https://wa.me/${site.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    Message us on WhatsApp
                  </a>
                  <p className="text-slate-500 text-sm mt-1">Quickest way for photos & quotes</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 text-2xl">
                  ✉️
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Email</p>
                  <a href={`mailto:${site.email}`} className="text-blue-700 hover:underline">
                    {site.email}
                  </a>
                  <p className="text-slate-500 text-sm mt-1">We reply within 4 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 text-2xl">
                  📍
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Service Area</p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    All London boroughs. Also covering Surrey, Kent, Essex, and Hertfordshire.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-orange-50 border border-orange-200 rounded-xl p-5">
              <p className="font-semibold text-orange-900 mb-1">⚡ Emergency Repair?</p>
              <p className="text-sm text-orange-800">
                Call us directly for same-day emergency response. Available for urgent breakdowns.
              </p>
              <a
                href={`tel:${site.phone}`}
                className="mt-3 inline-block bg-orange-500 text-white font-semibold px-5 py-2 rounded-lg text-sm hover:bg-orange-600 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Send an Enquiry</h2>

            {status === "sent" ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <p className="text-2xl mb-3">✅</p>
                <p className="font-semibold text-green-900 text-lg mb-2">Message sent!</p>
                <p className="text-green-700 text-sm">We'll get back to you within 4 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Service Required *</label>
                  <select
                    name="service"
                    required
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="">Select a service…</option>
                    <option value="installation">New Installation</option>
                    <option value="repair">Repair</option>
                    <option value="maintenance">Maintenance / LOLER</option>
                    <option value="smart">Smart Upgrade</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your property, number of floors, any existing system…"
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-600 text-sm">Something went wrong. Please call us directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  {status === "sending" ? "Sending…" : "Send Enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
