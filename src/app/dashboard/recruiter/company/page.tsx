import React from "react";
import CompanyProfile from "./CompanyProfile";
import { getUserSession } from "@/lib/core/session";
import { getRecruterCompany } from "@/lib/api/companies";

const CompnyPage = async () => {
  const user = await getUserSession();
  console.log("user com", user);
  const Company = await getRecruterCompany(user?.id as string);

  console.log("cm", Company);
  return (
    <div>
      <CompanyProfile recruiter={user} recruiterCompany={Company} />
    </div>
  );
};

export default CompnyPage;
