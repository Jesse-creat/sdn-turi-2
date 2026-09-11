CREATE TABLE articles (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(180) NOT NULL,
  excerpt TEXT NOT NULL,
  article_date VARCHAR(80) NOT NULL,
  image_url VARCHAR(255) DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE activities (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(180) NOT NULL,
  activity_date VARCHAR(80) NOT NULL,
  location VARCHAR(180) NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO articles (title, excerpt, article_date) VALUES
('Membaca Membuka Jendela Dunia', 'Gerakan literasi sekolah hadir setiap pagi untuk menumbuhkan kebiasaan membaca.', '10 September 2026'),
('Semangat Belajar di Awal Tahun', 'Siswa dan guru menyambut tahun ajaran baru dengan energi dan harapan.', '24 Juli 2026');

INSERT INTO activities (title, activity_date, location, description) VALUES
('Upacara Hari Senin', 'Setiap Senin', 'Lapangan sekolah', 'Kegiatan pembiasaan disiplin dan cinta tanah air.'),
('Latihan Pramuka', 'Jumat, 15.00', 'Halaman sekolah', 'Belajar mandiri, bekerja sama, dan peduli lingkungan.');
