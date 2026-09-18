import { Save } from 'lucide-react'
import { useState } from 'react'
import AdminCollection from '../../components/AdminCollection.jsx'
import { useSchool } from '../../context/SchoolContext.jsx'

const teacherFields = [
  { key: 'nama', label: 'Nama', placeholder: 'Nama guru atau staf' },
  { key: 'jabatan', label: 'Jabatan', placeholder: 'Contoh: Guru Kelas 1' },
  { key: 'foto', label: 'URL foto', placeholder: 'https://...' , required: false },
]

function AdminProfil() {
  const { profile, teachers, saveProfile, saveTeacher, deleteTeacher } = useSchool()
  const [form, setForm] = useState(profile)
  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  const submit = (event) => { event.preventDefault(); saveProfile({ ...form, misi: (form.misiText ?? form.misi.join('\n')).split('\n').map((item) => item.trim()).filter(Boolean) }) }
  return (
    <main className="mx-auto max-w-7xl space-y-6 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
      <div><p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Manajemen sekolah</p><h1 className="text-3xl font-bold text-slate-900">Profil</h1><p className="mt-2 text-slate-600">Perbarui identitas, visi, misi, sejarah, dan tenaga pendidik.</p></div>
      <form className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7" onSubmit={submit}>
        <div className="grid gap-4 sm:grid-cols-2">
          {[['nama', 'Nama sekolah'], ['npsn', 'NPSN'], ['visi', 'Visi'], ['sejarah', 'Sejarah']].map(([key, label]) => <label className="block" key={key}><span className="mb-2 block text-sm font-semibold text-slate-700">{label}</span><textarea className="min-h-24 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" name={key} onChange={update} value={form[key] || ''} /></label>)}
          <label className="block sm:col-span-2"><span className="mb-2 block text-sm font-semibold text-slate-700">Misi</span><textarea className="min-h-32 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" name="misiText" onChange={update} value={form.misiText ?? form.misi.join('\n')} /></label>
        </div>
        <button className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#fbbf24] px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-yellow-300" type="submit"><Save className="h-4 w-4" />Simpan profil</button>
      </form>
      <AdminCollection title="guru atau staf" description="Kelola daftar tenaga pendidik yang tampil di halaman profil." items={teachers} fields={teacherFields} emptyItem={{ nama: '', jabatan: '', foto: '' }} onSave={saveTeacher} onDelete={deleteTeacher} />
    </main>
  )
}

export default AdminProfil
