import { ArrowLeft, ArrowRight, LockKeyhole, ShieldCheck, UserRound } from 'lucide-react'
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

  return (
    <main className="min-h-screen bg-slate-100 text-slate-800">
      <div className="bg-[#0f2747] px-4 py-4 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 font-display text-xl font-bold text-yellow-300">
            SD
          </div>
          <div className="text-sm font-medium uppercase tracking-[0.22em] text-slate-200">Admin Panel</div>
        </div>
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,39,71,0.10)] lg:grid-cols-[1.1fr_0.9fr]">
          <section className="flex flex-col justify-center bg-white p-6 sm:p-8 lg:p-12">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0f2747] font-display text-2xl font-bold text-yellow-300">
                SD
              </div>
              <div>
                <div className="text-xl font-bold text-slate-900">SDN Turi 2</div>
                <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Area terbatas</div>
              </div>
            </div>

            <div className="mb-6">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Masuk ke panel admin</h1>
              <p className="mt-3 max-w-md text-base leading-7 text-slate-600">
                Kelola artikel dan kegiatan sekolah dari satu tempat.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <label className="block" htmlFor="admin-username">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Username</span>
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100">
                  <UserRound className="h-4 w-4 text-slate-400" />
                  <input
                    autoComplete="username"
                    id="admin-username"
                    className="w-full border-0 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder="Masukkan username"
                    required
                    value={username}
                  />
                </div>
              </label>

              <label className="block" htmlFor="admin-password">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Password</span>
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100">
                  <LockKeyhole className="h-4 w-4 text-slate-400" />
                  <input
                    autoComplete="current-password"
                    id="admin-password"
                    className="w-full border-0 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Masukkan password"
                    required
                    type="password"
                    value={password}
                  />
                </div>
              </label>

              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                  {error}
                </div>
              )}

              <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#fbbf24] px-5 py-3.5 text-base font-semibold text-slate-900 transition hover:bg-yellow-300" type="submit">
                Masuk ke dashboard
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <button
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-slate-900"
              onClick={() => navigate('/')}
              type="button"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali ke situs
            </button>
          </section>

          <aside className="flex flex-col justify-between bg-[#0f2747] p-6 text-white sm:p-8 lg:p-12">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-yellow-300">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">01</span>
            </div>

            <div>
              <h2 className="max-w-sm text-3xl font-bold leading-tight text-white sm:text-4xl">
                Informasi sekolah, dikelola dengan rapi.
              </h2>
              <p className="mt-4 max-w-sm text-base leading-8 text-slate-300">
                Panel ini hanya dapat diakses oleh pengelola sekolah.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}

export default AdminLogin