"use client"

import { useEffect, useRef, useState } from "react"

export default function FilterBar({
  children,
}: {
  children: React.ReactNode
}) {
  const [visible, setVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const lastScroll = useRef(0)

  useEffect(() => {
    function handleScroll() {
      const current = window.scrollY

      setScrolled(current > 8)

      if (Math.abs(current - lastScroll.current) < 10) return

      if (current > lastScroll.current && current > 120) {
        setVisible(false)
      } else {
        setVisible(true)
      }

      lastScroll.current = current
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`
        sticky top-20 z-20
        transition-all duration-300 ease-out
        ${visible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}
        ${scrolled ? "shadow-[0_10px_30px_-18px_rgba(0,0,0,0.45)]" : ""}
      `}
    >
      {children}
    </div>
  )
}