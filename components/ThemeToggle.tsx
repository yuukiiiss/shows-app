"use client"

import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("theme")

    if (saved === "dark") {
      document.documentElement.classList.add("dark")
      setDark(true)
    }
  }, [])

  function toggleTheme() {
    if (dark) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setDark(false)
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setDark(true)
    }
  }

  return (
    <button
      onClick={toggleTheme}
      title="Switch theme"
      className={`
        relative w-12 h-6 rounded-full transition-colors duration-300
        ${dark ? "bg-gray-700" : "bg-gray-100"}
      `}
    >
      <span
        className={`
          absolute top-0.5 left-0.5 w-5 h-5 rounded-full
          flex items-center justify-center
          shadow-sm transition-all duration-300
          ${dark
            ? "translate-x-6 bg-gray-900 text-indigo-300"
            : "bg-white"}
        `}
      >
        {dark ? (
          "🌙"
        ) : (
          <svg
            viewBox="0 0 24 24"
            className="w-3.5 h-3.5 text-amber-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4" fill="currentColor" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="M4.93 4.93l1.41 1.41" />
            <path d="M17.66 17.66l1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="M4.93 19.07l1.41-1.41" />
            <path d="M17.66 6.34l1.41-1.41" />
          </svg>
        )}
      </span>
    </button>
  )
}