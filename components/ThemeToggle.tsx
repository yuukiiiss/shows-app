"use client"

import { useEffect, useState } from "react"

export default function ThemeToggle({
  onThemeChange,
}: {
  onThemeChange?: (theme: "light" | "dark") => void
}) {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("theme")

    if (saved === "dark") {
      document.documentElement.classList.add("dark")
      setDark(true)
      onThemeChange?.("dark")
    } else {
      onThemeChange?.("light")
    }
  }, [])

  function toggleTheme() {
    if (dark) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setDark(false)
      onThemeChange?.("light")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setDark(true)
      onThemeChange?.("dark")
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-6 rounded-full transition
                 bg-gray-300 dark:bg-gray-700"
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full
                    bg-white shadow transition transform
                    ${dark ? "translate-x-6" : ""}`}
      />
    </button>
  )
}