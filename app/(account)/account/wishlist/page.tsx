"use client";

import Link from "next/link";
import { useState } from "react";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";

import { DUMMY_WISHLIST } from "@/app/lib/dummy-wishlist";
import { formatPrice } from "@/app/lib/format";
import { useCartStore } from "@/app/store/cart-store";

export default function WishlistPage() {
  const [items, setItems] = useState(DUMMY_WISHLIST);
  const addToCart = useCartStore((s) => s.addItem);

  const handleRemove = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  if (items.length === 0) {
    return (
      <div>
        <h1 className="mb-4 text-2xl font-bold">My Wishlist</h1>
        <div className="rounded-lg border p-8 text-center">
          <Heart className="mx-auto mb-3 h-8 w-8 text-gray-400" />
          <p className="text-muted-foreground">Your wishlist is empty.</p>
          <Link href="/shop" className="mt-4 inline-block text-sm underline">
            Browse products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">My Wishlist</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-lg border bg-white"
          >
            {/* Image */}
            <Link href={`/shop/product/${item.slug}`}>
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full rounded-t-lg object-cover"
              />
            </Link>

            {/* Content */}
            <div className="p-4">
              <Link href={`/shop/product/${item.slug}`}>
                <h3 className="line-clamp-2 text-sm font-medium">
                  {item.title}
                </h3>
              </Link>

              <p className="mt-2 text-sm font-semibold">
                {formatPrice(item.priceCents)}
              </p>

              {/* Actions */}
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() =>
                    addToCart({
                      variantId: item.id,
                      title: item.title,
                      priceCents: item.priceCents,
                      quantity: 1,
                      image: item.image,
                    })
                  }
                  className="flex flex-1 items-center justify-center gap-2 rounded-md bg-black px-3 py-2 text-sm text-white"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Add to Cart
                </button>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="rounded-md border px-3 py-2 text-sm text-gray-500 hover:text-red-600"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Heart icon */}
            <Heart className="absolute right-3 top-3 h-5 w-5 fill-red-500 text-red-500" />
          </div>
        ))}
      </div>
    </div>
  );
}
