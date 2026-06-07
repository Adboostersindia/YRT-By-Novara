"use client";

import { useEffect } from "react";
import { closeLeadModal, useLeadModalOpen } from "@/lib/leadModalStore";
import { LeadFormFields } from "./LeadForm";

export default function LeadFormModal() {
  const open = useLeadModalOpen();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLeadModal();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center overflow-y-auto px-4 py-10 sm:py-8"
      role="dialog"
      aria-modal="true"
      aria-label="Book your free strategy call"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        aria-hidden="true"
        onClick={closeLeadModal}
      />

      {/* Modal card */}
      <div
        className="relative w-full max-w-lg my-auto rounded-2xl shadow-2xl overflow-hidden animate-modalIn"
        style={{ background: "linear-gradient(180deg, #F5F2ED 0%, #ECEAE4 100%)" }}
      >
        <button
          type="button"
          onClick={closeLeadModal}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-neutral-500 hover:bg-white hover:text-[#B07040] transition-colors duration-200"
        >
          <span aria-hidden="true" className="text-lg leading-none">✕</span>
        </button>

        <div className="px-6 py-10 md:px-10 max-h-[90vh] overflow-y-auto">
          <LeadFormFields compact />
        </div>
      </div>
    </div>
  );
}
