"use client"

import { useEffect } from "react"

export default function GlobalError({
  error,
}: {
  error: Error
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-3xl font-bold mb-4">
        Something went wrong
      </h1>

      <p className="text-gray-600 mb-6">
        Failed to load data. Please reload the page.
      </p>

      <button
        onClick={() => window.location.reload()}
        className="border px-5 py-2 rounded hover:bg-gray-100 transition"
      >
        Reload page
      </button>
    </main>
  )
}