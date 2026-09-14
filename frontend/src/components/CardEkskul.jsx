function CardEkskul({ activity }) {
  return (
    <article className="card-hover rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-600">★</div>
      <h3 className="text-xl font-semibold text-slate-900">{activity.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{activity.description}</p>
    </article>
  )
}

export default CardEkskul