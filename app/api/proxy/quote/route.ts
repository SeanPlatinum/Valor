import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL = process.env.BACKEND_API_URL || 'http://138.197.26.207:3001'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Forward request to backend server
    const response = await fetch(`${BACKEND_URL}/api/quote/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Backend request failed' }))
      return NextResponse.json(
        { error: error.error || 'Failed to submit quote' },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error: any) {
    console.error('Quote proxy error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to submit quote' },
      { status: 500 }
    )
  }
}
