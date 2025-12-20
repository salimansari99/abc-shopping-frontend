import ProductCard from "./ProductCard";
import { Product } from "@/app/types/product";

export default function RelatedProducts({ products }: { products: Product[] }) {
  if (!products.length) return null;

  return (
    <section className="mt-20">
      <h2 className="mb-6 text-2xl font-semibold">You may also like</h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
