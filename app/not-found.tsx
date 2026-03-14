import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-5xl font-bold mb-4">404</h1>

      <p className="text-gray-600 mb-6">
        Movie not found or the page does not exist.
      </p>

      <Link
        href="/movies"
        className="border px-4 py-2 rounded hover:bg-gray-100 transition"
      >
        Back to Movies
      </Link>
    </main>
  )
}