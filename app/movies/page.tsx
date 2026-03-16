import { discoverMovies, getGenres } from "@/lib/tmdb";
import MovieCard from "@/components/MovieCard";
import MovieFilter from "@/components/MovieFilter";
import GenreFilter from "@/components/GenreFilter";
import FilterBar from "@/components/FilterBar";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Movies",
  description: "Browse and search movies",
};

export default async function MoviesPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; genre?: string }>;
}) {
  const { q, genre } = await searchParams;

  const movies = await discoverMovies(genre, q);
  const genres = await getGenres();

  const selectedGenre = genres.find((g) => String(g.id) === genre);

  return (
    <main className="max-w-screen-2xl mx-auto px-6 lg:px-10 py-10">
      <div className="mb-6">
        {!q && !genre && (
          <>
            <h1 className="text-4xl font-semibold">Explore Movies</h1>
            <p className="text-gray-500 mt-1">
              Discover trending and popular films
            </p>
          </>
        )}

        {q && (
          <>
            <Link
              href="/movies"
              className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 transition"
            >
              ← Back to explore
            </Link>

            <h1 className="text-4xl font-semibold mt-3">Search result</h1>

            <p className="text-gray-500 mt-1">
              Showing results for <span className="font-medium">{q}</span>
            </p>
          </>
        )}

        {genre && !q && (
          <>
            <Link
              href="/movies"
              className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 transition"
            >
              ← Back to explore
            </Link>

            <h1 className="text-4xl font-semibold mt-3">
              {selectedGenre?.name}
            </h1>

            <p className="text-gray-500 mt-1">Movies in this category</p>
          </>
        )}
      </div>

      <FilterBar>
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            {!q && !genre && (
              <>
                <div className="flex-1">
                  <MovieFilter />
                </div>

                <div className="md:w-56">
                  <GenreFilter genres={genres} />
                </div>
              </>
            )}

            {q && (
              <div className="flex-1">
                <MovieFilter />
              </div>
            )}

            {genre && !q && (
              <div className="md:w-56">
                <GenreFilter genres={genres} />
              </div>
            )}
          </div>
        </div>
      </FilterBar>

      {movies.length === 0 ? (
        <div className="mt-20 text-center">
          <p className="text-lg text-gray-500">No movies found</p>

          <p className="text-gray-400 mt-2">Try another keyword or genre</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {movies.map((movie: any) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </main>
  );
}
