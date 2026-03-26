"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Movie = {
  id: number
  title: string
  poster_path?: string | null
  vote_average?: number
  media_type?: "movie" | "tv"
}

type FavoriteContextType = {
  favorites: Movie[]
  toggleFavorite: (movie: Movie) => void
  isFavorite: (id: number) => boolean
}

const FavoriteContext = createContext<FavoriteContextType | null>(null)

export function FavoriteProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [favorites, setFavorites] = useState<Movie[]>([])

  useEffect(() => {
    const stored = localStorage.getItem("favorites")

    if (stored) {
      setFavorites(JSON.parse(stored))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  function toggleFavorite(movie: Movie) {
    setFavorites((prev) => {
      const exists = prev.find((m) => m.id === movie.id)

      if (exists) {
        return prev.filter((m) => m.id !== movie.id)
      }

      return [...prev, movie]
    })
  }

  function isFavorite(id: number) {
    return favorites.some((m) => m.id === id)
  }

  return (
    <FavoriteContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  )
}

export function useFavorite() {
  const ctx = useContext(FavoriteContext)

  if (!ctx) {
    throw new Error("useFavorite must be used inside FavoriteProvider")
  }

  return ctx
}