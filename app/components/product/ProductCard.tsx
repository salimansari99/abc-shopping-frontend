"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";

import { Product } from "@/app/types/product";
import { formatPrice } from "@/app/lib/format";
// import { useCartStore } from "@/store/cart-store";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  // const addToCart = useCartStore((s) => s.addItem);

  const primaryImage = product.images?.[0]?.url || "/images/placeholder.webp";

  const price = product.variants?.[0]?.priceCents ?? 0;
  const compareAt = product.variants?.[0]?.compareAtCents;

  return (
    <div className="group relative overflow-hidden rounded-lg border bg-white transition hover:shadow-lg">
      {/* Product Image */}
      <Link href={`/shop/product/${product.slug}`}>
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
          <Image
            src={primaryImage}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4">
        {/* Title */}
        <Link href={`/shop/product/${product.slug}`}>
          <h3 className="line-clamp-2 text-sm font-medium text-gray-900">
            {product.title}
          </h3>
        </Link>

        {/* Price */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-sm font-semibold">{formatPrice(price)}</span>

          {compareAt && compareAt > price && (
            <span className="text-xs text-gray-500 line-through">
              {formatPrice(compareAt)}
            </span>
          )}
        </div>
      </div>

      {/* Hover Actions */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-2 bg-white/95 p-3 transition-all group-hover:translate-y-0 group-hover:pointer-events-auto">
        <button
          className="flex w-full items-center justify-center gap-2 rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
          // onClick={() => addToCart(product)}
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
