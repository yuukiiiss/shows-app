export default function Loading() {
  return (
    <main className="pt-14 pb-16 animate-pulse">
      <div className="grid md:grid-cols-[440px_1fr] lg:grid-cols-[520px_1fr] gap-16 items-start">

        <div className="w-full max-w-[520px] aspect-[2/3] bg-gray-200 dark:bg-gray-800 rounded-2xl" />

        <div className="flex flex-col">

          <div className="h-12 w-3/4 bg-gray-200 dark:bg-gray-800 rounded mb-3" />

          <div className="h-4 w-40 bg-gray-200 dark:bg-gray-800 rounded mb-4" />

          <div className="h-4 w-20 bg-gray-200 dark:bg-gray-800 rounded mb-8" />

          <div className="h-3 w-16 bg-gray-200 dark:bg-gray-800 rounded mb-2" />

          <div className="flex gap-2 mb-10">
            <div className="h-6 w-20 bg-gray-200 dark:bg-gray-800 rounded-full" />
            <div className="h-6 w-16 bg-gray-200 dark:bg-gray-800 rounded-full" />
            <div className="h-6 w-24 bg-gray-200 dark:bg-gray-800 rounded-full" />
          </div>

          <div className="h-3 w-20 bg-gray-200 dark:bg-gray-800 rounded mb-3" />

          <div className="space-y-2 max-w-2xl">
            <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded" />
            <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded" />
            <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-5/6" />
            <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-2/3" />
          </div>

        </div>
      </div>
    </main>
  )
}