"use client";
import { create } from "zustand";

export interface IApplicant {
  id: string;
  email: string;
  fname: string;
  lname: string;
  oname: string | null;
  dob: string | Date;
  gender: "male" | "female";
  country: "ghana";
  school: "ashesi" | "none" | "knust" | "ug" | null;
  programme: string | null;
  year: "1" | "2" | "3" | "4" | "5" | "6" | string | null;
  reason: string;
  balance: string;
  contact: string;
  laptop: boolean;
  scholarship: boolean;
  status: "pending" | "admitted" | "rejected" | string;
  statement: string | null;
  student: boolean;
  admissionType: string | null;
  batch: "batch25" | null | string;
}

interface ApplicantStore {
  applicant: IApplicant | null;
  update: (applicant: IApplicant) => void;
}

export const useApplicantStore = create<ApplicantStore>((set) => ({
  applicant: null,
  update: (applicant) => {
    console.log("State Before Update:", useApplicantStore.getState().applicant); // ✅ Debugging log
    set((state) => ({ ...state, applicant }));
    console.log("State After Update:", useApplicantStore.getState().applicant); // ✅ Debugging log
  },
  logout: () => set(() => ({ applicant: null })),
}));
