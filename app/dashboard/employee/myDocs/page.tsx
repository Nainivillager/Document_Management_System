"use client"
import React, { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

interface Document {
  id: string;
  name: string;
  size: string; 
  uploaded: string;
}

const MyDocuments: React.FC = () => {
  const [documents, setDocuments] = useState<Document[]>([]);

  const handleUploadDocument = () => {
    // Add logic to handle document upload here
    const newDocument: Document = {
      id: "1",
      name: "Document 1.pdf",
      size: "2.5 MB",
      uploaded: "2023-05-25",
    };
    setDocuments([...documents, newDocument]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Documents</h1>
      {documents.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 bg-gray-100 rounded-lg">
          <FiUploadCloud className="text-gray-400 text-6xl mb-4" />
          <p className="text-gray-600">No documents uploaded yet.</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={handleUploadDocument}
          >
            Upload Document
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{doc.name}</p>
                <p className="text-gray-500 text-sm">
                  {doc.size} - Uploaded {doc.uploaded}
                </p>
              </div>
              <div>
                <button className="text-blue-600 hover:text-blue-700">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyDocuments;
