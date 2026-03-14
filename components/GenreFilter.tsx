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

  return (
    <select
      className="border p-2 mb-4"
      value={selectedGenre}
      onChange={(e) => {
        const genre = e.target.value

        const params = new URLSearchParams()

        if (genre) params.set("genre", genre)
        if (query) params.set("q", query)

        router.push(`/movies?${params.toString()}`)
      }}
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