"use client"

import { useEffect, useRef, useState } from "react"

export default function FilterBar({
  children,
}: {
  children: React.ReactNode
}) {
  const [visible, setVisible] = useState(true)
  const [isSticky, setIsSticky] = useState(false)
  const lastScroll = useRef(0)

  useEffect(() => {
    function handleScroll() {
      const current = window.scrollY

      setIsSticky(current > 60)

      if (current < 60) {
        setVisible(true)
        lastScroll.current = current
        return
      }

      if (current > lastScroll.current) {
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
        ${isSticky ? "sticky top-20 z-20 py-1" : ""}
        transition-all duration-300 ease-out
        ${visible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}
      `}
    >
      {children}
    </div>
  )
}