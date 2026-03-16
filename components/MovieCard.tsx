import Link from "next/link"
import Image from "next/image"
import FavoriteButton from "./FavoriteButton"

type Movie = {
  id: number
  title: string
  vote_average?: number
  poster_path?: string | null
}

export default function MovieCard({ movie }: { movie: Movie }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null

  return (
    <Link href={`/movies/${movie.id}`}>
      <div className="group transition transform hover:-translate-y-1 hover:shadow-2xl rounded-xl">

        <div className="relative border rounded-xl overflow-hidden bg-white dark:bg-gray-900 flex flex-col">

          <FavoriteButton movie={movie} />

          <div className="relative w-full aspect-[2/3] bg-gray-200">
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={movie.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-[1.03]"
              />
            )}
          </div>

          <div className="p-4 flex flex-col gap-2 flex-1">
            <h2 className="font-semibold line-clamp-2 min-h-[48px]">
              {movie.title}
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              ⭐ {movie.vote_average?.toFixed(1) ?? "N/A"}
            </p>
          </div>

        </div>

      </div>
    </Link>
  )
}