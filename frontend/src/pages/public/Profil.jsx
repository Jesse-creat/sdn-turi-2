import CardGuru from '../../components/CardGuru.jsx'
import { guruAndStaf, profilSekolah } from '../../data/schoolData.js'

function Profil({ school }) {
  const teachers = guruAndStaf.map((guru) => ({ name: guru.nama, role: guru.jabatan, initials: guru.nama.split(' ').map((word) => word[0]).slice(0, 2).join('') }))
  return <main className="page-section"><div className="page-heading"><p className="eyebrow">Tentang kami</p><h1>Profil sekolah</h1></div><div className="info-grid"><section><h2>Visi</h2><p>{profilSekolah.visi}</p></section><section><h2>Misi</h2><ul className="clean-list">{profilSekolah.misi.map((item) => <li key={item}>{item}</li>)}</ul></section></div><section className="history"><h2>Sejarah singkat</h2><p>{profilSekolah.sejarah}</p><p className="school-meta"><strong>NPSN</strong> {profilSekolah.npsn} <strong>Alamat</strong> {school.address}</p></section><section><div className="section-title"><h2>Guru dan staf</h2><span>{teachers.length} tenaga pendidik</span></div><div className="card-grid">{teachers.map((teacher) => <CardGuru key={teacher.name} teacher={teacher} />)}</div></section></main>
}

export default Profil