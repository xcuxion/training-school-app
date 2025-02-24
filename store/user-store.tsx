"use client";
import { create } from "zustand";

export interface IUser {
  id: string;
  email: string;
  role: "applicant" | "admin" | "facilitator" | "student" | null ;
}

interface UserStore {
  user: IUser | null;
  update: (user: IUser) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  update: (user) => {
    console.log("State Before Update:", useUserStore.getState().user); // ✅ Debugging log
    set((state) => ({ ...state, user }));
    console.log("State After Update:", useUserStore.getState().user); // ✅ Debugging log
  },
  logout: () => {
    console.log("State Before logout:", useUserStore.getState().user); // ✅ Debugging log
    set(() => ({ user: null }));
    console.log("State After logout:", useUserStore.getState().user); // ✅ Debugging log

  },
}));
