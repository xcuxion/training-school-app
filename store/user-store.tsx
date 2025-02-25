"use client";
import { create } from "zustand";

export interface IUser {
  id: string;
  email: string;
  role: "applicant" | "admin" | "facilitator" | "student" | "visitor" | null ;
}

interface UserStore {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  updateUser: (partialUser: Partial<IUser>) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => {
    console.log("State Before Update:", useUserStore.getState().user); // ✅ Debugging log
    set((state) => ({ ...state, user }));
    console.log("State After Update:", useUserStore.getState().user); // ✅ Debugging log
  },
  logout: () => {
    console.log("State Before logout:", useUserStore.getState().user); // ✅ Debugging log
    set(() => ({ user: null }));
    console.log("State After logout:", useUserStore.getState().user); // ✅ Debugging log
  },
  updateUser: (partialUser) => set((state)=>({
    user: state.user ? {...state.user, ...partialUser} : null
  }))
}));
