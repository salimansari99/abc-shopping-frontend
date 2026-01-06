import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections",
  description: "Browse our Men, Women, and Accessories fashion collections.",
};

const COLLECTIONS = [
  {
    slug: "men",
    title: "Men",
    description: "Tailored shirts, jackets, and essentials for everyday style.",
    image: "/images/banners/men.avif",
  },
  {
    slug: "women",
    title: "Women",
    description: "Elegant silhouettes and elevated everyday pieces.",
    image: "/images/banners/women.avif",
  },
  {
    slug: "accessories",
    title: "Accessories",
    description: "Finish your look with belts, sunglasses, and more.",
    image: "/images/banners/accessories.avif",
  },
];

export default function CollectionsPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* Hero */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Shop by Collection
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-sm text-muted-foreground md:text-base">
          Explore curated edits for men, women, and accessories to refresh your
          wardrobe.
        </p>
      </div>

      {/* Collections grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {COLLECTIONS.map((collection) => (
          <Link
            key={collection.slug}
            href={`/shop/${collection.slug}`}
            className="group relative h-[320px] overflow-hidden rounded-xl border bg-gray-50"
          >
            {/* Background image */}
            <img
              src={collection.image}
              alt={collection.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Text */}
            <div className="absolute inset-x-5 bottom-5 text-white">
              <h2 className="text-xl font-semibold">{collection.title}</h2>
              <p className="mt-1 text-xs text-gray-100/90">
                {collection.description}
              </p>

              <span className="mt-3 inline-flex items-center text-xs font-medium underline underline-offset-4">
                Shop {collection.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
