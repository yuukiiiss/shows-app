"use client"

import { useRouter } from "next/navigation"

export default function MoviesError() {
  const router = useRouter()

  return (
    <main className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-4">
        Something went wrong.
      </h1>

      <p className="text-gray-600 mb-6">
        Please check your connection or try again later.
      </p>

      <button
        onClick={() => router.push("/movies")}
        className="border px-4 py-2 rounded hover:bg-gray-100 transition"
      >
        Back to Movies
      </button>
    </main>
  )
}