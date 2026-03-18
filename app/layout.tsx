import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

import Navbar from "@/components/Navbar"
import { FavoriteProvider } from "@/context/FavoriteContext"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Shows App",
  description: "Browse movies and TV shows",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
        `}
      >
        <FavoriteProvider>
          <Navbar />

          <main className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
            {children}
          </main>
        </FavoriteProvider>
      </body>
    </html>
  )
}