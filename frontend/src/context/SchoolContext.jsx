import { createContext, useContext, useEffect, useState } from 'react'
import { getArticles, saveArticle as saveArticleApi, deleteArticle as deleteArticleApi } from '../services/artikelService.js'
import { getActivities, saveActivity as saveActivityApi, deleteActivity as deleteActivityApi } from '../services/kegiatanService.js'
import { ekstrakurikuler, fasilitas, guruAndStaf, prestasi, profilSekolah, schoolData } from '../data/schoolData.js'

const SchoolContext = createContext(null)
const initialArticles = [
  { id: 1, title: 'Membaca Membuka Jendela Dunia', excerpt: 'Gerakan literasi sekolah hadir setiap pagi untuk menumbuhkan kebiasaan membaca.', date: '18 September 2026', image: '/articles/kegiatan%20literasi.jpeg' },
  { id: 2, title: 'Semangat Belajar di Awal Tahun', excerpt: 'Siswa dan guru menyambut tahun ajaran baru dengan energi dan harapan.', date: '24 Juli 2026' },
]

const initialActivities = [
  { id: 1, title: 'Upacara Hari Senin', date: 'Setiap Senin', location: 'Lapangan sekolah', description: 'Kegiatan pembiasaan disiplin dan cinta tanah air.' },
  { id: 2, title: 'Latihan Pramuka', date: 'Jumat, 15.00', location: 'Halaman sekolah', description: 'Belajar mandiri, bekerja sama, dan peduli lingkungan.' },
]
const initialProfile = { ...profilSekolah }
const initialTeachers = guruAndStaf
const initialExtracurriculars = ekstrakurikuler
const initialAchievements = prestasi
const initialFacilities = fasilitas
const initialGallery = Array.from({ length: 10 }, (_, index) => `/galeri/kegiatan (${index + 1}).png`)
const initialContact = { ...schoolData.contact }

function readStored(key, fallback) {
  try {
    const stored = window.localStorage.getItem(key)
    const parsed = stored ? JSON.parse(stored) : fallback
    return normalizeList(parsed, fallback)
  } catch {
    return fallback
  }
}

function readStoredValue(key, fallback) {
  try {
    const stored = window.localStorage.getItem(key)
    const parsed = stored ? JSON.parse(stored) : fallback
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : fallback
  } catch {
    return fallback
  }
}

function normalizeList(value, fallback) {
  if (Array.isArray(value)) return value
  if (value && Array.isArray(value.data)) return value.data
  if (value && Array.isArray(value.items)) return value.items
  return fallback
}

function readTeachers() {
  const teachers = readStored('sdn-teachers', initialTeachers)
  const legacyNames = new Set(['Drs. Budi Santoso, M.Pd', 'Siti Rahma, S.Pd', 'Ahmad Fauzi, S.Kom'])
  return teachers.some((teacher) => legacyNames.has(teacher.nama)) ? initialTeachers : teachers
}

function readArticles() {
  const articles = readStored('sdn-articles', initialArticles)
  return articles.map((article) => article.id === 1 ? { ...article, date: '18 September 2026', image: article.image || initialArticles[0].image } : article)
}

function readFacilities() {
  const facilities = readStored('sdn-facilities', initialFacilities)
  const withoutComputerLab = facilities.filter((facility) => facility.nama !== 'Laboratorium Komputer')
  const hasSportsField = withoutComputerLab.some((facility) => facility.nama === 'Lapangan Olahraga')

  if (hasSportsField) {
    return withoutComputerLab.map((facility) => facility.nama === 'Lapangan Olahraga' ? { ...facility, id: 1, isUnggulan: true } : facility)
  }

  return [{ ...initialFacilities[0] }, ...withoutComputerLab]
}

export function SchoolProvider({ children }) {
  const [articles, setArticles] = useState(readArticles)
  const [activities, setActivities] = useState(() => readStored('sdn-activities', initialActivities))
  const [profile, setProfile] = useState(() => readStoredValue('sdn-profile', initialProfile))
  const [teachers, setTeachers] = useState(readTeachers)
  const [extracurriculars, setExtracurriculars] = useState(() => readStored('sdn-extracurriculars', initialExtracurriculars))
  const [achievements, setAchievements] = useState(() => readStored('sdn-achievements', initialAchievements))
  const [facilities, setFacilities] = useState(readFacilities)
  const [gallery, setGallery] = useState(() => readStored('sdn-gallery', initialGallery))
  const [contact, setContact] = useState(() => readStoredValue('sdn-contact', initialContact))
  const [apiMode, setApiMode] = useState(false)

  useEffect(() => {
    let mounted = true
    Promise.all([getArticles(), getActivities()]).then(([serverArticles, serverActivities]) => {
      if (!mounted) return
      setArticles(normalizeList(serverArticles, initialArticles))
      setActivities(normalizeList(serverActivities, initialActivities))
      setApiMode(true)
    }).catch(() => {
      // Development tanpa PHP memakai localStorage sebagai fallback.
    })
    return () => { mounted = false }
  }, [])

  const saveArticle = async (article) => {
    if (apiMode) {
      const saved = await saveArticleApi(article)
      setArticles((current) => article.id ? current.map((item) => item.id === article.id ? saved : item) : [saved, ...current])
      return saved
    }
    const next = article.id ? articles.map((item) => item.id === article.id ? article : item) : [...articles, { ...article, id: Date.now() }]
    window.localStorage.setItem('sdn-articles', JSON.stringify(next))
    setArticles(next)
    return article
  }

  const deleteArticle = async (id) => {
    if (apiMode) await deleteArticleApi(id)
    const next = articles.filter((article) => article.id !== id)
    window.localStorage.setItem('sdn-articles', JSON.stringify(next))
    setArticles(next)
  }

  const saveActivity = async (activity) => {
    if (apiMode) {
      const saved = await saveActivityApi(activity)
      setActivities((current) => activity.id ? current.map((item) => item.id === activity.id ? saved : item) : [saved, ...current])
      return saved
    }
    const next = activity.id ? activities.map((item) => item.id === activity.id ? activity : item) : [...activities, { ...activity, id: Date.now() }]
    window.localStorage.setItem('sdn-activities', JSON.stringify(next))
    setActivities(next)
    return activity
  }

  const deleteActivity = async (id) => {
    if (apiMode) await deleteActivityApi(id)
    const next = activities.filter((activity) => activity.id !== id)
    window.localStorage.setItem('sdn-activities', JSON.stringify(next))
    setActivities(next)
  }

  const saveListItem = (key, items, setItems, item) => {
    const next = item.id ? items.map((current) => current.id === item.id ? item : current) : [...items, { ...item, id: Date.now() }]
    window.localStorage.setItem(key, JSON.stringify(next))
    setItems(next)
    return item
  }

  const deleteListItem = (key, items, setItems, id) => {
    const next = items.filter((item) => item.id !== id)
    window.localStorage.setItem(key, JSON.stringify(next))
    setItems(next)
  }

  const saveProfile = (nextProfile) => {
    window.localStorage.setItem('sdn-profile', JSON.stringify(nextProfile))
    setProfile(nextProfile)
  }
  const saveContact = (nextContact) => {
    window.localStorage.setItem('sdn-contact', JSON.stringify(nextContact))
    setContact(nextContact)
  }
  const saveGallery = (nextGallery) => {
    window.localStorage.setItem('sdn-gallery', JSON.stringify(nextGallery))
    setGallery(nextGallery)
  }

  return <SchoolContext.Provider value={{
    articles, activities, profile, teachers, extracurriculars, achievements, facilities, gallery, contact, apiMode,
    saveArticle, deleteArticle, saveActivity, deleteActivity,
    saveProfile, saveContact, saveGallery,
    saveTeacher: (item) => saveListItem('sdn-teachers', teachers, setTeachers, item),
    deleteTeacher: (id) => deleteListItem('sdn-teachers', teachers, setTeachers, id),
    saveExtracurricular: (item) => saveListItem('sdn-extracurriculars', extracurriculars, setExtracurriculars, item),
    deleteExtracurricular: (id) => deleteListItem('sdn-extracurriculars', extracurriculars, setExtracurriculars, id),
    saveAchievement: (item) => saveListItem('sdn-achievements', achievements, setAchievements, item),
    deleteAchievement: (id) => deleteListItem('sdn-achievements', achievements, setAchievements, id),
    saveFacility: (item) => saveListItem('sdn-facilities', facilities, setFacilities, item),
    deleteFacility: (id) => deleteListItem('sdn-facilities', facilities, setFacilities, id),
  }}>{children}</SchoolContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSchool() {
  return useContext(SchoolContext)
}
