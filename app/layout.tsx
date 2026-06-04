import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Dumbwaiter UK — London's Dumbwaiter Specialist",
    template: "%s | Dumbwaiter UK",
  },
  description:
    "Expert dumbwaiter installation, repair and maintenance in London. Transparent pricing, fast response, LOLER compliant. Get a free quote today.",
  keywords: ["dumbwaiter installation London", "dumbwaiter repair London", "service lift London", "dumbwaiter maintenance"],
  openGraph: {
    title: "Dumbwaiter UK — London's Dumbwaiter Specialist",
    description: "Expert dumbwaiter installation, repair and maintenance in London.",
    url: "https://dumbwaiter.uk",
    siteName: "Dumbwaiter UK",
    locale: "en_GB",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={geist.className}>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
