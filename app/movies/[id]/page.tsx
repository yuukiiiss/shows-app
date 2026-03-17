import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { getMovieDetail } from "@/lib/tmdb"
import FavoriteButton from "@/components/FavoriteButton"
import GenreBadge from "@/components/GenreBadge"

type Genre = {
  id: number
  name: string
}

type MovieDetail = {
  id: number
  title: string
  overview?: string
  vote_average?: number
  poster_path?: string | null
  backdrop_path?: string | null
  runtime?: number
  release_date?: string
  genres?: Genre[]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  try {
    const { id } = await params
    const movie: MovieDetail | null = await getMovieDetail(id)

    if (!movie) {
      return {
        title: "Movie detail",
        description: "Movie detail page",
      }
    }

    return {
      title: movie.title,
      description: movie.overview || "Movie detail page",
    }
  } catch {
    return {
      title: "Movie detail",
      description: "Movie detail page",
    }
  }
}

function formatRuntime(min?: number) {
  if (!min) return null
  const h = Math.floor(min / 60)
  const m = min % 60
  return `${h}h ${m}m`
}

function formatYear(date?: string) {
  if (!date) return null
  return date.slice(0, 4)
}

export default async function MovieDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const movie: MovieDetail | null = await getMovieDetail(id)

  if (!movie) notFound()

  const imagePath = movie.poster_path || movie.backdrop_path
  const year = formatYear(movie.release_date)
  const runtime = formatRuntime(movie.runtime)

  return (
    <main className="pt-10 md:pt-14 pb-14 md:pb-16">
      <div className="grid md:grid-cols-[440px_1fr] lg:grid-cols-[520px_1fr] gap-8 md:gap-16 items-start">

        {/* Poster */}
        <div className="relative w-full md:max-w-[520px] md:-mt-10">
          {imagePath && (
            <Image
              src={`https://image.tmdb.org/t/p/w500${imagePath}`}
              alt={movie.title || "Movie image"}
              width={520}
              height={780}
              className="rounded-2xl w-full h-auto"
            />
          )}

          <div className="absolute top-3 right-3 md:top-4 md:right-4">
            <FavoriteButton movie={movie} />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col mt-4 md:mt-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
            {movie.title}
          </h1>

          {(year || runtime) && (
            <div className="mt-1.5 text-sm md:text-[15px] text-gray-600 dark:text-gray-300 flex items-center gap-2">
              {year && <span>{year}</span>}
              {year && runtime && <span>•</span>}
              {runtime && <span>{runtime}</span>}
            </div>
          )}

          <div className="flex items-center gap-2 mt-2 text-sm md:text-[15px] text-gray-700 dark:text-gray-300">
            <span className="text-amber-400 text-base">★</span>
            <span>{movie.vote_average?.toFixed(1) ?? "N/A"}</span>
          </div>

          {movie.genres && movie.genres.length > 0 && (
            <div className="mt-6 md:mt-7">
              <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">
                Genres
              </p>

              <div className="flex flex-wrap gap-2">
                {movie.genres.map((g) => (
                  <GenreBadge key={g.id} name={g.name} />
                ))}
              </div>
            </div>
          )}

          {movie.overview && (
            <div className="mt-7 md:mt-9 max-w-2xl">
              <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">
                Overview
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-[15px]">
                {movie.overview}
              </p>
            </div>
          )}

        </div>
      </div>
    </main>
  )
}