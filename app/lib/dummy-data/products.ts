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
  {
    id: "prod_5",
    title: "Men Bermuda Shorts",
    slug: "bermuda-shorts",
    description: "Premium Men Bermuda Shorts with a tailored fit.",
    images: [
      {
        id: "img_1",
        url: "/images/products/men-bermuda.avif",
        altText: "Men Bermuda Shorts",
      },
    ],
    variants: [
      {
        id: "var_1",
        sku: "CBS-BLK-M",
        priceCents: 499,
        compareAtCents: 699,
        currency: "USD",
        attributes: {
          size: "L",
          color: "Black",
        },
      },
    ],
  },
  {
    id: "prod_6",
    title: "Luxury Men Blazer",
    slug: "men-blazer",
    description: "Luxury Men Blazer crafted from organic cotton.",
    images: [
      {
        id: "img_2",
        url: "/images/products/men-blazer.avif",
        altText: "Luxury Men Blazer",
      },
    ],
    variants: [
      {
        id: "var_2",
        sku: "LWT-WHT-L",
        priceCents: 299,
        currency: "USD",
        attributes: {
          size: "L",
          color: "White",
        },
      },
    ],
  },
  {
    id: "prod_7",
    title: "Premium Men Cap",
    slug: "premium-men-cap",
    description: "Timeless Premium Men Cap with premium stitching.",
    images: [
      {
        id: "img_3",
        url: "/images/products/men-cap.avif",
        altText: "Premium Men Cap",
      },
    ],
    variants: [
      {
        id: "var_3",
        sku: "PDJ-BLU-XL",
        priceCents: 899,
        compareAtCents: 10999,
        currency: "USD",
        attributes: {
          size: "XL",
          color: "GREEN",
        },
      },
    ],
  },
  {
    id: "prod_8",
    title: "Elegant Men Hoodie",
    slug: "elegant-men-hoodie",
    description: "Elegant Men Hoodie for casual occasions.",
    images: [
      {
        id: "img_4",
        url: "/images/products/men-hoodie.avif",
        altText: "Elegant Men Hoodie",
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
  {
    id: "prod_9",
    title: "Classic Men Sweater",
    slug: "classic-men-sweater",
    description: "Premium Classic Men Sweater with a tailored fit.",
    images: [
      {
        id: "img_1",
        url: "/images/products/men-sweater.avif",
        altText: "Classic Men Sweater",
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
    id: "prod_10",
    title: "Luxury Men Sweatshirt",
    slug: "luxury-men-sweatshirt",
    description: "Minimal Luxury Men Sweatshirt crafted from organic cotton.",
    images: [
      {
        id: "img_2",
        url: "/images/products/men-sweatshirt.avif",
        altText: "Luxury Men Sweatshirt",
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
    id: "prod_11",
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
    id: "prod_12",
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
  {
    id: "prod_13",
    title: "Classic Women Boots",
    slug: "classic-women-boots",
    description: "Premium Classic Women Boots.",
    images: [
      {
        id: "img_1",
        url: "/images/products/women-boots.avif",
        altText: "Classic Women Boots",
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
    id: "prod_14",
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
    id: "prod_15",
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
    id: "prod_16",
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
  {
    id: "prod_17",
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
    id: "prod_18",
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
    id: "prod_19",
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
    id: "prod_20",
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
  {
    id: "prod_21",
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
    id: "prod_22",
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
    id: "prod_23",
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
    id: "prod_24",
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
  {
    id: "prod_25",
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
    id: "prod_26",
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
    id: "prod_27",
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
    id: "prod_28",
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
  {
    id: "prod_29",
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
    id: "prod_30",
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
    id: "prod_31",
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
    id: "prod_32",
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
