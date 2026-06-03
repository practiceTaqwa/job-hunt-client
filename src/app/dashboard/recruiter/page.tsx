"use client";
import { DashBoardSideBar } from "@/components/dashboard/DashBoardSideBar";
import { useSession } from "@/lib/auth-client";
import React from "react";

const DashBoardRecruiterPage = () => {
  const { data: session, isPending } = useSession();
  if (isPending) {
    <p>loading</p>;
  }
  console.log("re", session);

  return (
    <div>
      <h2>Welcome back{session?.user?.name}</h2>
    </div>
  );
};

export default DashBoardRecruiterPage;
