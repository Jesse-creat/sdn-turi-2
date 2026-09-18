import { useSchool } from '../../context/SchoolContext.jsx'
import { ArrowRight, CalendarDays, FileText, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function AdminDashboard() {
  const navigate = useNavigate()
  const { articles, activities } = useSchool()
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Panel kontrol</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Selamat datang, Admin.</h1>
          <p className="mt-2 text-slate-600">Pantau dan kelola informasi terbaru SDN Turi 2.</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500"><Sparkles className="h-4 w-4 text-yellow-500" /> Semua data tersimpan terpusat</div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <button className="group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg" onClick={() => navigate('/admin/artikel')} type="button">
          <div className="flex items-start justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><FileText className="h-5 w-5" /></div><ArrowRight className="h-5 w-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600" /></div>
          <strong className="mt-6 block text-3xl font-bold text-slate-900">{articles.length}</strong>
          <span className="mt-1 block text-sm text-slate-500">Artikel terbit</span>
        </button>
        <button className="group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200 hover:shadow-lg" onClick={() => navigate('/admin/kegiatan')} type="button">
          <div className="flex items-start justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600"><CalendarDays className="h-5 w-5" /></div><ArrowRight className="h-5 w-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-amber-600" /></div>
          <strong className="mt-6 block text-3xl font-bold text-slate-900">{activities.length}</strong>
          <span className="mt-1 block text-sm text-slate-500">Kegiatan terdaftar</span>
        </button>
      </div>

      <section className="mt-6 rounded-2xl bg-[#0f2747] p-6 text-white shadow-lg shadow-slate-900/10 sm:p-8">
        <h2 className="text-2xl font-bold text-white">Kelola informasi sekolah dengan mudah.</h2>
        <p className="mt-3 max-w-2xl leading-7 text-slate-300">Gunakan menu di samping untuk menambah, mengubah, atau menghapus informasi sekolah.</p>
      </section>
    </main>
  )
}

export default AdminDashboard