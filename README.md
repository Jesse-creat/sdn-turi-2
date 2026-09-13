# SDN Turi 2

Website SDN Turi 2 menggunakan React + Vite sebagai frontend, PHP sebagai REST API, dan MySQL/MariaDB sebagai database. React tidak terhubung langsung ke database.

## Struktur Development

```text
sdn-turi-2/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── data/
│   │   ├── pages/public/
│   │   ├── pages/admin/
│   │   └── services/
│   ├── index.html
│   └── vite.config.js
├── backend/
│   ├── api/
│   ├── config/database.php
│   ├── uploads/articles/
│   └── .htaccess
├── database/schema.sql
├── package.json
└── README.md
```

`package.json` tetap berada di root agar `npm install`, `npm run dev`, `npm run lint`, dan `npm run build` dijalankan dari root. Vite membaca source dari `frontend/` dan menulis hasil produksi ke `dist/`.

## Perubahan Struktur

- `src/` dipindahkan menjadi `frontend/src/`.
- Halaman publik dipusatkan di `frontend/src/pages/public/`; halaman admin tetap di `frontend/src/pages/admin/`.
- `KegiatanList.jsx` menjadi `Kegiatan.jsx`; `Artikel.jsx` menjadi halaman daftar artikel dan `ArtikelDetail.jsx` tetap menjadi halaman detail.
- PHP dipindahkan dari `public/api` ke `backend/api`.
- `config.php` menjadi `backend/config/database.php`.
- `schema.sql` menjadi `database/schema.sql`.
- Request frontend dipisahkan ke `frontend/src/services/` (`api.js`, `artikelService.js`, `kegiatanService.js`, dan `authService.js`).
- `dist/` hanya dibuat oleh proses build dan tidak menjadi source backend.

## Menjalankan Development

```bash
npm install
npm run dev
```

Jika PHP belum tersedia, frontend memakai `localStorage` sebagai fallback. Saat API aktif, data artikel dan kegiatan diambil dari MySQL melalui PHP.

## API PHP

```text
GET/POST/DELETE /api/articles.php
GET/POST/DELETE /api/activities.php
GET/POST/DELETE /api/auth.php
```

`articles.php` juga menangani upload gambar ke `uploads/articles/`. Endpoint memuat konfigurasi dari `backend/config/database.php`.

## Database

1. Buat database dan user melalui **cPanel > MySQL Databases**.
2. Beri user hak akses pada database.
3. Import `database/schema.sql` melalui phpMyAdmin.
4. Sesuaikan `DB_NAME`, `DB_USER`, `DB_PASS`, dan password admin di `backend/config/database.php`.

Schema dipertahankan sesuai tabel yang saat ini digunakan: `articles` dan `activities`.

## Build dan Deployment cPanel

```bash
npm run lint
npm run build
```

Upload isi `dist/` ke `public_html/`, lalu salin backend sehingga targetnya menjadi:

```text
public_html/
├── index.html
├── assets/
├── .htaccess
├── api/
│   ├── articles.php
│   ├── activities.php
│   └── auth.php
├── config/
│   └── database.php
└── uploads/articles/
```

Salin `backend/api/` ke `public_html/api/`, `backend/config/` ke `public_html/config/`, dan `backend/uploads/` ke `public_html/uploads/`. Pastikan `.htaccess` frontend berada langsung di `public_html/`, folder upload dapat ditulis server, serta `.htaccess` konfigurasi ikut disalin agar file database tidak dapat diakses langsung.

Source `frontend/`, `backend/`, dan `database/` tidak perlu diunggah sebagai satu folder development. Login demo: `admin` / `admin123`; ganti password sebelum publikasi.
