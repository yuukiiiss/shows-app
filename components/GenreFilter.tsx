"use client"

import { useRouter } from "next/navigation"

export default function GenreFilter({
  genres,
}: {
  genres: { id: number; name: string }[]
}) {
  const router = useRouter()

  return (
    <select
      className="border p-2 mb-4"
      onChange={(e) => {
        const genre = e.target.value
        const params = new URLSearchParams()

        if (genre) {
          params.set("genre", genre)
        }

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