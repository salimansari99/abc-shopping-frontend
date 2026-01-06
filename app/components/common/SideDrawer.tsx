"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { X, Search, ShoppingBag, User } from "lucide-react";
import { ROUTES } from "@/app/constants/routes";
import { useUIStore } from "@/app/store/ui-store";
import { useCartStore } from "@/app/store/cart-store";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function SideDrawer({ open, onClose }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  const openSearch = useUIStore((s) => s.openSearch);
  const totalItems = useCartStore((s) => s.totalItems);
  const totalPrice = useCartStore((s) => s.totalPrice);

  // Mount animation and focus
  useEffect(() => {
    if (!open) return;
    // prevent background scroll
    document.body.style.overflow = "hidden";

    // animate in
    requestAnimationFrame(() => setIsVisible(true));

    // focus close button after mount
    const timer = setTimeout(() => {
      const btn = ref.current?.querySelector(
        "button[data-close]"
      ) as HTMLButtonElement | null;
      btn?.focus();
    }, 50);

    // handle Escape and focus trap
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();

      if (e.key === "Tab") {
        const focusable = Array.from(
          (ref.current || document.body).querySelectorAll(
            'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
          )
        ) as HTMLElement[];
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
      setIsVisible(false);
    };
  }, [open, onClose]);

  // Don't render when closed to avoid tabbing into DOM
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50" onClick={onClose}>
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden
      />

      {/* Drawer */}
      <aside
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`absolute left-0 top-0 h-full w-80 bg-white p-6 shadow-xl transform transition-transform duration-300 ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header: logo, close */}
        <div className="mb-6 flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold">
            ABC<span className="font-light">SHOP</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={() => openSearch()}
              aria-label="Search"
              className="rounded-md p-2 hover:bg-gray-100"
              style={{ cursor: "pointer" }}
            >
              <Search className="h-4 w-4" />
            </button>

            <button
              data-close
              onClick={onClose}
              className="rounded-md p-2 hover:bg-gray-100"
              style={{ cursor: "pointer" }}
            >
              <X />
            </button>
          </div>
        </div>

        <nav className="flex flex-col gap-3 text-sm">
          <Link href={ROUTES.SHOP} onClick={onClose} className="py-2">
            Shop
          </Link>
          <Link href={ROUTES.COLLECTIONS} onClick={onClose} className="py-2">
            Collections
          </Link>
          <Link href={ROUTES.ACCOUNT} onClick={onClose} className="py-2">
            My Account
          </Link>
        </nav>

        <div className="mt-6 border-t pt-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" />
              <span>{totalItems} items</span>
            </div>
            <div className="text-sm font-semibold">
              {totalItems ? `Total: ${formatPrice(totalPrice)}` : "—"}
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <Link
              href="/checkout"
              onClick={onClose}
              className="flex-1 rounded-md bg-black px-3 py-2 text-center text-sm text-white"
            >
              Checkout
            </Link>
            <Link
              href="/cart"
              onClick={onClose}
              className="rounded-md border px-3 py-2 text-sm"
            >
              View Cart
            </Link>
          </div>
        </div>

        <div className="mt-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="h-3 w-3" />
            <Link href={ROUTES.ACCOUNT} onClick={onClose} className="underline">
              Manage your account
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}

function formatPrice(cents: number) {
  return cents ? `$${(cents / 100).toFixed(2)}` : "";
}
