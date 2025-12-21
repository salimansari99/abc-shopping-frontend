"use client";

import { useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

export default function WalletPay({ clientSecret }: { clientSecret: string }) {
  const stripe = useStripe();
  const [canPay, setCanPay] = useState(false);

  useEffect(() => {
    if (!stripe) return;

    stripe
      .paymentRequest({
        country: "US",
        currency: "usd",
        total: { label: "Total", amount: 1000 },
      })
      .canMakePayment()
      .then((res) => {
        if (res) setCanPay(true);
      });
  }, [stripe]);

  if (!canPay) return null;

  return (
    <button className="w-full rounded-xl bg-black py-3 text-white">
      Pay with Apple Pay / Google Pay
    </button>
  );
}
