"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useFavorite } from "@/context/FavoriteContext"
import MovieCard from "@/components/MovieCard"

export default function FavoritesPage() {
  const { favorites } = useFavorite()
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) {
    return (
      <main className="p-8 animate-pulse">
        <div className="h-8 w-48 bg-gray-200 dark:bg-gray-800 rounded mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900 shadow-md"
            >
              <div className="aspect-[2/3] bg-gray-200 dark:bg-gray-800" />

              <div className="p-4 space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
                <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-1/3" />
              </div>
            </div>
          ))}
        </div>
      </main>
    )
  }

  if (favorites.length === 0) {
    return (
      <main className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">
          Favorite Movies
        </h1>

        <p className="text-gray-600 mb-6">
          No favorite movies yet. Browse movies and add some to your favorites.
        </p>

        <Link
          href="/movies"
          className="inline-block border px-4 py-2 rounded hover:bg-gray-100 transition"
        >
          Browse Movies
        </Link>
      </main>
    )
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Favorite Movies
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  )
}