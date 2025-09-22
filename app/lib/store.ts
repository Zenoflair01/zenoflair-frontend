// lib/store.ts  (or wherever your store lives)
import { create } from 'zustand';

interface BreadcrumbItem { label: string; href?: string }

interface AppState {
  user: { name: string } | null;
  loading: boolean;
  breadcrumb: BreadcrumbItem[];
  
  setUser: (user: { name: string } | null) => void;
  setLoading: (loading: boolean) => void;
  setBreadcrumb: (trail: BreadcrumbItem[]) => void;
}

export const useAppStore = create<AppState>((set) => ({
  user: null,
  loading: false,
  breadcrumb: [],

  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),
  setBreadcrumb: (breadcrumb) => set({ breadcrumb }),
}));