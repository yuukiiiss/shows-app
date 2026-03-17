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
            <h1 className="text-4xl font-semibold">Browse Movies</h1>
            <p className="text-gray-500 mt-1">
              Discover trending and popular films to watch.
            </p>
          </>
        )}

        {q && (
          <>
            <Link
              href="/movies"
              className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 transition"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Back to all movies
            </Link>

            <h1 className="text-4xl font-semibold mt-3">
              Results for <span className="font-medium">“{q}”</span>
            </h1>

            <p className="text-gray-500 mt-1">
              Showing movies matching your search.
            </p>
          </>
        )}

        {genre && !q && (
          <>
            <Link
              href="/movies"
              className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 transition"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Back to all movies
            </Link>

            <h1 className="text-4xl font-semibold mt-3">
              Genre: {selectedGenre?.name}
            </h1>

            <p className="text-gray-500 mt-1">
              Browse movies in this category.
            </p>
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
        <div className="mt-24 flex flex-col items-center text-center max-w-md mx-auto">
          <div className="text-6xl mb-6">🍿</div>

          <h2 className="text-xl font-semibold mb-2">No results found</h2>

          <p className="text-gray-500 leading-relaxed mb-6">
            Try searching with a different keyword or explore another genre.
          </p>

          <Link
            href="/movies"
            className="px-6 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-100 transition font-medium"
          >
            Browse all movies
          </Link>
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
