"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

interface Company {
  companyId: string;
  companyName: string;
  invoiceId: string;
  date: string;
  paymentStatus: string;
}

const companies: Company[] = [
  { companyId: '1', companyName: 'Company A', invoiceId: 'INV001', date: '2024-11-29', paymentStatus: 'Paid' },
  { companyId: '2', companyName: 'Company B', invoiceId: 'INV002', date: '2024-11-28', paymentStatus: 'Pending' },
  { companyId: '3', companyName: 'Company C', invoiceId: 'INV003', date: '2024-11-27', paymentStatus: 'Overdue' },
  // Add more dummy data as needed
];

const CompanyTable: React.FC = () => {
  const router = useRouter();

  const handleRowClick = (companyId: string) => {
    router.push(`/companies/${companyId}`);
  };

  return (
    <div className="container ml-60 mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-[80%] bg-white shadow-md rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600">Company ID</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600">Company Name</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600">Invoice ID</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600">Date</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600">Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => (
              <tr key={company.companyId} onClick={() => handleRowClick(company.companyId)} className="cursor-pointer hover:bg-gray-100">
                <td className="py-2 px-4 border-b border-gray-200">{company.companyId}</td>
                <td className="py-2 px-4 border-b border-gray-200">{company.companyName}</td>
                <td className="py-2 px-4 border-b border-gray-200">{company.invoiceId}</td>
                <td className="py-2 px-4 border-b border-gray-200">{company.date}</td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    company.paymentStatus === 'Paid' ? 'bg-green-200 text-green-800' :
                    company.paymentStatus === 'Pending' ? 'bg-yellow-200 text-yellow-800' :
                    'bg-red-200 text-red-800'
                  }`}>
                    {company.paymentStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyTable;
