"use client";

import { useState } from "react";

export default function BillingAddressToggle() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-3">
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" checked={open} onChange={() => setOpen(!open)} />
        Billing address is different
      </label>

      {open && (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <input className="input" placeholder="Address line 1" />
          <input className="input" placeholder="City" />
          <input className="input" placeholder="State" />
          <input className="input" placeholder="Postal code" />
        </div>
      )}
    </div>
  );
}
