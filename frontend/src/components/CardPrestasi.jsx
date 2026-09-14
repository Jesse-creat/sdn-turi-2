function CardPrestasi({ achievement }) {
  return (
    <article className="card-hover rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-600">{achievement.year}</div>
      <h3 className="text-xl font-semibold text-slate-900">{achievement.title}</h3>
      <p className="mt-3 text-sm text-slate-600">{achievement.detail}</p>
    </article>
  )
}

export default CardPrestasi