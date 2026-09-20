import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import SidebarAdmin from './components/SidebarAdmin.jsx'
import { SchoolProvider, useSchool } from './context/SchoolContext.jsx'
import { schoolData } from './data/schoolData.js'
import Akademik from './pages/public/Akademik.jsx'
import Artikel from './pages/public/Artikel.jsx'
import ArtikelDetail from './pages/public/ArtikelDetail.jsx'
import Fasilitas from './pages/public/Fasilitas.jsx'
import Galeri from './pages/public/Galeri.jsx'
import Home from './pages/public/Home.jsx'
import Kegiatan from './pages/public/Kegiatan.jsx'
import Kontak from './pages/public/Kontak.jsx'
import Profil from './pages/public/Profil.jsx'
import AdminDashboard from './pages/admin/AdminDashboard.jsx'
import AdminArtikel from './pages/admin/AdminArtikel.jsx'
import AdminAkademik from './pages/admin/AdminAkademik.jsx'
import AdminFasilitas from './pages/admin/AdminFasilitas.jsx'
import AdminGaleri from './pages/admin/AdminGaleri.jsx'
import AdminKegiatan from './pages/admin/AdminKegiatan.jsx'
import AdminKontak from './pages/admin/AdminKontak.jsx'
import AdminLogin from './pages/admin/AdminLogin.jsx'
import AdminProfil from './pages/admin/AdminProfil.jsx'
import { login as loginAdmin, logout as logoutAdmin } from './services/authService.js'

function PublicLayout() {
  const location = useLocation()
  const { profile, extracurriculars, achievements, facilities, gallery, contact } = useSchool()
  const school = {
    ...schoolData,
    schoolName: profile.nama,
    npsn: profile.npsn,
    vision: profile.visi,
    mission: profile.misi,
    history: profile.sejarah,
    address: contact.address,
    phone: contact.phone,
    email: contact.email,
    contact,
    extracurriculars,
    achievements,
    facilities,
    gallery,
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
    const sections = document.querySelectorAll('main > section')
    sections.forEach((section) => {
      section.classList.add('page-scroll-reveal')
    })

    let frameId
    const updateVisibility = () => {
      frameId = undefined
      sections.forEach((section) => {
        const bounds = section.getBoundingClientRect()
        const isNearViewport = bounds.top < window.innerHeight * 0.88 && bounds.bottom > window.innerHeight * 0.08
        section.classList.toggle('is-visible', isNearViewport)
      })
    }
    const requestVisibilityUpdate = () => {
      if (frameId === undefined) frameId = window.requestAnimationFrame(updateVisibility)
    }

    updateVisibility()
    window.addEventListener('scroll', requestVisibilityUpdate, { passive: true })
    window.addEventListener('resize', requestVisibilityUpdate)

    return () => {
      window.removeEventListener('scroll', requestVisibilityUpdate)
      window.removeEventListener('resize', requestVisibilityUpdate)
      if (frameId !== undefined) window.cancelAnimationFrame(frameId)
    }
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-[#faf6ee] text-slate-800">
      <Navbar />
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, x: 36, scale: 0.99 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -24, scale: 0.995 }}
          transition={{ duration: 0.82, ease: [0.16, 1, 0.3, 1] }}
        >
          <Routes>
            <Route path="/" element={<Home school={schoolData} />} />
            <Route path="/profil" element={<Profil school={school} />} />
            <Route path="/akademik" element={<Akademik school={school} />} />
            <Route path="/fasilitas" element={<Fasilitas school={school} />} />
            <Route path="/artikel" element={<Artikel />} />
            <Route path="/artikel/:articleId" element={<ArtikelDetail />} />
            <Route path="/kegiatan" element={<Kegiatan />} />
            <Route path="/galeri" element={<Galeri school={school} />} />
            <Route path="/kontak" element={<Kontak school={school} />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer school={school} />
    </div>
  )
}

function AdminLayout({ onLogout }) {
  const location = useLocation()

  useEffect(() => {
    const targets = document.querySelectorAll('main, section, article, form, .rounded-2xl, .rounded-xl')

    targets.forEach((element) => {
      if (element.closest('.admin-topbar')) return
      element.classList.add('admin-scroll-reveal')
    })

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('is-visible', entry.isIntersecting)
      })
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    })

    targets.forEach((element) => {
      if (element.closest('.admin-topbar')) return
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-slate-100 lg:flex">
      <SidebarAdmin onLogout={onLogout} />
      <div className="relative min-w-0 flex-1">
        <div className="admin-topbar flex items-center justify-end border-b border-slate-200 bg-white/80 px-4 py-3 backdrop-blur-sm sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">
            <img
              alt="Logo SDN Turi 2"
              className="h-12 w-12 rounded-full border border-slate-200 bg-white object-contain p-1"
              src="/logo-sekolah.png"
            />
            <div className="text-right leading-tight">
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Admin</div>
              <div className="text-sm font-semibold text-slate-800">SDN Turi 2</div>
            </div>
          </div>
        </div>

        <Routes>
          <Route index element={<AdminDashboard />} />
          <Route path="profil" element={<AdminProfil />} />
          <Route path="akademik" element={<AdminAkademik />} />
          <Route path="fasilitas" element={<AdminFasilitas />} />
          <Route path="artikel" element={<AdminArtikel />} />
          <Route path="galeri" element={<AdminGaleri />} />
          <Route path="kegiatan" element={<AdminKegiatan />} />
          <Route path="kontak" element={<AdminKontak />} />
        </Routes>
      </div>
    </div>
  )
}

function AppRoutes() {
  const location = useLocation()
  const [isAuthenticated, setIsAuthenticated] = useState(() => sessionStorage.getItem('sdn-admin-auth') === 'true')
  const isAdmin = location.pathname.startsWith('/admin')

  const login = async (credentials) => {
    try {
      await loginAdmin(credentials)
    } catch (error) {
      if (error instanceof TypeError && credentials.username === 'admin' && credentials.password === 'admin123') {
        // Fallback untuk mode development ketika PHP API belum aktif.
      } else {
        throw error
      }
    }
    sessionStorage.setItem('sdn-admin-auth', 'true')
    setIsAuthenticated(true)
  }

  const logout = async () => {
    try {
      await logoutAdmin()
    } catch {
      // fallback local session
    }
    sessionStorage.removeItem('sdn-admin-auth')
    setIsAuthenticated(false)
  }

  return (
    <div className={isAdmin ? 'app-shell admin-shell-wrapper' : 'app-shell'}>
      {isAdmin ? (
        <Routes>
          <Route path="/admin/login" element={<AdminLogin onLogin={login} />} />
          <Route path="/admin/*" element={isAuthenticated ? <AdminLayout onLogout={logout} /> : <Navigate replace state={{ from: location.pathname }} to="/admin/login" />} />
        </Routes>
      ) : (
        <PublicLayout />
      )}
    </div>
  )
}

function App() {
  return (
    <SchoolProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </SchoolProvider>
  )
}

export default App