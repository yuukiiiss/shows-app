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
          w-full h-11 pl-4 pr-12 rounded-xl
          backdrop-blur-xl
          bg-white/80
          text-gray-900
          border border-black/5 

          dark:bg-[#262626]/70
          dark:text-gray-100
          dark:border-white/10

          text-sm appearance-none cursor-pointer
          transition

          hover:bg-white/90
          dark:hover:bg-[#262626]/90

          focus:outline-none
          focus:ring-2
          focus:ring-black/20
          dark:focus:ring-white/20
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
