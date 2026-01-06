import { NextResponse } from "next/server";
import Stripe from "stripe";

export const dynamic = "force-dynamic";

type BuildId = "2025-12-15.clover";

const build: BuildId = "2025-12-15.clover";

export async function POST(req: Request) {
  // 🧪 Mock mode
  if (process.env.NEXT_PUBLIC_USE_STRIPE_MOCK === "true") {
    return NextResponse.json({
      clientSecret: "pi_mock_secret_123",
    });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "Stripe secret key missing" },
      { status: 500 }
    );
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: build,
  });

  const { items } = await req.json();

  const amount = items.reduce(
    (sum: number, i: any) => sum + i.priceCents * i.quantity,
    0
  );

  const intent = await stripe.paymentIntents.create({
    amount,
    currency: "usd",
  });

  return NextResponse.json({ clientSecret: intent.client_secret });
}
