"use client";
import { MdOutlineWorkOutline } from "react-icons/md";
import { useJobsStore } from "../store";
import { getJobsData } from "../utils";
export const SearchComponent = () => {
  const { location, city, type, search, setJobs, setSearch, setCurrentPage } =
    useJobsStore();
  const handleClick = async () => {
    const data = await getJobsData(location || city, type, search);
    setJobs(data);
  };
  return (
    <div className="p-[5px] w-full z-10 flex gap-2 justify-between items-center bg-white rounded-[4px] roboto-font  select-none ">
      <div className="pl-3 w-full flex items-center gap-2 ">
        <MdOutlineWorkOutline className="text-gray1" />
        <input
          type="text "
          className="p-2 w-full text-xs placeholder:text-gray1 cursor-pointer focus:outline focus:outline-blue2 focus:outline-2 "
          placeholder="Title, companies, experti..."
          value={search}
          aria-label="Search input"
          onChange={async (e) => {
            const value = e.target.value;
            setSearch(value);
            if (!value) {
              const data = await getJobsData(location || city, type);
              setJobs(data);
            }
          }}
        />
      </div>
      <button
        className="px-[27px] py-[14px] text-white bg-blue2 font-medium rounded-[4px]  disabled:cursor-not-allowed disabled:bg-gray2"
        onClick={handleClick}
        disabled={search === ""}
      >
        Search
      </button>
    </div>
  );
};
