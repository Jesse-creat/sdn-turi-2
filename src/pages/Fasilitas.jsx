import CardFasilitas from '../components/CardFasilitas.jsx'
import { fasilitas } from '../data/schoolData.js'

function Fasilitas() {
  const facilities = fasilitas.map((item) => ({ title: item.nama, description: item.deskripsi, isUnggulan: item.isUnggulan }))
  const featured = facilities.filter((item) => item.isUnggulan)
  return <main className="page-section"><div className="page-heading"><p className="eyebrow">Lingkungan belajar</p><h1>Fasilitas sekolah</h1><p>Ruang-ruang yang dirancang untuk mendukung proses belajar, bermain, dan berkolaborasi.</p></div><section><div className="section-title"><h2>Fasilitas unggulan</h2><span>{featured.length} fasilitas pilihan</span></div><div className="card-grid facilities-grid">{featured.map((facility) => <CardFasilitas key={facility.title} facility={facility} />)}</div></section><section className="facility-list"><h2>Daftar seluruh fasilitas</h2><div className="card-grid facilities-grid">{facilities.map((facility) => <CardFasilitas key={facility.title} facility={facility} />)}</div></section></main>
}

export default Fasilitas