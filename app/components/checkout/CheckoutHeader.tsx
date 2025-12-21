"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CheckoutHeader() {
  const router = useRouter();

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto flex h-16 max-w-4xl items-center justify-between px-4">
        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-black"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* <Image
            src="/logo.svg" // or /logo.png
            alt="Brand Logo"
            width={32}
            height={32}
          /> */}
          <span className="text-lg font-semibold tracking-tight">
            ABC<span className="font-normal">SHOP</span>
          </span>
        </Link>

        {/* Spacer (keeps logo centered) */}
        <div className="w-16" />
      </div>
    </header>
  );
}
