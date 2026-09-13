import { useState } from 'react'
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

  return <main className="admin-content"><p className="eyebrow">Manajemen agenda</p><div className="admin-heading"><h1>Kegiatan</h1><span>{activities.length} kegiatan</span></div><form className="admin-form form-grid" onSubmit={submit}><input name="title" onChange={update} placeholder="Nama kegiatan" value={form.title} /><input name="date" onChange={update} placeholder="Waktu kegiatan" value={form.date} /><input name="location" onChange={update} placeholder="Lokasi" value={form.location} /><input name="description" onChange={update} placeholder="Deskripsi singkat" value={form.description} />{error && <p className="form-error" role="alert">{error}</p>}<div><button className="primary-button" disabled={saving} type="submit">{saving ? 'Menyimpan...' : form.id ? 'Simpan perubahan' : 'Tambah kegiatan'}</button>{form.id && <button className="cancel-button" onClick={() => { setForm(emptyActivity); setError('') }} type="button">Batal</button>}</div></form><div className="admin-table">{activities.map((activity) => <article className="admin-row" key={activity.id}><div><strong>{activity.title}</strong><p>{activity.date} · {activity.location}</p></div><div className="row-actions"><button onClick={() => { setForm(activity); setError('') }} type="button">Edit</button><button onClick={() => deleteActivity(activity.id)} type="button">Hapus</button></div></article>)}</div></main>
}

export default AdminKegiatan