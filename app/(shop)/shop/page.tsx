import { Metadata } from "next";

import ProductCard from "@/app/components/product/ProductCard";
import { getFeaturedProducts } from "@/app/lib/api-client";
import Pagination from "@/app/components/common/Pagination";

type ShopPageProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Explore our premium fashion collection. Discover timeless styles and new arrivals.",
};

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;

  const { products, totalPages } = await getFeaturedProducts(currentPage);

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

        {/* Sorting (future) */}
        <select className="rounded-md border px-3 py-2 text-sm">
          <option>Newest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      {products.length === 0 ? (
        <div className="py-20 text-center text-muted-foreground">
          No products found.
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </>
      )}
    </section>
  );
}
