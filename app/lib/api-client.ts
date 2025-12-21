// lib/api-client.ts
import { Product } from "@/app/types/product";
import { DUMMY_PRODUCTS } from "@/app/lib/dummy-data/products";
import { PRODUCT_CATEGORIES } from "./dummy-categories";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const PAGE_SIZE = 8;

export async function getFeaturedProducts(
  page: number = 1
): Promise<{ products: Product[]; totalPages: number }> {
  // 👉 Dummy data example
  const { DUMMY_PRODUCTS } = await import("./dummy-data/products");

  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const products = DUMMY_PRODUCTS.slice(start, end);
  const totalPages = Math.ceil(DUMMY_PRODUCTS.length / PAGE_SIZE);

  return { products, totalPages };
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    if (!API_BASE_URL) {
      return DUMMY_PRODUCTS.find((p) => p.slug === slug) || null;
    }

    const res = await fetch(`${API_BASE_URL}/products/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) return null;

    return res.json();
  } catch {
    return DUMMY_PRODUCTS.find((p) => p.slug === slug) || null;
  }
}

export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  try {
    if (!API_BASE_URL) {
      const slugs = PRODUCT_CATEGORIES[category];

      if (!slugs) return [];
      return DUMMY_PRODUCTS.filter((p) => slugs.includes(p.slug));
    }

    const res = await fetch(`${API_BASE_URL}/products?category=${category}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch category products");
    }

    return res.json();
  } catch {
    return [];
  }
}
