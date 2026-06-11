import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"
import BuildBadge from "./components/BuildBadge"

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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Dumbwaiter UK",
  url: "https://dumbwaiter.uk",
  telephone: "02080586674",
  email: "info@dumbwaiter.uk",
  description:
    "Commercial dumbwaiter installation, repair and maintenance across London. LOLER compliant. Fast response.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "GB",
  },
  areaServed: [
    "London", "Enfield", "Barnet", "Tottenham", "Camden",
    "Islington", "Southgate", "Haringey", "Hertfordshire", "Essex",
    "North London", "South London", "East London", "West London",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dumbwaiter Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dumbwaiter Repair London" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dumbwaiter Installation London" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dumbwaiter Maintenance London" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "LOLER Inspection London" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Food Lift Repair London" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Service Lift Repair London" } },
    ],
  },
  priceRange: "££",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "07:00",
    closes: "19:00",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={geist.className}>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <BuildBadge />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-W224YC8E9D" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-W224YC8E9D');`,
          }}
        />
      </body>
    </html>
  )
}
