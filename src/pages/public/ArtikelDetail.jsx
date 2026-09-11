import { useNavigate, useParams } from 'react-router-dom'
import { useSchool } from '../../context/SchoolContext.jsx'

function ArtikelDetail() {
  const { articles } = useSchool()
  const navigate = useNavigate()
  const { articleId } = useParams()
  const article = articles.find((item) => item.id === Number(articleId)) || articles[0]
  if (!article) return <main className="page-section"><h1>Artikel tidak ditemukan</h1></main>

  return <main className="page-section article-detail"><button className="text-button" onClick={() => navigate('/')} type="button">← Kembali</button><p className="eyebrow">Artikel sekolah · {article.date}</p><h1>{article.title}</h1>{article.image && <img alt={article.title} className="article-image" src={article.image} />}<p className="article-lead">{article.excerpt}</p><div className="article-body"><p>{article.excerpt} Kegiatan ini menjadi bagian dari upaya SD Negeri 1 Nusantara untuk membangun lingkungan belajar yang aktif, hangat, dan menyenangkan bagi seluruh siswa.</p></div></main>
}

export default ArtikelDetail