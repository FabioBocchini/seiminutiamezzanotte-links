import React from 'react'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains'
})

export const metadata = {
  title: 'Sei Minuti a Mezzanotte'
}

type TProps = {
  children: React.ReactNode
}

const RootLayout: React.FC<TProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`bg-better-black ${jetbrainsMono.className} font-mono`}>{children}</body>
    </html>
  )
}
export default RootLayout
