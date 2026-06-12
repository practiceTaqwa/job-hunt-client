import React from "react";
import { redirect } from "next/navigation";
import JobApply from "./JobApply";
import { getUserSession } from "@/lib/core/session";
import Link from "next/link";

const Apply = async ({ params }) => {
  const { id } = await params;
  const session = await getUserSession();

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/job/${id}`);
  const result = await res.json();
  const job = result.data;

  const applicantRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/applications/applictedUserJob/${session?.user?.id}`,
  );
  const applicantData = await applicantRes.json();
  const applicant = applicantData.data;

  if (!session?.user) {
    redirect(`/signin?redirect=/jobs/${id}/apply`);
  }

  if (session.user.role !== "seeker") {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
          <h1 className="text-xl font-semibold text-red-600">
            Only Job Seekers Can Apply
          </h1>
        </div>
      </div>
    );
  }

  const planRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/plans/${session.user.plan}`,
  );
  const planData = await planRes.json();
  const plan = planData.data;
  console.log("pl", plan);
  // const plan = {
  //   id:'seeker_free',
  //   name: "Free",
  //   maxApplicationPerMonth: 3,
  // };

  const remaining = plan.maxApplicationPerMonth - applicant.length;

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-4xl px-4">
        {/* Job Card */}
        <div className="mb-8 rounded-2xl bg-white p-8 shadow-md">
          <h1 className="mb-2 text-3xl font-bold text-gray-800">
            Apply for {job.title}
          </h1>

          <p className="text-gray-600">
            Submit your application for this position.
          </p>
        </div>

        {/* Plan Usage Card */}
        <div className="mb-8 rounded-2xl bg-white p-6 shadow-md">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Application Usage
              </h2>

              <p className="mt-1 text-gray-600">
                You have applied to{" "}
                <span className="font-bold text-blue-600">
                  {applicant.length}
                </span>{" "}
                out of{" "}
                <span className="font-bold">{plan.maxApplicationPerMonth}</span>{" "}
                jobs this month.
              </p>
            </div>

            <div className="rounded-lg bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              {plan.name} Plan
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-5">
            <div className="h-3 overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full bg-blue-600 transition-all"
                style={{
                  width: `${
                    (applicant.length / plan.maxApplicationPerMonth) * 100
                  }%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Limit Reached */}
        {applicant.length >= plan.maxApplicationPerMonth ? (
          <div className="rounded-2xl border border-yellow-300 bg-yellow-50 p-6 shadow-md">
            <h3 className="mb-2 text-xl font-semibold text-yellow-700">
              Application Limit Reached
            </h3>

            <p className="mb-4 text-gray-700">
              You have used all applications available in your current plan.
              Upgrade your plan to apply for more jobs.
            </p>

            <Link
              href="/plans"
              className="inline-flex rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
            >
              Upgrade Plan
            </Link>
          </div>
        ) : (
          <div className="rounded-2xl bg-white p-8 shadow-md">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Apply Now</h2>

              <p className="mt-1 text-gray-600">
                You have{" "}
                <span className="font-semibold text-green-600">
                  {remaining}
                </span>{" "}
                applications remaining this month.
              </p>
            </div>

            <JobApply applicant={session.user} job={job} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Apply;
