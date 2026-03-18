import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { getMovieDetail, getTVDetail } from "@/lib/tmdb"
import FavoriteButton from "@/components/FavoriteButton"
import GenreBadge from "@/components/GenreBadge"

type Genre = {
  id: number
  name: string
}

type MediaDetail = {
  id: number
  title?: string
  name?: string
  overview?: string
  vote_average?: number
  poster_path?: string | null
  backdrop_path?: string | null
  runtime?: number
  number_of_seasons?: number
  release_date?: string
  first_air_date?: string
  genres?: Genre[]
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ type?: string }>
}): Promise<Metadata> {
  const fallback = {
    title: "Show details",
    description: "View show information.",
  }

  try {
    const { id } = await params
    const { type } = await searchParams

    const media =
      type === "tv"
        ? await getTVDetail(id)
        : await getMovieDetail(id)

    if (!media) return fallback

    const title = media.title || media.name
    const poster = media.poster_path

    return {
      title: title || fallback.title,
      description:
        media.overview || fallback.description,

      openGraph: poster
        ? {
            title,
            description:
              media.overview || fallback.description,
            images: [
              {
                url: `https://image.tmdb.org/t/p/w500${poster}`,
                width: 500,
                height: 750,
                alt: title,
              },
            ],
          }
        : undefined,
    }
  } catch {
    return fallback
  }
}

function formatDuration(min?: number) {
  if (!min) return null
  const h = Math.floor(min / 60)
  const m = min % 60
  return `${h}h ${m}m`
}

function formatYear(date?: string) {
  if (!date) return null
  return date.slice(0, 4)
}

export default async function MediaDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ type?: string }>
}) {
  const { id } = await params
  const { type } = await searchParams

  const media: MediaDetail =
    type === "tv"
      ? await getTVDetail(id)
      : await getMovieDetail(id)

  if (!media) notFound()

  const title = media.title || media.name
  const imagePath = media.poster_path || media.backdrop_path

  const year = formatYear(
    media.release_date || media.first_air_date
  )

  const duration = formatDuration(media.runtime)

  const typeLabel = type === "tv" ? "TV Series" : "Movie"

  const seasonInfo =
    type === "tv" && media.number_of_seasons
      ? `${media.number_of_seasons} Season${
          media.number_of_seasons > 1 ? "s" : ""
        }`
      : null

  return (
    <main className="pt-10 md:pt-14 pb-14 md:pb-16">
      <div className="grid md:grid-cols-[440px_1fr] lg:grid-cols-[520px_1fr] gap-8 md:gap-16 items-start">

        <div className="relative w-full md:max-w-[520px] md:-mt-10">
          {imagePath && (
            <Image
              src={`https://image.tmdb.org/t/p/w500${imagePath}`}
              alt={title || "Media image"}
              width={520}
              height={780}
              className="rounded-2xl w-full h-auto"
            />
          )}

          <div className="absolute top-3 right-3 md:top-4 md:right-4">
            <FavoriteButton movie={{ id: media.id, title }} />
          </div>
        </div>

        <div className="flex flex-col mt-4 md:mt-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
            {title}
          </h1>

          <div className="mt-1.5 text-sm md:text-[15px] text-gray-600 dark:text-gray-300 flex items-center gap-2 flex-wrap">
            <span>{typeLabel}</span>

            {year && (
              <>
                <span>•</span>
                <span>{year}</span>
              </>
            )}

            {type === "movie" && duration && (
              <>
                <span>•</span>
                <span>{duration}</span>
              </>
            )}

            {type === "tv" && seasonInfo && (
              <>
                <span>•</span>
                <span>{seasonInfo}</span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2 mt-2 text-sm md:text-[15px] text-gray-700 dark:text-gray-300">
            <span className="text-amber-400 text-base">★</span>
            <span>{media.vote_average?.toFixed(1) ?? "N/A"}</span>
          </div>

          {media.genres && media.genres.length > 0 && (
            <div className="mt-6 md:mt-7">
              <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">
                Genre
              </p>

              <div className="flex flex-wrap gap-2">
                {media.genres.map((g) => (
                  <GenreBadge key={g.id} name={g.name} />
                ))}
              </div>
            </div>
          )}

          {media.overview && (
            <div className="mt-7 md:mt-9 max-w-2xl">
              <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">
                Story
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-[15px]">
                {media.overview}
              </p>
            </div>
          )}
        </div>

      </div>
    </main>
  )
}