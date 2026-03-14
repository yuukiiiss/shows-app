"use client"

export default function MoviesError() {
  return (
    <main className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-4">
        Failed to load movies
      </h1>

      <p className="text-gray-600 mb-6">
        Something went wrong or connection is lost.
      </p>

      <div className="flex justify-center gap-3">
        <button
          onClick={() => window.location.reload()}
          className="border px-4 py-2 rounded hover:bg-gray-100"
        >
          Try again
        </button>

        <a
          href="/"
          className="border px-4 py-2 rounded hover:bg-gray-100"
        >
          Back to Home
        </a>
      </div>
    </main>
  )
}