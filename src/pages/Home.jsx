import { useNavigate } from 'react-router-dom'

function Home({ school, onNavigate }) {
  const navigate = useNavigate()
  return (
    <main>
      <section className="hero-section">
        <div>
          <p className="eyebrow">Selamat datang di</p>
          <h1>{school.schoolName}</h1>
          <p className="hero-copy">{school.tagline} Menjadi ruang tumbuh bagi anak-anak untuk belajar, berkarya, dan melangkah dengan percaya diri.</p>
          <button className="primary-button" onClick={() => onNavigate ? onNavigate('Profil') : navigate('/profil')} type="button">Kenali sekolah kami <span aria-hidden="true">→</span></button>
        </div>
        <div className="hero-note"><span>01</span><strong>Belajar dengan gembira, bertumbuh bersama.</strong></div>
      </section>
      <section className="welcome-section page-section">
        <div><p className="eyebrow">Sambutan</p><h2>Setiap anak punya cerita untuk ditumbuhkan.</h2></div>
        <p>Kami percaya pendidikan yang baik dimulai dari lingkungan yang aman, hangat, dan mendorong rasa ingin tahu. Bersama keluarga, kami mendampingi setiap langkah kecil menuju masa depan.</p>
      </section>
    </main>
  )
}

export default Home