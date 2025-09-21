import { create } from 'zustand';

interface AppState {
  user: { name: string } | null;
  loading: boolean;
  setUser: (user: { name: string } | null) => void;
  setLoading: (loading: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  user: null,
  loading: false,
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),
}));
