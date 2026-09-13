import { NavLink, Link, useNavigate } from 'react-router-dom'

function SidebarAdmin({ onLogout }) {
  const navigate = useNavigate()
  const links = [
    ['/admin', 'Ringkasan'],
    ['/admin/artikel', 'Artikel'],
    ['/admin/kegiatan', 'Kegiatan'],
  ]

  return <aside className="admin-sidebar"><div className="admin-label">Panel admin</div><strong>SD Negeri Turi 2</strong><nav aria-label="Navigasi admin">{links.map(([path, label]) => <NavLink className={({ isActive }) => isActive ? 'admin-link active' : 'admin-link'} end={path === '/admin'} key={path} to={path}>{label}</NavLink>)}</nav><Link className="back-link" to="/">← Kembali ke situs</Link><button className="logout-link" onClick={() => { onLogout(); navigate('/admin/login', { replace: true }) }} type="button">Keluar dari panel</button></aside>
}

export default SidebarAdmin