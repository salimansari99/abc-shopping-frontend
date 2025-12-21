import Header from "@/app/components/common/Navbar";
import MiniCart from "@/app/components/cart/MiniCart";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <MiniCart />
    </>
  );
}
