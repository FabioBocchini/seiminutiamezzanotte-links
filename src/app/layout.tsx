import type { Metadata } from 'next'
import type React from 'react'
import './globals.css'
import { Layout } from '@/components/Layout'

export const metadata: Metadata = {
  title: 'Sei Minuti a Mezzanotte',
  description: 'sei minuti a mezzanotte music band',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <body className="h-screen">
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
