import { CalendarRange, MapPin } from 'lucide-react'
import { useSchool } from '../../context/SchoolContext.jsx'

function Kegiatan() {
  const { activities } = useSchool()

  return (
    <main className="bg-slate-50">
      <section className="bg-school-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">Kegiatan</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Agenda belajar dan pengalaman siswa</h1>
        </div>
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