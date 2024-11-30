"use client";
import React, { useState } from "react";

const page: React.FC = () => {
  const [subject, setSubject] = useState("");
  const [company, setCompany] = useState("all");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Broadcast Message Submitted:", {
      subject,
      company,
      description,
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-gray-700 font-bold mb-2"
          >
            Broadcast Subject
          </label>
          <input
            type="text"
            id="subject"
            className="w-full px-3 py-2 border rounded-lg"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="company"
            className="block text-gray-700 font-bold mb-2"
          >
            Select Companies
          </label>
          <select
            id="company"
            className="w-full px-3 py-2 border rounded-lg"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          >
            <option value="all">Send to All</option>
            <option value="company1">Company 1</option>
            <option value="company2">Company 2</option>
            <option value="company3">Company 3</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Broadcast Description
          </label>
          <textarea
            id="description"
            className="w-full px-3 py-2 border rounded-lg"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default page;
