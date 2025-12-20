import { Metadata } from "next";

import ProductCard from "@/app/components/product/ProductCard";
import { getFeaturedProducts } from "@/app/lib/api-client";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Explore our premium fashion collection. Discover timeless styles and new arrivals.",
};

export default async function ShopPage() {
  // Server Component → runs on server
  const products = await getFeaturedProducts();

  return (
    <section className="container mx-auto px-4 py-10">
      {/* Page Header */}
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Shop All Products
          </h1>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Browse our curated collection of premium fashion essentials.
          </p>
        </div>

        {/* Placeholder for filters / sorting */}
        <div className="flex gap-3">
          <select
            className="rounded-md border px-3 py-2 text-sm"
            defaultValue="newest"
          >
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      {products.length === 0 ? (
        <div className="py-20 text-center text-muted-foreground">
          No products found.
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
