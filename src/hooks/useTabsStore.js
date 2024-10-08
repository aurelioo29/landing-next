import { create } from "zustand";

export const useTabsStore = create((set) => ({
  activeTab: 0,
  selectedMeeting: null,
  mode: "Data Analyst",
  setActiveTab: (index) => set({ activeTab: index }),
  setSelectedMeeting: (index) => set({ selectedMeeting: index }),
  setMode: (newMode) => set({ mode: newMode }),
}));
