import type { Metadata } from "next"
import Link from "next/link"
import { site } from "../config"

export const metadata: Metadata = {
  title: "Blog | Dumbwaiter UK",
  description:
    "Expert guides on dumbwaiter costs, installation, maintenance, and regulations in London. Written by a working lift engineer.",
}

const posts = [
  {
    slug: "how-much-does-a-dumbwaiter-cost-in-london",
    title: "How Much Does a Dumbwaiter Cost in London?",
    excerpt:
      "A straight-talking price guide covering residential, commercial, and industrial dumbwaiter installations in London — including what drives costs up or down.",
    date: "5 June 2026",
    readTime: "6 min read",
    tag: "Pricing",
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-400 font-semibold uppercase tracking-widest text-sm mb-4">
            {site.company} Blog
          </p>
          <h1 className="text-4xl font-bold mb-4">Dumbwaiter Guides & Advice</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Honest, practical guides written by a working London lift engineer. No filler.
          </p>
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 overflow-hidden"
              >
                {/* Card header */}
                <div className="bg-slate-50 px-6 py-5 border-b border-slate-100">
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {post.tag}
                  </span>
                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                    {post.title}
                  </h2>
                </div>

                {/* Card body */}
                <div className="px-6 py-5">
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Have a specific question?</h2>
          <p className="text-blue-100 mb-8">
            Call or message us directly — most questions get a straight answer in minutes.
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
