import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function AdminLogin({ onLogin }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await onLogin({ username, password })
      navigate(location.state?.from || '/admin', { replace: true })
    } catch (loginError) {
      setError(loginError.message || 'Username atau password tidak sesuai.')
    }
  }

  return <main className="admin-login-page"><section className="login-panel"><div className="brand-mark login-mark">SD</div><p className="eyebrow">Area terbatas</p><h1>Masuk ke panel admin.</h1><p className="login-copy">Kelola artikel dan kegiatan sekolah dari satu tempat.</p><form className="login-form" onSubmit={handleSubmit}><label htmlFor="admin-username">Username<input autoComplete="username" id="admin-username" onChange={(event) => setUsername(event.target.value)} placeholder="Masukkan username" required value={username} /></label><label htmlFor="admin-password">Password<input autoComplete="current-password" id="admin-password" onChange={(event) => setPassword(event.target.value)} placeholder="Masukkan password" required type="password" value={password} /></label>{error && <p className="login-error" role="alert">{error}</p>}<button className="primary-button login-button" type="submit">Masuk ke dashboard <span aria-hidden="true">→</span></button></form><p className="login-hint">Demo awal: <strong>admin</strong> / <strong>admin123</strong>. Ganti password di `backend/config/database.php` sebelum publikasi.</p><button className="text-button" onClick={() => navigate('/')} type="button">← Kembali ke situs</button></section><aside className="login-aside"><span className="aside-number">01</span><h2>Informasi sekolah, dikelola dengan rapi.</h2><p>Panel ini hanya dapat diakses oleh pengelola sekolah.</p></aside></main>
}

export default AdminLogin