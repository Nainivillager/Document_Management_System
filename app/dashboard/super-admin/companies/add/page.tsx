"use client";
import React, { useState } from "react";

export default function Page() {
  const [companyData, setCompanyData] = useState({
    gstNumber: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    panNumber: "",
    companyAddress: "",
  });

  // Function to handle input change
  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCompanyData({ ...companyData, [name]: value });
  };

  // Mock fetch function to simulate auto-filling the data based on GST number
  //   const fetchCompanyData = async (gstNumber) => {
  //     // Simulate an API call
  //     if (gstNumber === '1234567890') {
  //       setCompanyData({
  //         gstNumber,
  //         companyName: 'Example Company',
  //         email: 'contact@example.com',
  //         phoneNumber: '9876543210',
  //         panNumber: 'ABCDE1234F',
  //         companyAddress: '123 Example St, City, State'
  //       });
  //     }
  //   };

  // Handle form submission
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Process form data
    console.log("Company Data:", companyData);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">ADD New Company</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="gstNumber"
            className="block text-sm font-medium text-gray-700"
          >
            GSTIN Number
          </label>
          <input
            type="text"
            id="gstNumber"
            name="gstNumber"
            value={companyData.gstNumber}
            onChange={handleInputChange}
            // onBlur={() => fetchCompanyData(companyData.gstNumber)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter GST number"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-700"
          >
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={companyData.companyName}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter company name"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={companyData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter company email"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={companyData.phoneNumber}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter phone number"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="panNumber"
            className="block text-sm font-medium text-gray-700"
          >
            PAN Number
          </label>
          <input
            type="text"
            id="panNumber"
            name="panNumber"
            value={companyData.panNumber}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter PAN number"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="companyAddress"
            className="block text-sm font-medium text-gray-700"
          >
            Company Address
          </label>
          <input
            type="text"
            id="companyAddress"
            name="companyAddress"
            value={companyData.companyAddress}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter company address"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white font-bold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Add Company
          </button>
        </div>
      </form>
    </div>
  );
}
