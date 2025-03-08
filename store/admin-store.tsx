"use client";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface IAdmin {
  id: string;
  name: string;
  email: string;
  verified: boolean;
  verificationCode: number | null;
  permissions: "registrar" | "librarian" | "support" | "head";
  createdAt: Date;
  updatedAt: Date;
}

interface AdminStore {
  admin: IAdmin | null;
  setAdmin: (admin: IAdmin | null) => void;
  updateAdmin: (partialAdmin: Partial<IAdmin>) => void;
  logoutAdmin: () => void;
}

export const useAdminStore = create<AdminStore>()(
  persist(
    (set) => ({
      admin: null,
      setAdmin: (admin) => set({ admin }),
      updateAdmin: (partialAdmin) =>
        set((state) => ({
          admin: state.admin ? { ...state.admin, ...partialAdmin } : null,
        })),
      logoutAdmin: () => set({ admin: null }),
    }),
    { name: "admin-storage", storage: createJSONStorage(() => localStorage) }
  )
);
