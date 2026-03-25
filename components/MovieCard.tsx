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

export default function MovieCard({
  movie,
  from,
}: {
  movie: Movie
  from?: "discover" | "browse" | "favorites"
}) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null

  const type = movie.media_type || "movie"

  const href = `/movies/${movie.id}?type=${type}${
    from ? `&from=${from}` : ""
  }`

  return (
    <Link href={href}>
      <div
        className="
          group h-full rounded-2xl
          transition-all duration-300 ease-out
          hover:-translate-y-1
        "
      >
        <div
          className="
            h-full flex flex-col
            rounded-2xl overflow-hidden

            bg-white dark:bg-[#262626]

            shadow-md hover:shadow-xl
            dark:shadow-[0_8px_25px_rgba(0,0,0,0.45)]
            dark:hover:shadow-[0_18px_45px_rgba(0,0,0,0.75)]

            transition-shadow duration-300
          "
        >
          <div className="relative w-full aspect-[2/3] bg-gray-200 dark:bg-[#303030] overflow-hidden">
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={movie.title}
                fill
                className="
                  object-cover
                  transition duration-300
                  group-hover:scale-[1.03]
                "
              />
            )}
          </div>

          <div className="px-4 pt-3 pb-4 flex flex-col flex-grow text-black dark:text-gray-100">

            <div className="flex items-start justify-between gap-3">
              <h2
                className="
                  font-semibold
                  leading-tight
                  line-clamp-2
                  min-h-[40px]
                "
              >
                {movie.title}
              </h2>

              <FavoriteButton movie={movie} />
            </div>

            <div className="mt-auto pt-2 flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
              <span className="text-amber-400 text-sm">★</span>
              <span>{movie.vote_average?.toFixed(1) ?? "N/A"}</span>
            </div>

          </div>
        </div>
      </div>
    </Link>
  )
}