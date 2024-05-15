import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
interface AuthStore {
  username: string;
  Login: (name: string) => void;
  Logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  username: "",
  Login: (name) => set(() => ({ username: name })),
  Logout: () => set(() => ({ username: "" })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Auth Store", useAuthStore);

export default useAuthStore;
