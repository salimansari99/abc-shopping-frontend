import Link from "next/link";
import { Order } from "@/app/lib/dummy-orders";
import { formatPrice } from "@/app/lib/format";
import OrderStatusTimeline from "./OrderStatusTimeline";

export default function OrderCard({ order }: { order: Order }) {
  return (
    <Link href={`/account/orders/${order.id}`}>
      <div className="rounded-lg border p-4">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-sm font-semibold">Order #{order.id}</p>
            <p className="text-xs text-muted-foreground">
              Placed on {order.createdAt}
            </p>
          </div>

          <p className="text-sm font-semibold">
            {formatPrice(order.totalCents)}
          </p>
        </div>

        {/* Items */}
        <div className="mt-4 space-y-2">
          {order.items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between text-sm"
            >
              <span>
                {item.title} × {item.quantity}
              </span>
              <span>{formatPrice(item.priceCents * item.quantity)}</span>
            </div>
          ))}
        </div>

        {/* Status Timeline */}
        <OrderStatusTimeline status={order.status} />
      </div>
    </Link>
  );
}
