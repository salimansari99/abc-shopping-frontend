import Link from "next/link";
import { ROUTES } from "@/app/constants/routes";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="mb-2 text-lg font-semibold">
            ABC<span className="font-light">SHOP</span>
          </h3>
          <p className="text-sm text-muted-foreground">
            Premium fashion shopping experience with curated collections and
            timeless style.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h4 className="mb-3 font-semibold">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href={ROUTES.SHOP}>All Products</Link>
            </li>
            <li>
              <Link href={ROUTES.COLLECTIONS}>Collections</Link>
            </li>
            <li>
              <Link href={ROUTES.ACCOUNT}>My Account</Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="mb-3 font-semibold">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href={ROUTES.ABOUT}>About Us</Link>
            </li>
            <li>
              <Link href={ROUTES.CONTACT}>Contact</Link>
            </li>
            <li>
              <Link href={ROUTES.CAREERS}>Careers</Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="mb-3 font-semibold">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href={ROUTES.TERMS}>Terms & Conditions</Link>
            </li>
            <li>
              <Link href={ROUTES.PRIVACY}>Privacy Policy</Link>
            </li>
            <li>
              <Link href={ROUTES.RETURNS}>Returns</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t py-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} ABC Shopping. All rights reserved.
      </div>
    </footer>
  );
}
