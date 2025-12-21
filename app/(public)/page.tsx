import { Metadata } from "next";

import ProductCard from "@/app/components/product/ProductCard";
import { getFeaturedProducts } from "@/app/lib/api-client";

import USPStrip from "@/app/components/home/USPStrip";
import FeaturedCollections from "@/app/components/home/FeaturedCollections";
import PromoBanner from "@/app/components/home/PromoBanner";
import Newsletter from "@/app/components/home/Newsletter";
import { DevCartSeeder } from "../(checkout)/checkout/DevCartSeeder";
// import MiniCart from "@/app/components/cart/MiniCart";

export const metadata: Metadata = {
  title: "Home",
  description: "Shop premium fashion, luxury wear, and exclusive collections.",
};

export default async function HomePage() {
  const { products, totalPages } = await getFeaturedProducts(1);

  return (
    <>
      {/* <MiniCart /> */}
      {/* Hero */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Premium Fashion Collection
        </h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Discover luxury fashion crafted for elegance, comfort, and confidence.
        </p>
      </section>

      {/* USP */}
      <USPStrip />

      {/* Collections */}
      <FeaturedCollections />

      {/* New Arrivals */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-6 text-2xl font-semibold">New Arrivals</h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Promo */}
      <PromoBanner />

      {/* Newsletter */}
      <Newsletter />
      <DevCartSeeder />
    </>
  );
}
