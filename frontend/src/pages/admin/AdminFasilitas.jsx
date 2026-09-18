import AdminCollection from '../../components/AdminCollection.jsx'
import { useSchool } from '../../context/SchoolContext.jsx'

const fields = [
  { key: 'nama', label: 'Nama fasilitas', placeholder: 'Contoh: Perpustakaan' },
  { key: 'deskripsi', label: 'Deskripsi', type: 'textarea', placeholder: 'Jelaskan fasilitas sekolah' },
  { key: 'isUnggulan', label: 'Status', type: 'checkbox', checkboxLabel: 'Tampilkan sebagai fasilitas unggulan', required: false },
]

function AdminFasilitas() {
  const { facilities, saveFacility, deleteFacility } = useSchool()
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
      <div><p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Manajemen fasilitas</p><h1 className="text-3xl font-bold text-slate-900">Fasilitas</h1><p className="mt-2 text-slate-600">Kelola fasilitas yang ditampilkan di situs sekolah.</p></div>
      <div className="mt-8"><AdminCollection title="fasilitas" description="Tambahkan atau perbarui fasilitas sekolah." items={facilities} fields={fields} emptyItem={{ nama: '', deskripsi: '', isUnggulan: false }} onSave={saveFacility} onDelete={deleteFacility} /></div>
    </main>
  )
}

export default AdminFasilitas
