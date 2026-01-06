"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingBag, User, Menu, Search } from "lucide-react";

import { useCartStore } from "@/app/store/cart-store";
import { useUIStore } from "@/app/store/ui-store";
import SearchModal from "./SearchModal";
import { cn } from "@/app/utils/cn";
import { ROUTES } from "@/app/constants/routes";
import SideDrawer from "./SideDrawer";
import { useHideOnScroll } from "@/app/hooks/useHideOnScroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const totalItems = useCartStore((s) => s.totalItems);
  const openMiniCart = useUIStore((s) => s.openMiniCart);
  const openSearch = useUIStore((s) => s.openSearch);
  const isSearchOpen = useUIStore((s) => s.isSearchOpen);
  const closeSearch = useUIStore((s) => s.closeSearch);
  const hidden = useHideOnScroll();

  return (
    <>
      {/* ==================== */}
      {/* HEADER */}
      {/* ==================== */}

      <header
        className={cn(
          "z-50 w-full border bg-white transition-transform duration-300",
          hidden && "-translate-y-full md:translate-y-0",
          "md:sticky md:top-0",
          "fixed bottom-0 md:relative"
        )}
      >
        <SideDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* -------------------- */}
          {/* LEFT: Hamburger (ALL SCREENS) */}
          {/* -------------------- */}
          <div className="flex w-1/3 items-center">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              style={{ cursor: "pointer" }}
            >
              <Menu onClick={() => setDrawerOpen(true)} className="h-6 w-6" />
            </button>
          </div>

          {/* -------------------- */}
          {/* CENTER: Logo */}
          {/* -------------------- */}
          <div className="flex w-1/3 justify-center">
            <Link
              href={ROUTES.HOME}
              className="text-lg font-bold tracking-wide"
            >
              ABC<span className="font-light">SHOP</span>
            </Link>
          </div>

          {/* -------------------- */}
          {/* RIGHT: Icons */}
          {/* -------------------- */}
          <div className="flex w-1/3 items-center justify-end gap-4">
            {/* Search */}
            <button
              aria-label="Search"
              onClick={() => openSearch()}
              style={{ cursor: "pointer" }}
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Account */}
            <Link href={ROUTES.ACCOUNT} aria-label="Account">
              <User className="h-5 w-5" />
            </Link>

            {/* Cart */}
            <Link
              href={ROUTES.CART}
              className="relative"
              aria-label="Cart"
              style={{ cursor: "pointer" }}
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* -------------------- */}
        {/* MOBILE / DESKTOP MENU */}
        {/* -------------------- */}
        {/* <div
          className={cn(
            "overflow-hidden border-t bg-white transition-all",
            open ? "max-h-60" : "max-h-0"
          )}
        >
          <nav className="flex flex-col gap-4 p-4 text-sm">
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
        </div> */}
      </header>

      {/* Spacer for mobile bottom bar */}
      <div className="h-16 md:hidden" />
      <SearchModal open={isSearchOpen} onClose={closeSearch} />
    </>
  );
}
