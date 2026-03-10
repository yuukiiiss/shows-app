type Movie = {
    id: number
    title: string
    vote_average: number
  }
  
  export default function MovieCard({ movie }: { movie: Movie }) {
    return (
      <div className="border p-4 rounded">
        <h2 className="font-semibold">{movie.title}</h2>
        <p>⭐ {movie.vote_average}</p>
      </div>
    )
  }