"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Address } from "@/app/lib/dummy-addresses";

type Props = {
  open: boolean;
  initialData?: Address | null;
  onClose: () => void;
  onSave: (address: Address) => void;
};

const EMPTY_ADDRESS: Address = {
  id: "",
  name: "",
  phone: "",
  line1: "",
  line2: "",
  city: "",
  state: "",
  postalCode: "",
  country: "",
  isDefault: false,
};

export default function AddressFormModal({
  open,
  initialData,
  onClose,
  onSave,
}: Props) {
  if (!open) return null;

  return (
    <ModalContent
      key={initialData?.id ?? "new"} // 🔑 forces reset
      initialData={initialData}
      onClose={onClose}
      onSave={onSave}
    />
  );
}

/* -------------------- */
/* Inner form (remounts cleanly) */
/* -------------------- */

function ModalContent({
  initialData,
  onClose,
  onSave,
}: {
  initialData?: Address | null;
  onClose: () => void;
  onSave: (address: Address) => void;
}) {
  const [form, setForm] = useState<Address>(initialData ?? EMPTY_ADDRESS);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSave({
      ...form,
      id: form.id || crypto.randomUUID(),
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-lg rounded-lg bg-white p-6">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            {initialData ? "Edit Address" : "Add Address"}
          </h2>
          <button onClick={onClose}>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded-md border px-3 py-2 text-sm"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full rounded-md border px-3 py-2 text-sm"
          />

          <input
            name="line1"
            placeholder="Address Line 1"
            value={form.line1}
            onChange={handleChange}
            required
            className="w-full rounded-md border px-3 py-2 text-sm"
          />

          <input
            name="line2"
            placeholder="Address Line 2 (optional)"
            value={form.line2 || ""}
            onChange={handleChange}
            className="w-full rounded-md border px-3 py-2 text-sm"
          />

          <div className="grid grid-cols-2 gap-3">
            <input
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              required
              className="w-full rounded-md border px-3 py-2 text-sm"
            />

            <input
              name="state"
              placeholder="State"
              value={form.state}
              onChange={handleChange}
              required
              className="w-full rounded-md border px-3 py-2 text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <input
              name="postalCode"
              placeholder="Postal Code"
              value={form.postalCode}
              onChange={handleChange}
              required
              className="w-full rounded-md border px-3 py-2 text-sm"
            />

            <input
              name="country"
              placeholder="Country"
              value={form.country}
              onChange={handleChange}
              required
              className="w-full rounded-md border px-3 py-2 text-sm"
            />
          </div>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="isDefault"
              checked={form.isDefault}
              onChange={handleChange}
            />
            Set as default address
          </label>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border px-4 py-2 text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-black px-4 py-2 text-sm text-white"
            >
              Save Address
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
