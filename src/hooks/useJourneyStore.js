import { create } from "zustand";

export const useJourneyStore = create((set) => ({
  currentStep: null,
  stepsPerPage: 4,
  currentPage: 1,
  setStep: (step) => set({ currentStep: step }),
  nextPage: () => set((state) => ({ currentPage: state.currentPage + 1 })),
  resetPage: () => set({ currentPage: 1 }),
}));
