"use client";

import { useState } from "react";
import { Plus, Trash2, Edit3, MapPin } from "lucide-react";

import { DUMMY_ADDRESSES, Address } from "@/app/lib/dummy-addresses";
import AddressFormModal from "@/app/components/account/AddressFormModal";

export default function AddressesPage() {
  const [addresses, setAddresses] = useState<Address[]>(DUMMY_ADDRESSES);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Address | null>(null);

  const handleSave = (address: Address) => {
    setAddresses((prev) => {
      const exists = prev.find((a) => a.id === address.id);

      if (exists) {
        return prev.map((a) => (a.id === address.id ? address : a));
      }

      return [...prev, address];
    });
  };

  const handleDelete = (id: string) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id));
  };

  if (addresses.length === 0) {
    return (
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h1 className="mb-4 text-2xl font-bold">Saved Addresses</h1>
          <button
            onClick={() => {
              setEditing(null);
              setOpen(true);
            }}
            className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm text-white"
          >
            <Plus className="h-4 w-4" />
            Add Address
          </button>
        </div>

        <div className="rounded-lg border p-8 text-center">
          <MapPin className="mx-auto mb-3 h-8 w-8 text-gray-400" />
          <p className="text-muted-foreground">
            You haven’t added any addresses yet.
          </p>

          <button className="mt-4 inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm text-white">
            <Plus className="h-4 w-4" />
            Add Address
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Saved Addresses</h1>

        <button
          onClick={() => {
            setEditing(null);
            setOpen(true);
          }}
          className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm text-white"
        >
          <Plus className="h-4 w-4" />
          Add Address
        </button>
      </div>

      {/* Address Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="relative rounded-lg border bg-white p-4"
          >
            {/* Default badge */}
            {address.isDefault && (
              <span className="absolute right-3 top-3 rounded bg-black px-2 py-1 text-xs text-white">
                Default
              </span>
            )}

            <p className="font-medium">{address.name}</p>
            <p className="text-sm text-muted-foreground">{address.phone}</p>

            <p className="mt-2 text-sm">
              {address.line1}
              {address.line2 && `, ${address.line2}`}
              <br />
              {address.city}, {address.state} {address.postalCode}
              <br />
              {address.country}
            </p>

            {/* Actions */}
            <div className="mt-4 flex gap-3">
              <button
                onClick={() => {
                  setEditing(address);
                  setOpen(true);
                }}
                className="inline-flex items-center gap-1 text-sm text-blue-600"
              >
                <Edit3 className="h-4 w-4" />
                Edit
              </button>

              <button
                onClick={() => handleDelete(address.id)}
                className="inline-flex items-center gap-1 text-sm text-red-600"
              >
                <Trash2 className="h-4 w-4" />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      <AddressFormModal
        open={open}
        initialData={editing}
        onClose={() => setOpen(false)}
        onSave={handleSave}
      />
    </div>
  );
}
