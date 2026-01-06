"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SavedCards from "@/app/components/checkout/SavedCards";
import CheckoutForm from "@/app/components/checkout/CheckoutForm";
import BillingAddressToggle from "@/app/components/checkout/BillingAddressToggle";
import WalletPay from "@/app/components/checkout/WalletPay";
import { useCartStore } from "@/app/store/cart-store";
import { formatPrice } from "@/app/lib/format";

export default function PaymentPage() {
  const router = useRouter();
  const { items, totalPrice, clearCart } = useCartStore();
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [isProcessingSavedCard, setIsProcessingSavedCard] = useState(false);

  if (!items.length) {
    return (
      <section className="container mx-auto max-w-2xl px-4 pt-16 pb-28 md:py-16">
        <p className="text-center text-lg text-muted-foreground">
          Your cart is empty.
        </p>
      </section>
    );
  }

  const SAVED_CARDS: { id: string; brand: "visa" | "mastercard" | "amex"; last4: string; expMonth: number; expYear: number }[] = [
    { id: "card-1", brand: "visa", last4: "4242", expMonth: 12, expYear: 2026 },
    { id: "card-2", brand: "mastercard", last4: "4444", expMonth: 3, expYear: 2025 },
  ];

  const payWithSavedCard = () => {
    setIsProcessingSavedCard(true);
    setTimeout(() => {
      clearCart();
      router.push("/checkout/success");
    }, 800);
  };

  return (
    <section className="container mx-auto max-w-4xl px-4 pt-12 pb-28 md:py-12">
      <h1 className="mb-8 text-3xl font-bold">Payment</h1>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold">Order Summary</h2>
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
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-xs text-muted-foreground">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>
                <p className="text-sm font-medium">
                  {formatPrice(item.priceCents * item.quantity)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between border-t pt-4 text-lg font-semibold">
            <span>Total</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Payment method</h2>

          <div className="space-y-6">
            <SavedCards cards={SAVED_CARDS} onSelect={(id) => setSelectedCard(id)} />

            {selectedCard && (
              <div className="space-y-3">
                <p className="text-sm">Pay with saved card</p>
                <button
                  onClick={payWithSavedCard}
                  disabled={isProcessingSavedCard}
                  className="w-full rounded-xl bg-black py-3 text-sm text-white"
                >
                  {isProcessingSavedCard
                    ? "Processing…"
                    : "Pay with saved card"}
                </button>
              </div>
            )}

            <div>
              <p className="mb-3 text-sm font-medium">Or enter new card</p>
              <CheckoutForm />
            </div>

            <BillingAddressToggle />

            <div>
              <WalletPay clientSecret={""} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
