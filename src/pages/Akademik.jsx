import CardEkskul from '../components/CardEkskul.jsx'
import CardPrestasi from '../components/CardPrestasi.jsx'
import { ekstrakurikuler, prestasi } from '../data/schoolData.js'

function Akademik() {
  const activities = ekstrakurikuler.map((item) => ({ title: item.nama, description: item.deskripsi }))
  const achievements = prestasi.map((item) => ({ title: item.judul, year: item.tahun, detail: item.tingkat }))
  return <main className="page-section"><div className="page-heading"><p className="eyebrow">Belajar dan berkarya</p><h1>Akademik</h1></div><section><div className="section-title"><h2>Ekstrakurikuler</h2><span>Ruang eksplorasi siswa</span></div><div className="card-grid">{activities.map((activity) => <CardEkskul key={activity.title} activity={activity} />)}</div></section><section><div className="section-title"><h2>Prestasi terbaru</h2><span>Catatan kebanggaan sekolah</span></div><div className="card-grid">{achievements.map((achievement) => <CardPrestasi key={achievement.title} achievement={achievement} />)}</div></section></main>
}

export default Akademik