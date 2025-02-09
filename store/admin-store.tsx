"use client";
import { create } from "zustand";

export interface IAdmin {
    profileId: string | null;
    id: string;
    fname: string;
    lname: string;
    profile: {
      createdAt: string | Date;
      updatedAt: string | Date;
      email: string;
    } | null
  }
  
  
  
  interface AdminStore {
    admin: IAdmin | null;
    update: (admin: IAdmin) => void;
  }

export const useAdminStore = create<AdminStore>((set) => ({
  admin: null,
  update: (admin) => {
    console.log("State Before Update:", useAdminStore.getState().admin); // ✅ Debugging log
    set((state) => ({ ...state, admin }));
    console.log("State After Update:", useAdminStore.getState().admin); // ✅ Debugging log
  },
  logout: () => set(() => ({ admin: null })),
}));
