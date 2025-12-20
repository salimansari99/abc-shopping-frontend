// lib/api-client.ts
import { Product } from "@/app/types/product";
import { DUMMY_PRODUCTS } from "@/app/lib/dummy-data/products";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    if (!API_BASE_URL) {
      console.warn("API URL not set. Using dummy products.");
      return DUMMY_PRODUCTS;
    }

    const res = await fetch(`${API_BASE_URL}/products?featured=true`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("API error");
    }

    return res.json();
  } catch (error) {
    console.warn("Using dummy products due to fetch error:", error);
    return DUMMY_PRODUCTS;
  }
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
