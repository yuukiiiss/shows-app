import Link from "next/link"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-6">
        <Link href="/" className="font-bold text-xl">
          MovieApp
        </Link>

        <Link href="/">Home</Link>
        <Link href="/movies">Movies</Link>
        <Link href="/favorites">Favorites</Link>
      </div>

      <ThemeToggle />
    </nav>
  )
}