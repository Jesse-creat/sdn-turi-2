export const profilSekolah = {
  nama: 'SDN Turi 2',
  npsn: '20509429',
  visi: 'TERWUJUDNYA GENERASI YANG BERIMAN, BERKARAKTER, BERPRESTASI, DAN CINTA LINGKUNGAN',
  misi: [
    'Membiasakan ibadah dan pembentukan karakter',
    'Meningkatkan kualitas pembelajaran',
    'Mengembangkan bakat dan minat siswa',
    'Mengembangkan literasi dan numerasi',
    'Meningkatkan pemanfaatan teknologi',
    'Menjalin kemitraan dengan orang tua',
  ],
  sejarah: 'SDN Turi 2 berdiri sebagai wadah pendidikan yang konsisten dalam mencetak generasi muda yang unggul. Sejak awal berdirinya, sekolah ini berkomitmen menyelenggarakan pendidikan yang inspiratif, aman, dan bermutu dengan dukungan orang tua, guru, dan masyarakat.',
  sambutanKepalaSekolah: {
    nama: 'Drs. Budi Santoso, M.Pd',
    foto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80',
    teks: 'Selamat datang di SDN Turi 2. Kami percaya bahwa pendidikan yang baik adalah proses yang membangun karakter, menumbuhkan semangat belajar, dan menyiapkan siswa untuk masa depan yang lebih cerah.',
  },
}

export const guruAndStaf = [
  { id: 1, nama: 'Mutmainatun, S.Pd.', jabatan: 'Kepala Sekolah', foto: '/guru/Kepala_Sekolah_Sdn_2_turi.jpg' },
  { id: 2, nama: 'Indah Novitasari, S.Pd.', jabatan: 'Wali Kelas 1', foto: '/guru/Wali_Kelas_1.jpg' },
  { id: 3, nama: 'Aditiya Dwi Kusuma, S.Pd.', jabatan: 'Wali Kelas 2', foto: '/guru/Wali_kelas_2.jpg' },
  { id: 4, nama: 'Rianti, S.Pd.', jabatan: 'Wali Kelas 3', foto: '/guru/Wali_Kelas_3.jpg' },
  { id: 5, nama: 'Dias Frahmawati, S.Pd.', jabatan: 'Wali Kelas 4', foto: '/guru/Wali_Kelas_4.jpg' },
  { id: 6, nama: 'Sri Nuryani, S.Pd.', jabatan: 'Wali Kelas 5', foto: '/guru/Wali_Kelas_5.jpg' },
  { id: 7, nama: 'Eny Ruliana, S.Pd.SD.', jabatan: 'Wali Kelas 6', foto: '/guru/Wali_Kelas_6.jpg' },
  { id: 8, nama: 'Anis Fitriana, S.Pd.', jabatan: 'Guru PJOK', foto: '/guru/Guru_PJOK.jpg' },
  { id: 9, nama: 'Erna Agustini, S.Pd.I', jabatan: 'Guru PAI', foto: '/guru/Guru_PAI.jpg' },
  { id: 10, nama: 'Sugiwo I', jabatan: 'Penjaga dan Tukang Kebun', foto: '/guru/Penjaga_dan_tukang_kebun.jpg' },
]

export const ekstrakurikuler = [
  { id: 1, nama: 'Pramuka', deskripsi: 'Melatih kedisiplinan, kemandirian, dan kepedulian terhadap lingkungan.' },
  { id: 2, nama: 'Voli', deskripsi: 'Meningkatkan kebugaran, sportivitas, dan kerja sama tim.' },
  { id: 3, nama: 'Tari', deskripsi: 'Mengembangkan kreativitas, keluwesan, dan kecintaan terhadap budaya.' },
  { id: 4, nama: 'Hadroh', deskripsi: 'Menumbuhkan kecintaan terhadap seni musik Islami dan kebersamaan.' },
  { id: 5, nama: 'Drumband', deskripsi: 'Mengasah bakat seni musik, kedisiplinan, dan semangat kerja sama.' },
  { id: 6, nama: 'Tahfidz Juz amma', deskripsi: "Membiasakan siswa menghafal dan mencintai Al-Qur'an." },
  { id: 7, nama: 'BTQ', deskripsi: 'Meningkatkan kemampuan membaca dan menulis Al-Qur’an.' },
]

export const prestasi = [
  { id: 1, judul: 'Juara 1 Lomba Drumband Tingkat Kabupaten', tahun: '2025', tingkat: 'Kabupaten' },
  { id: 2, judul: 'Juara 2 Olimpiade Matematika Daerah', tahun: '2024', tingkat: 'Provinsi' },
  { id: 3, judul: 'Best Practice Literasi Sekolah', tahun: '2023', tingkat: 'Sekolah' },
]

export const fasilitas = [
  { id: 1, nama: 'Lapangan Olahraga', isUnggulan: true, deskripsi: 'Lapangan serbaguna untuk olahraga, upacara, dan kegiatan siswa.' },
  { id: 2, nama: 'Perpustakaan Digital', isUnggulan: true, deskripsi: 'Koleksi buku, referensi, dan media belajar digital untuk mendukung literasi.' },
  { id: 3, nama: 'Ruang Kelas Nyaman', isUnggulan: false, deskripsi: 'Lingkungan belajar yang terang, aman, dan kondusif untuk kegiatan pembelajaran.' },
  { id: 4, nama: 'UKS & Kantin Sehat', isUnggulan: false, deskripsi: 'Fasilitas kesehatan dan makanan sehat yang menjaga kesejahteraan siswa.' },
  { id: 6, nama: 'Ruang Guru', isUnggulan: false, deskripsi: 'Area kerja dan koordinasi guru yang rapi dan profesional.' },
]

export const schoolData = {
  schoolName: profilSekolah.nama,
  tagline: 'Membangun generasi cerdas, berkarakter, dan berprestasi.',
  npsn: profilSekolah.npsn,
  address: 'RT 03 RW 05 Desa Turi, Kec.Panekan, Kab. Magetan',
  phone: '+62 812-3456-7890',
  email: 'info@sdnturi2.sch.id',
  vision: profilSekolah.visi,
  mission: profilSekolah.misi,
  history: profilSekolah.sejarah,
  teachers: guruAndStaf.map((guru) => ({ name: guru.nama, role: guru.jabatan, initials: guru.nama.split(' ').map((word) => word[0]).slice(0, 2).join('') })),
  extracurriculars: ekstrakurikuler.map((item) => ({ title: item.nama, description: item.deskripsi })),
  achievements: prestasi.map((item) => ({ title: item.judul, year: item.tahun, detail: item.tingkat })),
  facilities: fasilitas.map((item) => ({ title: item.nama, description: item.deskripsi })),
  contact: {
    address: 'RT 03 RW 05 Desa Turi, Kec.Panekan, Kab. Magetan',
    phone: '+62 812-3456-7890',
    email: 'info@sdnturi2.sch.id',
  },
}
