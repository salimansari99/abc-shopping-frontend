import { Product } from "@/app/types/product";

export const DUMMY_PRODUCTS: Product[] = [
  {
    id: "prod_1",
    title: "Classic Black Shirt",
    slug: "classic-black-shirt",
    description: "Premium cotton black shirt with a tailored fit.",
    images: [
      {
        id: "img_1",
        url: "/images/products/black-shirt.avif",
        altText: "Classic Black Shirt",
      },
    ],
    variants: [
      {
        id: "var_1",
        sku: "CBS-BLK-M",
        priceCents: 4999,
        compareAtCents: 6999,
        currency: "USD",
        attributes: {
          size: "M",
          color: "Black",
        },
      },
    ],
  },
  {
    id: "prod_2",
    title: "Luxury White T-Shirt",
    slug: "luxury-white-tshirt",
    description: "Minimal white t-shirt crafted from organic cotton.",
    images: [
      {
        id: "img_2",
        url: "/images/products/white-tshirt.jpeg",
        altText: "Luxury White T-Shirt",
      },
    ],
    variants: [
      {
        id: "var_2",
        sku: "LWT-WHT-L",
        priceCents: 2999,
        currency: "USD",
        attributes: {
          size: "L",
          color: "White",
        },
      },
    ],
  },
  {
    id: "prod_3",
    title: "Premium Denim Jacket",
    slug: "premium-denim-jacket",
    description: "Timeless denim jacket with premium stitching.",
    images: [
      {
        id: "img_3",
        url: "/images/products/denim-jacket.jpeg",
        altText: "Premium Denim Jacket",
      },
    ],
    variants: [
      {
        id: "var_3",
        sku: "PDJ-BLU-XL",
        priceCents: 8999,
        compareAtCents: 10999,
        currency: "USD",
        attributes: {
          size: "XL",
          color: "Blue",
        },
      },
    ],
  },
  {
    id: "prod_4",
    title: "Elegant Leather Shoes",
    slug: "elegant-leather-shoes",
    description: "Handcrafted leather shoes for formal occasions.",
    images: [
      {
        id: "img_4",
        url: "/images/products/leather-shoes.jpeg",
        altText: "Elegant Leather Shoes",
      },
    ],
    variants: [
      {
        id: "var_4",
        sku: "ELS-BRN-42",
        priceCents: 12999,
        currency: "USD",
        attributes: {
          size: "42",
          color: "Brown",
        },
      },
    ],
  },
];
