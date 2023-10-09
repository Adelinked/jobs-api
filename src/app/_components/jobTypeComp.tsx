"use client";
import { useJobsStore } from "../store";
import { getJobsData } from "../utils";
export const JobTypeComp = () => {
  const { type, setType, location, city, setJobs, search } = useJobsStore();
  return (
    <div className="flex items-center gap-[3px] pl-[14px] md:pl-3 mb-8">
      <input
        type="checkbox"
        className="w-[18px] h-[18px] checked:bg-red-500 checked:text-red-500 cursor-pointer accent-blue1 "
        checked={type === "Full time"}
        onChange={async () => {
          const newType = type === "Full time" ? "Part time" : "Full time";
          setType(newType);
          const data = await getJobsData(location || city, newType, search);
          setJobs(data);
        }}
        aria-label="Full time checkbox"
      />{" "}
      <label>Full time</label>
    </div>
  );
};
