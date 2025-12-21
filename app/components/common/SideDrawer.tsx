"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { ROUTES } from "@/app/constants/routes";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function SideDrawer({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Drawer */}
      <aside className="absolute left-0 top-0 h-full w-72 bg-white p-6 shadow-xl">
        <button onClick={onClose} className="mb-6">
          <X />
        </button>

        <nav className="flex flex-col gap-4 text-sm">
          <Link href={ROUTES.SHOP} onClick={onClose}>
            Shop
          </Link>
          <Link href={ROUTES.COLLECTIONS} onClick={onClose}>
            Collections
          </Link>
          <Link href={ROUTES.ACCOUNT} onClick={onClose}>
            My Account
          </Link>
        </nav>
      </aside>
    </div>
  );
}
