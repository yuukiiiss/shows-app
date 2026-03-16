import Link from "next/link"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">

        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight"
          >
            MovieApp
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link
              href="/"
              className="hover:text-gray-500 dark:hover:text-gray-300 transition"
            >
              Home
            </Link>

            <Link
              href="/movies"
              className="hover:text-gray-500 dark:hover:text-gray-300 transition"
            >
              Movies
            </Link>

            <Link
              href="/favorites"
              className="hover:text-gray-500 dark:hover:text-gray-300 transition"
            >
              Favorites
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>

      </nav>
    </header>
  )
}