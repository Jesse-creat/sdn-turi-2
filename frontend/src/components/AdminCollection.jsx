import { Pencil, Plus, Save, Trash2, X } from 'lucide-react'
import { useState } from 'react'

function AdminCollection({ title, description, items, fields, emptyItem, onSave, onDelete }) {
  const [form, setForm] = useState(emptyItem)
  const [error, setError] = useState('')
  const update = (event) => {
    const { name, type, checked, value } = event.target
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
  }
  const reset = () => { setForm(emptyItem); setError('') }
  const submit = (event) => {
    event.preventDefault()
    if (fields.some((field) => field.required !== false && !String(form[field.key] ?? '').trim())) {
      setError('Semua kolom wajib diisi.')
      return
    }
    onSave(form)
    reset()
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      <div className="mb-6 flex items-start gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><Plus className="h-5 w-5" /></div><div><h2 className="text-lg font-bold text-slate-900">{form.id ? `Edit ${title.toLowerCase()}` : `Tambah ${title.toLowerCase()}`}</h2><p className="text-sm text-slate-500">{description}</p></div></div>
      <form onSubmit={submit}>
        <div className="grid gap-4 sm:grid-cols-2">
          {fields.map((field) => <label className={field.type === 'textarea' ? 'block sm:col-span-2' : 'block'} key={field.key}><span className="mb-2 block text-sm font-semibold text-slate-700">{field.label}</span>{field.type === 'textarea' ? <textarea className="min-h-28 w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" name={field.key} onChange={update} placeholder={field.placeholder} value={form[field.key] ?? ''} /> : field.type === 'checkbox' ? <span className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"><input checked={Boolean(form[field.key])} name={field.key} onChange={update} type="checkbox" /> {field.checkboxLabel}</span> : <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" name={field.key} onChange={update} placeholder={field.placeholder} value={form[field.key] ?? ''} type={field.type || 'text'} />}</label>)}
        </div>
        {error && <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">{error}</p>}
        <div className="mt-5 flex flex-wrap gap-3"><button className="inline-flex items-center gap-2 rounded-xl bg-[#fbbf24] px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-yellow-300" type="submit"><Save className="h-4 w-4" />{form.id ? 'Simpan perubahan' : 'Tambah'}</button>{form.id && <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50" onClick={reset} type="button"><X className="h-4 w-4" />Batal</button>}</div>
      </form>
      <div className="mt-6 space-y-3">{items.map((item) => <article className="flex flex-col gap-3 rounded-xl border border-slate-200 p-4 sm:flex-row sm:items-center" key={item.id}><div className="min-w-0 flex-1"><strong className="block text-slate-900">{item[fields[0].key]}</strong><p className="mt-1 line-clamp-2 text-sm text-slate-500">{fields.slice(1).map((field) => typeof item[field.key] === 'boolean' ? (item[field.key] ? field.checkboxLabel : '') : item[field.key]).filter(Boolean).join(' · ')}</p></div><div className="flex gap-2"><button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50" onClick={() => { setForm(item); setError('') }} type="button"><Pencil className="h-4 w-4" />Edit</button><button className="inline-flex items-center gap-2 rounded-lg border border-red-100 px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50" onClick={() => onDelete(item.id)} type="button"><Trash2 className="h-4 w-4" />Hapus</button></div></article>)}</div>
    </section>
  )
}

export default AdminCollection
