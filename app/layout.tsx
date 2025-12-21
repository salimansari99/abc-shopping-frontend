import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/app/components/common/Navbar";
import Footer from "@/app/components/common/Footer";
import MiniCart from "@/app/components/cart/MiniCart";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MiniCart />
        {/* ✅ GLOBAL HEADER */}
        <Navbar />

        {/* Page content */}
        <main className="min-h-screen">{children}</main>

        <Toaster position="top-right" />

        {/* ✅ GLOBAL FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
