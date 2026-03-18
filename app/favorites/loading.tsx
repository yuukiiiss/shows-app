export default function Loading() {
  return (
    <main className="p-8 animate-pulse">
      <div className="h-8 w-48 bg-gray-200 dark:bg-[#2f2f2f] rounded mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="
              rounded-2xl overflow-hidden flex flex-col
              bg-white
              dark:bg-[#262626]
              shadow-md
              dark:shadow-[0_10px_28px_rgba(0,0,0,0.5)]
            "
          >
            <div className="aspect-[2/3] bg-gray-200 dark:bg-[#2f2f2f]" />

            <div className="p-4 space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-[#2f2f2f] rounded w-3/4" />
              <div className="h-3 bg-gray-200 dark:bg-[#2f2f2f] rounded w-1/3" />
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}