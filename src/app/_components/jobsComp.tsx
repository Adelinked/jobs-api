"use client";
import { useRef } from "react";
import { useJobsStore } from "../store";
import { Pagination } from "./Pagination";
import { JobComp } from "./jobComp";

const JOBS_PER_PAGE = 5;

export const JobsComp = () => {
  const { jobs, currentPage, setCurrentPage } = useJobsStore();
  const jobsRef = useRef(null);
  const startIndex = currentPage * JOBS_PER_PAGE;
  const endIndex = startIndex + Math.min(JOBS_PER_PAGE, jobs.length);

  const jobsToView = jobs.slice(startIndex, endIndex);
  return (
    <>
      {jobs.length > 0 ? (
        <div className="flex flex-col gap-6 md:gap-8 mb-6" ref={jobsRef}>
          {jobsToView.map((job) => (
            <JobComp {...job} key={job.id} />
          ))}
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center font-bold ">
          No Jobs Found!
        </div>
      )}
      <Pagination
        numberElements={jobs.length}
        elementsPerPage={JOBS_PER_PAGE}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        toViewRef={jobsRef}
      />
    </>
  );
};
