"use client"

import { useFavorite } from "@/context/FavoriteContext"
import { useState, useEffect } from "react"
import { createPortal } from "react-dom"

type Movie = {
  id: number
  title: string
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

  function closeModal(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    setOpen(false)
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="
          p-1.5
          transition
          hover:opacity-70
          active:scale-95
        "
        aria-label="Toggle favorite"
      >
        <svg
          viewBox="0 0 24 24"
          className={`
            w-5 h-5
            transition
            ${
              favorite
                ? "fill-slate-600 dark:fill-slate-300 stroke-slate-600 dark:stroke-slate-300"
                : "fill-transparent stroke-gray-700 dark:stroke-gray-300"
            }
          `}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 3h12v18l-6-4-6 4z" />
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
            onClick={closeModal}
          >
            <div
              className="
                bg-white dark:bg-gray-900
                rounded-2xl
                px-7 py-6
                shadow-2xl
                w-[340px]
                text-center
              "
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-sm mb-6">
                Remove from favorites?
              </p>

              <div className="flex justify-center gap-3">
                <button
                  onClick={closeModal}
                  className="
                    px-4 py-2
                    rounded-lg
                    text-sm
                    bg-gray-100 dark:bg-gray-800
                    hover:bg-gray-200 dark:hover:bg-gray-700
                    transition
                  "
                >
                  Cancel
                </button>

                <button
                  onClick={confirmRemove}
                  className="
                    px-4 py-2
                    rounded-lg
                    text-sm
                    bg-slate-700 text-white
                    hover:bg-slate-800
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