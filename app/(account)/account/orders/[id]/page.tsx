import { notFound } from "next/navigation";
import Link from "next/link";

import { DUMMY_ORDERS } from "@/app/lib/dummy-orders";
import { formatPrice } from "@/app/lib/format";
import OrderStatusTimeline from "@/app/components/account/OrderStatusTimeline";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function OrderDetailsPage({ params }: Props) {
  const { id } = await params;
  const order = DUMMY_ORDERS.find((o) => o.id === id);

  if (!order) notFound();

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Order #{order.id}</h1>
          <p className="text-sm text-muted-foreground">
            Placed on {order.createdAt}
          </p>
        </div>

        <Link href="/account/orders" className="text-sm underline">
          Back to orders
        </Link>
      </div>

      {/* Status */}
      <div className="mb-6 rounded-lg border p-4">
        <OrderStatusTimeline status={order.status} />
      </div>

      {/* Items */}
      <div className="rounded-lg border p-4">
        <h2 className="mb-4 font-semibold">Items</h2>

        <div className="space-y-3">
          {order.items.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {item.image && (
                  <img
                    src={item.image}
                    className="h-12 w-10 rounded object-cover"
                  />
                )}
                <span className="text-sm">
                  {item.title} × {item.quantity}
                </span>
              </div>
              <span className="text-sm">
                {formatPrice(item.priceCents * item.quantity)}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-between border-t pt-4 font-semibold">
          <span>Total</span>
          <span>{formatPrice(order.totalCents)}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex flex-wrap gap-3">
        {order.trackingUrl && (
          <a
            href={order.trackingUrl}
            target="_blank"
            className="rounded-md border px-4 py-2 text-sm"
          >
            Track Shipment
          </a>
        )}

        {order.canCancel && (
          <button className="rounded-md border border-red-500 px-4 py-2 text-sm text-red-600">
            Cancel Order
          </button>
        )}

        {order.canReturn && (
          <button className="rounded-md border px-4 py-2 text-sm">
            Request Return
          </button>
        )}
      </div>
    </div>
  );
}
