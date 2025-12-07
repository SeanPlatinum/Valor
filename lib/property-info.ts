/**
 * Utility functions for parsing addresses and working with Massachusetts Property Information
 */

export interface AddressComponents {
  address: string
  city: string
  state: string
  zipCode: string
}

export interface PropertyInfo {
  owner?: string
  ownerAddress?: string
  buildingValue?: string
  landValue?: string
  otherValue?: string
  totalValue?: string
  assessmentYear?: string
  lotSize?: string
  lastSalePrice?: string
  lastSaleDate?: string
  useCode?: string
  yearBuilt?: string
}

/**
 * Parses an address string into street name and address number
 * Example: "123 Main Street" -> { streetNumber: "123", streetName: "MAIN STREET" }
 */
export function parseAddress(address: string): { streetNumber: string; streetName: string } {
  // Remove common suffixes and normalize
  const normalized = address.trim().toUpperCase()
  
  // Extract street number (digits at the start)
  const numberMatch = normalized.match(/^(\d+)/)
  const streetNumber = numberMatch ? numberMatch[1] : ''
  
  // Extract street name (everything after the number)
  let streetName = normalized.replace(/^\d+\s+/, '').trim()
  
  // Normalize common street suffixes
  const suffixMap: Record<string, string> = {
    'ST': 'ST',
    'STREET': 'ST',
    'AVE': 'AVE',
    'AVENUE': 'AVE',
    'AV': 'AVE',
    'RD': 'RD',
    'ROAD': 'RD',
    'DR': 'DR',
    'DRIVE': 'DR',
    'LN': 'LN',
    'LANE': 'LN',
    'CT': 'CT',
    'COURT': 'CT',
    'PL': 'PL',
    'PLACE': 'PL',
    'BLVD': 'BLVD',
    'BOULEVARD': 'BLVD',
    'CIR': 'CIR',
    'CIRCLE': 'CIR',
    'PKWY': 'PKWY',
    'PARKWAY': 'PKWY',
    'HWY': 'HWY',
    'HIGHWAY': 'HWY',
  }
  
  // Split by space and normalize the last word if it's a suffix
  const parts = streetName.split(/\s+/)
  if (parts.length > 0) {
    const lastPart = parts[parts.length - 1]
    if (suffixMap[lastPart]) {
      parts[parts.length - 1] = suffixMap[lastPart]
    }
    streetName = parts.join(' ')
  }
  
  return { streetNumber, streetName }
}

/**
 * Normalizes city name to match Massachusetts Property Information format
 * Example: "Boston" -> "BOSTON"
 */
export function normalizeCity(city: string): string {
  return city.trim().toUpperCase()
}

/**
 * Fetches property information from Massachusetts Property Information site
 * Uses backend API if configured, otherwise falls back to Next.js API route
 */
export async function fetchPropertyInfo(
  city: string,
  streetName: string,
  addressNumber: string
): Promise<PropertyInfo> {
  const requestBody = {
    city: normalizeCity(city),
    streetName: streetName.toUpperCase(),
    addressNumber: addressNumber,
  }
  
  // Use backend API if configured, otherwise use Next.js API route
  const apiUrl = process.env.NEXT_PUBLIC_API_URL 
    ? `${process.env.NEXT_PUBLIC_API_URL}/api/property/info`
    : '/api/property-info'
  
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error || 'Failed to fetch property information')
  }

  const result = await response.json()
  return result.data
}

