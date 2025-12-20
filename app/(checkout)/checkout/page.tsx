"use client";

import { useCartStore } from "@/app/store/cart-store";
import { formatPrice } from "@/app/lib/format";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCartStore();

  if (!items.length) {
    return <p className="p-10 text-center">Your cart is empty.</p>;
  }

  return (
    <section className="container mx-auto max-w-2xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold">Checkout</h1>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.variantId}
            className="flex justify-between border-b pb-3"
          >
            <span>
              {item.title} × {item.quantity}
            </span>
            <span>{formatPrice(item.priceCents * item.quantity)}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between text-lg font-semibold">
        <span>Total</span>
        <span>{formatPrice(totalPrice)}</span>
      </div>

      <button
        onClick={() => clearCart()}
        className="mt-8 w-full rounded-md bg-black py-3 text-white"
      >
        Place Order
      </button>
    </section>
  );
}
