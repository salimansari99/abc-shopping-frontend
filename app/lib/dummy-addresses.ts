export type Address = {
  id: string;
  name: string;
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault?: boolean;
};

export const DUMMY_ADDRESSES: Address[] = [
  {
    id: "addr-1",
    name: "Salim Ansari",
    phone: "+91 98765 43210",
    line1: "Flat 302, Green Heights",
    line2: "Andheri East",
    city: "Mumbai",
    state: "Maharashtra",
    postalCode: "400069",
    country: "India",
    isDefault: true,
  },
  {
    id: "addr-2",
    name: "Salim Ansari",
    phone: "+91 91234 56789",
    line1: "221B Baker Street",
    city: "London",
    state: "London",
    postalCode: "NW1",
    country: "UK",
  },
];
