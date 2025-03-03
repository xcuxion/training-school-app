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
    userId: string
  }
  
  
  
  interface StudentStore {
    student: IStudent | null;
    updateStudent: (partialStudent: IStudent) => void;
    setStudent: (studen: IStudent | null) => void;
    logoutStudent: () => void;

  }

export const useStudentStore = create<StudentStore>((set) => ({
  student: null,
  setStudent: (student) => {
    // console.log("State Before Update:", useStudentStore.getState().student); // ✅ Debugging log
    set((state) => ({ ...state, student }));
    // console.log("State After Update:", useStudentStore.getState().student); // ✅ Debugging log
  },
  logoutStudent: () => {
    // console.log("State Before logout:", useStudentStore.getState().student); // ✅ Debugging log
    set(() => ({ student: null }));
    // console.log("State After logout:", useStudentStore.getState().student); // ✅ Debugging log
  },
  updateStudent: (partialStudent) =>
    set((state) => ({
      student: state.student
        ? { ...state.student, ...partialStudent }
        : null,
    })),
}));