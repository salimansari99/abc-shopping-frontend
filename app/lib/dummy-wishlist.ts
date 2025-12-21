export type WishlistItem = {
  id: string;
  title: string;
  priceCents: number;
  image: string;
  slug: string;
};

export const DUMMY_WISHLIST: WishlistItem[] = [
  {
    id: "wish-1",
    title: "Classic Black Shirt",
    priceCents: 499,
    image: "/images/products/black-shirt.avif",
    slug: "classic-black-shirt",
  },
  {
    id: "wish-2",
    title: "Premium Men Cap",
    priceCents: 1299,
    image: "/images/products/men-cap.avif",
    slug: "premium-men-cap",
  },
  {
    id: "wish-3",
    title: "Classic Black Shirt",
    priceCents: 499,
    image: "/images/products/black-shirt.avif",
    slug: "classic-black-shirt",
  },
  {
    id: "wish-4",
    title: "Premium Men Cap",
    priceCents: 1299,
    image: "/images/products/men-cap.avif",
    slug: "premium-men-cap",
  },
];
