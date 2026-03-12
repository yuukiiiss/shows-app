"use client"

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function MovieFilter() {
  const router = useRouter()
  const [value, setValue] = useState("")
  const [debounced, setDebounced] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(value)
    }, 500)

    return () => clearTimeout(timer)
  }, [value])

  useEffect(() => {
    router.push(`/movies?q=${debounced}`)
  }, [debounced, router])

  return (
    <input
      className="border p-2 mb-6 w-full"
      placeholder="Search movie..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}