"use client"

import { useEffect } from "react"
import ErrorState from "@/components/ErrorState"

export default function MovieDetailError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <ErrorState
      icon="🎬"
      onRetry={() => {
        reset()
        setTimeout(() => window.location.reload(), 100)
      }}
    />
  )
}