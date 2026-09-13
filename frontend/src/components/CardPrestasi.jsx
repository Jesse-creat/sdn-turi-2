function CardPrestasi({ achievement }) {
  return <article className="content-card achievement-card"><span className="card-number">{achievement.year}</span><h3>{achievement.title}</h3><p>{achievement.detail}</p></article>
}

export default CardPrestasi