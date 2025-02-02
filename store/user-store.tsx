"use client";
import { create } from "zustand";

export interface IUser {
  id: string;
  name?: string;
  email: string;
  image?: string;
  balance: string;
  contact: string;
  country: "ghana";
  dob: string | Date;
  fname: string;
  gender: "male"|"female";
  laptop: "yes"|"no";
  lname: string;
  oname: string;
  programme: string;
  reason: string;
  scholarship: "yes"|"no";
  school: "ashesi";
  statement: string;
  year: "1" | "2" | "3" | "4" | "5" | "6";
}

interface UserStore {
  user: IUser | null;
  update: (user: IUser) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  update: (user) => set((state) => ({ ...state, user })),
  logout: () => set((state) => ({...state, user: null })), 
}));
