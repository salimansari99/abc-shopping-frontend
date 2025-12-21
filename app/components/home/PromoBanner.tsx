import Link from "next/link";

export default function PromoBanner() {
  return (
    <section className="bg-black py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          Designed for Timeless Style
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-gray-300">
          Inspired by modern luxury, built for everyday confidence.
        </p>

        <Link
          href="/shop"
          className="mt-8 inline-block rounded-md bg-white px-8 py-3 text-sm font-medium text-black"
        >
          Explore Collection
        </Link>
      </div>
    </section>
  );
}
