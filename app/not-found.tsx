import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">

        <div className="text-6xl mb-6">🍿</div>

        <h1 className="text-2xl font-semibold mb-3 text-black dark:text-gray-100">
          We couldn’t find this show
        </h1>

        <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
          The show you’re looking for may not exist or is no longer available.
        </p>

        <Link
          href="/movies"
          className="
            inline-block px-6 py-2.5 rounded-lg font-medium
            border border-gray-300
            hover:bg-gray-100

            dark:border-[#3a3a3a]
            dark:text-gray-100
            dark:hover:bg-[#262626]

            transition
          "
        >
          Explore shows
        </Link>

      </div>
    </main>
  )
}