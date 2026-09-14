import { useRef, useState } from 'react'
import { FileImage, Pencil, Plus, Save, Trash2, X } from 'lucide-react'
import { useSchool } from '../../context/SchoolContext.jsx'

const emptyArticle = { title: '', excerpt: '', date: '', image: '' }

function AdminArtikel() {
  const { articles, saveArticle, deleteArticle } = useSchool()
  const [form, setForm] = useState(emptyArticle)
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)
  const fileInput = useRef(null)
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value })
  const handleImage = (event) => {
    const file = event.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/')) { setError('File harus berupa gambar.'); return }
    if (file.size > 2 * 1024 * 1024) { setError('Ukuran gambar maksimal 2 MB.'); return }
    const reader = new FileReader()
    reader.onload = () => { setForm((current) => ({ ...current, image: reader.result })); setError('') }
    reader.readAsDataURL(file)
  }
  const resetForm = () => { setForm(emptyArticle); setError(''); if (fileInput.current) fileInput.current.value = '' }
  const submit = async (event) => {
    event.preventDefault()
    if (!form.title.trim() || !form.excerpt.trim() || !form.date.trim()) { setError('Judul, tanggal, dan ringkasan wajib diisi.'); return }
    setSaving(true)
    try {
      await saveArticle({ ...form, title: form.title.trim(), excerpt: form.excerpt.trim(), date: form.date.trim() })
      resetForm()
    } catch (saveError) {
      setError(saveError.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div><p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Manajemen konten</p><h1 className="text-3xl font-bold text-slate-900">Artikel</h1></div>
        <span className="text-sm text-slate-500">{articles.length} artikel</span>
      </div>

      <form className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7" onSubmit={submit}>
        <div className="mb-6 flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><Plus className="h-5 w-5" /></div><div><h2 className="text-lg font-bold text-slate-900">{form.id ? 'Edit artikel' : 'Tambah artikel baru'}</h2><p className="text-sm text-slate-500">Publikasikan informasi terbaru sekolah.</p></div></div>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block sm:col-span-2"><span className="mb-2 block text-sm font-semibold text-slate-700">Judul artikel</span><input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100" name="title" onChange={update} placeholder="Masukkan judul artikel" value={form.title} /></label>
          <label className="block sm:col-span-2"><span className="mb-2 block text-sm font-semibold text-slate-700">Tanggal</span><input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100" name="date" onChange={update} placeholder="Contoh: 12 September 2026" value={form.date} /></label>
          <label className="block sm:col-span-2"><span className="mb-2 block text-sm font-semibold text-slate-700">Ringkasan artikel</span><textarea className="min-h-32 w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100" name="excerpt" onChange={update} placeholder="Tulis ringkasan singkat artikel" value={form.excerpt} /></label>
          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-4 text-sm text-slate-600 transition hover:border-blue-400 hover:bg-blue-50 sm:col-span-2" htmlFor="article-image"><FileImage className="h-5 w-5 text-blue-600" /><span><strong className="block text-slate-700">Gambar artikel</strong><span className="text-xs">PNG, JPG atau WEBP maksimal 2 MB</span></span><input accept="image/*" className="sr-only" id="article-image" onChange={handleImage} ref={fileInput} type="file" /></label>
        </div>
        {form.image && <img alt="Pratinjau artikel" className="mt-5 h-48 w-full rounded-xl object-cover" src={form.image} />}
        {error && <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">{error}</p>}
        <div className="mt-6 flex flex-wrap gap-3"><button className="inline-flex items-center gap-2 rounded-xl bg-[#fbbf24] px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60" disabled={saving} type="submit"><Save className="h-4 w-4" />{saving ? 'Menyimpan...' : form.id ? 'Simpan perubahan' : 'Tambah artikel'}</button>{form.id && <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50" onClick={resetForm} type="button"><X className="h-4 w-4" />Batal</button>}</div>
      </form>

      <div className="mt-6 space-y-3">{articles.map((article) => <article className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center" key={article.id}>{article.image ? <img alt="" className="h-20 w-full rounded-xl object-cover sm:w-28" src={article.image} /> : <div className="flex h-20 w-full items-center justify-center rounded-xl bg-slate-100 text-slate-400 sm:w-28"><FileImage className="h-6 w-6" /></div>}<div className="min-w-0 flex-1"><strong className="block truncate text-base text-slate-900">{article.title}</strong><p className="mt-1 line-clamp-2 text-sm text-slate-500">{article.date} · {article.excerpt}</p></div><div className="flex gap-2"><button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50" onClick={() => { setForm(article); setError('') }} type="button"><Pencil className="h-4 w-4" />Edit</button><button className="inline-flex items-center gap-2 rounded-lg border border-red-100 px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50" onClick={() => deleteArticle(article.id)} type="button"><Trash2 className="h-4 w-4" />Hapus</button></div></article>)}</div>
    </main>
  )
}

export default AdminArtikel