import { ArrowRight, CalendarRange, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSchool } from '../../context/SchoolContext.jsx'

function Artikel() {
  const { articles } = useSchool()

  return (
    <main className="bg-slate-50">
      <section className="bg-school-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">Berita</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Artikel dan informasi sekolah</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100" placeholder="Cari artikel" type="text" />
          </div>
          <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600">{articles.length} artikel</div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <article key={article.id} className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="overflow-hidden">
                <img alt={article.title} className="image-zoom h-56 w-full object-cover" src={article.image || 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80'} />
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
        </div>
      </section>
    </main>
  )
}

export default Artikel
