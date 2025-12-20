"use client";

import { useEffect, useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useCartStore } from "@/app/store/cart-store";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clearCart);

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("/api/checkout/create-intent", {
      method: "POST",
      body: JSON.stringify({ items }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [items]);

  const handlePay = async () => {
    if (!stripe || !elements) return;

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
      },
    });

    if (result.paymentIntent?.status === "succeeded") {
      clearCart();
      window.location.href = "/checkout/success";
    }
  };

  return (
    <div className="max-w-md mx-auto py-10">
      <CardElement />
      <button
        onClick={handlePay}
        className="mt-6 w-full bg-black py-3 text-white"
      >
        Pay Now
      </button>
    </div>
  );
}
