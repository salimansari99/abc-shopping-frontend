"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingBag, User, Menu, X } from "lucide-react";

import { cn } from "@/app/utils/cn";
import { ROUTES } from "@/app/constants/routes";
// import { useCartStore } from "@/store/cart-store"; // later
// import { useAuth } from "@/hooks/useAuth";         // later

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // const cartCount = useCartStore((s) => s.totalItems);
  const cartCount = 0;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Left: Logo */}
        <Link href={ROUTES.HOME} className="text-xl font-bold tracking-wide">
          ABC<span className="font-light">SHOP</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href={ROUTES.SHOP} className="nav-link">
            Shop
          </Link>
          <Link href={ROUTES.COLLECTIONS} className="nav-link">
            Collections
          </Link>
          <Link href={ROUTES.ACCOUNT} className="nav-link">
            Account
          </Link>
        </nav>

        {/* Right: Icons */}
        <div className="flex items-center gap-4">
          {/* Account */}
          <Link href={ROUTES.ACCOUNT} aria-label="Account">
            <User className="h-5 w-5" />
          </Link>

          {/* Cart */}
          <Link href={ROUTES.CART} className="relative" aria-label="Cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden border-t bg-white transition-all",
          open ? "max-h-60" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-4 p-4">
          <Link href={ROUTES.SHOP} onClick={() => setOpen(false)}>
            Shop
          </Link>
          <Link href={ROUTES.COLLECTIONS} onClick={() => setOpen(false)}>
            Collections
          </Link>
          <Link href={ROUTES.ACCOUNT} onClick={() => setOpen(false)}>
            Account
          </Link>
        </nav>
      </div>
    </header>
  );
}
