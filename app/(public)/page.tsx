// app/(public)/page.tsx
import { Metadata } from "next";

import ProductCard from "@/app/components/product/ProductCard";
import { getFeaturedProducts } from "@/app/lib/api-client";

export const metadata: Metadata = {
  title: "Home",
  description: "Shop premium fashion, luxury wear, and exclusive collections.",
};

export default async function HomePage() {
  // Server-side fetch (SSR / SSG)
  const products = await getFeaturedProducts();

  return (
    <section className="container mx-auto px-4 py-10">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          Premium Fashion Collection
        </h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Discover luxury fashion crafted for elegance, comfort, and confidence.
        </p>
      </div>

      {/* Featured Products */}
      <div>
        <h2 className="mb-6 text-2xl font-semibold">New Arrivals</h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
