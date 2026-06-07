import Link from "next/link"
import { site } from "../config"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p className="text-white font-bold text-lg mb-2">{site.company}</p>
          <p className="text-sm">{site.tagline}</p>
          <p className="text-sm mt-1">London, UK</p>
        </div>

        <div>
          <p className="text-white font-semibold mb-3">Services</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services#installation" className="hover:text-white transition-colors">Installation</Link></li>
            <li><Link href="/services#repair" className="hover:text-white transition-colors">Repair</Link></li>
            <li><Link href="/services#maintenance" className="hover:text-white transition-colors">Maintenance</Link></li>
            <li><Link href="/services#smart" className="hover:text-white transition-colors">Smart Upgrades</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-white font-semibold mb-3">Contact</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`tel:${site.phone}`} className="hover:text-white transition-colors">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 text-center py-4 text-xs text-slate-500 flex items-center justify-center gap-3">
        <span>© {new Date().getFullYear()} {site.company}. All rights reserved.</span>
        <span className="font-mono opacity-40">
          build {process.env.NEXT_PUBLIC_BUILD}
        </span>
      </div>
    </footer>
  )
}
