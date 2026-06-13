import CompanyTable from '@/components/dashboard/CompanyTable';
import React from 'react';

const AddminCompaniesPage =async () => {
    const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/company/allcompany`).then((res)=>res.json())

    const companies=res.data
    return (
        <div>
            <h2>companies for reviews {companies.length}</h2>
            <CompanyTable companies={companies}></CompanyTable>
        </div>
    );
};

export default AddminCompaniesPage;