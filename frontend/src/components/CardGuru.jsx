function CardGuru({ teacher }) {
  return (
    <article className="card-hover rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-lg font-bold text-blue-700">{teacher.initials}</div>
      <h3 className="text-xl font-semibold text-slate-900">{teacher.name}</h3>
      <p className="mt-2 text-sm text-slate-600">{teacher.role}</p>
    </article>
  )
}

export default CardGuru