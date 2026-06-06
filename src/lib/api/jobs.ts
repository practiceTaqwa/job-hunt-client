export const getCompanyJobs = async (comId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/job?comId=${comId}`,
  );
  return res.json()
};
