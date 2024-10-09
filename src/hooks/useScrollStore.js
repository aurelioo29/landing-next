import { create } from "zustand";

const useScrollStore = create((set) => ({
  showScrollTop: false,
  setShowScrollTop: (value) => set({ showScrollTop: value }),
}));

export default useScrollStore;
