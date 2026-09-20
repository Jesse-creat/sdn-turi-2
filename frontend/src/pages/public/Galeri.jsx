import { useEffect, useRef } from 'react'

function Galeri({ school }) {
  const galleryImages = school.gallery
  const galleryRef = useRef(null)

  useEffect(() => {
    const galleryTiles = galleryRef.current?.querySelectorAll('.gallery-tile')
    if (!galleryTiles?.length) return undefined

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('is-visible', entry.isIntersecting)
      })
    }, { threshold: 0.18 })

    galleryTiles.forEach((tile) => observer.observe(tile))
    return () => observer.disconnect()
  }, [galleryImages.length])

  return (
    <main className="page-shell bg-[#faf6ee]">
      <section className="relative overflow-hidden bg-school-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">Galeri</p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Momen di {school.schoolName}</h1>
            <p className="mt-4 text-base leading-7 text-slate-300">
            </p>
          </div>
        </div>
      
        {/* Aksen dekoratif: sulur daun & sparkle, kesan buku cerita */}
        <svg className="pointer-events-none absolute right-6 top-6 hidden h-20 w-20 text-yellow-300/20 sm:block lg:right-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10C30 20 20 40 30 60C40 80 65 85 80 70C60 75 40 65 38 45C36 28 42 16 50 10Z" stroke="currentColor" strokeWidth="2.5" />
        </svg>
        <svg className="pointer-events-none absolute left-10 bottom-10 hidden h-8 w-8 text-yellow-300/25 md:block" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0l1.8 7.2L21 9l-7.2 1.8L12 18l-1.8-7.2L3 9l7.2-1.8L12 0z" />
        </svg>
        <svg className="absolute bottom-0 left-0 h-10 w-full text-[#faf6ee]" viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M0,32L60,28C120,24,240,16,360,18.7C480,21,600,35,720,40C840,45,960,40,1080,33.3C1200,27,1320,19,1380,16L1440,13V60H0Z" />
        </svg>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div ref={galleryRef} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="gallery-tile group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm"
            >
              <img alt={`Galeri sekolah ${index + 1}`} className="gallery-image h-64 w-full object-cover" src={image} />
              <div className="gallery-overlay absolute inset-0 bg-slate-950/20 opacity-0" />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Galeri
