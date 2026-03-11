import Image from "next/image"

type Movie = {
  id: number
  title: string
  vote_average: number
  poster_path: string
}

export default function MovieCard({ movie }: { movie: Movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  return (
    <div className="border rounded overflow-hidden">
      <Image
        src={imageUrl}
        alt={movie.title}
        width={500}
        height={750}
        className="w-full"
      />

      <div className="p-3">
        <h2 className="font-semibold">{movie.title}</h2>
        <p>⭐ {movie.vote_average.toFixed(1)}</p>
      </div>
    </div>
  )
}