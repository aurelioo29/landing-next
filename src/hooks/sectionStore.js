import { create } from "zustand";

export const useSectionStore = create((set) => ({
  activeSection: "",
  setActiveSection: (section) => set({ activeSection: section }),
}));
