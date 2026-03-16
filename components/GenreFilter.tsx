"use client"

import { useRouter, useSearchParams } from "next/navigation"

export default function GenreFilter({
  genres,
}: {
  genres: { id: number; name: string }[]
}) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const selectedGenre = searchParams.get("genre") || ""
  const query = searchParams.get("q") || ""

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const genre = e.target.value

    const params = new URLSearchParams()

    if (query) params.set("q", query)
    if (genre) params.set("genre", genre)

    router.push(`/movies?${params.toString()}`)
  }

  return (
    <select
      value={selectedGenre}
      onChange={handleChange}
      className="
        w-full md:w-56
        h-11
        pl-4 pr-10
        rounded-xl
        border border-gray-300 dark:border-gray-700
        bg-white dark:bg-gray-900
        text-sm
        focus:outline-none
        focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700
        transition
      "
    >
      <option value="">All Genres</option>

      {genres.map((g) => (
        <option key={g.id} value={g.id}>
          {g.name}
        </option>
      ))}
    </select>
  )
}