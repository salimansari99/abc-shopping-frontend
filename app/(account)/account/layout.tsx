"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  Heart,
  MapPin,
  User,
  LogOut,
} from "lucide-react";
import clsx from "clsx";

const NAV_ITEMS = [
  {
    label: "Dashboard",
    href: "/account",
    icon: LayoutDashboard,
  },
  {
    label: "Orders",
    href: "/account/orders",
    icon: Package,
  },
  {
    label: "Wishlist",
    href: "/account/wishlist",
    icon: Heart,
  },
  {
    label: "Addresses",
    href: "/account/addresses",
    icon: MapPin,
  },
  {
    label: "Profile",
    href: "/account/profile",
    icon: User,
  },
];

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  // 🔐 Dummy auth (replace with real auth)
  const isAuthenticated = true;

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;

  return (
    <section className="container mx-auto max-w-7xl px-4 py-10">
      <div className="grid gap-8 md:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <aside className="h-fit rounded-xl border bg-white p-5">
          {/* User */}
          <div className="mb-6 border-b pb-4">
            <p className="text-sm text-muted-foreground">Signed in as</p>
            <p className="font-semibold">Salim Ansari</p>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;

              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition",
                    isActive
                      ? "bg-black text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Logout */}
          <button
            onClick={() => {
              // 🔌 logout later
              console.log("logout");
            }}
            className="mt-6 flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-red-600 hover:bg-red-50"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </aside>

        {/* Content */}
        <main className="min-h-[60vh] rounded-xl border bg-white p-6">
          {children}
        </main>
      </div>
    </section>
  );
}
