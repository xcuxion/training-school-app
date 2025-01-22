"use client";
import { create } from "zustand";

export interface IUser {
  id: string;
  name?: string;
  email: string;
  image?: string;
}

interface UserStore {
  user: IUser | null;
  update: (user: IUser) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  update: (user) => set((state) => ({ ...state, user })),
  // logout: () => set((state) => ({...state, user: null })), // Uncomment to enable logout functionality.
}));
