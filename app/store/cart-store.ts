import { create } from "zustand";
import { syncCart } from "@/app/lib/cart-api";
import { DUMMY_CART_ITEMS } from "@/app/lib/dummy-cart";

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
  updateQuantity: (variantId: string, quantity: number) => void;
  removeItem: (variantId: string) => void;
  clearCart: () => void;
  addDummyItems: () => void;

  totalItems: number;
  totalPrice: number;
};

export const useCartStore = create<CartStore>((set, get) => ({
  // ✅ Cart stores CartItem[]
  items: DUMMY_CART_ITEMS,

  addItem: (item) => {
    set((state) => {
      const items = [...state.items];
      const existing = items.find((i) => i.variantId === item.variantId);

      if (existing) {
        existing.quantity += item.quantity;
      } else {
        items.push(item);
      }

      syncCart(items);
      return { items };
    });
  },

  updateQuantity: (variantId, quantity) => {
    set((state) => {
      const items = state.items.map((item) =>
        item.variantId === variantId
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      );

      syncCart(items);
      return { items };
    });
  },

  removeItem: (variantId) => {
    set((state) => {
      const items = state.items.filter((i) => i.variantId !== variantId);

      syncCart(items);
      return { items };
    });
  },

  clearCart: () => {
    syncCart([]);
    set({ items: [] });
  },

  addDummyItems: () => {
    set({ items: DUMMY_CART_ITEMS });
    syncCart(DUMMY_CART_ITEMS);
  },

  // ✅ Derived values
  get totalItems() {
    return get().items.reduce((sum, item) => sum + item.quantity, 0);
  },

  get totalPrice() {
    return get().items.reduce(
      (sum, item) => sum + item.priceCents * item.quantity,
      0
    );
  },
}));
