/**
 * API Configuration
 * 
 * Note: API calls now go through Next.js proxy routes to avoid mixed content issues.
 * The proxy routes forward requests to the backend server-side.
 * 
 * Set BACKEND_API_URL in your server environment (not exposed to client):
 * BACKEND_API_URL=http://138.197.26.207:3001
 */

// This is no longer used directly by the frontend
// API calls go through /api/proxy/* routes
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

// API Endpoints
export const API_ENDPOINTS = {
  quote: {
    submit: `${API_BASE_URL}/api/quote/submit`,
  },
  property: {
    info: `${API_BASE_URL}/api/property/info`,
  },
} as const

/**
 * Helper function to make API calls
 */
export async function apiCall<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(endpoint, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Unknown error' }))
    throw new Error(error.error || `API call failed: ${response.statusText}`)
  }

  return response.json()
}
