import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { getMovieDetail } from "@/lib/tmdb"
import FavoriteButton from "@/components/FavoriteButton"
import GenreBadge from "@/components/GenreBadge"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  try {
    const { id } = await params
    const movie = await getMovieDetail(id)

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

export default async function MovieDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const movie = await getMovieDetail(id)

  if (!movie) notFound()

  const imagePath = movie.poster_path || movie.backdrop_path

  return (
    <main className="max-w-screen-xl mx-auto px-6 lg:px-10 pt-24 pb-16">
      <div className="grid md:grid-cols-[440px_1fr] lg:grid-cols-[520px_1fr] gap-16 items-start">

        {/* Poster */}
        <div className="relative w-full max-w-[520px] md:-mt-20">
          {imagePath && (
            <Image
              src={`https://image.tmdb.org/t/p/w500${imagePath}`}
              alt={movie.title || "Movie image"}
              width={520}
              height={780}
              className="rounded-2xl"
            />
          )}

          <div className="absolute top-4 right-4">
            <FavoriteButton movie={movie} />
          </div>
        </div>

        <div className="flex flex-col">

          <div className="mb-6">
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
              {movie.title}
            </h1>

            <div className="flex items-center gap-2 mt-1.5 text-[15px] text-gray-700 dark:text-gray-300">
              <span className="text-amber-400 text-base">★</span>
              <span className="tracking-tight">
                {movie.vote_average?.toFixed(1) ?? "N/A"}
              </span>
            </div>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {movie.genres?.map((g: any) => (
              <GenreBadge key={g.id} name={g.name} />
            ))}
          </div>

          <div className="max-w-2xl">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-[15px]">
              {movie.overview}
            </p>
          </div>

        </div>
      </div>
    </main>
  )
}