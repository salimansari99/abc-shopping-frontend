"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DUMMY_ADDRESSES, type Address } from "@/app/lib/dummy-addresses";
import AddressFormModal from "@/app/components/account/AddressFormModal";
import ConfirmActionModal from "@/app/components/account/ConfirmActionModal";
import { useCartStore } from "@/app/store/cart-store";
import { formatPrice } from "@/app/lib/format";

export default function AddressPage() {
  const { items, totalPrice } = useCartStore();
  const [addresses, setAddresses] = useState<Address[]>(DUMMY_ADDRESSES);
  const [selectedId, setSelectedId] = useState<string | null>(
    addresses.find((a) => a.isDefault)?.id ?? addresses[0]?.id ?? null
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Address | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [toDeleteId, setToDeleteId] = useState<string | null>(null);

  // Guard: if cart empty, show message
  if (!items.length) {
    return (
      <section className="container mx-auto max-w-2xl px-4 pt-16 pb-28 md:py-16">
        <p className="text-center text-lg text-muted-foreground">
          Your cart is empty.
        </p>
      </section>
    );
  }

  const handleSave = (addr: Address) => {
    setAddresses((prev) => {
      const exists = prev.find((p) => p.id === addr.id);
      if (exists) {
        return prev.map((p) => (p.id === addr.id ? addr : p));
      }
      return [addr, ...prev];
    });
    setSelectedId(addr.id);
  };

  const handleDelete = (id: string) => {
    setAddresses((prev) => prev.filter((p) => p.id !== id));
    if (selectedId === id) setSelectedId(addresses[0]?.id ?? null);
  };

  return (
    <section className="mx-auto w-full max-w-4xl px-4 pt-12 pb-28 md:container md:py-12">
      <h1 className="mb-8 text-3xl font-bold">Shipping address</h1>

      <div className="grid gap-10 md:grid-cols-2">
        {/* LEFT: Order Summary */}
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold">Order Summary</h2>

          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.variantId}
                className="flex items-center justify-between gap-4 border-b pb-3"
              >
                <div className="flex items-center gap-3">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={48}
                      height={56}
                      className="rounded-md object-cover"
                    />
                  )}
                  <div>
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-xs text-muted-foreground">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>

                <p className="text-sm font-medium">
                  {formatPrice(item.priceCents * item.quantity)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between border-t pt-4 text-lg font-semibold">
            <span>Total</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
        </div>

        {/* RIGHT: Addresses */}
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="mb-4 text-xl font-semibold">
              Choose a shipping address
            </h2>
            <button
              onClick={() => {
                setEditing(null);
                setModalOpen(true);
              }}
              className="rounded-md bg-black px-3 py-2 text-sm text-white"
            >
              Add address
            </button>
          </div>

          <div className="space-y-3">
            {addresses.map((addr) => (
              <div key={addr.id} className="rounded-lg border p-4">
                <div className="flex items-start justify-between">
                  <label className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="address"
                      checked={selectedId === addr.id}
                      onChange={() => setSelectedId(addr.id)}
                    />
                    <div>
                      <p className="text-sm font-medium">
                        {addr.name}{" "}
                        {addr.isDefault && (
                          <span className="ml-2 text-xs text-gray-500">
                            (Default)
                          </span>
                        )}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {addr.line1}
                        {addr.line2 ? `, ${addr.line2}` : ""}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {addr.city}, {addr.state} {addr.postalCode} •{" "}
                        {addr.country}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {addr.phone}
                      </p>
                    </div>
                  </label>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setEditing(addr);
                        setModalOpen(true);
                      }}
                      className="text-sm text-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        setToDeleteId(addr.id);
                        setConfirmOpen(true);
                      }}
                      className="text-sm text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-end">
            <Link
              href="/checkout/payment"
              className="rounded-md bg-black px-4 py-2 text-sm text-white"
            >
              Continue to payment
            </Link>
          </div>
        </div>
      </div>

      <AddressFormModal
        open={modalOpen}
        initialData={editing}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
      />

      <ConfirmActionModal
        open={confirmOpen}
        title="Delete address"
        description="This action cannot be undone. Are you sure you want to delete this address?"
        confirmText="Delete"
        onConfirm={() => {
          if (toDeleteId) handleDelete(toDeleteId);
          setConfirmOpen(false);
        }}
        onClose={() => setConfirmOpen(false)}
      />
    </section>
  );
}
