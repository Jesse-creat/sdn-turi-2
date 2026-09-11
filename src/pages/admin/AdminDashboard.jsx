import { useSchool } from '../../context/SchoolContext.jsx'
import { useNavigate } from 'react-router-dom'

function AdminDashboard() {
  const navigate = useNavigate()
  const { articles, activities } = useSchool()
  return <main className="admin-content"><p className="eyebrow">Panel kontrol</p><h1>Selamat datang, Admin.</h1><div className="admin-stats"><button onClick={() => navigate('/admin/artikel')} type="button"><strong>{articles.length}</strong><span>Artikel terbit</span></button><button onClick={() => navigate('/admin/kegiatan')} type="button"><strong>{activities.length}</strong><span>Kegiatan terdaftar</span></button></div><section className="admin-welcome"><h2>Kelola informasi sekolah dengan mudah.</h2><p>Gunakan menu di samping untuk menambah, mengubah, atau menghapus artikel dan kegiatan sekolah.</p></section></main>
}

export default AdminDashboard