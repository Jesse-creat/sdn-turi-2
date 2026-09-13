import { request } from './api.js'

export const getActivities = () => request('activities.php')
export const saveActivity = (activity) => request('activities.php', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(activity) })
export const deleteActivity = (id) => request('activities.php', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
