import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

type Movie = {
  id: number;
  title: string;
  vote_average?: number;
  poster_path?: string | null;
};

export default function MovieCard({ movie }: { movie: Movie }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  return (
    <Link href={`/movies/${movie.id}`}>
      <div className="group rounded-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl">
        <div className="relative rounded-xl overflow-hidden bg-white dark:bg-gray-900 shadow-md flex flex-col transition-all duration-300 ease-out">
          <FavoriteButton movie={movie} />

          <div className="relative w-full aspect-[2/3] bg-gray-200 overflow-hidden">
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={movie.title}
                fill
                className="object-cover transition-all duration-300 ease-out group-hover:scale-[1.02]"
              />
            )}

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 ease-out" />
          </div>

          <div className="px-4 pt-3 pb-4 flex flex-col flex-1">
            <div className="mt-1 flex flex-col gap-1.5 h-[64px]">
              <h2 className="font-semibold line-clamp-2 leading-tight">
                {movie.title}
              </h2>
              <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                <span className="text-amber-400 text-sm">★</span>
                <span>{movie.vote_average?.toFixed(1) ?? "N/A"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
