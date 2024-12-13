
'use client'
import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';

// Type Definitions
interface TeamDocumentRecord {
  id: string;
  name: string;
  uploadDate: string;
  uploadedBy: string;
  team?: string;
}

interface Team {
  value: string;
  label: string;
}

// Constants
const TEAMS: Team[] = [
  { value: 'all', label: 'All' },
  { value: 'team1', label: 'Team 1' },
  { value: 'team2', label: 'Team 2' },
  { value: 'team3', label: 'Team 3' },
];

const INITIAL_DOCUMENTS: TeamDocumentRecord[] = [
  { id: '1', name: 'Aadhar Card', uploadDate: '29/11/2024', uploadedBy: 'Mr. Aakash', team: 'team1' },
  { id: '2', name: 'Driving License', uploadDate: '30/12/2024', uploadedBy: 'Mr. Aakash', team: 'team2' },
  { id: '3', name: 'Company Card', uploadDate: '31/12/2024', uploadedBy: 'Mr. Aakash', team: 'team3' },
];

export default function DocumentManagement() {
  const router = useRouter();
  const [selectedTeam, setSelectedTeam] = useState<string>('all');
  const [documents, setDocuments] = useState<TeamDocumentRecord[]>(INITIAL_DOCUMENTS);
  const [deleteConfirmation, setDeleteConfirmation] = useState<string | null>(null);

  // Memoized filtered documents
  const filteredDocuments = useMemo(() => {
    return selectedTeam === 'all' 
      ? documents 
      : documents.filter(doc => doc.team === selectedTeam);
  }, [selectedTeam, documents]);

  // Navigation and Action Handlers
  const navigateTo = (path: string) => router.push(path);

  const handleActionClick = (
    action: 'view' | 'edit' | 'delete', 
    documentId: string, 
    event?: React.MouseEvent
  ) => {
    if (event) {
      event.stopPropagation();
    }

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

  // Confirm Delete Function
  const confirmDelete = () => {
    if (deleteConfirmation) {
      setDocuments(prev => prev.filter(doc => doc.id !== deleteConfirmation));
      setDeleteConfirmation(null);
    }
  };

  // Render Team Selector
  const renderTeamSelector = () => (
    <div className="flex justify-center mb-4">
      <div className="w-64">
        <label className="block text-sm font-medium text-gray-700 text-center mb-2">
          Select Team
        </label>
        <select
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
          className="block w-full px-3 py-2 border rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-center"
        >
          {TEAMS.map((team) => (
            <option key={team.value} value={team.value}>
              {team.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );

  // Render Action Buttons
  const renderActionButtons = (doc: TeamDocumentRecord) => (
    <div className="flex space-x-2">
      <button 
        onClick={(e) => handleActionClick('view', doc.id, e)}
        className="text-black hover:text-gray-600"
        aria-label="View Document"
      >
        <FaEye />
      </button>
      <button 
        onClick={(e) => handleActionClick('edit', doc.id, e)}
        className="text-black hover:text-gray-600"
        aria-label="Edit Document"
      >
        <FaEdit />
      </button>
      <button 
        onClick={(e) => handleActionClick('delete', doc.id, e)}
        className="text-black hover:text-gray-600"
        aria-label="Delete Document"
      >
        <FaTrash />
      </button>
    </div>
  );

  // Delete Confirmation Modal
  const renderDeleteConfirmationModal = () => (
    deleteConfirmation && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
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
              className="px-4 py-2 bg-black text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    )
  );

  return (
    <div className="container mx-auto p-4 space-y-4">
      {renderTeamSelector()}
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {['Document ID', 'Document Name', 'Upload Date', 'Uploaded By', 'Actions'].map((header) => (
                <th 
                  key={header} 
                  className="py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredDocuments.map((doc) => (
              <tr
                key={doc.id}
                onClick={() => navigateTo(`/documents/${doc.id}`)}
                className="cursor-pointer hover:bg-gray-100"
              >
                <td className="py-2 px-4 border-b border-gray-200">{doc.id}</td>
                <td className="py-2 px-4 border-b border-gray-200">{doc.name}</td>
                <td className="py-2 px-4 border-b border-gray-200">{doc.uploadDate}</td>
                <td className="py-2 px-4 border-b border-gray-200">{doc.uploadedBy}</td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {renderActionButtons(doc)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {renderDeleteConfirmationModal()}
    </div>
  );
}