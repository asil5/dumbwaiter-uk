// IndexNow ping script
// Kullanım: node scripts/indexnow.mjs /blog/what-is-a-dumbwaiter
// Birden fazla URL: node scripts/indexnow.mjs /blog/url-1 /blog/url-2

const KEY = "d4b5f6a7e8c9d0e1f2a3b4c5a8f3e2c1"
const HOST = "dumbwaiter.uk"
const BASE = `https://${HOST}`

const paths = process.argv.slice(2)

if (paths.length === 0) {
  console.error("Kullanım: node scripts/indexnow.mjs /blog/slug [/blog/slug2 ...]")
  process.exit(1)
}

const urlList = paths.map((p) => `${BASE}${p}`)

const body = {
  host: HOST,
  key: KEY,
  keyLocation: `${BASE}/${KEY}.txt`,
  urlList,
}

console.log("IndexNow ping gönderiliyor...")
console.log("URLs:", urlList)

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
})

if (res.ok || res.status === 202) {
  console.log(`✅ IndexNow başarılı (${res.status}) — Google ve Bing haberdar edildi`)
} else {
  const text = await res.text()
  console.error(`❌ IndexNow hata (${res.status}):`, text)
}
