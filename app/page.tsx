import { getTrendingMedia } from "@/lib/tmdb"
import MovieCard from "@/components/MovieCard"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trending Media",
  description: "Discover trending movies and TV shows this week",
}

export default async function Home() {
  const media = await getTrendingMedia()

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Trending Media
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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