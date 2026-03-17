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

async function fetchFromTMDB(url: string) {
  const controller = new AbortController()

  const timeout = setTimeout(() => {
    controller.abort()
  }, 8000)

  try {
    const res = await fetch(url, {
      cache: "no-store",
      signal: controller.signal,
    })

    clearTimeout(timeout)

    if (!res.ok) {
      throw new Error(`TMDB request failed: ${res.status}`)
    }

    return await res.json()
  } catch (err) {
    clearTimeout(timeout)

    if ((err as any).name === "AbortError") {
      throw new Error("Request timeout")
    }

    throw new Error("Failed to fetch from TMDB")
  }
}

export async function getTrendingMovies() {
  const data = await fetchFromTMDB(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
  )

  return data.results
}

export async function getMovieDetail(id: string) {
  const data = await fetchFromTMDB(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  )

  return data
}

export async function discoverMovies(genre?: string, query?: string) {
  let url = `${BASE_URL}/discover/movie?api_key=${API_KEY}`

  if (genre) url += `&with_genres=${genre}`
  if (query)
    url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`

  const data = await fetchFromTMDB(url)

  return data.results
}

export async function getGenres() {
  try {
    const data = await fetchFromTMDB(
      `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
    )

    if (!data.genres || data.genres.length === 0) {
      return FALLBACK_GENRES
    }

    return data.genres
  } catch {
    return FALLBACK_GENRES
  }
}