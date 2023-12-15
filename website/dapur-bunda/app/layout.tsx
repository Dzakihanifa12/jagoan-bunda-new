import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Website Restoran Jagoan-Bunda',
  description: 'Tugas Pak Gunawan Nyell_123',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  )
}
