"use client";

import Image from "next/image";
import { useState } from "react";

type ImageType = {
  id: string;
  url: string;
  altText?: string;
};

export default function ProductGallery({ images }: { images: ImageType[] }) {
  const [active, setActive] = useState(0);

  if (!images.length) return null;

  return (
    <div className="flex gap-4">
      {/* Thumbnails */}
      <div className="flex flex-col gap-2">
        {images.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setActive(i)}
            className={`relative h-20 w-16 overflow-hidden rounded border ${
              active === i ? "border-black" : "border-gray-300"
            }`}
          >
            <Image src={img.url} alt="" fill className="object-cover" />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
        <Image
          src={images[active].url}
          alt={images[active].altText || "Product image"}
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
