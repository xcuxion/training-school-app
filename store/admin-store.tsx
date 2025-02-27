"use client";
import { create } from "zustand";

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
    updateAdmin: (partiaAdmin: Partial<IAdmin>) => void;
    logout: () => void
  }

export const useAdminStore = create<AdminStore>((set) => ({
  admin: null,
  setAdmin: (admin) => {
    console.log("State Before Update:", useAdminStore.getState().admin); // ✅ Debugging log
    set((state) => ({ ...state, admin }));
    console.log("State After Update:", useAdminStore.getState().admin); // ✅ Debugging log
  },
  updateAdmin: (partiaAdmin) => set((state)=>({
    admin: state.admin ? {...state.admin, ...partiaAdmin} : null
  })),
  logout: () => set(() => ({ admin: null }))
}));
