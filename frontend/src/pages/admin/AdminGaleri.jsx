import { Pencil, Plus, Save, Trash2, X } from 'lucide-react'
import { useState } from 'react'
import { useSchool } from '../../context/SchoolContext.jsx'

function AdminGaleri() {
  const { gallery, saveGallery } = useSchool()
  const [url, setUrl] = useState('')
  const [editing, setEditing] = useState(-1)
  const submit = (event) => {
    event.preventDefault()
    if (!url.trim()) return
    const next = [...gallery]
    if (editing >= 0) next[editing] = url.trim()
    else next.push(url.trim())
    saveGallery(next)
    setUrl(''); setEditing(-1)
  }
  const remove = (index) => saveGallery(gallery.filter((_, itemIndex) => itemIndex !== index))
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
      <div><p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Manajemen media</p><h1 className="text-3xl font-bold text-slate-900">Galeri</h1><p className="mt-2 text-slate-600">Kelola URL gambar yang tampil di galeri sekolah.</p></div>
      <form className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7" onSubmit={submit}><div className="flex flex-col gap-3 sm:flex-row"><input className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" onChange={(event) => setUrl(event.target.value)} placeholder="URL gambar atau path /galeri/..." value={url} /><button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#fbbf24] px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-yellow-300" type="submit">{editing >= 0 ? <Save className="h-4 w-4" /> : <Plus className="h-4 w-4" />}{editing >= 0 ? 'Simpan perubahan' : 'Tambah gambar'}</button>{editing >= 0 && <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600" onClick={() => { setUrl(''); setEditing(-1) }} type="button"><X className="h-4 w-4" />Batal</button>}</div></form>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{gallery.map((image, index) => <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm" key={`${image}-${index}`}><img alt={`Galeri ${index + 1}`} className="h-44 w-full object-cover" src={image} /><div className="flex items-center justify-between gap-2 p-3"><span className="truncate text-sm text-slate-600">{image}</span><div className="flex shrink-0 gap-2"><button className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:bg-slate-50" onClick={() => { setUrl(image); setEditing(index) }} title="Edit gambar" type="button"><Pencil className="h-4 w-4" /></button><button className="rounded-lg border border-red-100 p-2 text-red-600 hover:bg-red-50" onClick={() => remove(index)} title="Hapus gambar" type="button"><Trash2 className="h-4 w-4" /></button></div></div></article>)}</div>
    </main>
  )
}

export default AdminGaleri
