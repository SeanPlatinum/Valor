import { create } from "zustand"

type Page = "home" | "about" | "reviews" | "heat-pumps" | "commercial"

interface NavigationStore {
  currentPage: Page
  setCurrentPage: (page: Page) => void
}

export const useNavigationStore = create<NavigationStore>((set) => ({
  currentPage: "home",
  setCurrentPage: (page) => set({ currentPage: page }),
}))

