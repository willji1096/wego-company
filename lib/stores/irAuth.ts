import { create } from "zustand";

type IRAuthStore = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const useIRAuthStore = create<IRAuthStore>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));
