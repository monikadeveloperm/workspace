import React, { useState } from "react";
import { FaPlusCircle, FaSearch, FaSort } from "react-icons/fa";

const DropdownWithModal = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [newWorkspaceName, setNewWorkspaceName] = useState("");
  const [currentWorkspace, setCurrentWorkspace] = useState("Default Workspace");

  const handleSearch = () => {
    alert("Search functionality coming soon!");
  };

  const handleCreateNew = () => {
    if (newWorkspaceName.trim()) {
      alert(`New workspace created: ${newWorkspaceName}`);
      setNewWorkspaceName("");
      setModalOpen(false);
    } else {
      alert("Please enter a workspace name.");
    }
  };

  return (
    <div className="relative inline-block text-left text-sm">
      {/* Dropdown Button */}
      <button
        className="px-4 py-2 bg-gray-200 text-gray-700 border rounded-md flex items-center"
        onClick={() => setDropdownOpen(!isDropdownOpen)}
      >
        <span>Default Workspace</span> <FaSort className="ml-2" />
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-10 ">
          <div className="relative">
            <FaSearch size={16} className="absolute mt-3 ml-3 text-gray-600" />
            <input
              className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 border-b outline-none pl-9"
              // onClick={handleSearch}
              placeholder="Search Workspace"
            />
          </div>

          <button
            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 border-b"
            onClick={() => alert(`Current Workspace: ${currentWorkspace}`)}
          >
            Current Workspace
          </button>
          <button
            className="w-full px-4 py-2 text-left text-gray-700  flex items-center bg-gray-100"
            onClick={() => setModalOpen(true)}
          >
            <FaPlusCircle size={20} className="mr-2" /> Create Workspace
          </button>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Create New Workspace
            </h2>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter workspace name"
              value={newWorkspaceName}
              onChange={(e) => setNewWorkspaceName(e.target.value)}
            />
            <div className="mt-4 flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-300 text-white rounded-md hover:bg-indigo-500"
                onClick={handleCreateNew}
              >
                Create
              </button>
              <button
                className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-purple-500"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownWithModal;
