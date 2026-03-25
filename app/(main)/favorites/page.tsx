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
      <main className="p-8">
        <div className="h-8 w-48 bg-gray-200 dark:bg-[#303030] rounded mb-8 animate-pulse" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="
                rounded-2xl overflow-hidden flex flex-col
                bg-white
                dark:bg-[#262626]
                shadow-md
                dark:shadow-[0_10px_28px_rgba(0,0,0,0.5)]
              "
            >
              <div className="aspect-[2/3] bg-gray-200 dark:bg-[#303030] animate-pulse" />

              <div className="p-4 space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-[#303030] rounded w-3/4 animate-pulse" />
                <div className="h-3 bg-gray-200 dark:bg-[#303030] rounded w-1/3 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </main>
    )
  }

  if (favorites.length === 0) {
    return (
      <main className="p-8 flex flex-col items-center text-center mt-20">

        <div className="mb-6 opacity-80">
          <svg
            viewBox="0 0 24 24"
            className="w-16 h-16 stroke-gray-300 dark:stroke-gray-600 fill-none"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12.1 21s-7.1-4.4-9.2-8.6C1.4 8.6 3.3 4 7.6 5.1c1.7.4 2.8 1.7 4.5 3.6 1.7-1.9 2.8-3.2 4.5-3.6C20.9 4 22.8 8.6 21.3 12.4 19.2 16.6 12.1 21 12.1 21z" />
          </svg>
        </div>

        <h1 className="text-3xl font-semibold mb-2">
          Your favorites list is empty
        </h1>

        <p className="text-gray-500 dark:text-gray-400 max-w-md leading-relaxed mb-6">
          Save movies or TV shows you like.
        </p>

        <Link
          href="/movies"
          className="
            px-5 py-2.5
            rounded-lg
            border border-gray-300
            hover:bg-gray-100

            dark:border-[#3a3a3a]
            dark:text-gray-100
            dark:hover:bg-[#262626]

            transition font-medium
          "
        >
          Explore shows
        </Link>

      </main>
    )
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Favorite Shows
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {favorites.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            from="favorites"
        />
        ))}
      </div>
    </main>
  )
}