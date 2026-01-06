"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/app/store/cart-store";
import { formatPrice } from "@/app/lib/format";
import CheckoutForm from "@/app/components/checkout/CheckoutForm";
// import CheckoutHeader from "@/app/components/checkout/CheckoutHeader";

export default function CheckoutPage() {
  const { items, totalPrice, updateQuantity, removeItem } = useCartStore();
  const pathname = usePathname();

  // 🛑 Empty cart guard
  if (!items.length) {
    return (
      <section className="container mx-auto max-w-2xl px-4 pt-16 pb-28 md:py-16">
        <p className="text-center text-lg text-muted-foreground">
          Your cart is empty.
        </p>
      </section>
    );
  }

  return (
    <>
      {/* <CheckoutHeader /> */}
      <section className="container mx-auto max-w-4xl px-4 pt-12 pb-28 md:py-12">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Checkout</h1>

          <nav className="flex gap-3">
            <Link
              href="/checkout/address"
              className={`rounded-md px-3 py-2 text-sm ${
                pathname?.startsWith("/checkout/address")
                  ? "bg-black text-white"
                  : "bg-gray-100"
              }`}
            >
              Shipping
            </Link>
            <Link
              href="/checkout/payment"
              className={`rounded-md px-3 py-2 text-sm ${
                pathname?.startsWith("/checkout/payment")
                  ? "bg-black text-white"
                  : "bg-gray-100"
              }`}
            >
              Payment
            </Link>
            <Link
              href="/checkout"
              className={`rounded-md px-3 py-2 text-sm ${
                pathname === "/checkout" ? "bg-black text-white" : "bg-gray-100"
              }`}
            >
              Review
            </Link>
          </nav>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* -------------------- */}
          {/* LEFT: ORDER SUMMARY */}
          {/* -------------------- */}
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold">Order Summary</h2>

            {/* Order items */}
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.variantId}
                  className="flex items-center justify-between gap-4 border-b pb-3"
                >
                  <div className="flex items-center gap-3">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={48}
                        height={56}
                        className="rounded-md object-cover"
                      />
                    )}
                    <div>
                      {/* <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-xs text-muted-foreground">
                        Qty: {item.quantity}
                      </p> */}

                      <p className="text-sm font-medium">{item.title}</p>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => removeItem(item.variantId)}
                          className="text-xs text-red-500"
                        >
                          Remove
                        </button>
                        <button
                          className="rounded-md bg-gray-100 px-2 m-1"
                          onClick={() =>
                            updateQuantity(item?.variantId, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <p className="text-xs text-muted-foreground">
                          {item.quantity}
                        </p>
                        <button
                          className="rounded-md bg-gray-100 px-2 m-1"
                          onClick={() =>
                            updateQuantity(item?.variantId, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm font-medium">
                    {formatPrice(item.priceCents * item.quantity)}
                  </p>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="mt-6 flex justify-between border-t pt-4 text-lg font-semibold">
              <span>Total</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
          </div>

          {/* -------------------- */}
          {/* RIGHT: PAYMENT */}
          {/* -------------------- */}
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold">Payment Details</h2>

            <CheckoutForm />
          </div>
        </div>
      </section>
    </>
  );
}
