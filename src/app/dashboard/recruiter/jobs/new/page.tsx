"use client";

import { MapPin, Upload, X, ChevronDown } from "lucide-react";

export default function RegisterCompanyPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    console.log(Object.fromEntries(formData.entries()));
  };

  return (
    <div className="min-h-screen bg-black p-6 text-white">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-zinc-800 p-6">
          <div>
            <h1 className="text-3xl font-semibold">Register New Company</h1>

            <p className="mt-2 text-sm text-zinc-400">
              Enter your business details to start hiring on HireLoop.
            </p>
          </div>

          <button type="button" className="text-zinc-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Company Name */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Company Name
              </label>

              <input
                type="text"
                name="companyName"
                placeholder="e.g. Acme Corp"
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 outline-none placeholder:text-zinc-500 focus:border-zinc-600"
              />
            </div>

            {/* Industry */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Industry / Category
              </label>

              <div className="relative">
                <select
                  name="industry"
                  className="w-full appearance-none rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 outline-none focus:border-zinc-600"
                >
                  <option>Technology</option>
                  <option>Healthcare</option>
                  <option>Finance</option>
                  <option>Education</option>
                </select>

                <ChevronDown
                  size={18}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400"
                />
              </div>
            </div>

            {/* Website */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Website URL
              </label>

              <input
                type="url"
                name="website"
                placeholder="https://www.company.com"
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 outline-none placeholder:text-zinc-500 focus:border-zinc-600"
              />
            </div>

            {/* Location */}
            <div>
              <label className="mb-2 block text-sm font-medium">Location</label>

              <div className="relative">
                <MapPin
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                />

                <input
                  type="text"
                  name="location"
                  placeholder="City, Country"
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-900 py-3 pl-11 pr-4 outline-none placeholder:text-zinc-500 focus:border-zinc-600"
                />
              </div>
            </div>

            {/* Employee Range */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Employee Count Range
              </label>

              <div className="relative">
                <select
                  name="employeeRange"
                  className="w-full appearance-none rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 outline-none focus:border-zinc-600"
                >
                  <option>1-10 employees</option>
                  <option>11-50 employees</option>
                  <option>51-200 employees</option>
                  <option>201-500 employees</option>
                  <option>500+ employees</option>
                </select>

                <ChevronDown
                  size={18}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400"
                />
              </div>
            </div>

            {/* Upload */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Company Logo
              </label>

              <label className="flex cursor-pointer items-center gap-4 rounded-lg border border-dashed border-zinc-700 p-4 hover:border-zinc-500">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-zinc-700">
                  <Upload size={18} />
                </div>

                <div>
                  <p className="font-medium">Upload image</p>

                  <p className="text-xs text-zinc-400">PNG, JPG up to 5MB</p>
                </div>

                <input type="file" name="logo" className="hidden" />
              </label>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium">
              Brief Description
            </label>

            <textarea
              name="description"
              rows={6}
              placeholder="Tell us about your company's mission and culture..."
              className="w-full resize-none rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 outline-none placeholder:text-zinc-500 focus:border-zinc-600"
            />
          </div>

          {/* Footer */}
          <div className="mt-8 flex justify-end gap-3 border-t border-zinc-800 pt-6">
            <button
              type="button"
              className="rounded-lg border border-zinc-700 px-6 py-3 transition hover:bg-zinc-900"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
            >
              Register Company
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
