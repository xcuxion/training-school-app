
"use client";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface IUser {
  id: string;
  email: string;
  role: "applicant" | "admin" | "facilitator" | "student" | "visitor" | null;
}

interface UserStore {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  updateUser: (partialUser: Partial<IUser>) => void;
  logoutUser: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      updateUser: (partialUser) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...partialUser } : null,
        })),
      logoutUser: () => set({ user: null }),
    }),
    { name: "user-storage", storage: createJSONStorage(() => localStorage) }
  )
);
