import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

type BuildId = "2025-12-15.clover";

const build: BuildId = "2025-12-15.clover";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: build,
});

export async function POST(request: NextRequest) {
  try {
    const { items } = await request.json();

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    // Calculate total amount in cents
    const totalAmount = items.reduce(
      (sum: number, item: { priceCents: number; quantity: number }) =>
        sum + item.priceCents * item.quantity,
      0
    );

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalAmount,
      currency: "usd",
      metadata: {
        items: JSON.stringify(items),
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    return NextResponse.json(
      { error: "Failed to create payment intent" },
      { status: 500 }
    );
  }
}
