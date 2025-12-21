"use client";

import Link from "next/link";
import { Home, Search, ShoppingBag } from "lucide-react";
import { ROUTES } from "@/app/constants/routes";
import { useUIStore } from "@/app/store/ui-store";

export default function BottomNav() {
  const openMiniCart = useUIStore((s) => s.openMiniCart);

  return (
    <nav className="fixed bottom-0 left-0 z-40 flex w-full justify-around border-t bg-white py-2 md:hidden">
      <Link href={ROUTES.HOME}>
        <Home />
      </Link>

      <button>
        <Search />
      </button>

      <button onClick={openMiniCart}>
        <ShoppingBag />
      </button>
    </nav>
  );
}
