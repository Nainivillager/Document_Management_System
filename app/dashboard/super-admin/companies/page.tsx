"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface Company {
  companyId: string;
  companyName: string;
  registeredMail: string;
  totalUsers: number;
}

const companies: Company[] = [
  {
    companyId: "1",
    companyName: "Company A",
    registeredMail: "a@example.com",
    totalUsers: 150,
  },
  {
    companyId: "2",
    companyName: "Company B",
    registeredMail: "b@example.com",
    totalUsers: 200,
  },
  {
    companyId: "3",
    companyName: "Company C",
    registeredMail: "c@example.com",
    totalUsers: 120,
  },
  // Add more dummy data as needed
];

const page: React.FC = () => {
  const router = useRouter();

  const handleOverviewClick = (companyId: string) => {
    router.push(`/companies/${companyId}/overview`);
  };

  return (
    <div className=" p-4 bg-gray-100">
      <div className="overflow-x-auto">
        <table className=" bg-white shadow-md rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600">
                Company ID
              </th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600">
                Company Name
              </th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600">
                Registered Email
              </th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600">
                Total Users
              </th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => (
              <tr key={company.companyId} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b border-gray-200">
                  {company.companyId}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {company.companyName}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {company.registeredMail}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {company.totalUsers}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <button
                    onClick={() => handleOverviewClick(company.companyId)}
                    className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-700"
                  >
                    View Overview
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
