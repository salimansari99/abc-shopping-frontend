export type OrderStatus =
  | "placed"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "returned";

export type OrderItem = {
  id: string;
  title: string;
  image?: string;
  quantity: number;
  priceCents: number;
};

export type Order = {
  id: string;
  createdAt: string;
  status: OrderStatus;
  totalCents: number;
  items: OrderItem[];

  // NEW
  trackingUrl?: string;
  canCancel: boolean;
  canReturn: boolean;
};

export const DUMMY_ORDERS: Order[] = [
  {
    id: "ORD-1001",
    createdAt: "2025-01-10",
    status: "delivered",
    totalCents: 1097,
    trackingUrl: "https://tracking.example.com/ORD-1001",
    canCancel: false,
    canReturn: true,
    items: [
      {
        id: "item-1",
        title: "Classic Black Shirt",
        quantity: 1,
        priceCents: 499,
        image: "/images/products/black-shirt.avif",
      },
    ],
  },
  {
    id: "ORD-1002",
    createdAt: "2025-01-18",
    status: "shipped",
    totalCents: 899,
    trackingUrl: "https://tracking.example.com/ORD-1002",
    canCancel: false,
    canReturn: false,
    items: [
      {
        id: "item-2",
        title: "Denim Jacket",
        quantity: 1,
        priceCents: 899,
        image: "/images/products/denim-jacket.jpeg",
      },
    ],
  },
];
