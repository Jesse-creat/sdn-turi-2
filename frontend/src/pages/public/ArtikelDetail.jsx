import { ArrowLeft, CalendarRange } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSchool } from '../../context/SchoolContext.jsx'

function ArtikelDetail() {
  const { articles } = useSchool()
  const navigate = useNavigate()
  const { articleId } = useParams()
  const article = articles.find((item) => item.id === Number(articleId)) || articles[0]

  if (!article) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900">Artikel tidak ditemukan</h1>
      </main>
    )
  }

  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <button type="button" onClick={() => navigate('/artikel')} className="mb-8 inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-800">
          <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke artikel
        </button>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            <CalendarRange className="h-3.5 w-3.5 text-yellow-500" />
            {article.date}
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{article.title}</h1>
          {article.image && <img alt={article.title} className="my-8 h-[360px] w-full rounded-[1.5rem] object-cover" src={article.image} />}
          <p className="text-lg leading-8 text-slate-600">{article.excerpt}</p>
          <div className="mt-8 space-y-5 text-base leading-8 text-slate-700">
            <p>{article.excerpt} Kegiatan ini menjadi bagian dari upaya SDN Turi 2 dalam menciptakan lingkungan belajar yang aktif, menyenangkan, dan membentuk semangat serta karakter siswa sejak dini.</p>
            <p>Melalui program pendidikan yang terstruktur, siswa didorong untuk berkembang dalam aspek akademik, sosial, kreativitas, serta kepedulian terhadap lingkungan dan sesama.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ArtikelDetail