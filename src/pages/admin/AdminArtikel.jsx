import { useRef, useState } from 'react'
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

  return <main className="admin-content"><p className="eyebrow">Manajemen konten</p><div className="admin-heading"><h1>Artikel</h1><span>{articles.length} artikel</span></div><form className="admin-form" onSubmit={submit}><input name="title" onChange={update} placeholder="Judul artikel" value={form.title} /><input name="date" onChange={update} placeholder="Tanggal" value={form.date} /><textarea name="excerpt" onChange={update} placeholder="Ringkasan artikel" value={form.excerpt} /><label className="upload-field" htmlFor="article-image">Gambar artikel<input accept="image/*" id="article-image" onChange={handleImage} ref={fileInput} type="file" /></label>{form.image && <img alt="Pratinjau artikel" className="article-preview" src={form.image} />}{error && <p className="form-error" role="alert">{error}</p>}<div><button className="primary-button" disabled={saving} type="submit">{saving ? 'Menyimpan...' : form.id ? 'Simpan perubahan' : 'Tambah artikel'}</button>{form.id && <button className="cancel-button" onClick={resetForm} type="button">Batal</button>}</div></form><div className="admin-table">{articles.map((article) => <article className="admin-row" key={article.id}>{article.image && <img alt="" className="admin-thumb" src={article.image} />}<div><strong>{article.title}</strong><p>{article.date} · {article.excerpt}</p></div><div className="row-actions"><button onClick={() => { setForm(article); setError('') }} type="button">Edit</button><button onClick={() => deleteArticle(article.id)} type="button">Hapus</button></div></article>)}</div></main>
}

export default AdminArtikel