"use client"

import Link from "next/link"
import Image from "next/image"
import FavoriteButton from "./FavoriteButton"

type Movie = {
  id: number
  title: string
  vote_average?: number
  poster_path?: string | null
  media_type?: "movie" | "tv"
}

export default function MovieCard({ movie }: { movie: Movie }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null

  const type = movie.media_type || "movie"

  return (
    <Link href={`/movies/${movie.id}?type=${type}`}>
      <div className="group rounded-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl">
        <div className="rounded-xl overflow-hidden bg-white dark:bg-gray-900 shadow-md flex flex-col">

          <div className="relative w-full aspect-[2/3] bg-gray-200 overflow-hidden">
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={movie.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-[1.03]"
              />
            )}
          </div>

          <div className="px-4 pt-3 pb-4 flex flex-col">
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-semibold line-clamp-2 leading-tight">
                {movie.title}
              </h2>

              <FavoriteButton movie={movie} />
            </div>

            <div className="flex items-center gap-1 mt-1 text-sm text-gray-600 dark:text-gray-400">
              <span className="text-amber-400 text-sm">★</span>
              <span>{movie.vote_average?.toFixed(1) ?? "N/A"}</span>
            </div>
          </div>

        </div>
      </div>
    </Link>
  )
}