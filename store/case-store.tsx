"use client";
import { create } from "zustand";

export interface ICase {
    id: string;
  }
  
  
  
  interface CaseStore {
    student: ICase | null;
    update: (student: ICase) => void;
  }

export const useCaseStore = create<CaseStore>((set) => ({
  student: null,
  update: (student) => {
    // console.log("State Before Update:", useCaseStore.getState().student); // ✅ Debugging log
    set((state) => ({ ...state, student }));
    // console.log("State After Update:", useCaseStore.getState().student); // ✅ Debugging log
  },
}));
