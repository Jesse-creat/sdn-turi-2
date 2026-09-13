import { request } from './api.js'

export const login = (credentials) => request('auth.php', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(credentials) })
export const logout = () => request('auth.php', { method: 'DELETE' })
