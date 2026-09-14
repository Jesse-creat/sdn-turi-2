import { useState } from 'react'
import { CalendarDays, MapPin, Pencil, Plus, Save, Trash2, X } from 'lucide-react'
import { useSchool } from '../../context/SchoolContext.jsx'

const emptyActivity = { title: '', date: '', location: '', description: '' }

function AdminKegiatan() {
  const { activities, saveActivity, deleteActivity } = useSchool()
  const [form, setForm] = useState(emptyActivity)
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value })
  const submit = async (event) => {
    event.preventDefault()
    if (!form.title.trim() || !form.date.trim() || !form.location.trim() || !form.description.trim()) { setError('Semua kolom kegiatan wajib diisi.'); return }
    setSaving(true)
    try {
      await saveActivity({ ...form, title: form.title.trim(), date: form.date.trim(), location: form.location.trim(), description: form.description.trim() })
      setForm(emptyActivity)
      setError('')
    } catch (saveError) {
      setError(saveError.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Manajemen agenda</p><h1 className="text-3xl font-bold text-slate-900">Kegiatan</h1></div><span className="text-sm text-slate-500">{activities.length} kegiatan</span></div>
      <form className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7" onSubmit={submit}>
        <div className="mb-6 flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600"><Plus className="h-5 w-5" /></div><div><h2 className="text-lg font-bold text-slate-900">{form.id ? 'Edit kegiatan' : 'Tambah kegiatan baru'}</h2><p className="text-sm text-slate-500">Atur agenda dan aktivitas sekolah.</p></div></div>
        <div className="grid gap-5 sm:grid-cols-2"><label className="block"><span className="mb-2 block text-sm font-semibold text-slate-700">Nama kegiatan</span><input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100" name="title" onChange={update} placeholder="Masukkan nama kegiatan" value={form.title} /></label><label className="block"><span className="mb-2 block text-sm font-semibold text-slate-700">Waktu kegiatan</span><input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100" name="date" onChange={update} placeholder="Contoh: 20 September 2026" value={form.date} /></label><label className="block"><span className="mb-2 block text-sm font-semibold text-slate-700">Lokasi</span><input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100" name="location" onChange={update} placeholder="Lokasi kegiatan" value={form.location} /></label><label className="block"><span className="mb-2 block text-sm font-semibold text-slate-700">Deskripsi singkat</span><input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100" name="description" onChange={update} placeholder="Deskripsi kegiatan" value={form.description} /></label></div>
        {error && <p className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">{error}</p>}
        <div className="mt-6 flex flex-wrap gap-3"><button className="inline-flex items-center gap-2 rounded-xl bg-[#fbbf24] px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60" disabled={saving} type="submit"><Save className="h-4 w-4" />{saving ? 'Menyimpan...' : form.id ? 'Simpan perubahan' : 'Tambah kegiatan'}</button>{form.id && <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50" onClick={() => { setForm(emptyActivity); setError('') }} type="button"><X className="h-4 w-4" />Batal</button>}</div>
      </form>
      <div className="mt-6 space-y-3">{activities.map((activity) => <article className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center" key={activity.id}><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600"><CalendarDays className="h-5 w-5" /></div><div className="min-w-0 flex-1"><strong className="block text-base text-slate-900">{activity.title}</strong><div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500"><span>{activity.date}</span><span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{activity.location}</span></div><p className="mt-1 text-sm text-slate-500">{activity.description}</p></div><div className="flex gap-2"><button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50" onClick={() => { setForm(activity); setError('') }} type="button"><Pencil className="h-4 w-4" />Edit</button><button className="inline-flex items-center gap-2 rounded-lg border border-red-100 px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50" onClick={() => deleteActivity(activity.id)} type="button"><Trash2 className="h-4 w-4" />Hapus</button></div></article>)}</div>
    </main>
  )
}

export default AdminKegiatan