import { BookOpen, Trophy } from 'lucide-react'
import CardEkskul from '../../components/CardEkskul.jsx'
import CardPrestasi from '../../components/CardPrestasi.jsx'
import { ekstrakurikuler, prestasi } from '../../data/schoolData.js'

function Akademik() {
  const activities = ekstrakurikuler.map((item) => ({ title: item.nama, description: item.deskripsi }))
  const achievements = prestasi.map((item) => ({ title: item.judul, year: item.tahun, detail: item.tingkat }))

  return (
    <main className="bg-slate-50">
      <section className="bg-school-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">Akademik</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Program pembelajaran yang inspiratif</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700"><BookOpen className="h-5 w-5" /></div>
          <h2 className="text-3xl font-bold text-slate-900">Ekstrakurikuler</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {activities.map((activity) => <CardEkskul key={activity.title} activity={activity} />)}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-600"><Trophy className="h-5 w-5" /></div>
            <h2 className="text-3xl font-bold text-slate-900">Prestasi terbaru</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {achievements.map((achievement) => <CardPrestasi key={achievement.title} achievement={achievement} />)}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Akademik