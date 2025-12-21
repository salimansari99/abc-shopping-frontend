"use client";

import { Elements } from "@stripe/react-stripe-js";

import { useCartStore } from "@/app/store/cart-store";
import { formatPrice } from "@/app/lib/format";
import { stripePromise } from "@/app/lib/stripe";
import CheckoutForm from "@/app/components/checkout/CheckoutForm";
// import CheckoutHeader from "@/app/components/checkout/CheckoutHeader";

export default function CheckoutPage() {
  const { items, totalPrice, updateQuantity, removeItem } = useCartStore();

  // 🛑 Empty cart guard
  if (!items.length) {
    return (
      <section className="container mx-auto max-w-2xl px-4 py-16">
        <p className="text-center text-lg text-muted-foreground">
          Your cart is empty.
        </p>
      </section>
    );
  }

  return (
    <>
      {/* <CheckoutHeader /> */}
      <section className="container mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-8 text-3xl font-bold">Checkout</h1>

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
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-14 w-12 rounded-md object-cover"
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

            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </div>
        </div>
      </section>
    </>
  );
}
