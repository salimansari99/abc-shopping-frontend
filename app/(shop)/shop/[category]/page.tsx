import { Metadata } from "next";
import { notFound } from "next/navigation";

import ProductCard from "@/app/components/product/ProductCard";
import { getProductsByCategory } from "@/app/lib/api-client";

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;

  return {
    title: `${capitalize(category)} Collection`,
    description: `Explore our ${category} fashion collection.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  console.log(category, "category");

  const products = await getProductsByCategory(category);

  if (!products) {
    notFound();
  }

  return (
    <section className="container mx-auto px-4 py-10">
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold md:text-4xl">
          {capitalize(category)}
        </h1>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Browse our curated {category} collection.
        </p>
      </div>

      {/* Product Grid */}
      {products.length === 0 ? (
        <div className="py-20 text-center text-muted-foreground">
          No products found in this category.
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

/* -------------------- */
/* Utils */
/* -------------------- */

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
