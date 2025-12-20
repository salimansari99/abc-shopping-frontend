import { Metadata } from "next";
import { notFound } from "next/navigation";

import ProductGallery from "@/app/components/product/ProductGallery";
import ProductDetails from "@/app/components/product/ProductDetails";
import { getProductBySlug } from "@/app/lib/api-client";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: product.images?.[0]?.url ? [{ url: product.images[0].url }] : [],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid gap-10 md:grid-cols-2">
        {/* Left: Image Gallery */}
        <ProductGallery images={product.images || []} />

        {/* Right: Product Info */}
        <ProductDetails product={product} />
      </div>
    </section>
  );
}
