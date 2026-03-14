const API_KEY = process.env.TMDB_API_KEY
const BASE_URL = "https://api.themoviedb.org/3"

const FALLBACK_GENRES = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 18, name: "Drama" },
  { id: 27, name: "Horror" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
]

export async function getTrendingMovies() {
  try {
    const res = await fetch(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
    )

    const data = await res.json()
    return data.results || []
  } catch (error) {
    console.error("Trending fetch error:", error)
    return []
  }
}

export async function getMovieDetail(id: string) {
  try {
    const res = await fetch(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    )

    const data = await res.json()
    return data
  } catch (error) {
    console.error("Detail fetch error:", error)
    return null
  }
}

export async function discoverMovies(genre?: string, query?: string) {
  try {
    let url = `${BASE_URL}/discover/movie?api_key=${API_KEY}`

    if (genre) {
      url += `&with_genres=${genre}`
    }

    if (query) {
      url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    }

    const res = await fetch(url)
    const data = await res.json()

    return data.results || []
  } catch (error) {
    console.error("Discover fetch error:", error)
    return []
  }
}

export async function getGenres() {
  try {
    const res = await fetch(
      `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
    )

    const data = await res.json()

    // ⭐ jika API return kosong → pakai fallback
    if (!data.genres || data.genres.length === 0) {
      return FALLBACK_GENRES
    }

    return data.genres
  } catch (error) {
    console.error("Genre fetch error:", error)

    // ⭐ offline / fetch gagal → pakai fallback
    return FALLBACK_GENRES
  }
}