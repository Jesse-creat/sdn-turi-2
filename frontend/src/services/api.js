const API_BASE = import.meta.env.VITE_API_URL || '/api'

export async function request(endpoint, options = {}) {
  const response = await fetch(`${API_BASE}/${endpoint}`, { credentials: 'include', ...options })
  const data = await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(data.error || 'Permintaan ke server gagal.')
  return data
}
