import { BookOpen, Trophy } from 'lucide-react'
import CardEkskul from '../../components/CardEkskul.jsx'
import CardPrestasi from '../../components/CardPrestasi.jsx'
import { useSchool } from '../../context/SchoolContext.jsx'

function Akademik() {
  const { extracurriculars, achievements: storedAchievements } = useSchool()
  const activities = extracurriculars.map((item) => ({ title: item.nama, description: item.deskripsi }))
  const achievements = storedAchievements.map((item) => ({ title: item.judul, year: item.tahun, detail: item.tingkat }))

  return (
    <main className="bg-slate-50">
      <section className="relative overflow-hidden bg-school-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">Akademik</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Program pembelajaran yang inspiratif</h1>
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