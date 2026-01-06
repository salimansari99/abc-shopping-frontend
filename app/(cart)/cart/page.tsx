"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/store/cart-store";
import { formatPrice } from "@/app/lib/format";
import ProductCard from "@/app/components/product/ProductCard";
import { DUMMY_PRODUCTS } from "@/app/lib/dummy-products";

export default function CartPage() {
  const router = useRouter();
  const { items, totalPrice, updateQuantity, removeItem, clearCart } =
    useCartStore();

  const [coupon, setCoupon] = useState("");
  const [discountCents, setDiscountCents] = useState(0);
  const [shippingCents, setShippingCents] = useState(0);
  const [couponError, setCouponError] = useState<string | null>(null);

  const subtotal = totalPrice;

  const applyCoupon = () => {
    const code = coupon.trim().toUpperCase();
    if (!code) return;

    if (code === "SAVE10") {
      setDiscountCents(Math.round(subtotal * 0.1));
      setCouponError(null);
    } else if (code === "FREESHIP") {
      setShippingCents(0);
      setCouponError(null);
    } else {
      setCouponError("Invalid coupon code");
      setDiscountCents(0);
    }
  };

  const total = Math.max(0, subtotal - discountCents + shippingCents);

  if (!items.length) {
    return (
      <section className="container mx-auto py-20 px-4 text-center">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <p className="mt-4 text-muted-foreground">
          Looks like you have not added anything to your cart yet.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            href="/shop"
            className="rounded-md bg-black px-4 py-2 text-white"
          >
            Continue shopping
          </Link>
        </div>

        <section className="mt-12">
          <h2 className="mb-4 text-lg font-semibold">Recommended for you</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {DUMMY_PRODUCTS.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-4xl px-4 pt-12 pb-28 md:container md:py-12">
      <h1 className="mb-6 text-3xl font-bold">Shopping Cart</h1>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Items list */}
        <div className="md:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.variantId}
              className="flex items-center gap-4 rounded-lg border p-4 min-w-0"
            >
              <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-md">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="h-24 w-20 bg-gray-100" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <Link
                  href={`/shop/product/${item.title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                  className="line-clamp-2 text-sm font-medium"
                >
                  {item.title}
                </Link>

                <p className="mt-1 text-xs text-muted-foreground">
                  {formatPrice(item.priceCents)}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <button
                    onClick={() =>
                      updateQuantity(item.variantId, item.quantity - 1)
                    }
                    className="h-8 w-8 rounded-md border"
                  >
                    −
                  </button>

                  <span className="w-8 text-center">{item.quantity}</span>

                  <button
                    onClick={() =>
                      updateQuantity(item.variantId, item.quantity + 1)
                    }
                    className="h-8 w-8 rounded-md border"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeItem(item.variantId)}
                    className="ml-2 text-sm text-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div className="shrink-0 text-right">
                <p className="text-sm font-medium">
                  {formatPrice(item.priceCents * item.quantity)}
                </p>
              </div>
            </div>
          ))}

          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={() => clearCart()}
              className="rounded-md border px-4 py-2 text-sm"
            >
              Clear cart
            </button>

            <div className="text-sm text-muted-foreground">
              {items.length} items • {formatPrice(subtotal)} subtotal
            </div>
          </div>
        </div>

        {/* Summary */}
        <aside className="order-2 md:order-none rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">Order summary</h2>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>

            <div>
              <label className="block text-sm">Shipping</label>
              <select
                value={shippingCents}
                onChange={(e) => setShippingCents(Number(e.target.value))}
                className="mt-2 w-full rounded-md border px-3 py-2 text-sm"
              >
                <option value={0}>Free (3-5 days)</option>
                <option value={500}>Standard - $5.00 (2 days)</option>
                <option value={1500}>Express - $15.00 (1 day)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm">Coupon</label>
              <div className="mt-2 flex gap-2">
                <input
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="input flex-1"
                  placeholder="Enter coupon code"
                />
                <button
                  onClick={applyCoupon}
                  className="rounded-md bg-black px-3 py-2 text-sm text-white"
                >
                  Apply
                </button>
              </div>
              {couponError && (
                <p className="mt-2 text-xs text-red-600">{couponError}</p>
              )}
              {discountCents > 0 && (
                <p className="mt-2 text-xs text-green-600">
                  Coupon applied: -{formatPrice(discountCents)}
                </p>
              )}
            </div>

            <div className="border-t pt-3">
              <div className="flex items-center justify-between text-lg font-semibold">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>

              <div className="mt-4 space-y-2">
                <button
                  onClick={() => router.push("/checkout")}
                  className="w-full rounded-md bg-black px-4 py-2 text-white"
                >
                  Proceed to checkout
                </button>
                <Link
                  href="/shop"
                  className="block w-full rounded-md border px-4 py-2 text-center text-sm"
                >
                  Continue shopping
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <section className="mt-12">
        <h2 className="mb-4 text-lg font-semibold">You may also like</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {DUMMY_PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </section>
  );
}
