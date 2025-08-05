import {create} from 'zustand';
import { devtools } from 'zustand/middleware';

export const useDrawerStore = create(
  devtools((set) => ({
    type: null,
    data: null,
    openDrawer: (type, data = null) => set({ type, data }),
    closeDrawer: () => set({ type: null, data: null }),
  })),
  { name: 'drawer' }
);
