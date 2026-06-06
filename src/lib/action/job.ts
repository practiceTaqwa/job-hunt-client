"use server";

export const createJob = async (newJob: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/job`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJob),
  });

  return res.json();
};
