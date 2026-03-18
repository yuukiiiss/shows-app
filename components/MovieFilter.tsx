"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"

export default function MovieFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const queryFromUrl = searchParams.get("q") || ""
  const genre = searchParams.get("genre") || ""

  const [value, setValue] = useState(queryFromUrl)
  const [debounced, setDebounced] = useState(queryFromUrl)

  useEffect(() => {
    setValue(queryFromUrl)
    setDebounced(queryFromUrl)
  }, [queryFromUrl])

  useEffect(() => {
    const t = setTimeout(() => {
      setDebounced(value)
    }, 600)

    return () => clearTimeout(t)
  }, [value])

  useEffect(() => {
    const params = new URLSearchParams()

    if (debounced.trim()) params.set("q", debounced)
    if (genre) params.set("genre", genre)

    router.push(`/movies?${params.toString()}`)
  }, [debounced])

  return (
    <input
      className="
        w-full h-11 px-4 rounded-xl
        border border-gray-200 dark:border-gray-800
        bg-gray-50 dark:bg-gray-900/60
        text-sm
        focus:outline-none
        focus:ring-2 focus:ring-gray-400/40 dark:focus:ring-gray-600/40
        transition
      "
      placeholder="Search movies or TV shows..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}