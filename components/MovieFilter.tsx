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
      backdrop-blur-xl
      bg-white/80
      text-gray-900
      border border-black/5
    
      dark:bg-[#262626]/70
      dark:text-gray-100
      dark:border-white/10
    
      text-sm
      placeholder:text-gray-400 dark:placeholder:text-gray-500
    
      focus:outline-none
      focus:ring-2
      focus:ring-black/20
      dark:focus:ring-white/20
    
      transition
    "
      placeholder="Search movies or TV shows..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}