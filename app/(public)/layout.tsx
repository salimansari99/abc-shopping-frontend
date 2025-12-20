// app/(public)/layout.tsx
import type { ReactNode } from "react";
import { Metadata } from "next";

import Navbar from "@/app/components/common/Navbar";
import Footer from "@/app/components/common/Footer";

export const metadata: Metadata = {
  title: {
    default: "ABC Shopping",
    template: "%s | ABC Shopping",
  },
  description: "Premium fashion shopping experience",
  robots: {
    index: true,
    follow: true,
  },
};

type PublicLayoutProps = {
  children: ReactNode;
};

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
