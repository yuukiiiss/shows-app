"use client"

export default function ErrorState({
  icon = "🎬",
  onRetry,
}: {
  icon?: string
  onRetry: () => void
}) {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">

        <div className="text-6xl mb-6">{icon}</div>

        <h1 className="text-2xl font-semibold mb-3 text-black dark:text-gray-100">
          Unable to load shows
        </h1>

        <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
          Please check your internet connection or try again in a moment.
        </p>

        <button
          onClick={onRetry}
          className="
            px-6 py-2.5 rounded-lg font-medium
            border border-gray-300
            hover:bg-gray-100

            dark:border-[#3a3a3a]
            dark:text-gray-100
            dark:hover:bg-[#262626]

            transition
          "
        >
          Try again
        </button>

      </div>
    </main>
  )
}