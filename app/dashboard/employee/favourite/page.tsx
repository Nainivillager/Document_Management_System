import React from "react";
import Head from "next/head";
import { StarIcon } from "@heroicons/react/24/solid";

export default function Home() {
  const files = [
    { id: 1, name: "mini-proj-adii.pdf", uploader: "Aditya Verma" },
    { id: 2, name: "mini-proj-adii.pdf", uploader: "Aditya Verma" },
  ];

  return (
    <>
      {/* Head Section */}
      <Head>
        <title>File List</title>
        <meta name="description" content="A simple file list display with starred documents." />
      </Head>

      {/* Main UI */}
      <div className="bg-gray-100 py-10">
        <div className="max-w-full mx-auto px-4">
          {/* Search Bar */}
          <div className="mb-4 flex justify-center">
            <input
              type="text"
              placeholder="Search files..."
              className="w-3/4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* File List */}
          <div className="bg-white shadow rounded-md">
            {files.map((file) => (
              <div
                key={file.id}
                className="flex items-center justify-between px-4 py-2 border-b last:border-none"
              >
                {/* File Info */}
                <div className="flex items-center space-x-4 w-full">
                  {/* PDF Icon */}
                  <span className="text-red-500 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5V6a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6v12a2.25 2.25 0 002.25 2.25h10.5A2.25 2.25 0 0019.5 18v-4.5m0-3L14.25 3m5.25 4.5h-6"
                      />
                    </svg>
                  </span>

                  <div className="w-full">
                    <p className="font-medium truncate">{file.name}</p>
                    <p className="text-sm text-gray-500 truncate">Uploaded by {file.uploader}</p>
                  </div>
                </div>

                {/* Star Icon */}
                <span className="text-red-500 flex-shrink-0">
                  <StarIcon className="w-6 h-6" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}