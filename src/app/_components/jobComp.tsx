import { formatDistanceToNow } from "date-fns";
import { ImageWithFallback } from "./imageWithFallback";
import { jobType } from "../store";
import Link from "next/link";
import { ImEarth } from "react-icons/im";
import { BsClock } from "react-icons/bs";

export const JobComp = ({
  id,
  title,
  location,
  company,
  type,
  posted,
}: jobType) => {
  const postedDate = new Date(posted);
  const formattedPostedDate = formatDistanceToNow(postedDate, {
    addSuffix: true,
  });
  return (
    <Link
      href={`/job/${id}`}
      className="flex gap-4 md:gap-6 p-3 roboto-font w-full hover:scale-[1.02] transition-all"
    >
      <div className="relative h-[90px] w-[90px]">
        <ImageWithFallback
          src={`/${company}.png`}
          alt={company}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>
      <div className="  w-[calc(100%_-_114px)]">
        <p className="font-bold text-xs mb-2">{company}</p>
        <p className="md:text-lg mb-2">{title}</p>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end">
          <span className="px-2 py-[6px] font-bold text-xs border-[1px] border-blue1 rounded-[4px] mb-6 lg:mb-0">
            {type}
          </span>
          <div className="flex gap-7 text-gray1 text-xs font-medium justify-end ">
            <span className="flex items-center gap-[6px] ">
              <ImEarth className=" w-[18px] h-[18px] " />
              <span>{location}</span>
            </span>
            <span className="flex items-center gap-[6px]">
              <BsClock className=" w-[18px] h-[18px] " />
              <span>{formattedPostedDate}</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
