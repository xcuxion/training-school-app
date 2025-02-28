"use client";
import { create } from "zustand";

export interface IResources {
    id: string;
  }
  
  
  
  interface ResourcesStore {
    resources: IResources | null;
    updateResources: (resources: IResources) => void;
  }

export const useResourcesStore = create<ResourcesStore>((set) => ({
  resources: null,
  updateResources: (resources) => {
    // console.log("State Before Update:", useResourcesStore.getState().resources); // ✅ Debugging log
    set((state) => ({ ...state, resources }));
    // console.log("State After Update:", useResourcesStore.getState().resources); // ✅ Debugging log
  },
  logout: () => set(() => ({ resources: null })),
}));
