import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Valor HVAC',
  description: 'Valor Heating & Cooling - Expert HVAC Installation & Service in Massachusetts',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
