"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

interface DocumentRecord {
  id: string;
  name: string;
  uploadDate: string;
}

const initialDocuments: DocumentRecord[] = [
  { id: '1', name: 'Aadhar Card', uploadDate: '29/11/2024' },
  { id: '2', name: 'Driving License', uploadDate: '30/12/2024' },
  { id: '3', name: 'Company Card', uploadDate: '31/12/2024' },
];

const CompanyDocumentTable: React.FC = () => {
  const router = useRouter();

  const [documents, setDocuments] = useState<DocumentRecord[]>(initialDocuments);
  const [deleteConfirmation, setDeleteConfirmation] = useState<string | null>(null);

  const navigateTo = (path: string) => {
    router.push(path);
  };

  const handleActionClick = (action: 'view' | 'edit' | 'delete', documentId: string) => {
    switch (action) {
      case 'view':
        navigateTo(`/documents/${documentId}`);
        break;
      case 'edit':
        navigateTo(`/documents/edit/${documentId}`);
        break;
      case 'delete':
        setDeleteConfirmation(documentId);
        break;
    }
  };

  const confirmDelete = () => {
    if (deleteConfirmation) {
      setDocuments(prev => prev.filter(doc => doc.id !== deleteConfirmation));
      setDeleteConfirmation(null);
      console.log(`Deleting document ${deleteConfirmation}`);
    }
  };

  return (
    <div className="p-6 bg-gray-100  min-w-content min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <table className="bg-white shadow-md rounded-lg w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600">Document ID</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600">Document Name</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600">Upload Date</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc) => (
              <tr
                key={doc.id}
                onClick={() => navigateTo(`/documents/${doc.id}`)}
                className="cursor-pointer hover:bg-gray-100"
              >
                <td className="py-2 px-4 border-b border-gray-200">{doc.id}</td>
                <td className="py-2 px-4 border-b border-gray-200">{doc.name}</td>
                <td className="py-2 px-4 border-b border-gray-200">{doc.uploadDate}</td>
                <td className="flex py-2 px-4 border-b border-gray-200">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleActionClick('view', doc.id);
                    }}
                    className="py-2 px-4 text-sm"
                  >
                    <FaEye className="mr-2" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleActionClick('edit', doc.id);
                    }}
                    className=""
                  >
                    <FaEdit className="mr-2" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleActionClick('delete', doc.id);
                    }}
                    className="px-3 py-1"
                  >
                    <FaTrash className="mr-2" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
            <p className="mb-4">Are you sure you want to delete this document?</p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setDeleteConfirmation(null)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyDocumentTable;