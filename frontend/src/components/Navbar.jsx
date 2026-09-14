import { NavLink, Link } from 'react-router-dom'

function Navbar() {
  const links = [['Beranda', '/'], ['Profil', '/profil'], ['Akademik', '/akademik'], ['Fasilitas', '/fasilitas'], ['Artikel', '/artikel'], ['Kegiatan', '/kegiatan']]

  return (
    <header className="site-header">
      <Link className="brand" to="/">
        <span className="brand-mark">SD</span>
        <span>SD Negeri Turi 2</span>
      </Link>
      <nav aria-label="Navigasi utama">
        {links.map(([label, path]) => (
          <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} end={path === '/'} key={path} to={path}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Navbar