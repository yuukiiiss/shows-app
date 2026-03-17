import { getTrendingMedia } from "@/lib/tmdb"
import MovieCard from "@/components/MovieCard"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trending Shows",
  description: "Discover trending movies and TV shows this week",
}

export default async function Home() {
  const media = await getTrendingMedia()

  return (
    <main className="max-w-screen-2xl mx-auto px-6 lg:px-10 py-10">

      <div className="mb-6">
        <h1 className="text-4xl font-semibold">
          Trending Shows
        </h1>

        <p className="text-gray-500 mt-1">
          Discover what people are watching right now.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {media.map((item: any) => (
          <MovieCard
            key={`${item.media_type}-${item.id}`}
            movie={item}
          />
        ))}
      </div>

    </main>
  )
}