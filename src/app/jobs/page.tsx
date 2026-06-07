import JobCard from "@/components/jobs/JobCard";
import JobListingContainer from "@/components/jobs/jobListingContainer";

export default async function Page() {
  //   const jobs = [
  //     {
  //       _id: {
  //         $oid: "6a25633abb4e0478eba28a99",
  //       },
  //       benefits: "Health Insurance, Paid Leave",
  //       category: "Development",
  //       currency: "USD",
  //       deadline: {
  //         $date: "2026-12-31T00:00:00.000Z",
  //       },
  //       jobType: "Full-time",
  //       location: "Rangpur",
  //       requirements: "React, Next.js, TypeScript",
  //       responsibilities: "Build and maintain web applications",
  //       salaryMax: 1500,
  //       salaryMin: 800,
  //       title: "Frontend Developer",
  //       name: "Ummah Tech",
  //       industry: "Technology",
  //       approved: true,
  //       companyId: "cmp_001",
  //       status: true,
  //       createdAt: {
  //         $date: "2026-06-07T12:25:30.962Z",
  //       },
  //       updatedAt: {
  //         $date: "2026-06-07T12:25:30.962Z",
  //       },
  //       __v: 0,
  //     },
  //     {
  //       _id: {
  //         $oid: "6a25633abb4e0478eba28a98",
  //       },
  //       benefits: "Remote Work, Bonus",
  //       category: "Development",
  //       currency: "USD",
  //       deadline: {
  //         $date: "2026-11-30T00:00:00.000Z",
  //       },
  //       jobType: "Part-time",
  //       location: "Dhaka",
  //       requirements: "Node.js, Express, MongoDB",
  //       responsibilities: "Develop REST APIs",
  //       salaryMax: 1200,
  //       salaryMin: 600,
  //       title: "Backend Developer",
  //       name: "Tech Solutions",
  //       industry: "Software",
  //       approved: true,
  //       companyId: "cmp_002",
  //       status: true,
  //       createdAt: {
  //         $date: "2026-06-07T12:25:30.962Z",
  //       },
  //       updatedAt: {
  //         $date: "2026-06-07T12:25:30.962Z",
  //       },
  //       __v: 0,
  //     },
  //   ];

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/job`);
  const result = await res.json();
  const jobs = result.data;
  return (
    <div className="w-full min-h-screen bg-zinc-950 p-6 md:p-12 text-white">
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Open Positions</h1>
        <p className="text-zinc-400 mt-2">Discover your next engineering challenge.</p>
      </div>

      {/* Pass data to the Client Wrapper to handle filtering interactivity */}
      <JobListingContainer initialJobs={jobs || []} />
    </div>
  );

}
