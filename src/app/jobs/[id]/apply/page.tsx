import React from "react";
import { getUserSession } from "@/lib/core/session";
import { redirect } from "next/navigation";
import JobApply from "./JobApply";
const Apply = async ({ params }) => {
  const { id } = await params;
  const user = await getUserSession();
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/job/${id}`);
  const result = await res.json();
  const job = result.data;

  if (!user) {
    redirect(`/signin?redirect=/jobs/${id}/apply`);
  }
  // if (user.role !== "seeker") {
  //   return <h1>only job seeker apply this</h1>;
  // }
  return (
    <div>
      <div>
        <h2> apply now {job.title}</h2>
        <JobApply applicant={user} job={job}></JobApply>
      </div>
    </div>
  );
};

export default Apply;
