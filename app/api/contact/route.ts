import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { name, phone, email, service, message } = await req.json()

  if (!name || !phone || !service) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    // Log to console in dev; in prod this needs RESEND_API_KEY set in Vercel env vars
    console.log("Contact form submission:", { name, phone, email, service, message })
    return NextResponse.json({ ok: true })
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "enquiries@dumbwaiter.uk",
      to: "info@dumbwaiter.uk",
      subject: `New Enquiry: ${service} — ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email || "not provided"}\nService: ${service}\n\n${message || ""}`,
    }),
  })

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
