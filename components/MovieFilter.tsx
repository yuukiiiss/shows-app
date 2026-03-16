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
        w-full
        h-11
        px-4
        rounded-xl
        border border-gray-300 dark:border-gray-700
        bg-white dark:bg-gray-900
        text-sm
        focus:outline-none
        focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700
        transition
      "
      placeholder="Search movie..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}