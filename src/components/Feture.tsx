"use client";

import {
  HiOutlineMagnifyingGlass,
  HiOutlineBookmark,
  HiOutlineArrowTrendingUp,
} from "react-icons/hi2";

import { MdOutlineInsights, MdOutlineAutoAwesome } from "react-icons/md";

import { LuFileText } from "react-icons/lu";
import { PiBuildingsLight, PiHexagonLight } from "react-icons/pi";

const features = [
  {
    title: "Smart Search",
    description: "Find your ideal job with advanced filters.",
    icon: HiOutlineMagnifyingGlass,
  },
  {
    title: "Salary Insights",
    description: "Get real salary data to negotiate confidently.",
    icon: MdOutlineInsights,
  },
  {
    title: "Top Companies",
    description: "Apply to vetted companies that are hiring.",
    icon: PiBuildingsLight,
  },
  {
    title: "Saved Jobs",
    description: "Manage apps & favorites on your dashboard.",
    icon: HiOutlineBookmark,
  },
  {
    title: "One-Click Apply",
    description: "Simplify your job applications for an easier process!",
    icon: MdOutlineAutoAwesome,
  },
  {
    title: "Resume Builder",
    description: "Create professional resumes with modern templates.",
    icon: LuFileText,
  },
  {
    title: "Skill-Based Matching",
    description: "Discover jobs that match your skills and experience.",
    icon: PiHexagonLight,
  },
  {
    title: "Career Growth Resources",
    description: "Boost your career with quick interview tips.",
    icon: HiOutlineArrowTrendingUp,
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-black py-20 px-4 md:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* top heading */}
        <div className="text-center">
          <div className="mb-4 flex items-center justify-center gap-2 text-xs uppercase tracking-[4px] text-zinc-400">
            <span className="h-[6px] w-[6px] rounded-full bg-violet-500" />
            Features Job
            <span className="h-[6px] w-[6px] rounded-full bg-violet-500" />
          </div>

          <h2 className="mx-auto max-w-2xl text-4xl font-semibold leading-tight text-white md:text-5xl">
            Everything you need
            <br />
            to succeed
          </h2>
        </div>

        {/* features grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-all duration-300 hover:border-violet-500/30 hover:bg-white/[0.04]"
              >
                {/* icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 shadow-lg">
                  <Icon className="text-2xl text-violet-400" />
                </div>

                {/* content */}
                <div>
                  <h3 className="text-lg font-medium text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
