import { create } from 'zustand';

interface AppState {
  theme: 'light' | 'dark';
  user: { name: string } | null;
  loading: boolean;
  setTheme: (theme: 'light' | 'dark') => void;
  setUser: (user: { name: string } | null) => void;
  setLoading: (loading: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  theme: 'light',
  user: null,
  loading: false,
  setTheme: (theme) => set({ theme }),
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),
}));
