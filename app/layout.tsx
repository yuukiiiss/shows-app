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
  title: "Movie App",
  description: "Movie recommendation app using Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-gray-900 dark:text-white`}
      >
        <FavoriteProvider>
          <Navbar />
          {children}
        </FavoriteProvider>
      </body>
    </html>
  )
}