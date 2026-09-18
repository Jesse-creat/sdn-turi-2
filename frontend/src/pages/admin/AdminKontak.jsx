import { Save } from 'lucide-react'
import { useState } from 'react'
import { useSchool } from '../../context/SchoolContext.jsx'

function AdminKontak() {
  const { contact, saveContact } = useSchool()
  const [form, setForm] = useState(contact)
  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
      <div><p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Manajemen informasi</p><h1 className="text-3xl font-bold text-slate-900">Kontak</h1><p className="mt-2 text-slate-600">Perbarui informasi kontak yang tampil di halaman dan footer.</p></div>
      <form className="mt-8 max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7" onSubmit={(event) => { event.preventDefault(); saveContact(form) }}>
        <div className="space-y-4">{[['address', 'Alamat'], ['phone', 'Nomor telepon'], ['email', 'Email']].map(([key, label]) => <label className="block" key={key}><span className="mb-2 block text-sm font-semibold text-slate-700">{label}</span><input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" name={key} onChange={update} value={form[key] || ''} /></label>)}</div>
        <button className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#fbbf24] px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-yellow-300" type="submit"><Save className="h-4 w-4" />Simpan kontak</button>
      </form>
    </main>
  )
}

export default AdminKontak
