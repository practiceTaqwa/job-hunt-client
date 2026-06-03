"use client";
import { DashBoardSideBar } from "@/components/dashboard/DashBoardSideBar";
import { useSession } from "@/lib/auth-client";
import React from "react";

const DashBoardRecruiterPage = () => {
  const { data: session, isPending } = useSession();
  console.log("re", session);

  return <div>i ame reqter</div>;
};

export default DashBoardRecruiterPage;
