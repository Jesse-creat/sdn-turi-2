import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const links = [
    ['Beranda', '/'],
    ['Profil', '/profil'],
    ['Akademik', '/akademik'],
    ['Fasilitas', '/fasilitas'],
    ['Artikel', '/artikel'],
    ['Galeri', '/galeri'],
    ['Kegiatan', '/kegiatan'],
    ['Kontak', '/kontak'],
  ]

  return (
    <header className="site-navbar sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex min-w-0 items-center gap-3 text-slate-900">
            <img
              src="/logo-sekolah.png"
              alt="Logo SDN Turi 2"
              className="h-11 w-11 rounded-xl border border-school-gold bg-white object-contain shadow-sm"
            />
            <div className="min-w-0">
              <div className="truncate text-lg font-bold tracking-tight">SDN Turi 2</div>
              <div className="hidden text-[11px] font-medium tracking-[0.18em] text-slate-500 sm:block">SEKOLAH DASAR NEGERI</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
            {links.map(([label, path]) => (
              <NavLink
                key={path}
                end={path === '/'}
                to={path}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm transition ${
                    isActive
                      ? 'bg-school-navy font-bold text-white shadow-sm'
                      : 'font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Buka menu"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {links.map(([label, path]) => (
              <NavLink
                key={path}
                end={path === '/'}
                to={path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-3 text-sm transition ${isActive ? 'bg-school-navy font-bold text-white' : 'font-medium text-slate-700 hover:bg-slate-100'}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar