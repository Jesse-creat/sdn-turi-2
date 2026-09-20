import { useEffect, useRef } from 'react'

function CardPrestasi({ achievement }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      card.classList.toggle('is-visible', entry.isIntersecting)
    }, { threshold: 0.15 })

    observer.observe(card)
    return () => observer.disconnect()
  }, [])

  return (
    <article ref={cardRef} className="academic-card card-hover rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-600">{achievement.year}</div>
      <h3 className="text-xl font-semibold text-slate-900">{achievement.title}</h3>
      <p className="mt-3 text-sm text-slate-600">{achievement.detail}</p>
    </article>
  )
}

export default CardPrestasi