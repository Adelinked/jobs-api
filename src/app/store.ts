import { create } from "zustand";

export interface jobType {
  id: number;
  title: string;
  location: string;
  company: string;
  type: string;
  posted: string;
  how_to_apply: string;
  description: string;
}

export const useJobsStore = create<{
  search: string;
  type: string;
  location: string;
  city: string;
  jobs: jobType[];
  setSearch: (search: string) => void;
  setType: (type: string) => void;
  setLocation: (location: string) => void;
  setCity: (city: string) => void;
  setJobs: (jobs: jobType[]) => void;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}>((set) => ({
  search: "",
  type: "Full time",
  location: "",
  city: "",
  jobs: [],
  currentPage: 0,
  setCurrentPage: (currentPage: number) => set({ currentPage }),
  setSearch: (search: string) => set({ search, currentPage: 0 }),
  setType: (type: string) => set({ type, currentPage: 0 }),
  setLocation: (location: string) => set({ location, currentPage: 0 }),
  setCity: (city: string) => set({ city, currentPage: 0 }),
  setJobs: (jobs: jobType[]) => set({ jobs, currentPage: 0 }),
}));
