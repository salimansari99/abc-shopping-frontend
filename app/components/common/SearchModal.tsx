"use client";

import { useEffect, useMemo, useState } from "react";
import { X, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { DUMMY_PRODUCTS } from "@/app/lib/dummy-products";
import { formatPrice } from "@/app/lib/format";

export default function SearchModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!open) return;
    setQuery("");
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return DUMMY_PRODUCTS.filter((p) => {
      return (
        p.title.toLowerCase().includes(q) ||
        (p.description || "").toLowerCase().includes(q) ||
        p.slug.toLowerCase().includes(q)
      );
    });
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40">
      <div className="mx-auto mt-24 max-w-xl rounded-lg bg-white p-4">
        <div className="flex items-center gap-2 border-b pb-2">
          <Search className="h-4 w-4" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && results[0]) {
                onClose();
                router.push(`/shop/product/${results[0].slug}`);
              }
            }}
            placeholder="Search products..."
            className="w-full text-sm outline-none"
          />
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="mt-4">
          {!query && (
            <div className="text-sm text-muted-foreground">Start typing to search products</div>
          )}

          {query && results.length === 0 && (
            <div className="text-sm text-muted-foreground">No products found</div>
          )}

          {results.length > 0 && (
            <ul className="mt-2 space-y-2">
              {results.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/shop/product/${p.slug}`}
                    onClick={() => onClose()}
                    className="flex items-center gap-3 rounded-md p-2 hover:bg-gray-50"
                  >
                    <div className="h-12 w-10 overflow-hidden rounded-md">
                      <Image
                        src={p.images?.[0]?.url ?? "/images/placeholder.webp"}
                        alt={p.title}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{p.title}</p>
                        <p className="text-sm text-muted-foreground">{formatPrice(p.variants?.[0]?.priceCents ?? 0)}</p>
                      </div>
                      <p className="text-xs text-muted-foreground">{p.description}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
