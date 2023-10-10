import Image from "next/image";
import { SearchComponent } from "./_components/searchComponent";
import { JobTypeComp } from "./_components/jobTypeComp";
import { LocationComp } from "./_components/locationComp";
import { JobsComp } from "./_components/jobsComp";
import { Footer } from "./_components/footer";
import { jobType, useJobsStore } from "./store";
import { StoreInitializer } from "./_components/storeInitializer";
import { headers } from "next/headers";
import initialJobs from "@/data/jobs.json";
export default async function Home() {
  /*  const initialJobs = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs`,
    {
      method: "GET",
      headers: headers(),
    }
  )
    .then((res) => res.json())
    .then((data) => data.filter((job: jobType) => job.type === "Full time"));
*/
  useJobsStore.setState({
    jobs: initialJobs,
  });
  return (
    <main className="min-h-screen w-full px-3 md:px-[120px] pt-[12px] md:pt-8  ">
      <StoreInitializer initialJobs={initialJobs} />

      <header className="text-2xl mb-8">
        <span className="font-bold">Adelinked</span>{" "}
        <span className=" font-light">Jobs</span>
      </header>
      <section className="relative rounded-lg w-full py-[42px] overflow-hidden px-[18px] md:px-[105px] lg:px-[205px] mb-[29px] md:mb-[44px]">
        <Image
          src="/backgroundImg.png"
          alt="background"
          fill
          style={{ objectFit: "cover", zIndex: "-1" }}
          className="z-0  "
          priority
        />
        <SearchComponent />
      </section>
      <section className="flex flex-col md:flex-row w-full">
        <div className="mb-6">
          <JobTypeComp />
          <LocationComp />
        </div>
        <div className="w-full">
          <JobsComp />
        </div>
      </section>
      <Footer />
    </main>
  );
}
