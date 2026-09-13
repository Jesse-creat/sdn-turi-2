import { request } from './api.js'

export const getArticles = () => request('articles.php')
export const saveArticle = (article) => request('articles.php', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(article) })
export const deleteArticle = (id) => request('articles.php', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
