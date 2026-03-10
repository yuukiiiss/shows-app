import { getTrendingMovies } from "@/lib/tmdb"

export default async function Home() {
  const movies = await getTrendingMovies()

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Trending Movies</h1>

      <div className="grid grid-cols-4 gap-4">
        {movies.map((movie: any) => (
          <div key={movie.id} className="border p-4 rounded">
            <h2 className="font-semibold">{movie.title}</h2>
            <p>⭐ {movie.vote_average}</p>
          </div>
        ))}
      </div>
    </main>
  )
}