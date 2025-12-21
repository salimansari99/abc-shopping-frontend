export type UserProfile = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
};

export const DUMMY_PROFILE: UserProfile = {
  firstName: "Salim",
  lastName: "Ansari",
  email: "salim.ansari@example.com",
  phone: "+91 98765 43210",
};
