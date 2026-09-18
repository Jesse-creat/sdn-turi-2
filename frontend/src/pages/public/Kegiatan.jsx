import { CalendarRange, MapPin } from 'lucide-react'
import { useSchool } from '../../context/SchoolContext.jsx'

function Kegiatan() {
  const { activities } = useSchool()

  return (
    <main className="bg-slate-50">
      <section className="relative overflow-hidden bg-school-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">Kegiatan</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Agenda belajar dan pengalaman siswa</h1>
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
        <div className="space-y-6">
          {activities.map((activity) => (
            <article key={activity.id} className="card-hover grid gap-5 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-[240px_1fr] md:p-5">
              <img alt={activity.title} className="h-52 w-full rounded-[1.25rem] object-cover md:h-full" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" />
              <div className="flex flex-col justify-center">
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  <CalendarRange className="h-3.5 w-3.5 text-yellow-500" />
                  {activity.date}
                </div>
                <h2 className="text-2xl font-bold text-slate-900">{activity.title}</h2>
                <p className="mt-3 text-base leading-8 text-slate-600">{activity.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-slate-500">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  {activity.location}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Kegiatan