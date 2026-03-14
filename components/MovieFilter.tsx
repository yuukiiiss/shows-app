"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"

export default function MovieFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const initialQuery = searchParams.get("q") || ""

  const [value, setValue] = useState(initialQuery)
  const [debounced, setDebounced] = useState(initialQuery)

  // debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(value)
    }, 500)

    return () => clearTimeout(timer)
  }, [value])

  // push only if query berubah
  useEffect(() => {
    const genre = searchParams.get("genre")

    const params = new URLSearchParams()

    if (debounced) params.set("q", debounced)
    if (genre) params.set("genre", genre)

    router.push(`/movies?${params.toString()}`)
  }, [debounced])

  return (
    <input
      className="border p-2 mb-6 w-full"
      placeholder="Search movie..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}