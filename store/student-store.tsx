"use client";
import { create } from "zustand";

export interface IStudent {
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

    profile: {
      createdAt: string | Date;
      updatedAt: string | Date;
      email: string;
    } | null
  }
  
  
  
  interface StudentStore {
    student: IStudent | null;
    update: (student: IStudent) => void;
  }

export const useStudentStore = create<StudentStore>((set) => ({
  student: null,
  update: (student) => {
    console.log("State Before Update:", useStudentStore.getState().student); // ✅ Debugging log
    set((state) => ({ ...state, student }));
    console.log("State After Update:", useStudentStore.getState().student); // ✅ Debugging log
  },
  logout: () => set(() => ({ student: null })),
}));
