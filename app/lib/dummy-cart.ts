import { productToCartItem } from "./cart-utils";
import { DUMMY_PRODUCTS } from "./dummy-products";

export const DUMMY_CART_ITEMS = [
  productToCartItem(DUMMY_PRODUCTS[0], DUMMY_PRODUCTS[0].variants![0], 1),
  productToCartItem(DUMMY_PRODUCTS[1], DUMMY_PRODUCTS[1].variants![0], 2),
];
