import { Building2 } from 'lucide-react'
import CardFasilitas from '../../components/CardFasilitas.jsx'
import { fasilitas } from '../../data/schoolData.js'

function Fasilitas() {
  const facilities = fasilitas.map((item) => ({ title: item.nama, description: item.deskripsi, isUnggulan: item.isUnggulan }))
  const featured = facilities.filter((item) => item.isUnggulan)

  return (
    <main className="bg-slate-50">
      <section className="bg-school-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">Fasilitas</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Lingkungan belajar yang nyaman dan aman</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700"><Building2 className="h-5 w-5" /></div>
          <h2 className="text-3xl font-bold text-slate-900">Fasilitas unggulan</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((facility) => <CardFasilitas key={facility.title} facility={facility} />)}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">Daftar seluruh fasilitas</h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {facilities.map((facility) => <CardFasilitas key={facility.title} facility={facility} />)}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Fasilitas