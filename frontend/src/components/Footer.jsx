import { Mail, MapPin, Phone } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function YoutubeIcon({ className }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
    </svg>
  )
}

function InstagramIcon({ className }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function Footer({ school }) {
  const footerRef = useRef(null)

  useEffect(() => {
    const footer = footerRef.current
    if (!footer) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      footer.classList.toggle('is-visible', entry.isIntersecting)
    }, { threshold: 0.12 })

    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  const navLinks = [
    ['Beranda', '/'],
    ['Profil', '/profil'],
    ['Akademik', '/akademik'],
    ['Berita', '/artikel'],
  ]

  return (
    <footer ref={footerRef} className="site-footer border-t border-school-gold/40 bg-school-navy text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="footer-grid grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="footer-column lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <img
                src="/logo-sekolah.png"
                alt="Logo SDN Turi 2"
                className="h-11 w-11 rounded-xl border border-yellow-300/40 bg-white/10 object-contain p-1"
              />
              <div>
                <div className="text-xl font-bold text-white">{school.schoolName}</div>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-7 text-slate-300">
              Membangun lingkungan belajar yang inspiratif, aman, dan berkarakter untuk masa depan generasi Indonesia.
            </p>
          </div>

          <div className="footer-column">
            <h3 className="mb-4 text-lg font-semibold text-white">Menu</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              {navLinks.map(([label, path]) => (
                <li key={path}>
                  <Link className="transition hover:text-yellow-300" to={path}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="mb-4 text-lg font-semibold text-white">Tautan</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link className="transition hover:text-yellow-300" to="/fasilitas">Fasilitas</Link></li>
              <li><Link className="transition hover:text-yellow-300" to="/kegiatan">Kegiatan</Link></li>
              <li><Link className="transition hover:text-yellow-300" to="/kontak">Kontak</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="mb-4 text-lg font-semibold text-white">Kontak</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="footer-contact footer-contact-location flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 flex-none" /> <a className="transition hover:text-yellow-300" href="https://maps.app.goo.gl/MsQdgjUmP6xaULgi8" target="_blank" rel="noopener noreferrer">{school.address}</a></li>
              <li className="footer-contact footer-contact-phone flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4" /> <span>{school.phone}</span></li>
              <li className="footer-contact footer-contact-email flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4" /> <span>{school.email}</span></li>
              <li className="footer-contact footer-contact-youtube flex items-start gap-3"><YoutubeIcon className="mt-0.5 h-4 w-4" /> <a className="transition hover:text-yellow-300" href="https://www.youtube.com/results?search_query=SDN+Turi+2+Magetan" target="_blank" rel="noreferrer">SDN Turi 2 Magetan</a></li>
              <li className="footer-contact footer-contact-instagram flex items-start gap-3"><InstagramIcon className="mt-0.5 h-4 w-4" /> <a className="transition hover:text-yellow-300" href="https://www.instagram.com/sdnegerituri/" target="_blank" rel="noreferrer">sdnegerituri</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} {school.schoolName}. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  )
}

export default Footer