import { discoverMovies, getGenres } from "@/lib/tmdb"
import MovieCard from "@/components/MovieCard"
import MovieFilter from "@/components/MovieFilter"
import GenreFilter from "@/components/GenreFilter"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "All Movies",
  description: "Browse and search movies",
}

export default async function MoviesPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; genre?: string }>
}) {
  const { q, genre } = await searchParams

  const movies = await discoverMovies(genre, q)
  const genres = await getGenres()

  const selectedGenre = genres.find((g) => String(g.id) === genre)

  return (
    <main className="p-8">

      {/* ⭐ SEARCH MODE */}
      {q && (
        <>
          <Link href="/movies" className="text-sm text-blue-500 mb-4 inline-block">
            ← Back to all movies
          </Link>

          <h1 className="text-3xl font-bold mb-6">
            Search result: {q}
          </h1>
        </>
      )}

      {/* ⭐ GENRE MODE */}
      {genre && !q && (
        <>
          <Link href="/movies" className="text-sm text-blue-500 mb-4 inline-block">
            ← Back to all movies
          </Link>

          <h1 className="text-3xl font-bold mb-6">
            Genre: {selectedGenre?.name}
          </h1>
        </>
      )}

      {/* ⭐ DEFAULT EXPLORE MODE */}
      {!q && !genre && (
        <>
          <h1 className="text-3xl font-bold mb-6">
            All Movies
          </h1>

          <MovieFilter />
          <GenreFilter genres={genres} />
        </>
      )}

      {/* ⭐ EMPTY STATE */}
      {movies.length === 0 ? (
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-lg">
            No movies found.
          </p>

          <p className="text-gray-400 mt-2">
            Try another keyword or genre.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {movies.map((movie: any) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </main>
  )
}