"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function MovieFilter() {
  const router = useRouter()
  const [value, setValue] = useState("")

  return (
    <input
      className="border p-2 mb-6 w-full"
      placeholder="Search movie..."
      value={value}
      onChange={(e) => {
        const v = e.target.value
        setValue(v)

        router.push(`/movies?q=${v}`)
      }}
    />
  )
}