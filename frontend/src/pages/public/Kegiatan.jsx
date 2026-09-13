import { useSchool } from '../../context/SchoolContext.jsx'

function Kegiatan() {
  const { activities } = useSchool()
  return <main className="page-section"><div className="page-heading"><p className="eyebrow">Agenda sekolah</p><h1>Kegiatan</h1><p>Temukan kegiatan yang berlangsung di lingkungan SD Negeri Turi 2.</p></div><div className="activity-list">{activities.map((activity) => <article className="activity-item" key={activity.id}><div><span className="card-number">{activity.date}</span><h2>{activity.title}</h2><p>{activity.description}</p></div><span>{activity.location}</span></article>)}</div></main>
}

export default Kegiatan