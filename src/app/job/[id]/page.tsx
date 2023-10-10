import Link from "next/link";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { splitTextByEmailAddress } from "@/app/utils";
import { jobType } from "@/app/store";
import { formatDistanceToNow } from "date-fns";
import { BsClock } from "react-icons/bs";
import { ImEarth } from "react-icons/im";
import { Footer } from "@/app/_components/footer";
import { ImageWithFallback } from "@/app/_components/imageWithFallback";

export default async function JobPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const job = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs?id=${id}`
  ).then((res) => res.json());
  const { title, location, company, type, posted, how_to_apply, description } =
    job;
  const parts = splitTextByEmailAddress(how_to_apply);
  const postedDate = new Date(posted);
  const formattedPostedDate = formatDistanceToNow(postedDate, {
    addSuffix: true,
  });
  const descriptionLines = description.split("\n");
  return (
    <>
      <main className="min-h-screen w-full px-3 md:px-16 lg:px-[120px] pt-[12px] md:pt-8  ">
        <header className="text-2xl mb-8">
          <span className="font-bold">Adelinked </span>
          <span className=" font-light">Jobs</span>
        </header>
        <section className="flex flex-col md:flex-row gap-[77px]">
          <div className="mb-9 w-full md:w-1/4">
            <Link
              href="/"
              className="flex items-center gap-3 cursor-pointer text-blue2 mb-9"
            >
              <HiOutlineArrowNarrowLeft />
              <span>Back to search</span>
            </Link>
            <p className="text-sm font-bold text-gray1 mb-4">HOW TO APPLY</p>
            <p>
              {parts.map((part, index) => (
                <span key={index}>
                  {/@/.test(part) ? (
                    <span className="text-blue2">{part}</span>
                  ) : (
                    part
                  )}
                </span>
              ))}
            </p>
          </div>
          <div className="roboto-font w-full md:w-3/4">
            <div className="flex flex-col md:flex-row gap-6 mb-[10px]">
              {" "}
              <h1 className="text-2xl font-bold">{title}</h1>
              <span className="flex justify-center items-center px-2 py-[6px] font-bold text-xs border-[1px] border-blue1 rounded-[4px] mb-6 lg:mb-0">
                {type}
              </span>
            </div>
            <div className="flex items-center text-gray1 text-xs font-medium gap-[6px] mb-8">
              <BsClock className=" w-[18px] h-[18px] " />
              <span>{formattedPostedDate}</span>
            </div>
            <div className="flex gap-3 mb-8">
              <div className="min-w-[42px] min-h-[42px] relative mt-1">
                <ImageWithFallback
                  src={`/${company}.png`}
                  alt={company}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <div>
                <p className="font-bold text-lg mb-2">{company}</p>
                <span className="flex items-center gap-[6px] text-gray1 text-xs font-medium  ">
                  <ImEarth className=" w-[18px] h-[18px] " />
                  <span>{location}</span>
                </span>
              </div>
            </div>
            <p className="leading-6 mb-8">
              {descriptionLines.map((line: string, index: number) => (
                <span key={index}>
                  {line}
                  {index < descriptionLines.length - 1 && (
                    <br className="mb-6" />
                  )}
                </span>
              ))}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
