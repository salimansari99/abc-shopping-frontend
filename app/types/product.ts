export type ProductImage = {
  id: string;
  url: string;
  altText?: string;
};

export type ProductVariant = {
  id: string;
  sku: string;
  priceCents: number;
  compareAtCents?: number;
  currency: string;
  attributes?: {
    size?: string;
    color?: string;
  };
};

export type Product = {
  id: string;
  title: string;
  slug: string;
  description?: string;
  images?: ProductImage[];
  variants?: ProductVariant[];
};
