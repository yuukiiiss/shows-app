"use client"

import Link from "next/link"
import ThemeToggle from "./ThemeToggle"
import { useState } from "react"

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  return (
    <header className="border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur sticky top-0 z-50">
      <nav className="max-w-screen-2xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">

        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            MovieApp
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="hover:text-gray-500 dark:hover:text-gray-300 transition">
              Home
            </Link>
            <Link href="/movies" className="hover:text-gray-500 dark:hover:text-gray-300 transition">
              Movies
            </Link>
            <Link href="/favorites" className="hover:text-gray-500 dark:hover:text-gray-300 transition">
              Favorites
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <span className="text-gray-500 dark:text-gray-400">
            {theme === "dark" ? "Dark mode" : "Light mode"}
          </span>

          <ThemeToggle onThemeChange={setTheme} />
        </div>

      </nav>
    </header>
  )
}