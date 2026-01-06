import { create } from "zustand";

type UIStore = {
  isMiniCartOpen: boolean;
  openMiniCart: () => void;
  closeMiniCart: () => void;
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
};

export const useUIStore = create<UIStore>((set) => ({
  isMiniCartOpen: false,
  openMiniCart: () => set({ isMiniCartOpen: true }),
  closeMiniCart: () => set({ isMiniCartOpen: false }),
  isSearchOpen: false,
  openSearch: () => set({ isSearchOpen: true }),
  closeSearch: () => set({ isSearchOpen: false }),
}));
