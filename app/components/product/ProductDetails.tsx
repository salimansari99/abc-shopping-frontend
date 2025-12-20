"use client";
import { useState } from "react";
import { Product } from "@/app/types/product";
import { formatPrice } from "@/app/lib/format";
import VariantSelector from "./VariantSelector";
import { useCartStore } from "@/app/store/cart-store";

export default function ProductDetails({ product }: { product: Product }) {
  const variants = product.variants || [];
  const [selectedVariantId, setSelectedVariantId] = useState(
    variants[0]?.id ?? null
  );

  const addItem = useCartStore((s) => s.addItem);

  const selectedVariant = variants.find((v) => v.id === selectedVariantId);

  if (!selectedVariant) return null;

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <p className="text-muted-foreground">{product.description}</p>

      <div className="text-2xl font-semibold">
        {formatPrice(selectedVariant.priceCents)}
      </div>

      <VariantSelector
        variants={variants}
        selectedVariantId={selectedVariantId}
        onChange={setSelectedVariantId}
      />

      <button
        onClick={() =>
          addItem({
            variantId: selectedVariant.id,
            title: product.title,
            priceCents: selectedVariant.priceCents,
            quantity: 1,
            image: product.images?.[0]?.url,
          })
        }
        className="mt-4 rounded-md bg-black py-3 text-white hover:bg-gray-800"
      >
        Add to Cart
      </button>
    </div>
  );
}
