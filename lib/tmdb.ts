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

    if (res.status === 404) {
      return null
    }

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

function normalizeMedia(items: any[], type: "movie" | "tv") {
  return items.map((item) => ({
    id: item.id,
    title: item.title || item.name,
    date: item.release_date || item.first_air_date,
    poster_path: item.poster_path,
    vote_average: item.vote_average,
    media_type: type,
  }))
}


export async function getTrendingMovies() {
  const data = await fetchFromTMDB(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
  )

  return normalizeMedia(data.results, "movie")
}

export async function getTrendingTV() {
  const data = await fetchFromTMDB(
    `${BASE_URL}/trending/tv/week?api_key=${API_KEY}`
  )

  return normalizeMedia(data.results, "tv")
}

export async function getTrendingMedia() {
  const [movies, tv] = await Promise.all([
    getTrendingMovies(),
    getTrendingTV(),
  ])

  return [...movies, ...tv]
}


export async function getMovieDetail(id: string) {
  return fetchFromTMDB(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  )
}

export async function getTVDetail(id: string) {
  return fetchFromTMDB(
    `${BASE_URL}/tv/${id}?api_key=${API_KEY}`
  )
}


export async function searchMedia(query: string) {
  const data = await fetchFromTMDB(
    `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${query}`
  )

  const filtered = data.results.filter(
    (item: any) =>
      item.media_type === "movie" || item.media_type === "tv"
  )

  return filtered.map((item: any) => ({
    id: item.id,
    title: item.title || item.name,
    date: item.release_date || item.first_air_date,
    poster_path: item.poster_path,
    vote_average: item.vote_average,
    media_type: item.media_type,
  }))
}

export async function discoverMovies(genre?: string) {
  let url = `${BASE_URL}/discover/movie?api_key=${API_KEY}`

  if (genre) url += `&with_genres=${genre}`

  const data = await fetchFromTMDB(url)

  return normalizeMedia(data.results, "movie")
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