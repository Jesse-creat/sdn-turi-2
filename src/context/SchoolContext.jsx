import { createContext, useContext, useEffect, useState } from 'react'

const SchoolContext = createContext(null)
const API = '/api'

const initialArticles = [
  { id: 1, title: 'Membaca Membuka Jendela Dunia', excerpt: 'Gerakan literasi sekolah hadir setiap pagi untuk menumbuhkan kebiasaan membaca.', date: '10 September 2026' },
  { id: 2, title: 'Semangat Belajar di Awal Tahun', excerpt: 'Siswa dan guru menyambut tahun ajaran baru dengan energi dan harapan.', date: '24 Juli 2026' },
]

const initialActivities = [
  { id: 1, title: 'Upacara Hari Senin', date: 'Setiap Senin', location: 'Lapangan sekolah', description: 'Kegiatan pembiasaan disiplin dan cinta tanah air.' },
  { id: 2, title: 'Latihan Pramuka', date: 'Jumat, 15.00', location: 'Halaman sekolah', description: 'Belajar mandiri, bekerja sama, dan peduli lingkungan.' },
]

function readStored(key, fallback) {
  try {
    const stored = window.localStorage.getItem(key)
    return stored ? JSON.parse(stored) : fallback
  } catch {
    return fallback
  }
}

async function request(path, options = {}) {
  const response = await fetch(`${API}/${path}`, { credentials: 'include', ...options })
  const data = await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(data.error || 'Permintaan ke server gagal.')
  return data
}

export function SchoolProvider({ children }) {
  const [articles, setArticles] = useState(() => readStored('sdn-articles', initialArticles))
  const [activities, setActivities] = useState(() => readStored('sdn-activities', initialActivities))
  const [apiMode, setApiMode] = useState(false)

  useEffect(() => {
    let mounted = true
    Promise.all([request('articles.php'), request('activities.php')]).then(([serverArticles, serverActivities]) => {
      if (!mounted) return
      setArticles(serverArticles)
      setActivities(serverActivities)
      setApiMode(true)
    }).catch(() => {
      // Development tanpa PHP memakai localStorage sebagai fallback.
    })
    return () => { mounted = false }
  }, [])

  const saveArticle = async (article) => {
    if (apiMode) {
      const saved = await request('articles.php', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(article) })
      setArticles((current) => article.id ? current.map((item) => item.id === article.id ? saved : item) : [saved, ...current])
      return saved
    }
    const next = article.id ? articles.map((item) => item.id === article.id ? article : item) : [...articles, { ...article, id: Date.now() }]
    window.localStorage.setItem('sdn-articles', JSON.stringify(next))
    setArticles(next)
    return article
  }

  const deleteArticle = async (id) => {
    if (apiMode) await request('articles.php', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
    const next = articles.filter((article) => article.id !== id)
    window.localStorage.setItem('sdn-articles', JSON.stringify(next))
    setArticles(next)
  }

  const saveActivity = async (activity) => {
    if (apiMode) {
      const saved = await request('activities.php', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(activity) })
      setActivities((current) => activity.id ? current.map((item) => item.id === activity.id ? saved : item) : [saved, ...current])
      return saved
    }
    const next = activity.id ? activities.map((item) => item.id === activity.id ? activity : item) : [...activities, { ...activity, id: Date.now() }]
    window.localStorage.setItem('sdn-activities', JSON.stringify(next))
    setActivities(next)
    return activity
  }

  const deleteActivity = async (id) => {
    if (apiMode) await request('activities.php', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
    const next = activities.filter((activity) => activity.id !== id)
    window.localStorage.setItem('sdn-activities', JSON.stringify(next))
    setActivities(next)
  }

  return <SchoolContext.Provider value={{ articles, activities, apiMode, saveArticle, deleteArticle, saveActivity, deleteActivity }}>{children}</SchoolContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSchool() {
  return useContext(SchoolContext)
}
