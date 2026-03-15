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
      className="border px-3 py-1 rounded"
    >
      {dark ? "Light" : "Dark"}
    </button>
  )
}