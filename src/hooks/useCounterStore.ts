import { create } from 'zustand';
interface ItemsState {
  items: Item[]
  add: (value: Item ) => void
  clear: () => void
}
interface Item {
  title: string,
  price: number
}

export const useStore = create<ItemsState>((set) => ({
  items: [],
  add: (value: Item) =>
    set((state) => ({
      items: [...state.items, value],
    })),
  clear: () => set({items: []}),
}));
