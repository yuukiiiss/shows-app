const API_KEY = process.env.TMDB_API_KEY
const BASE_URL = "https://api.themoviedb.org/3"

export async function getTrendingMovies() {
  const res = await fetch(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
  )

  const data = await res.json()
  return data.results
}

export async function getMovieDetail(id: string) {
  const res = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  )

  const data = await res.json()
  return data
}

export async function discoverMovies(genre?: string, query?: string) {
  let url = `${BASE_URL}/discover/movie?api_key=${API_KEY}`

  if (genre) {
    url += `&with_genres=${genre}`
  }

  if (query) {
    url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  }

  const res = await fetch(url)
  const data = await res.json()

  return data.results
}