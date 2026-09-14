import { ArrowLeft, BarChart3, CalendarDays, FileText, LogOut } from 'lucide-react'
import { NavLink, Link, useNavigate } from 'react-router-dom'

function SidebarAdmin({ onLogout }) {
  const navigate = useNavigate()
  const links = [
    ['/admin', 'Ringkasan', BarChart3],
    ['/admin/artikel', 'Artikel', FileText],
    ['/admin/kegiatan', 'Kegiatan', CalendarDays],
  ]

  return (
    <aside className="flex w-full flex-col bg-[#0f2747] px-4 py-5 text-white lg:min-h-screen lg:w-72 lg:px-6 lg:py-7">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 font-display text-lg font-bold text-yellow-300">
          SD
        </div>
        <div>
          <div className="font-semibold">SDN Turi 2</div>
          <div className="text-xs text-slate-300">Panel administrasi</div>
        </div>
      </div>

      <nav aria-label="Navigasi admin" className="mt-8 flex gap-2 overflow-x-auto lg:block lg:space-y-2">
        {links.map(([path, label, Icon]) => (
          <NavLink
            className={({ isActive }) => `flex min-w-max items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${isActive ? 'bg-yellow-300 text-slate-900 shadow-lg shadow-yellow-300/10' : 'text-slate-300 hover:bg-white/10 hover:text-white'}`}
            end={path === '/admin'}
            key={path}
            to={path}
          >
            <Icon className="h-4 w-4" />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-8 flex gap-2 border-t border-white/10 pt-5 lg:mt-auto lg:block lg:space-y-2">
        <Link className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white" to="/">
          <ArrowLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Kembali ke situs</span>
        </Link>
        <button className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-200 transition hover:bg-red-400/10 hover:text-red-100" onClick={() => { onLogout(); navigate('/admin/login', { replace: true }) }} type="button">
          <LogOut className="h-4 w-4" />
          <span className="hidden sm:inline">Keluar dari panel</span>
        </button>
      </div>
    </aside>
  )
}

export default SidebarAdmin