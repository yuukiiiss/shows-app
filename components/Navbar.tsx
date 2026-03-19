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
      relative whitespace-nowrap
      text-sm font-medium
      transition-colors duration-200
      ${
        isActive(path)
          ? "text-[color:var(--foreground)]"
          : "text-gray-500 hover:text-[color:var(--foreground)]"
      }
    `
  }

  return (
    <header
      className="
        sticky top-0 z-50
        bg-[color:var(--surface)]/70
        backdrop-blur-md
        shadow-[0_1px_0_rgba(0,0,0,0.06)]
      "
    >
      <nav
        className="
          max-w-screen-2xl mx-auto
          px-4 sm:px-6 lg:px-10
          h-[60px] sm:h-[70px]
          flex items-center justify-between
          gap-3
        "
      >
        <div className="flex items-center gap-3 sm:gap-8 flex-1 min-w-0">

          <Link
            href="/"
            className="
              text-base sm:text-xl
              font-semibold tracking-tight
              text-[color:var(--foreground)]
              hover:opacity-80 transition
              whitespace-nowrap
              flex-shrink-0
            "
          >
            ShowsApp
          </Link>

          <div
            className="
              flex items-center
              gap-3 sm:gap-7
              overflow-x-auto
              scrollbar-none
              flex-1 min-w-0
            "
          >
            <Link href="/" className={navClass("/")}>
              Discover
            </Link>

            <Link href="/movies" className={navClass("/movies")}>
              Browse
            </Link>

            <Link href="/favorites" className={navClass("/favorites")}>
              Favorites
            </Link>
          </div>
        </div>

        <div className="flex-shrink-0">
          <ThemeToggle />
        </div>

      </nav>
    </header>
  )
}