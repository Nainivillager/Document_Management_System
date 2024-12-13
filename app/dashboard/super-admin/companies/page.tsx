"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaEdit } from 'react-icons/fa';
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

const Page: React.FC = () => {
  const router = useRouter();

  const handleOverviewClick = (companyId: string) => {
    router.push(`/companies/${companyId}/overview`);
  };

  const handleAddCompanyClick = () => {
    router.push("./companies/add");
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-white min-h-screen">
      {companies.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-2xl text-gray-700 font-semibold mb-4">
            No companies found.
          </p>
          <button
            onClick={handleAddCompanyClick}
            className="bg-green-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            Add Company Details
          </button>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Company List
            </h2>
            <button
              onClick={handleAddCompanyClick}
              className="bg-green-600 text-white py-1 px-5 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
            >
              Add New Company
            </button>
          </div>
          <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">
                    Company ID
                  </th>
                  <th className="py-1 px-4 text-left text-sm font-medium text-gray-600">
                    Company Name
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                    Registered Email
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                    Total Users
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700">
                {companies.map((company) => (
                  <tr
                    key={company.companyId}
                    className="hover:bg-gray-100 transition duration-200"
                  >
                    <td className="py-3 px-6 border-b">{company.companyId}</td>
                    <td className="py-3 px-6 border-b">
                      {company.companyName}
                    </td>
                    <td className="py-3 px-6 border-b">
                      {company.registeredMail}
                    </td>
                    <td className="py-3 px-6 border-b">{company.totalUsers}</td>
                    <td className="py-3 px-6 border-b">
                      <button
                        onClick={() =>
                          handleOverviewClick(company.companyId)
                        }
                        className="py-2 px-4  hover:bg-grey-200 transition duration-300"
                      >
                         <FaEdit size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
