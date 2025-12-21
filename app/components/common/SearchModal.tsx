"use client";

import { useEffect } from "react";
import { X, Search } from "lucide-react";

export default function SearchModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40">
      <div className="mx-auto mt-32 max-w-xl rounded-lg bg-white p-4">
        <div className="flex items-center gap-2 border-b pb-2">
          <Search className="h-4 w-4" />
          <input
            autoFocus
            placeholder="Search products..."
            className="w-full text-sm outline-none"
          />
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="mt-4 text-sm text-muted-foreground">
          Start typing to search products
        </div>
      </div>
    </div>
  );
}
