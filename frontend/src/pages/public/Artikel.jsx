import { Link } from 'react-router-dom'
import { useSchool } from '../../context/SchoolContext.jsx'

function Artikel() {
  const { articles } = useSchool()
  return <main className="page-section"><div className="page-heading"><p className="eyebrow">Cerita sekolah</p><h1>Artikel</h1><p>Kabar dan cerita terbaru dari SD Negeri Turi 2.</p></div><div className="card-grid">{articles.map((article) => <article className="content-card" key={article.id}>{article.image && <img alt="" className="article-preview" src={article.image} />}<p className="eyebrow">{article.date}</p><h2>{article.title}</h2><p>{article.excerpt}</p><Link className="text-button" to={`/artikel/${article.id}`}>Baca artikel <span aria-hidden="true">→</span></Link></article>)}</div></main>
}

export default Artikel
