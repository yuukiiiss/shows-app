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
        ${dark ? "bg-gray-700" : "bg-gray-300"}
      `}
    >
      <span
        className={`
          absolute top-0.5 left-0.5 w-5 h-5 rounded-full
          flex items-center justify-center text-[11px]
          shadow-md transition-all duration-300
          ${dark
            ? "translate-x-6 bg-gray-900 text-indigo-300"
            : "bg-white text-yellow-500"}
        `}
      >
        {dark ? "🌙" : "☀️"}
      </span>
    </button>
  )
}