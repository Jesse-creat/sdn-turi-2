export const profilSekolah = {
  nama: 'SD Negeri 1 Nusantara',
  npsn: '10203040',
  visi: 'Mewujudkan Generasi Cerdas, Berkarakter, dan Berprestasi.',
  misi: [
    'Menyelenggarakan pembelajaran berorientasi pada peserta didik.',
    'Mengembangkan potensi minat dan bakat melalui kegiatan kesiswaan.',
    'Menerapkan nilai-nilai budi pekerti dan disiplin tinggi.',
  ],
  sejarah: 'Berdiri sejak tahun 1985, sekolah ini terus berkomitmen mencetak alumni berkualitas...',
  sambutanKepalaSekolah: {
    nama: 'Drs. Budi Santoso, M.Pd',
    foto: '/assets/kepala-sekolah.jpg',
    teks: 'Selamat datang di website resmi sekolah kami. Kami berkomitmen memberikan pendidikan terbaik...',
  },
}

export const guruAndStaf = [
  { id: 1, nama: 'Drs. Budi Santoso, M.Pd', jabatan: 'Kepala Sekolah', foto: '/assets/guru1.jpg' },
  { id: 2, nama: 'Siti Rahma, S.Pd', jabatan: 'Guru Kelas 1', foto: '/assets/guru2.jpg' },
  { id: 3, nama: 'Ahmad Fauzi, S.Kom', jabatan: 'Staf Administrasi', foto: '/assets/staf1.jpg' },
]

export const ekstrakurikuler = [
  { id: 1, nama: 'Pramuka', deskripsi: 'Melatih kedisiplinan dan kemandirian.' },
  { id: 2, nama: 'Drumband', deskripsi: 'Mengasah bakat seni musik dan kerja sama tim.' },
  { id: 3, nama: 'Kesenian & Tari', deskripsi: 'Melestarikan seni budaya daerah.' },
  { id: 4, nama: 'Olahraga (Futsal & Voli)', deskripsi: 'Kesehatan fisik dan jiwa sportif.' },
]

export const prestasi = [
  { id: 1, judul: 'Juara 1 Lomba Drumband Tingkat Kabupaten', tahun: '2025', tingkat: 'Kabupaten' },
  { id: 2, judul: 'Juara 2 Olimpiade Matematika Daerah', tahun: '2024', tingkat: 'Provinsi' },
]

export const fasilitas = [
  { id: 1, nama: 'Laboratorium Komputer', isUnggulan: true, deskripsi: 'Dilengkapi 30 unit komputer modern dan AC.' },
  { id: 2, nama: 'Perpustakaan Digital', isUnggulan: true, deskripsi: 'Koleksi buku fisik dan e-book terlengkap.' },
  { id: 3, nama: 'Ruang Kelas AC', isUnggulan: false, deskripsi: 'Ruang belajar nyaman ber-AC.' },
  { id: 4, nama: 'UKS & Kantin Sehat', isUnggulan: false, deskripsi: 'Fasilitas kesehatan dan makanan terjamin higienis.' },
  { id: 5, nama: 'Lapangan Olahraga', isUnggulan: false, deskripsi: 'Lapangan serbaguna untuk futsal dan basket.' },
]

export const schoolData = {
  schoolName: profilSekolah.nama,
  tagline: 'Tumbuh, berprestasi, dan berkarakter.',
  npsn: profilSekolah.npsn,
  address: 'Alamat sekolah belum ditambahkan',
  phone: '',
  email: '',
  vision: profilSekolah.visi,
  mission: profilSekolah.misi,
  history: profilSekolah.sejarah,
  teachers: guruAndStaf.map((guru) => ({ name: guru.nama, role: guru.jabatan, initials: guru.nama.split(' ').map((word) => word[0]).slice(0, 2).join('') })),
  extracurriculars: ekstrakurikuler.map((item) => ({ title: item.nama, description: item.deskripsi })),
  achievements: prestasi.map((item) => ({ title: item.judul, year: item.tahun, detail: item.tingkat })),
  facilities: fasilitas.map((item) => ({ title: item.nama, description: item.deskripsi })),
}
