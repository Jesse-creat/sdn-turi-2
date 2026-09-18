import AdminCollection from '../../components/AdminCollection.jsx'
import { useSchool } from '../../context/SchoolContext.jsx'

const extracurricularFields = [
  { key: 'nama', label: 'Nama ekstrakurikuler', placeholder: 'Contoh: Pramuka' },
  { key: 'deskripsi', label: 'Deskripsi', type: 'textarea', placeholder: 'Deskripsi singkat kegiatan' },
]
const achievementFields = [
  { key: 'judul', label: 'Nama prestasi', placeholder: 'Contoh: Juara 1 Lomba' },
  { key: 'tahun', label: 'Tahun', placeholder: '2026' },
  { key: 'tingkat', label: 'Tingkat', placeholder: 'Kabupaten' },
]

function AdminAkademik() {
  const { extracurriculars, achievements, saveExtracurricular, deleteExtracurricular, saveAchievement, deleteAchievement } = useSchool()
  return (
    <main className="mx-auto max-w-7xl space-y-6 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
      <div><p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Manajemen akademik</p><h1 className="text-3xl font-bold text-slate-900">Akademik</h1><p className="mt-2 text-slate-600">Kelola ekstrakurikuler dan prestasi yang tampil di halaman akademik.</p></div>
      <AdminCollection title="ekstrakurikuler" description="Atur program pengembangan minat dan bakat siswa." items={extracurriculars} fields={extracurricularFields} emptyItem={{ nama: '', deskripsi: '' }} onSave={saveExtracurricular} onDelete={deleteExtracurricular} />
      <AdminCollection title="prestasi" description="Tambahkan capaian terbaru sekolah." items={achievements} fields={achievementFields} emptyItem={{ judul: '', tahun: '', tingkat: '' }} onSave={saveAchievement} onDelete={deleteAchievement} />
    </main>
  )
}

export default AdminAkademik
