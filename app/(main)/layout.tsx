import Navbar from "@/components/Navbar"
import { Suspense } from "react"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Suspense>
        <Navbar />
      </Suspense>

      <main className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
        {children}
      </main>
    </>
  )
}