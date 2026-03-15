"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect, useRef } from "react"

export default function MovieFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const queryFromUrl = searchParams.get("q") || ""

  const [value, setValue] = useState(queryFromUrl)
  const [debounced, setDebounced] = useState(queryFromUrl)

  const typingRef = useRef(false)

  useEffect(() => {
    setValue(queryFromUrl)
    setDebounced(queryFromUrl)
    typingRef.current = false
  }, [queryFromUrl])

  useEffect(() => {
    typingRef.current = true

    const t = setTimeout(() => {
      setDebounced(value)
    }, 500)

    return () => clearTimeout(t)
  }, [value])

  useEffect(() => {
    if (!typingRef.current) return

    const params = new URLSearchParams()

    if (debounced) {
      params.set("q", debounced)
    }

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