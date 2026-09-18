import { Building2, BookOpenText, Users } from 'lucide-react'
import CardGuru from '../../components/CardGuru.jsx'
import { guruAndStaf, profilSekolah } from '../../data/schoolData.js'

function Profil({ school }) {
  const teachers = guruAndStaf.map((guru) => ({
    name: guru.nama,
    role: guru.jabatan,
    initials: guru.nama.split(' ').map((word) => word[0]).slice(0, 2).join(''),
  }))

  return (
    <main className="bg-slate-50">
      <section className="relative overflow-hidden bg-school-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">Profil sekolah</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Menjadi sekolah yang membentuk karakter unggul</h1>
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
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
              <Building2 className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Visi</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">{profilSekolah.visi}</p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-600">
              <BookOpenText className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Misi</h2>
            <ul className="mt-5 space-y-4 text-base leading-7 text-slate-600">
              {profilSekolah.misi.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 flex-none rounded-full bg-yellow-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-3xl font-bold text-slate-900">Sejarah</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{profilSekolah.sejarah}</p>
          <div className="mt-8 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-4"><span className="block text-slate-500">NPSN</span><strong className="mt-1 block text-lg text-slate-900">{profilSekolah.npsn}</strong></div>
            <div className="rounded-2xl bg-slate-50 p-4"><span className="block text-slate-500">Alamat</span><strong className="mt-1 block text-lg text-slate-900">{school.address}</strong></div>
            <div className="rounded-2xl bg-slate-50 p-4"><span className="block text-slate-500">Status</span><strong className="mt-1 block text-lg text-slate-900">Sekolah Negeri</strong></div>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-3xl font-bold text-slate-900">Guru dan staf</h2>
            <div className="flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700"><Users className="h-4 w-4" /> {teachers.length} tenaga pendidik</div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {teachers.map((teacher) => <CardGuru key={teacher.name} teacher={teacher} />)}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Profil