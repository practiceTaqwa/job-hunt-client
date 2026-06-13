import { DashBoardSideBar } from "@/components/dashboard/DashBoardSideBar";
import { getUserSession } from "@/lib/core/session";
import { redirect } from "next/navigation";
import React from "react";

const RecruiterLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUserSession();
  if (user?.user.role !== "recruiter") {
   return redirect("/unathorized");
  }
  return children;
};

export default RecruiterLayout;
