import { Menu, Search, X } from 'lucide-react'
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
    ['Kegiatan', '/kegiatan'],
    ['Kontak', '/kontak'],
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="bg-school-navy text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 text-sm sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
            <span>+62 812-3456-7890</span>
            <span className="hidden sm:inline">|</span>
            <span>info@sdnturi2.sch.id</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 text-slate-900">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-school-navy font-display text-lg font-bold text-white shadow-sm">SD</div>
            <div>
              <div className="text-lg font-bold tracking-tight">SDN Turi 2</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
            {links.map(([label, path]) => (
              <NavLink
                key={path}
                end={path === '/'}
                to={path}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium transition ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700" aria-label="Cari sekolah">
              <Search className="h-4 w-4" />
            </button>
          </div>

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
                  `rounded-xl px-3 py-3 text-sm font-medium ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-100'}`
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