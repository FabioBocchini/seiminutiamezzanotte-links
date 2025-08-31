import React from 'react'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Metadata } from 'next'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains'
})

export const metadata: Metadata = {
  title: 'Sei Minuti a Mezzanotte'
}

type TProps = {
  children: React.ReactNode
}

const RootLayout: React.FC<TProps> = ({ children }) => {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="bg-smam-dark font-mono">{children}</body>
    </html>
  )
}
export default RootLayout
