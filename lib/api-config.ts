/**
 * API Configuration
 * 
 * This file centralizes API endpoint configuration.
 * Set NEXT_PUBLIC_API_URL in your .env.local file to point to your backend server.
 * 
 * Example:
 * NEXT_PUBLIC_API_URL=http://localhost:3001
 * NEXT_PUBLIC_API_URL=https://api.yourserver.com
 */

// Get API URL from environment variable, fallback to localhost for development
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
