import { create } from "zustand";

const useFAQStore = create((set) => ({
  activeIndex: null,
  toggleFAQ: (index) =>
    set((state) => ({
      activeIndex: state.activeIndex === index ? null : index,
    })),
}));

export default useFAQStore;
