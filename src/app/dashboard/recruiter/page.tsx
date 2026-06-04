"use client";
import { DashBoardSideBar } from "@/components/dashboard/DashBoardSideBar";
import { useSession } from "@/lib/auth-client";
import React from "react";
import { FileText, Users, Zap, CircleCheckBig } from "lucide-react";
import StatsCard from "@/components/dashboard/StatsCard";

const DashBoardRecruiterPage = () => {
  const { data: session, isPending } = useSession();
  if (isPending) {
    <p>loading</p>;
  }
  console.log("re", session);

  const stats = [
    {
      title: "Total Job Posts",
      value: 48,
      icon: <FileText size={20} />,
    },
    {
      title: "Total Applicants",
      value: "1,284",
      icon: <Users size={20} />,
    },
    {
      title: "Active Jobs",
      value: 18,
      icon: <Zap size={20} />,
    },
    {
      title: "Jobs Closed",
      value: 32,
      icon: <CircleCheckBig size={20} />,
    },
  ];

  return (
    <div>
      <h2 className=" text-2xl p-4 font-bold">
        Welcome back{session?.user?.name}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 p-4">
        {stats.map((item) => (
          <StatsCard
            key={item.title}
            title={item.title}
            value={item.value}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default DashBoardRecruiterPage;
