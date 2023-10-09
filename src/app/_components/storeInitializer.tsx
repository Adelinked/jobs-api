"use client";
import { useRef } from "react";
import { jobType, useJobsStore } from "../store";

export function StoreInitializer({ initialJobs }: { initialJobs: jobType[] }) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useJobsStore.setState({
      jobs: initialJobs,
    });
    initialized.current = true;
  }
  return null;
}
