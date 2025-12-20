import { create } from "zustand";
import { syncCart } from "@/app/lib/cart-api";

export type CartItem = {
  variantId: string;
  title: string;
  priceCents: number;
  quantity: number;
  image?: string;
};

type CartStore = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (variantId: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addItem: (item: CartItem) => {
    set((state: any) => {
      const items = [...state.items];
      const existing = items.find((i) => i.variantId === item.variantId);

      if (existing) existing.quantity += item.quantity;
      else items.push(item);

      syncCart(items); // 🔥 persist
      return { items };
    });
  },

  removeItem: (variantId) =>
    set((state) => ({
      items: state.items.filter((i) => i.variantId !== variantId),
    })),

  clearCart: () => {
    syncCart([]);
    set({ items: [] });
  },

  get totalItems() {
    return get().items.reduce((sum, i) => sum + i.quantity, 0);
  },

  get totalPrice() {
    return get().items.reduce((sum, i) => sum + i.priceCents * i.quantity, 0);
  },
}));
