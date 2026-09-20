import { HeartPulse, LibraryBig, School, UsersRound, Volleyball } from 'lucide-react'
import { useEffect, useRef } from 'react'

function getFacilityIcon(title) {
  const normalizedTitle = title.toLowerCase()
  if (normalizedTitle.includes('lapangan')) return { Icon: Volleyball, color: 'bg-emerald-50 text-emerald-700' }
  if (normalizedTitle.includes('perpustakaan')) return { Icon: LibraryBig, color: 'bg-blue-50 text-blue-700' }
  if (normalizedTitle.includes('uks') || normalizedTitle.includes('kantin')) return { Icon: HeartPulse, color: 'bg-rose-50 text-rose-600' }
  if (normalizedTitle.includes('guru')) return { Icon: UsersRound, color: 'bg-amber-50 text-amber-700' }
  return { Icon: School, color: 'bg-orange-50 text-orange-700' }
}

function CardFasilitas({ facility }) {
  const { Icon, color } = getFacilityIcon(facility.title)
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      card.classList.toggle('is-visible', entry.isIntersecting)
    }, { threshold: 0.12 })

    observer.observe(card)
    return () => observer.disconnect()
  }, [])

  return (
    <article ref={cardRef} className="facility-card card-hover rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${color}`}>
        <Icon aria-hidden="true" className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-semibold text-slate-900">{facility.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{facility.description}</p>
    </article>
  )
}

export default CardFasilitas