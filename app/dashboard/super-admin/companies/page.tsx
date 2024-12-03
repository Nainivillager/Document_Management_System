"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, Plus, Search, Filter } from 'lucide-react';

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
];

const CompanyListPage: React.FC = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>(companies);

  // Handle search and filtering
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = companies.filter(company => 
      company.companyName.toLowerCase().includes(term) ||
      company.registeredMail.toLowerCase().includes(term) ||
      company.companyId.toLowerCase().includes(term)
    );

    setFilteredCompanies(filtered);
  };

  const handleOverviewClick = (companyId: string) => {
    router.push(`/companies/${companyId}/overview`);
  };

  const handleAddCompanyClick = () => {
    router.push("./companies/add");
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <h2 className="text-2xl font-bold text-white">
              Company Management
            </h2>
            <button
              onClick={handleAddCompanyClick}
              className="flex items-center space-x-2 bg-white text-indigo-600 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
            >
              <Plus className="h-5 w-5" />
              <span>Add New Company</span>
            </button>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="p-4 bg-gray-100 border-b">
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search companies..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 transition duration-300"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <button className="flex items-center space-x-2 bg-white border px-4 py-2 rounded-lg hover:bg-gray-50 transition duration-300">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="hidden sm:block">Filter</span>
            </button>
          </div>
        </div>

        {/* Company List Section */}
        {filteredCompanies.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-4">
              No companies found matching your search.
            </p>
            <button
              onClick={handleAddCompanyClick}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Add Company
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b">
                <tr>
                  {['Company ID', 'Company Name', 'Registered Email', 'Total Users', 'Actions'].map((header) => (
                    <th 
                      key={header} 
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredCompanies.map((company) => (
                  <tr 
                    key={company.companyId} 
                    className="hover:bg-gray-50 transition duration-200 border-b last:border-b-0"
                  >
                    <td className="px-4 py-4 whitespace-nowrap">{company.companyId}</td>
                    <td className="px-4 py-4 whitespace-nowrap">{company.companyName}</td>
                    <td className="px-4 py-4 whitespace-nowrap">{company.registeredMail}</td>
                    <td className="px-4 py-4 whitespace-nowrap">{company.totalUsers}</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleOverviewClick(company.companyId)}
                        className="flex items-center space-x-2 bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition duration-300"
                      >
                        <Eye className="h-4 w-4" />
                        <span className="hidden sm:block">View</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyListPage;