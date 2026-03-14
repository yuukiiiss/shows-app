export default function MovieDetailLoading() {
    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">
          Loading movie detail...
        </h1>
  
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-[300px] h-[450px] bg-gray-200 animate-pulse rounded" />
  
          <div className="flex-1 space-y-4">
            <div className="h-10 bg-gray-200 animate-pulse rounded w-2/3" />
            <div className="h-6 bg-gray-200 animate-pulse rounded w-1/4" />
            <div className="h-4 bg-gray-200 animate-pulse rounded w-full" />
            <div className="h-4 bg-gray-200 animate-pulse rounded w-full" />
            <div className="h-4 bg-gray-200 animate-pulse rounded w-5/6" />
          </div>
        </div>
      </main>
    )
  }