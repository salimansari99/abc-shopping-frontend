"use client";

import { useCartStore } from "@/app/store/cart-store";
import Image from "next/image";
import { useUIStore } from "@/app/store/ui-store";
import { formatPrice } from "@/app/lib/format";

export default function MiniCart() {
  const { items, totalPrice, removeItem } = useCartStore();

  // use next/image for optimization

  const { isMiniCartOpen, closeMiniCart } = useUIStore();

  if (!isMiniCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div onClick={closeMiniCart} className="fixed inset-0 z-40 bg-black/40" />

      {/* Drawer */}
      <aside className="fixed right-0 top-0 z-99 h-full w-80 bg-white shadow-xl">
        <div className="flex items-center justify-between border-b p-4">
          <h3 className="font-semibold">Your Cart</h3>
          <button onClick={closeMiniCart}>✕</button>
        </div>

        <div className="flex-1 space-y-4 overflow-auto p-4">
          {items.map((item) => (
            <div key={item.variantId} className="flex gap-3">
              {item.image && (
                <div className="relative h-16 w-14 overflow-hidden rounded">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="flex-1">
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-xs text-muted-foreground">
                  Qty: {item.quantity}
                </p>
              </div>

              <button
                onClick={() => removeItem(item.variantId)}
                className="text-xs text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="border-t p-4">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>

          <a
            href="/checkout"
            className="mt-4 block rounded-md bg-black py-3 text-center text-white"
            onClick={closeMiniCart}
          >
            Checkout
          </a>
        </div>
      </aside>
    </>
  );
}
