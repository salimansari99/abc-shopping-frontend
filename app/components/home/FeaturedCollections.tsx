import Link from "next/link";

const collections = [
  {
    title: "Men",
    image: "/images/banners/men.avif",
    href: "/shop/men",
  },
  {
    title: "Women",
    image: "/images/banners/women.avif",
    href: "/shop/women",
  },
  {
    title: "Accessories",
    image: "/images/banners/accessories.avif",
    href: "/shop/accessories",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-8 text-2xl font-semibold">Shop by Collection</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {collections.map((c) => (
          <Link
            key={c.title}
            href={c.href}
            className="group relative h-[380px] overflow-hidden rounded-xl"
          >
            <img
              src={c.image}
              alt={c.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-semibold">{c.title}</h3>
              <span className="mt-1 inline-block text-sm underline">
                Shop Now
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
