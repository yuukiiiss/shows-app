export default function LoadingHome() {
    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">
          Loading trending movies...
        </h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-[350px] bg-gray-200 animate-pulse rounded"
            />
          ))}
        </div>
      </main>
    )
  }