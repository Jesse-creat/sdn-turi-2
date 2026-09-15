import { ArrowRight, BookOpen, CalendarRange, GraduationCap, MapPin, Medal, Sparkles, Trophy, Users } from 'lucide-react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSchool } from '../../context/SchoolContext.jsx'

function Home({ school }) {
  const navigate = useNavigate()
  const { articles, activities } = useSchool()

  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        } else {
          entry.target.classList.remove('is-visible')
        }
      })
    }, { threshold: 0.15 })

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const quickInfo = [
    { icon: GraduationCap, title: 'Pendidikan Berkualitas', description: 'Pembelajaran yang membangun karakter, logika, dan percaya diri.' },
    { icon: Users, title: 'Guru Profesional', description: 'Tenaga pendidik yang berdedikasi, ramah, dan inspiratif.' },
    { icon: BookOpen, title: 'Fasilitas Lengkap', description: 'Lingkungan belajar yang nyaman mendukung proses tumbuh kembang siswa.' },
    { icon: Trophy, title: 'Prestasi Sekolah', description: 'Capaian akademik dan non-akademik yang membanggakan.' },
  ]

  const featuredArticles = articles.slice(0, 3)
  const featuredActivities = activities.slice(0, 3)

  return (
    <main className="page-shell bg-slate-50">
      <section
        className="hero-photo relative overflow-hidden bg-school-navy text-white"
        style={{ backgroundImage: "url('/kkn-sdn-turi.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-school-navy/65 to-school-navy/55" />
        <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-center justify-start px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="hero-copy max-w-2xl text-left">
            <p className="reveal-up mb-4 text-sm font-semibold uppercase tracking-[0.26em] text-yellow-300">Selamat datang di</p>
            <h1 className="reveal-up reveal-up-delay-1 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">{school.schoolName}</h1>
            <p className="reveal-up reveal-up-delay-2 mt-2 text-lg font-semibold text-slate-100">Tempat tumbuh, belajar, dan menemukan percaya diri.</p>
            <p className="reveal-up reveal-up-delay-2 mt-3 max-w-lg text-base leading-7 text-slate-300">
              Di SDN Turi 2, setiap anak didampingi untuk mengenali potensinya, menghargai sesama, dan melangkah dengan bekal ilmu serta <span className="whitespace-nowrap">karakter yang kuat.</span>
            </p>
            <div className="reveal-up reveal-up-delay-3 mt-8 flex flex-wrap justify-start gap-4">
              <button type="button" onClick={() => navigate('/profil')} className="inline-flex items-center rounded-xl bg-school-yellow px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-yellow-300">Tentang Sekolah <ArrowRight className="ml-2 h-4 w-4" /></button>
              <button type="button" onClick={() => navigate('/artikel')} className="inline-flex items-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Lihat Berita</button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-6 mx-auto max-w-7xl px-4 sm:px-6 lg:-mt-4 lg:px-8">
        <div className="scroll-reveal grid gap-4 text-white md:grid-cols-2 xl:grid-cols-4">
          {quickInfo.map(({ icon: Icon, title, description }, index) => (
            <div key={title} className={`quick-info-card reveal-up rounded-2xl border border-[#6f98bf] bg-[#285681] p-4 shadow-[0_12px_24px_rgba(15,39,71,0.16)]${index > 0 ? ` reveal-up-delay-${Math.min(index, 3)}` : ''}`}>
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-school-yellow text-slate-900">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-100">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="feature-image overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-sm">
            <img
              alt="Kepala sekolah SDN Turi 2"
              className="h-[460px] w-full rounded-[1.5rem] object-cover"
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80"
            />
          </div>
          <div className="scroll-reveal">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Sambutan kepala sekolah</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Selamat datang di SDN Turi 2</h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              {school.tagline} Kami berkomitmen menciptakan lingkungan belajar yang menumbuhkan semangat, kreativitas, dan karakter siswa. Setiap proses belajar di sekolah ini didesain agar anak-anak dapat tumbuh menjadi pribadi yang mandiri, berakhlak mulia, dan siap menghadapi masa depan.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Dengan kolaborasi antara guru, orang tua, dan masyarakat, kami terus mengembangkan pembelajaran yang inovatif dan menyenangkan untuk menumbuhkan rasa ingin tahu serta prestasi siswa.
            </p>
            <div className="mt-8 flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div>
                <div className="font-semibold text-slate-900">{school.schoolName}</div>
                <div className="text-sm text-slate-500">Kepala Sekolah</div>
              </div>
              <Link to="/profil" className="inline-flex items-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">Baca Selengkapnya <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/70 bg-white py-16">
        <div className="scroll-reveal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Berita terbaru</p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Informasi sekolah</h2>
            </div>
            <Link to="/artikel" className="hidden text-sm font-semibold text-blue-700 hover:text-blue-800 md:inline-flex">Lihat semua <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredArticles.length ? featuredArticles.map((article) => (
              <article key={article.id} className="scroll-reveal group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="overflow-hidden">
                  <img
                    alt={article.title}
                    className="image-zoom h-56 w-full object-cover"
                    src={article.image || 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80'}
                  />
                </div>
                <div className="p-5">
                  <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    <CalendarRange className="h-3.5 w-3.5 text-yellow-500" />
                    {article.date}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{article.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{article.excerpt}</p>
                  <Link to={`/artikel/${article.id}`} className="mt-5 inline-flex items-center font-semibold text-blue-700">Baca Selengkapnya <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </div>
              </article>
            )) : (
              <div className="col-span-full rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-600">
                Belum ada data berita tersedia saat ini.
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section-tint px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="scroll-reveal mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Program unggulan</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Pengembangan siswa holistik</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['Pendidikan Berkualitas', 'Pembelajaran yang merangsang rasa ingin tahu, kreativitas, dan kecakapan abad ke-21.', GraduationCap],
            ['Pengembangan Kreativitas', 'Mendorong siswa mengekspresikan bakat melalui seni, literasi, dan kegiatan kolaboratif.', Sparkles],
            ['Prestasi Siswa', 'Membina semangat berkompetisi dengan etika, disiplin, dan sportivitas.', Medal],
            ['Pendidikan Karakter', 'Menanamkan akhlak mulia, kerja sama, dan kepedulian terhadap lingkungan.', Users],
            ].map(([title, description, Icon]) => (
              <div key={title} className="scroll-reveal card-hover rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-school-navy py-16 text-white">
        <div className="scroll-reveal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">Prestasi sekolah</p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Membanggakan melalui karya dan semangat belajar</h2>
              <p className="mt-4 text-base leading-8 text-blue-100">
                SDN Turi 2 terus membangun semangat berprestasi dalam berbagai bidang akademik maupun non-akademik untuk masa depan yang lebih cerah.
              </p>
            </div>
                  <div className="stats-group grid grid-cols-3 divide-x divide-white/20 rounded-2xl border border-white/15 bg-white/10 px-2 py-4 backdrop-blur-sm">
                    {[
                      ['24+', 'Kegiatan'],
                      ['15', 'Prestasi'],
                      ['90%', 'Siswa aktif'],
                    ].map(([value, label]) => (
                      <div key={label} className="px-4 text-center sm:px-6">
                        <div className="text-3xl font-bold text-yellow-300">{value}</div>
                        <div className="mt-1 whitespace-nowrap text-xs text-blue-100 sm:text-sm">{label}</div>
                      </div>
                    ))}
                  </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="scroll-reveal mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Kegiatan sekolah</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Agenda belajar dan berkarya</h2>
          </div>
          <Link to="/kegiatan" className="hidden text-sm font-semibold text-blue-700 hover:text-blue-800 md:inline-flex">Lihat semua <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredActivities.length ? featuredActivities.map((activity) => (
            <article key={activity.id} className="scroll-reveal card-hover overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
              <img alt={activity.title} className="h-52 w-full object-cover" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" />
              <div className="p-5">
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  <CalendarRange className="h-3.5 w-3.5 text-yellow-500" />
                  {activity.date}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{activity.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{activity.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-slate-500">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  {activity.location}
                </div>
              </div>
            </article>
          )) : (
            <div className="col-span-full rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-600">
              Belum ada data kegiatan tersedia saat ini.
            </div>
          )}
        </div>
      </section>

      <section className="section-tint border-y border-slate-200/70 py-16">
        <div className="scroll-reveal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Galeri</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Moment pembelajaran dan kebersamaan</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
              'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80',
              'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80',
              'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
            ].map((image, index) => (
              <div key={image} className="scroll-reveal group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
                <img alt={`Galeri sekolah ${index + 1}`} className="image-zoom h-64 w-full object-cover" src={image} />
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 transition group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-slate-900">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="scroll-reveal rounded-[2rem] bg-school-navy p-8 text-white shadow-xl sm:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">Bergabung bersama kami</p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Mari membangun generasi yang cerdas, berkarakter, dan berprestasi.</h2>
            </div>
            <button type="button" onClick={() => navigate('/kontak')} className="inline-flex items-center justify-center rounded-xl bg-school-yellow px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-yellow-300">Hubungi Kami <ArrowRight className="ml-2 h-4 w-4" /></button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
