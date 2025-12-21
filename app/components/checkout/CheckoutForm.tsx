"use client";

import { useEffect, useRef, useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useCartStore } from "@/app/store/cart-store";
import { useRouter } from "next/navigation";
import { getDummyClientSecret } from "@/app/lib/stripe-mock";
import { PaymentElement } from "@stripe/react-stripe-js";

const USE_STRIPE_MOCK = process.env.NEXT_PUBLIC_USE_STRIPE_MOCK === "true";
const mockClientSecret = USE_STRIPE_MOCK ? getDummyClientSecret() : null;

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clearCart);

  const [clientSecret, setClientSecret] = useState<string | null>(
    mockClientSecret
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const intentCreatedRef = useRef(false); // 🔒 prevents duplicate calls

  useEffect(() => {
    // 🔥 Skip effect entirely in mock mode
    if (USE_STRIPE_MOCK) return;

    if (!items.length || intentCreatedRef.current) return;

    intentCreatedRef.current = true;

    fetch("/api/checkout/create-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items }),
    })
      .then(async (res) => {
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || "Failed to create payment intent");
        }
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.clientSecret); // ✅ async setState = allowed
      })
      .catch((err) => {
        setError(err.message);
        intentCreatedRef.current = false;
      });
  }, [items]);

  const handlePay = async () => {
    setIsLoading(true);
    setError(null);

    // 🧪 MOCK PAYMENT SUCCESS
    if (USE_STRIPE_MOCK) {
      setTimeout(() => {
        clearCart();
        router.push("/checkout/success");
      }, 800);
      return;
    }

    // 🔥 REAL STRIPE FLOW (unchanged)
    if (!stripe || !elements || !clientSecret) return;

    const card = elements.getElement(CardElement);
    if (!card) {
      setError("Card element not found");
      setIsLoading(false);
      return;
    }

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card },
    });

    if (result.error) {
      setError(result.error.message || "Payment failed");
      setIsLoading(false);
      return;
    }

    if (result.paymentIntent?.status === "succeeded") {
      clearCart();
      router.push("/checkout/success");
    }
  };

  // 🧠 Derived loading state (NO effect setState)
  if (!clientSecret && !error) {
    return (
      <div className="py-6 text-center text-muted-foreground">
        Initializing payment…
      </div>
    );
  }

  if (error && !clientSecret) {
    return (
      <div className="rounded-md bg-red-50 p-4 text-red-800">
        {error}
        <button
          onClick={() => {
            intentCreatedRef.current = false;
            setError(null);
          }}
          className="mt-2 block text-sm underline"
        >
          Retry
        </button>
      </div>
    );
  }

  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        fontSize: "16px",
        color: "#111827", // gray-900
        fontFamily: "Inter, system-ui, sans-serif",
        "::placeholder": {
          color: "#9CA3AF", // gray-400
        },
      },
      invalid: {
        color: "#DC2626", // red-600
      },
    },
    hidePostalCode: true,
  };

  return (
    <div className="space-y-6">
      {/* Card container */}
      <div className="rounded-xl border bg-white p-5 shadow-sm transition focus-within:ring-2 focus-within:ring-black">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-medium text-gray-700">Card information</p>
          <CardBrands />
        </div>

        <div className="rounded-md border border-gray-300 px-3 py-3 focus-within:border-black">
          <CardElement options={CARD_ELEMENT_OPTIONS} />
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Pay button */}
      <button
        onClick={handlePay}
        disabled={!stripe || isLoading}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3 text-sm font-medium text-white transition hover:bg-gray-900 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        {isLoading ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            Processing…
          </>
        ) : (
          "Pay securely"
        )}
      </button>

      {/* Trust note */}
      <p className="text-center text-xs text-gray-500">
        Payments are encrypted and securely processed by Stripe
      </p>
    </div>
  );
}

function CardBrands() {
  return (
    <div className="flex items-center gap-2 opacity-70">
      <img src="/icons/visa.png" alt="Visa" className="h-5" />
      <img src="/icons/mastercard.png" alt="Mastercard" className="h-5" />
      <img src="/icons/amex.png" alt="American Express" className="h-5" />
    </div>
  );
}
