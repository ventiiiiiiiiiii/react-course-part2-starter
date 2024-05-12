import { create } from "zustand";

interface CounterStore {
  counter: number;
  incerment: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  counter: 0,
  incerment: () => set((store) => ({ counter: store.counter + 1 })),
  reset: () => set(() => ({ counter: 0 })),
}));

export default useCounterStore;
