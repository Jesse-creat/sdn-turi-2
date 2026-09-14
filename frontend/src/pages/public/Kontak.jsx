import { Clock3, Mail, MapPin, Phone } from 'lucide-react'

function Kontak({ school }) {
  const contacts = [
    { icon: MapPin, label: 'Alamat', value: school.contact?.address || school.address },
    { icon: Phone, label: 'Telepon', value: school.contact?.phone || school.phone },
    { icon: Mail, label: 'Email', value: school.contact?.email || school.email },
    { icon: Clock3, label: 'Jam Pelayanan', value: 'Senin - Jumat, 07.30 - 13.30 WIB' },
  ]

  return (
    <main className="page-shell bg-slate-50">
      <section className="relative overflow-hidden bg-school-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">Kontak</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Hubungi SDN Turi 2</h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="grid gap-5">
            {contacts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="soft-shadow flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{label}</p>
                  <p className="mt-1 text-base font-medium text-slate-800">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="soft-shadow rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="mb-6 text-3xl font-bold text-slate-900">Kirim pesan</h2>
            <form className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="name">Nama</label>
                <input id="name" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100" placeholder="Nama lengkap" type="text" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="email">Email</label>
                <input id="email" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100" placeholder="nama@email.com" type="email" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="message">Pesan</label>
                <textarea id="message" className="min-h-32 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100" placeholder="Tulis pesan Anda..." />
              </div>
              <button className="inline-flex items-center justify-center rounded-xl bg-school-yellow px-5 py-3 font-semibold text-slate-900 transition hover:bg-yellow-300" type="button">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Kontak
