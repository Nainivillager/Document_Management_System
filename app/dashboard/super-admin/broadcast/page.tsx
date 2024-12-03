"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import { Send, Info, Users } from 'lucide-react';

// Define interface for companies
interface CompanyOption {
  value: string;
  label: string;
}

const CompanyBroadcastPage: React.FC = () => {
  // State management
  const [subject, setSubject] = useState<string>("");
  const [company, setCompany] = useState<string>("all");
  const [description, setDescription] = useState<string>("");
  const [errors, setErrors] = useState<{
    subject?: string;
    description?: string;
  }>({});

  // Company options
  const companyOptions: CompanyOption[] = [
    { value: "all", label: "Send to All Companies" },
    { value: "company1", label: "Company A" },
    { value: "company2", label: "Company B" },
    { value: "company3", label: "Company C" }
  ];

  // Validation function
  const validateForm = (): boolean => {
    const newErrors: { subject?: string; description?: string } = {};

    if (!subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!description.trim()) {
      newErrors.description = "Description is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Broadcast Message Submitted:", {
        subject,
        company,
        description
      });
      // TODO: Implement actual broadcast submission logic
    }
  };

  // Render input field with error handling
  const renderInputField = (
    label: string,
    id: string,
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void,
    type: 'text' | 'textarea' | 'select' = 'text',
    options?: CompanyOption[]
  ) => {
    const error = errors[id as keyof typeof errors];

    return (
      <div className="mb-4">
        <label 
          htmlFor={id} 
          className="flex items-center text-sm font-medium text-gray-700 mb-2"
        >
          {type === 'select' && <Users className="mr-2 w-4 h-4" />}
          {label}
        </label>
        
        {type === 'textarea' ? (
          <textarea
            id={id}
            className={`
              w-full px-3 py-2 border rounded-lg 
              focus:outline-none focus:ring-2 
              transition-all duration-300
              ${error 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              }
            `}
            rows={4}
            value={value}
            onChange={onChange}
            placeholder={`Enter ${label.toLowerCase()}`}
          />
        ) : type === 'select' ? (
          <select
            id={id}
            className={`
              w-full px-3 py-2 border rounded-lg 
              focus:outline-none focus:ring-2 
              transition-all duration-300
              ${error 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              }
            `}
            value={value}
            onChange={onChange}
          >
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            type="text"
            id={id}
            className={`
              w-full px-3 py-2 border rounded-lg 
              focus:outline-none focus:ring-2 
              transition-all duration-300
              ${error 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              }
            `}
            value={value}
            onChange={onChange}
            placeholder={`Enter ${label.toLowerCase()}`}
          />
        )}
        
        {error && (
          <p className="mt-1 text-sm text-red-600 flex items-center">
            <Info className="mr-2 w-4 h-4" />
            {error}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-4 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-xl bg-white shadow-xl rounded-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4">
          <h2 className="text-base font-bold text-white flex items-center">
            <Send className="mr-3 w-6 h-5" />
            Send Broadcast Message
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {renderInputField(
            'Broadcast Subject', 
            'subject', 
            subject, 
            (e) => setSubject(e.target.value)
          )}

          {renderInputField(
            'Select Companies', 
            'company', 
            company, 
            (e) => setCompany(e.target.value),
            'select',
            companyOptions
          )}

          {renderInputField(
            'Broadcast Description', 
            'description', 
            description, 
            (e) => setDescription(e.target.value),
            'textarea'
          )}

          <button
            type="submit"
            className="
              w-full py-2 
              bg-gradient-to-r from-blue-500 to-indigo-600 
              text-white font-bold rounded-lg 
              hover:from-blue-600 hover:to-indigo-700
              focus:outline-none focus:ring-2 focus:ring-blue-500
              transition-all duration-300
              flex items-center justify-center
              space-x-2
            "
          >
            <Send className="w-5 h-5" />
            <span>Send Broadcast</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompanyBroadcastPage;

