import { CartItem } from "@/app/store/cart-store";

const USE_MOCK_API = process.env.NEXT_PUBLIC_USE_MOCK_API === "true";

export async function syncCart(items: CartItem[]) {
  if (USE_MOCK_API) {
    await new Promise((res) => setTimeout(res, 300));
    console.log("🛒 [MOCK] Cart synced:", items);

    return { success: true };
  }

  // REAL API (later)
  const res = await fetch("/api/cart/sync", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items }),
  });

  if (!res.ok) {
    throw new Error("Failed to sync cart");
  }

  return res.json();
}
