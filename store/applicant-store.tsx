"use client";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface IApplicant {
  id: string;
  email: string | null;
  fname: string;
  lname: string;
  oname: string | null;
  dob: string | Date;
  gender: "male" | "female";
  country: "ghana";
  school: "ashesi" | "none" | "knust" | "ug" | "uds" | "aamusted" | "uhas" | "ucc" | "uds" | "uew" | null;
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
  updateApplicant: (partialApplicant: Partial<IApplicant>) => void;
  logoutApplicant: () => void;
}

export const useApplicantStore = create<ApplicantStore>()(
  persist(
    (set) => ({
      applicant: null,
      setApplicant: (applicant) => set(() => ({ applicant })),
      logoutApplicant: () => set(() => ({ applicant: null })),
      updateApplicant: (partialApplicant) =>
        set((state) => ({
          applicant: state.applicant
            ? { ...state.applicant, ...partialApplicant }
            : null,
        })),
    }),
    {
      name: "applicant-store", // ✅ Unique key for localStorage
      storage: createJSONStorage(() => localStorage), // ✅ Corrected storage
    }
  )
);
