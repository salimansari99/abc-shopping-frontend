import Link from "next/link";
import { Package, Heart, User, MapPin, ChevronRight } from "lucide-react";

export default function AccountDashboardPage() {
  // 🔹 Dummy user + stats (replace with API later)
  const user = {
    name: "Salim",
  };

  const stats = {
    orders: 5,
    wishlist: 3,
    addresses: 2,
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Hello, {user.name} 👋</h1>
        <p className="mt-1 text-muted-foreground">
          Manage your orders, wishlist, and account details.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <StatCard label="Orders" value={stats.orders} />
        <StatCard label="Wishlist Items" value={stats.wishlist} />
        <StatCard label="Saved Addresses" value={stats.addresses} />
      </div>

      {/* Navigation Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <DashboardCard
          title="My Orders"
          description="Track, return, or view your orders"
          icon={<Package className="h-5 w-5" />}
          href="/account/orders"
        />

        <DashboardCard
          title="Wishlist"
          description="Products you’ve saved"
          icon={<Heart className="h-5 w-5" />}
          href="/account/wishlist"
        />

        <DashboardCard
          title="Profile"
          description="Edit personal information"
          icon={<User className="h-5 w-5" />}
          href="/account/profile"
        />

        <DashboardCard
          title="Addresses"
          description="Manage delivery addresses"
          icon={<MapPin className="h-5 w-5" />}
          href="/account/addresses"
        />
      </div>
    </div>
  );
}

/* -------------------- */
/* Components */
/* -------------------- */

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border bg-white p-4 text-center">
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

function DashboardCard({
  title,
  description,
  icon,
  href,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-lg border bg-white p-5 transition hover:shadow-sm"
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 font-medium">
            {icon}
            {title}
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        <ChevronRight className="mt-1 h-4 w-4 text-gray-400 transition group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
