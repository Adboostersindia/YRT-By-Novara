"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-5 text-center">
      <span className="font-serif text-[120px] md:text-[180px] leading-none text-[#B07040] select-none">
        !
      </span>
      <h1 className="font-sans text-white text-xl md:text-2xl tracking-widest uppercase mt-4 mb-4">
        Something went wrong
      </h1>
      <p className="font-sans text-neutral-400 text-sm max-w-sm leading-relaxed mb-10">
        An unexpected error occurred. Please try again, or contact us if the
        problem persists.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <button
          onClick={reset}
          className="inline-flex items-center px-8 py-3 bg-[#B07040] text-white font-sans text-xs tracking-widest uppercase hover:bg-[#9a6235] transition-all duration-300"
        >
          Try again
        </button>
        <a
          href="/"
          className="inline-flex items-center px-8 py-3 border border-[#B07040] text-[#B07040] font-sans text-xs tracking-widest uppercase hover:bg-[#B07040] hover:text-white transition-all duration-300"
        >
          Back to home
        </a>
      </div>
      <a
        href="/"
        className="font-sans font-medium text-[15px] tracking-[0.2em] uppercase text-white flex items-center mt-16"
      >
        NOVARA<span className="font-serif text-[18px] text-[#B07040] ml-1.5 normal-case">π</span>
      </a>
    </main>
  );
}
