"use client";
import { useEffect } from "react";
import { useCartStore } from "@/app/store/cart-store";

export function DevCartSeeder() {
  const addDummyItems = useCartStore((s) => s.addDummyItems);
  const items = useCartStore((s) => s.items);

  useEffect(() => {
    if (!items.length) {
      addDummyItems();
    }
  }, []);

  return null;
}
