export default function Loading() {
  return (
    <main className="p-8">

      <div className="h-8 w-56 bg-gray-200 dark:bg-gray-800 rounded mb-6 animate-pulse" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden bg-white dark:bg-gray-900 shadow-md flex flex-col"
          >
            <div className="w-full aspect-[2/3] bg-gray-200 dark:bg-gray-800 animate-pulse" />

            <div className="px-4 pt-3 pb-4 flex flex-col gap-2">

              <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />

              <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />

              <div className="h-3 w-16 bg-gray-200 dark:bg-gray-800 rounded mt-1 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}