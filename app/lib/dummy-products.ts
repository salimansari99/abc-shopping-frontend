import { Product } from "@/app/types/product";

export const DUMMY_PRODUCTS: Product[] = [
  {
    id: "prod_black_shirt",
    title: "Classic Black Shirt",
    slug: "classic-black-shirt",
    description: "Premium cotton black shirt",
    images: [
      {
        id: "img_black_1",
        url: "/images/products/black-shirt.avif",
        altText: "Classic Black Shirt",
      },
    ],
    variants: [
      {
        id: "var_black_shirt_m",
        sku: "BLK-SHIRT-M",
        priceCents: 499,
        currency: "USD",
        attributes: {
          size: "M",
          color: "Black",
        },
      },
    ],
  },
  {
    id: "prod_white_tshirt",
    title: "Luxury White T-Shirt",
    slug: "luxury-white-tshirt",
    images: [
      {
        id: "img_white_1",
        url: "/images/products/white-tshirt.jpeg",
        altText: "Luxury White T-Shirt",
      },
    ],
    variants: [
      {
        id: "var_white_tshirt_l",
        sku: "WHT-TSHIRT-L",
        priceCents: 299,
        currency: "USD",
        attributes: {
          size: "L",
          color: "White",
        },
      },
    ],
  },
];
