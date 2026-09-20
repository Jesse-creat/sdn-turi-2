import { ArrowRight, CalendarRange, Search } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSchool } from '../../context/SchoolContext.jsx'

function Artikel() {
  const { articles } = useSchool()
  const [searchTerm, setSearchTerm] = useState('')
  const normalizedSearchTerm = searchTerm.trim().toLowerCase()
  const filteredArticles = articles.filter((article) => [article.title, article.excerpt, article.date].some((value) => value?.toLowerCase().includes(normalizedSearchTerm)))

  const articleRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle('is-visible', entry.isIntersecting))
    }, { threshold: 0.15 })

    articleRefs.current.filter(Boolean).forEach((article) => observer.observe(article))
    return () => observer.disconnect()
  }, [filteredArticles.length])

  return (
    <main className="bg-slate-50">
      <section className="relative overflow-hidden bg-school-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">Berita</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Artikel dan informasi sekolah</h1>
        </div>
      
        {/* Aksen dekoratif: sulur daun & sparkle, kesan buku cerita */}
        <svg className="pointer-events-none absolute right-6 top-6 hidden h-20 w-20 text-yellow-300/20 sm:block lg:right-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10C30 20 20 40 30 60C40 80 65 85 80 70C60 75 40 65 38 45C36 28 42 16 50 10Z" stroke="currentColor" strokeWidth="2.5" />
        </svg>
        <svg className="pointer-events-none absolute left-10 bottom-10 hidden h-8 w-8 text-yellow-300/25 md:block" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0l1.8 7.2L21 9l-7.2 1.8L12 18l-1.8-7.2L3 9l7.2-1.8L12 0z" />
        </svg>
        <svg className="absolute bottom-0 left-0 h-10 w-full text-[#faf6ee]" viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M0,32L60,28C120,24,240,16,360,18.7C480,21,600,35,720,40C840,45,960,40,1080,33.3C1200,27,1320,19,1380,16L1440,13V60H0Z" />
        </svg>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input aria-label="Cari artikel" className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100" onChange={(event) => setSearchTerm(event.target.value)} placeholder="Cari artikel" type="search" value={searchTerm} />
          </div>
          <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600">{filteredArticles.length} artikel</div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredArticles.map((article, index) => (
            <article key={article.id} ref={(element) => { articleRefs.current[index] = element }} className="article-card group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="overflow-hidden transition-transform duration-500 ease-out group-hover:scale-105">
                {article.image ? (
                  <img alt={article.title} className="h-56 w-full object-cover" src={article.image} />
                ) : (
                  <div className="flex h-56 w-full items-center justify-center bg-white px-4 text-center text-sm font-medium text-slate-400">
                    Belum mengunggah foto
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  <CalendarRange className="h-3.5 w-3.5 text-yellow-500" />
                  {article.date}
                </div>
                <h2 className="text-xl font-semibold text-slate-900">{article.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{article.excerpt}</p>
                <Link to={`/artikel/${article.id}`} className="mt-5 inline-flex items-center font-semibold text-blue-700">Baca Selengkapnya <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </div>
            </article>
          ))}
          {!filteredArticles.length && (
            <div className="col-span-full rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600">
              Artikel yang dicari belum ditemukan.
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default Artikel
