"use client";

import { useState } from "react";

export default function CreateJobPage() {
  const [isRemote, setIsRemote] = useState(false);

  const company = {
    name: "HireLoop",
    industry: "Technology",
    approved: true,
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const payload = Object.fromEntries(formData.entries());

    console.log(payload);

    // API Call Here
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Post New Job</h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Create a new job posting for your company.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Job Information */}
          <section className="rounded-2xl border bg-card p-6">
            <h2 className="mb-6 text-xl font-semibold">Job Information</h2>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm">Job Title</label>

                <input
                  name="title"
                  placeholder="Frontend Developer"
                  className="w-full rounded-lg border px-4 py-3"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm">Job Category</label>

                <select
                  name="category"
                  className="w-full rounded-lg border px-4 py-3"
                >
                  <option>Development</option>
                  <option>Design</option>
                  <option>Marketing</option>
                  <option>Management</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm">Job Type</label>

                <select
                  name="jobType"
                  className="w-full rounded-lg border px-4 py-3"
                >
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Remote</option>
                  <option>Contract</option>
                  <option>Internship</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm">
                  Application Deadline
                </label>

                <input
                  type="date"
                  name="deadline"
                  className="w-full rounded-lg border px-4 py-3"
                />
              </div>
            </div>
          </section>

          {/* Salary */}
          <section className="rounded-2xl border bg-card p-6">
            <h2 className="mb-6 text-xl font-semibold">Salary Information</h2>

            <div className="grid gap-5 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm">Minimum Salary</label>

                <input
                  type="number"
                  name="salaryMin"
                  className="w-full rounded-lg border px-4 py-3"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm">Maximum Salary</label>

                <input
                  type="number"
                  name="salaryMax"
                  className="w-full rounded-lg border px-4 py-3"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm">Currency</label>

                <select
                  name="currency"
                  className="w-full rounded-lg border px-4 py-3"
                >
                  <option>USD</option>
                  <option>BDT</option>
                  <option>EUR</option>
                </select>
              </div>
            </div>
          </section>

          {/* Location */}
          <section className="rounded-2xl border bg-card p-6">
            <h2 className="mb-6 text-xl font-semibold">Location</h2>

            <div className="space-y-4">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={isRemote}
                  onChange={(e) => setIsRemote(e.target.checked)}
                />
                Remote Position
              </label>

              <input
                name="location"
                disabled={isRemote}
                placeholder="City, Country"
                className="w-full rounded-lg border px-4 py-3 disabled:opacity-50"
              />
            </div>
          </section>

          {/* Description */}
          <section className="rounded-2xl border bg-card p-6">
            <h2 className="mb-6 text-xl font-semibold">Job Description</h2>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm">Responsibilities</label>

                <textarea
                  name="responsibilities"
                  rows={6}
                  className="w-full rounded-lg border p-4"
                  placeholder="Describe job responsibilities..."
                />
              </div>

              <div>
                <label className="mb-2 block text-sm">Requirements</label>

                <textarea
                  name="requirements"
                  rows={6}
                  className="w-full rounded-lg border p-4"
                  placeholder="Required skills and qualifications..."
                />
              </div>

              <div>
                <label className="mb-2 block text-sm">
                  Benefits (Optional)
                </label>

                <textarea
                  name="benefits"
                  rows={5}
                  className="w-full rounded-lg border p-4"
                  placeholder="Health insurance, bonuses, etc..."
                />
              </div>
            </div>
          </section>

          {/* Company */}
          <section className="rounded-2xl border bg-card p-6">
            <h2 className="mb-6 text-xl font-semibold">Company Information</h2>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm">Company Name</label>

                <input
                  value={company.name}
                  disabled
                  className="w-full rounded-lg border px-4 py-3"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm">Industry</label>

                <input
                  value={company.industry}
                  disabled
                  className="w-full rounded-lg border px-4 py-3"
                />
              </div>
            </div>

            <div className="mt-5">
              {company.approved ? (
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                  Approved Company
                </span>
              ) : (
                <span className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-700">
                  Company Approval Pending
                </span>
              )}
            </div>
          </section>

          {/* Footer */}
          <div className="flex justify-end gap-4">
            <button type="button" className="rounded-lg border px-6 py-3">
              Cancel
            </button>

            <button
              type="submit"
              disabled={!company.approved}
              className="rounded-lg bg-black px-6 py-3 text-white disabled:opacity-50"
            >
              Publish Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
