function CardEkskul({ activity }) {
  return <article className="content-card"><span className="card-number">Kegiatan</span><h3>{activity.title}</h3><p>{activity.description}</p></article>
}

export default CardEkskul