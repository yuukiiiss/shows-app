export default function Loading() {
  return (
    <main className="max-w-screen-2xl mx-auto px-6 lg:px-10 py-10">

      <div className="mb-6">
        <div className="h-10 w-64 bg-gray-200 dark:bg-[#303030] rounded animate-pulse" />
        <div className="h-4 w-80 bg-gray-200 dark:bg-[#303030] rounded mt-2 animate-pulse" />
      </div>

      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="h-11 flex-1 bg-gray-200 dark:bg-[#303030] rounded-xl animate-pulse" />
          <div className="h-11 md:w-56 bg-gray-200 dark:bg-[#303030] rounded-xl animate-pulse" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="
              rounded-2xl overflow-hidden flex flex-col
              bg-white
              dark:bg-[#262626]
              shadow-md
              dark:shadow-[0_8px_25px_rgba(0,0,0,0.45)]
            "
          >
            <div className="w-full aspect-[2/3] bg-gray-200 dark:bg-[#303030] animate-pulse" />

            <div className="px-4 pt-3 pb-4 flex flex-col gap-2">
              <div className="h-4 w-3/4 bg-gray-200 dark:bg-[#303030] rounded animate-pulse" />
              <div className="h-4 w-1/2 bg-gray-200 dark:bg-[#303030] rounded animate-pulse" />
              <div className="h-3 w-16 bg-gray-200 dark:bg-[#303030] rounded mt-1 animate-pulse" />
            </div>
          </div>
        ))}
      </div>

    </main>
  )
}