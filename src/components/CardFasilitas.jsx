function CardFasilitas({ facility }) {
  return <article className="content-card"><span className="facility-icon" aria-hidden="true">+</span><h3>{facility.title}</h3><p>{facility.description}</p></article>
}

export default CardFasilitas