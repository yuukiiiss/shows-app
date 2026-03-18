"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  const pathname = usePathname()

  function isActive(path: string) {
    if (path === "/") return pathname === "/"
    if (path === "/movies") return pathname.startsWith("/movies")
    if (path === "/favorites") return pathname === "/favorites"
    return false
  }

  function navClass(path: string) {
    return `
      relative pb-1 whitespace-nowrap transition
      ${
        isActive(path)
          ? "text-black dark:text-white"
          : "text-gray-500 hover:text-black dark:hover:text-white"
      }
    `
  }

  return (
    <header className="border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur sticky top-0 z-50">
      <nav className="max-w-screen-2xl mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between">

        <div className="flex items-center gap-6">

          <Link
            href="/"
            className="text-xl font-semibold tracking-tight hover:opacity-80 transition"
          >
            ShowsApp
          </Link>

          <div className="
            flex items-center gap-6 text-sm
            overflow-x-auto scrollbar-none
          ">

            <Link href="/" className={navClass("/")}>
              Discover
              {isActive("/") && (
                <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-black dark:bg-white rounded-full" />
              )}
            </Link>

            <Link href="/movies" className={navClass("/movies")}>
              Browse
              {isActive("/movies") && (
                <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-black dark:bg-white rounded-full" />
              )}
            </Link>

            <Link href="/favorites" className={navClass("/favorites")}>
              Favorites
              {isActive("/favorites") && (
                <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-black dark:bg-white rounded-full" />
              )}
            </Link>

          </div>
        </div>

        <ThemeToggle />

      </nav>
    </header>
  )
}