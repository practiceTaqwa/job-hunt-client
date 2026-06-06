"use server";

import { serverMutaion } from "../core/server";

export const createCompany = async (newCompany: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/company`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCompany),
  });

  return res.json();
};

// export const createCompany = async (newCompany: any) => {

//   return serverMutaion(`/api/copany`,newCompany);
// };
