"use client";

import { useCartStore } from "@/app/store/cart-store";
import { useUIStore } from "@/app/store/ui-store";
import { Product } from "@/app/types/product";

type ProductCardProps = {
  product: Product;
};

export default function AddToCartButton({ product }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const openMiniCart = useUIStore((s) => s.openMiniCart);

  const handleAdd = () => {
    addItem({
      variantId: product.variantId,
      title: product.title,
      priceCents: product.priceCents,
      quantity: 1,
      image: product.image,
    });

    openMiniCart(); // 🔥 THIS is key
  };

  return (
    <button
      onClick={handleAdd}
      className="rounded bg-black px-4 py-2 text-white"
    >
      Add to Cart
    </button>
  );
}
