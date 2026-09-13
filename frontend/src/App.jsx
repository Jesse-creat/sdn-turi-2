import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import SidebarAdmin from './components/SidebarAdmin.jsx'
import { SchoolProvider } from './context/SchoolContext.jsx'
import { schoolData } from './data/schoolData.js'
import Akademik from './pages/public/Akademik.jsx'
import Artikel from './pages/public/Artikel.jsx'
import ArtikelDetail from './pages/public/ArtikelDetail.jsx'
import Fasilitas from './pages/public/Fasilitas.jsx'
import Home from './pages/public/Home.jsx'
import Kegiatan from './pages/public/Kegiatan.jsx'
import Profil from './pages/public/Profil.jsx'
import AdminDashboard from './pages/admin/AdminDashboard.jsx'
import AdminArtikel from './pages/admin/AdminArtikel.jsx'
import AdminKegiatan from './pages/admin/AdminKegiatan.jsx'
import AdminLogin from './pages/admin/AdminLogin.jsx'
import { login as loginAdmin, logout as logoutAdmin } from './services/authService.js'

function PublicLayout() {
  return <><Navbar /><Routes><Route path="/" element={<Home school={schoolData} />} /><Route path="/profil" element={<Profil school={schoolData} />} /><Route path="/akademik" element={<Akademik school={schoolData} />} /><Route path="/fasilitas" element={<Fasilitas school={schoolData} />} /><Route path="/artikel" element={<Artikel />} /><Route path="/artikel/:articleId" element={<ArtikelDetail />} /><Route path="/kegiatan" element={<Kegiatan />} /></Routes><Footer school={schoolData} /></>
}

function AdminLayout({ onLogout }) {
  return <div className="admin-shell"><SidebarAdmin onLogout={onLogout} /><div className="admin-main"><Routes><Route index element={<AdminDashboard />} /><Route path="artikel" element={<AdminArtikel />} /><Route path="kegiatan" element={<AdminKegiatan />} /></Routes></div></div>
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
        // Fallback hanya untuk development tanpa PHP.
      } else {
        throw error
      }
    }
    sessionStorage.setItem('sdn-admin-auth', 'true')
    setIsAuthenticated(true)
  }
  const logout = async () => {
    try { await logoutAdmin() } catch { /* fallback local session */ }
    sessionStorage.removeItem('sdn-admin-auth')
    setIsAuthenticated(false)
  }
  return <div className={isAdmin ? 'app-shell admin-shell-wrapper' : 'app-shell'}>{isAdmin ? <Routes><Route path="/admin/login" element={<AdminLogin onLogin={login} />} /><Route path="/admin/*" element={isAuthenticated ? <AdminLayout onLogout={logout} /> : <Navigate replace state={{ from: location.pathname }} to="/admin/login" />} /></Routes> : <PublicLayout />}</div>
}

function App() {
  return <SchoolProvider><BrowserRouter><AppRoutes /></BrowserRouter></SchoolProvider>
}

export default App
