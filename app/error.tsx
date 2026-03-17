"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="text-6xl mb-6">🎬</div>

        <h1 className="text-2xl font-semibold mb-3">Unable to load shows</h1>

        <p className="text-gray-500 mb-8 leading-relaxed">
          Please check your internet connection or try again in a moment.
        </p>

        <button
          onClick={() => {
            reset();
            setTimeout(() => {
              window.location.reload();
            }, 100);
          }}
          className="px-6 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-100 transition font-medium"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
