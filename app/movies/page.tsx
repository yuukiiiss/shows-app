import { discoverMovies } from "@/lib/tmdb"
import MovieCard from "@/components/MovieCard"
import MovieFilter from "@/components/MovieFilter"

export default async function MoviesPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q } = await searchParams

  const movies = await discoverMovies(undefined, q)

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">All Movies</h1>

      <MovieFilter />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {movies.map((movie: any) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  )
}