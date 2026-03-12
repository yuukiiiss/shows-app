import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <h1 className="font-bold text-lg">MovieApp</h1>

      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/movies">Movies</Link>
      </div>
    </nav>
  )
}