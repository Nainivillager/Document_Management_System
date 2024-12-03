"use client"
import React, { useState, FormEvent, ChangeEvent } from 'react';

// Define an interface for the company data structure
interface CompanyData {
  gstNumber: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  panNumber: string;
  companyAddress: string;
}

// Initial state for company data
const INITIAL_COMPANY_DATA: CompanyData = {
  gstNumber: '',
  companyName: '',
  email: '',
  phoneNumber: '',
  panNumber: '',
  companyAddress: ''
};

// Validation utility functions
const validateGSTNumber = (gstNumber: string): boolean => {
  // Basic GST number validation regex
  const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
  return gstRegex.test(gstNumber);
};

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone);
};

export default function CompanyRegistrationPage() {
  const [companyData, setCompanyData] = useState<CompanyData>(INITIAL_COMPANY_DATA);
  const [errors, setErrors] = useState<Partial<Record<keyof CompanyData, string>>>({});

  // Comprehensive input change handler with validation
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCompanyData(prev => ({ ...prev, [name]: value }));
    
    // Clear previous errors for this field
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  // Validate form before submission
  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof CompanyData, string>> = {};

    if (!validateGSTNumber(companyData.gstNumber)) {
      newErrors.gstNumber = 'Invalid GST Number';
    }

    if (!companyData.companyName.trim()) {
      newErrors.companyName = 'Company Name is required';
    }

    if (!validateEmail(companyData.email)) {
      newErrors.email = 'Invalid Email Address';
    }

    if (!validatePhoneNumber(companyData.phoneNumber)) {
      newErrors.phoneNumber = 'Invalid Phone Number';
    }

    // Add more validations as needed

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Process form data
      console.log('Company Data:', companyData);
      // TODO: Add actual submission logic (e.g., API call)
    }
  };

  // Render input field with error handling
  const renderInputField = (
    name: keyof CompanyData, 
    label: string, 
    type: string = 'text', 
    placeholder?: string
  ) => (
    <div className="mb-4">
      <label 
        htmlFor={name} 
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={companyData[name]}
        onChange={handleInputChange}
        className={`
          w-full px-3 py-2 border rounded-md shadow-sm 
          focus:outline-none focus:ring-2 
          transition-all duration-300 
          ${errors[name] 
            ? 'border-red-500 focus:ring-red-500' 
            : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
          }
          sm:text-sm text-base
        `}
        placeholder={placeholder}
      />
      {errors[name] && (
        <p className="mt-1 text-sm text-red-600">{errors[name]}</p>
      )}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">
            Register New Company
          </h2>
          
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {renderInputField('gstNumber', 'GSTIN Number', 'text', 'Enter GST number')}
              {renderInputField('companyName', 'Company Name', 'text', 'Enter company name')}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {renderInputField('email', 'E-mail', 'email', 'Enter company email')}
              {renderInputField('phoneNumber', 'Phone Number', 'tel', 'Enter phone number')}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {renderInputField('panNumber', 'PAN Number', 'text', 'Enter PAN number')}
              {renderInputField('companyAddress', 'Company Address', 'text', 'Enter company address')}
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="
                  w-full sm:w-auto
                  px-6 py-2 
                  bg-indigo-600 text-white 
                  font-bold rounded-md shadow-md 
                  hover:bg-indigo-700 
                  focus:outline-none focus:ring-2 focus:ring-indigo-500
                  transition-colors duration-300
                  active:scale-95
                "
              >
                Register Company
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}