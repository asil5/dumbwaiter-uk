import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dumbwaiter.uk"
  const now = new Date()

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/commercial-dumbwaiter`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/blog/how-much-does-a-dumbwaiter-cost-in-london`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog/loler-inspection-guide-london`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog/signs-your-dumbwaiter-needs-repair`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Servis sayfaları (sadece mevcut olanlar)
    { url: `${base}/dumbwaiter-repair-london`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    // Lokasyon sayfaları (sadece mevcut olanlar)
    { url: `${base}/dumbwaiter-repair-enfield`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Diğer
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ]
}
