import { getUserSession } from "@/lib/core/session";
import ApplicationsTable from "./ApplicationTable";

const Applications = async () => {
  const session = await getUserSession();
  const applicantRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/applications/applictedUserJob/${session?.user?.id}`,
  );
  const applicantData = await applicantRes.json();
  const applicant = applicantData.data;
  return (
    <div>
      applications:{applicant.length}
      <ApplicationsTable jobs={applicant}></ApplicationsTable>
    </div>
  );
};

export default Applications;
