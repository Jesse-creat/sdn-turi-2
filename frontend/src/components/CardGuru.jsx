import { useEffect, useRef, useState } from 'react'

function CardGuru({ teacher }) {
  const cardRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    }, { threshold: 0.15 })

    observer.observe(card)
    return () => observer.disconnect()
  }, [])

  return (
    <article ref={cardRef} className={`teacher-card card-hover flex min-h-[330px] flex-col items-center rounded-[1.75rem] border border-slate-200 bg-white p-6 text-center shadow-sm${isVisible ? ' is-visible' : ''}`}>
      <div className="teacher-photo mb-5 flex aspect-square w-36 items-center justify-center overflow-hidden rounded-[1.35rem] border-4 border-white bg-blue-50 text-lg font-bold text-blue-700 shadow-[0_8px_20px_rgba(61,90,64,0.16)] ring-1 ring-slate-200">
        {teacher.foto ? <img alt={`Foto ${teacher.name}`} className="h-full w-full object-cover" src={teacher.foto} /> : teacher.initials}
      </div>
      <div className="mt-auto w-full border-t border-slate-100 pt-5">
        <h3 className="text-xl font-semibold leading-tight text-slate-900">{teacher.name}</h3>
        <p className="mt-3 inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">{teacher.role}</p>
      </div>
    </article>
  )
}

export default CardGuru