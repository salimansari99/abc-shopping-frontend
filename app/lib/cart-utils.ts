import { Product, ProductVariant } from "@/app/types/product";
import { CartItem } from "@/app/store/cart-store";

export function productToCartItem(
  product: Product,
  variant: ProductVariant,
  quantity: number
): CartItem {
  return {
    variantId: variant.id,
    title: product.title,
    priceCents: variant.priceCents,
    quantity,
    image: product.images?.[0]?.url,
  };
}
