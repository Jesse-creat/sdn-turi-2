import { request } from './api.js'

export const getAchievements = () => request('achievements.php')
export const saveAchievement = (achievement) => request('achievements.php', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(achievement) })
export const deleteAchievement = (id) => request('achievements.php', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
