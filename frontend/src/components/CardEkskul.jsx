import { BookOpen, BookOpenCheck, Compass, Drum, Music2, Palette, Volleyball } from 'lucide-react'
import { useEffect, useRef } from 'react'

const activityStyles = [
  { match: 'pramuka', Icon: Compass, className: 'text-[#3d5a40]' },
  { match: 'voli', Icon: Volleyball, className: 'text-[#416b8a]' },
  { match: 'tari', Icon: Palette, className: 'text-[#9a5c52]' },
  { match: 'hadroh', Icon: Music2, className: 'text-[#9a6b32]' },
  { match: 'drumband', Icon: Drum, className: 'text-[#a84f2f]' },
  { match: 'tahfidz', Icon: BookOpenCheck, className: 'text-[#4f7565]' },
  { match: 'btq', Icon: BookOpen, className: 'text-[#536b82]' },
]

function CardEkskul({ activity }) {
  const cardRef = useRef(null)
  const style = activityStyles.find((item) => activity.title.toLowerCase().includes(item.match)) || activityStyles[0]
  const Icon = style.Icon

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
      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[#e9dfc9] bg-[#f7f2e7] ${style.className}`}>
        <Icon aria-hidden="true" className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-semibold text-slate-900">{activity.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{activity.description}</p>
    </article>
  )
}

export default CardEkskul