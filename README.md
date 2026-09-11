# SD Negeri 1 Nusantara

Website sekolah berbasis React dan Vite, siap dipublikasikan sebagai static site di cPanel.

## Menjalankan di komputer

```bash
npm install
npm run dev
```

## Build untuk cPanel

Jalankan perintah berikut dari folder proyek:

```bash
npm install
npm run lint
npm run build
```

Setelah selesai, folder `dist` akan dibuat. Upload **isi folder `dist`**, bukan folder `dist`-nya, ke folder hosting:

```text
public_html/
├── .htaccess
├── index.html
└── assets/
```

### Upload melalui cPanel

1. Buka **cPanel > File Manager**.
2. Masuk ke folder `public_html` atau document root domain.
3. Hapus file website lama jika memang sudah tidak digunakan.
4. Upload isi folder `dist` dalam bentuk ZIP.
5. Extract ZIP di `public_html`.
6. Pastikan `.htaccess` berada langsung di dalam `public_html`.
7. Buka domain dan uji `/`, `/profil`, serta `/admin`.

`.htaccess` diperlukan supaya route React Router tetap terbuka saat halaman di-refresh atau URL dibuka langsung.

## Login admin demo

```text
Username: admin
Password: admin123
```

## Menghubungkan database MySQL cPanel

API PHP berada di `public/api` dan otomatis ikut masuk ke `dist/api` saat build.

1. Di cPanel buka **MySQL Databases**.
2. Buat database dan user MySQL, lalu beri user hak akses **All Privileges**.
3. Buka **phpMyAdmin**, pilih database tersebut, lalu import file `dist/api/schema.sql`.
4. Edit `dist/api/config.php` sebelum upload dan isi:

```php
const DB_NAME = 'prefix_nama_database';
const DB_USER = 'prefix_nama_user';
const DB_PASS = 'password_database';
const ADMIN_PASS = 'password_admin_yang_kuat';
```

5. Upload isi `dist` ke `public_html`.
6. Pastikan file `public_html/api/.htaccess` ikut ter-upload.
7. Pastikan folder `public_html/api/uploads/articles` memiliki permission `755` atau `775` jika server membutuhkan izin tulis.
8. Login melalui `/admin` dan coba tambah artikel/kegiatan.

Saat API dan database berhasil tersambung, CRUD memakai MySQL bersama sehingga perubahan dapat dilihat semua pengunjung. Jika API belum aktif, aplikasi otomatis memakai `localStorage` sebagai fallback development.

Untuk keamanan, ganti `ADMIN_PASS` sebelum publikasi dan jangan membagikan isi `config.php`.

### Membuat ZIP siap upload

Dari root proyek (`sdn-turi-2`), jalankan:

```powershell
Remove-Item .\dist-upload.zip -ErrorAction SilentlyContinue
Compress-Archive -Path .\dist\* -DestinationPath .\dist-upload.zip
```

Upload `dist-upload.zip` ke `public_html`, lalu pilih **Extract**. File `.htaccess` tersembunyi tetap harus dipastikan ikut ada di document root.

Jika build dijalankan dari folder `D:\SDN Turi 2`, masuk dulu ke folder proyek:

```powershell
Set-Location .\sdn-turi-2
npm run build
```

## Deploy ke subfolder

Jika website dipasang di `domain.com/sekolah/`, bukan di root domain, konfigurasi `base` Vite dan `basename` React Router harus disesuaikan dengan `/sekolah/`. Untuk instalasi termudah, gunakan document root domain atau subdomain sehingga website berada di root (`domain.com`).
