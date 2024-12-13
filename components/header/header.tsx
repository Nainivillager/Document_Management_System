"use client";
import React, { useState, useRef, useEffect } from "react";
import { FiUser } from "react-icons/fi";

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex justify-between items-center p-4  text-black shadow-md">
      {/* Search Input */}
      <div className="flex-grow flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-full border  text-black focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
        />
      </div>

      {/* User Profile Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <FiUser
          onClick={toggleDropdown}
          className="text-xl cursor-pointer  hover:text-blue-300 transition-all duration-300 ease-in-out"
        />
        {isDropdownOpen && (
          <div className="absolute bg-white right-0 mt-2 w-48  text-black rounded-lg shadow-lg z-10">
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-300 transition-colors duration-200"
            >
              My Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-300 transition-colors duration-200"
            >
              Settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-300 transition-colors duration-200"
            >
              Logout
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
