export const getRecruterCompany = async (recruiterId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/company?recruiterId=${recruiterId}`,
  );
  return res.json();
};
