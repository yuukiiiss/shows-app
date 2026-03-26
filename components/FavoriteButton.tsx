"use client"

import { useFavorite } from "@/context/FavoriteContext"
import { useState, useEffect } from "react"
import { createPortal } from "react-dom"

type Movie = {
  id: number
  title: string
  poster_path?: string | null
  vote_average?: number
  media_type?: "movie" | "tv"
}

export default function FavoriteButton({ movie }: { movie: Movie }) {
  const { toggleFavorite, isFavorite } = useFavorite()
  const favorite = isFavorite(movie.id)

  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  function handleClick(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()

    if (favorite) {
      setOpen(true)
      return
    }

    toggleFavorite(movie)
  }

  function confirmRemove(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    toggleFavorite(movie)
    setOpen(false)
  }

  function close(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    setOpen(false)
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="p-1.5 transition hover:scale-110 active:scale-95"
        aria-label="Toggle favorite"
      >
        <svg
          viewBox="0 0 24 24"
          className={`
            w-5 h-5 transition-all duration-200
            ${
              favorite
                ? "fill-rose-500 stroke-rose-500"
                : "fill-transparent stroke-gray-600 dark:stroke-gray-300 hover:stroke-rose-400"
            }
          `}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12.1 21s-7.1-4.4-9.2-8.6C1.4 8.6 3.3 4 7.6 5.1c1.7.4 2.8 1.7 4.5 3.6 1.7-1.9 2.8-3.2 4.5-3.6C20.9 4 22.8 8.6 21.3 12.4 19.2 16.6 12.1 21 12.1 21z" />
        </svg>
      </button>

      {mounted &&
        open &&
        createPortal(
          <div
            className="
              fixed inset-0 z-[9999]
              flex items-center justify-center
              bg-black/40 backdrop-blur-sm
            "
            onClick={close}
          >
            <div
              className="
                bg-white
                dark:bg-[#262626]
                rounded-3xl
                px-8 py-7
                shadow-2xl
                dark:shadow-[0_25px_60px_rgba(0,0,0,0.75)]
                w-[360px]
                text-center
                animate-[fadeIn_.18s_ease]
              "
              onClick={(e) => e.stopPropagation()}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-9 h-9 mx-auto mb-4 fill-rose-500"
              >
                <path d="M12.1 21s-7.1-4.4-9.2-8.6C1.4 8.6 3.3 4 7.6 5.1c1.7.4 2.8 1.7 4.5 3.6 1.7-1.9 2.8-3.2 4.5-3.6C20.9 4 22.8 8.6 21.3 12.4 19.2 16.6 12.1 21 12.1 21z" />
              </svg>

              <h3 className="font-semibold mb-2 text-black dark:text-gray-100">
                Remove from favorites?
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                You can always add it again later.
              </p>

              <div className="flex justify-center gap-3">
                <button
                  onClick={close}
                  className="
                    px-4 py-2 rounded-lg text-sm
                    bg-gray-100
                    dark:bg-[#2c2c2c]
                    hover:bg-gray-200
                    dark:hover:bg-[#343434]
                    transition
                  "
                >
                  Cancel
                </button>

                <button
                  onClick={confirmRemove}
                  className="
                    px-4 py-2 rounded-lg text-sm
                    border border-rose-400
                    text-rose-500
                    hover:bg-rose-500 hover:text-white
                    transition
                  "
                >
                  Remove
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}