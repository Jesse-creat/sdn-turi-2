function CardFasilitas({ facility }) {
  return (
    <article className="card-hover rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">+</div>
      <h3 className="text-xl font-semibold text-slate-900">{facility.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{facility.description}</p>
    </article>
  )
}

export default CardFasilitas