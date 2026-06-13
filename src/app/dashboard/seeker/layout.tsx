import { DashBoardSideBar } from "@/components/dashboard/DashBoardSideBar";
import { getUserSession } from "@/lib/core/session";
import { redirect } from "next/navigation";
import React from "react";

const SeekerLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUserSession();
  if (!user?.user) {
    redirect("/signin");
  }
  if (user?.user.role !== "seeker") {
    return redirect("/unathorized");
  }
  return children;
};

export default SeekerLayout;
