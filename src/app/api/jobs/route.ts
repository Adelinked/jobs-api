import { NextResponse } from "next/server";
import jobs from "@/data/jobs.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const search = searchParams.get("search");
  const type = searchParams.get("type");
  const location = searchParams.get("location");

  if (id) return NextResponse.json(jobs.find((job) => job.id === Number(id)));
  let jobsResponse = jobs;
  if (search)
    jobsResponse = jobsResponse.filter(
      (job) =>
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase())
    );
  if (type) jobsResponse = jobsResponse.filter((job) => job.type === type);
  if (location)
    jobsResponse = jobsResponse.filter((job) =>
      job.location.toLowerCase().includes(location.toLowerCase())
    );
  return NextResponse.json(jobsResponse);
}
