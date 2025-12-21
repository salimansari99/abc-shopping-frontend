"use client";

import Link from "next/link";
import { useState } from "react";
import { User } from "lucide-react";

export default function AccountDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)}>
        <User className="h-5 w-5" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-md border bg-white shadow">
          <Link
            href="/account"
            className="block px-3 py-2 text-sm hover:bg-gray-100"
          >
            Dashboard
          </Link>
          <Link
            href="/account/orders"
            className="block px-3 py-2 text-sm hover:bg-gray-100"
          >
            Orders
          </Link>
          <button className="block w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
