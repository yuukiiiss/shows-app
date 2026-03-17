import { getTrendingMovies } from "@/lib/tmdb"
import MovieCard from "@/components/MovieCard"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trending Movies",
  description: "Discover trending movies this week",
}

export default async function Home() {
  const movies = await getTrendingMovies()

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Trending Movies
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {movies.map((movie: any) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  )
}