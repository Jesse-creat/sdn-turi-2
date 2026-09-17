import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer({ school }) {
  const navLinks = [
    ['Beranda', '/'],
    ['Profil', '/profil'],
    ['Akademik', '/akademik'],
    ['Berita', '/artikel'],
  ]

  return (
    <footer className="border-t border-school-gold/40 bg-school-navy text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-300/40 bg-white/10 font-display text-lg font-bold text-yellow-300">SD</div>
              <div>
                <div className="text-xl font-bold text-white">{school.schoolName}</div>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-7 text-slate-300">
              Membangun lingkungan belajar yang inspiratif, aman, dan berkarakter untuk masa depan generasi Indonesia.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Menu</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              {navLinks.map(([label, path]) => (
                <li key={path}>
                  <Link className="transition hover:text-yellow-300" to={path}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Tautan</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link className="transition hover:text-yellow-300" to="/fasilitas">Fasilitas</Link></li>
              <li><Link className="transition hover:text-yellow-300" to="/kegiatan">Kegiatan</Link></li>
              <li><Link className="transition hover:text-yellow-300" to="/kontak">Kontak</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Kontak</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-yellow-300" /> <span>{school.address}</span></li>
              <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-yellow-300" /> <span>{school.phone}</span></li>
              <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-yellow-300" /> <span>{school.email}</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} {school.schoolName}. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  )
}

export default Footer