"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function GenreFilter({
  genres,
}: {
  genres: { id: number; name: string }[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedGenre = searchParams.get("genre") || "";
  const query = searchParams.get("q") || "";

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const genre = e.target.value;

    const params = new URLSearchParams();

    if (query) params.set("q", query);
    if (genre) params.set("genre", genre);

    router.push(`/movies?${params.toString()}`);
  }

  return (
    <div className="relative w-full md:w-56">
      <select
        value={selectedGenre}
        onChange={handleChange}
        className="
            w-full
            h-11
            pl-4 pr-12
            rounded-xl
            border border-gray-300 dark:border-gray-700
            bg-white dark:bg-gray-900
            text-sm
            appearance-none
            cursor-pointer

            transition-colors duration-200 ease-out

            hover:border-gray-400
            hover:bg-gray-100

            dark:hover:border-gray-600
            dark:hover:bg-gray-800

            focus:outline-none
            focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700
          "
      >
        <option value="">All Genres</option>

        {genres.map((g) => (
          <option key={g.id} value={g.id}>
            {g.name}
          </option>
        ))}
      </select>

      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>
  );
}