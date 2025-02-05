"use client";
import { create } from "zustand";

export interface IUser {
  profileId: string | null;
  id: string;
  fname: string;
  lname: string;
  oname: string | null;
  dob: string | Date;
  gender: "male"|"female";
  country: "ghana";
  school: "ashesi" | "none" | "knust" | "ug";
  contact: string;
  programme: string;
  year: "1" | "2" | "3" | "4" | "5" | "6" |string;
  reason: string;
  balance: string;
  laptop: boolean;
  scholarship: boolean;
  status: "pending" | "admitted" | "rejected";
  statement: string | null;
  profile: {
    createdAt: string | Date;
    updatedAt: string | Date;
    email: string;
  } | null
}

interface ILogin {

}

interface UserStore {
  user: IUser | ILogin | null;
  update: (user: IUser|ILogin) => void;
}


export const useUserStore = create<UserStore>((set) => ({
  user: null,
  update: (user) => {
    console.log("State Before Update:", useUserStore.getState().user); // ✅ Debugging log
    set((state) => ({ ...state, user }));
    console.log("State After Update:", useUserStore.getState().user); // ✅ Debugging log
  },
  logout: () => set(() => ({ user: null })),
}));
