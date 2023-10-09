"use client";
import { ImEarth } from "react-icons/im";
import { useJobsStore } from "../store";
import debounce from "lodash.debounce";
import { useMemo } from "react";
import { getJobsData } from "../utils";

const cities = ["London", "Amsterdam", "New York", "Berlin"];
export const LocationComp = () => {
  const { city, setCity, setLocation, type, search, setJobs, location } =
    useJobsStore();
  const setCityFunc = async (city: string) => {
    setCity(city);
    const data = await getJobsData(city, type, search);
    setJobs(data);
  };
  const handleLocationChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCity("");
    setLocation(e.target.value);

    const data = await getJobsData(e.target.value || city || "", type, search);
    setJobs(data);
  };
  const debouncedLocationChange = useMemo(
    () => debounce(handleLocationChange, 300),
    [type, search, location, city]
  );

  return (
    <div>
      <p className="text-gray1 text-sx font-bold uppercase mb-8 md:mb-[14px]">
        Location
      </p>
      <div className="flex items-center gap-[15px] px-3 y-[15px] mb-7 md:mb-11">
        <ImEarth className="text-gray1 w-[18px] h-[18px] " />
        <input
          type="text "
          className="p-2 w-[176px] md:w-[198px] text-xs placeholder:text-gray1 cursor-pointer focus:outline focus:outline-blue2 focus:outline-2"
          placeholder="City, state, zip code or country"
          onChange={debouncedLocationChange}
          aria-label="Location input"
        />
      </div>
      <div className="flex flex-col gap-4 px-[14px]">
        {cities.map((c) => (
          <div key={c} className="flex items-center gap-3 ">
            <input
              type="radio"
              value={c}
              className="w-[18px] h-[18px] cursor-pointer  accent-blue1"
              onChange={() => setCityFunc(c)}
              checked={c === city}
              aria-label={`${c} checkbox`}
            />
            <span>{c}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
