"use client";
import { create } from "zustand";

export interface IApplicant {
  id: string;
  email: string | null;
  fname: string;
  lname: string;
  oname: string | null;
  dob: string | Date;
  gender: "male" | "female";
  country: "ghana";
  school: "ashesi" | "none" | "knust" | "ug" | "uds" | "aamusted" | "uhas" | "ucc" | "uds" |"uew" |null;
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
  createdAt?: Date;
  updatedAt?: Date;
  track: string | null;
}

interface ApplicantStore {
  applicant: IApplicant | null;
  setApplicant: (applicant: IApplicant | null) => void;
  updateApplicant: (partialApplicant: IApplicant) => void;
  logoutApplicant: () => void;
}
export const useApplicantStore = create<ApplicantStore>((set) => ({
  applicant: null,
  setApplicant: (applicant) => {
    // console.log("State Before Update:", useApplicantStore.getState().applicant); // ✅ Debugging log
    set((state) => ({ ...state, applicant }));
    // console.log("State After Update:", useApplicantStore.getState().applicant); // ✅ Debugging log
  },
  logoutApplicant: () => {
    // console.log("State Before logout:", useApplicantStore.getState().applicant); // ✅ Debugging log
    set(() => ({ applicant: null }));
    // console.log("State After logout:", useApplicantStore.getState().applicant); // ✅ Debugging log
  },
  updateApplicant: (partialApplicant) =>
    set((state) => ({
      applicant: state.applicant
        ? { ...state.applicant, ...partialApplicant }
        : null,
    })),
}));
