import OrderCard from "@/app/components/account/OrderCard";
import { DUMMY_ORDERS } from "@/app/lib/dummy-orders";

export default function OrdersPage() {
  if (DUMMY_ORDERS.length === 0) {
    return (
      <div>
        <h1 className="mb-4 text-2xl font-bold">My Orders</h1>
        <p className="text-muted-foreground">
          You haven’t placed any orders yet.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">My Orders</h1>

      <div className="space-y-4">
        {DUMMY_ORDERS.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}
