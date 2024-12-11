"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiFile,
  FiUploadCloud,
  FiStar,
  FiChevronLeft,
  FiChevronRight
} from "react-icons/fi";

const EmpSidebar: React.FC = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const sidebarItems = [
    { name: "Dashboard", path: "/dashboard/employee", icon: <FiHome /> },
    {
      name: "My Documents",
      path: "/dashboard/employee/myDocs",
      icon: <FiFile />, // Changed from FiDollarSign to FiFile
    },
    {
      name: "Upload Documents",
      path: "/dashboard/employee/uploadDocs",
      icon: <FiUploadCloud />, // Changed from FiUsers to FiUploadCloud
    },
    {
      name: "Favourite",
      path: "/dashboard/employee/favourite",
      icon: <FiStar />, // Changed from FiSend to FiStar
    },
  ];

  const toggleSidebar = () => {
    // Only allow toggling if not on a large screen
    if (!isLargeScreen) {
      setIsSidebarOpen((prev) => {
        const newState = !prev;
        if (typeof window !== "undefined") {
          localStorage.setItem("sidebarState", JSON.stringify(newState));
        }
        return newState;
      });
    }
  };

  useEffect(() => {
    // Check screen size and update state
    const checkScreenSize = () => {
      const large = window.innerWidth >= 1024; // lg breakpoint in Tailwind
      setIsLargeScreen(large);
      
      // Force sidebar open on large screens
      if (large) {
        setIsSidebarOpen(true);
      } else {
        // Restore saved state for smaller screens
        const savedState = JSON.parse(
          localStorage.getItem("sidebarState") || "true"
        );
        setIsSidebarOpen(savedState);
      }
    };

    // Check initial screen size
    checkScreenSize();

    // Add event listener for resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup event listener
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const linkClasses = (path: string) => {
    const baseClasses =
      "group relative flex items-center px-4 py-2 rounded-l-xl transition-all duration-300 ease-in-out";

    if (pathname === path) {
      return `${baseClasses} bg-blue-600 text-white shadow-md`;
    }

    return `${baseClasses} hover:bg-gray-100 text-gray-700`;
  };

  return (
    <div
      className={`
        fixed top-0 left-0 h-screen bg-white shadow-lg 
        transition-all duration-500 ease-in-out
        flex flex-col border-r border-gray-100 z-10 
        ${isSidebarOpen ? "w-56" : "w-16"}
      `}
    >
      {/* Header */}
      <div
        className="
          flex items-center justify-center 
          h-16 px-4 py-2 
          border-b border-gray-100
          relative 
        "
      >
        <div className="flex items-center justify-center flex-1 ">
          {isSidebarOpen && (
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="text-blue-600 font-bold text-xl">DMS</span>
              </div>
            </div>
          )}
        </div>

        {!isLargeScreen && (
          <button
            onClick={toggleSidebar}
            className="
              p-2 rounded-full 
              hover:bg-gray-100 
              transition-colors 
              duration-300
              absolute right-2
            "
          >
            {isSidebarOpen ? <FiChevronLeft /> : <FiChevronRight />}
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 ">
        <ul>
          {sidebarItems.map((item) => (
            <li key={item.path} className="mb-2 px-2">
              <Link
                href={item.path}
                className={linkClasses(item.path)}
                aria-label={`Navigate to ${item.name}`}
              >
                <span
                  className={`
                    text-xl mr-4 
                    ${
                      pathname === item.path
                        ? "text-white"
                        : "text-gray-500 group-hover:text-blue-600"
                    }
                    transition-colors duration-300
                  `}
                >
                  {item.icon}
                </span>
                {isSidebarOpen && (
                  <span
                    className={`
                      text-sm font-medium 
                      ${
                        pathname === item.path
                          ? "text-white"
                          : "text-gray-700 group-hover:text-blue-600"
                      }
                      transition-colors duration-300
                    `}
                  >
                    {item.name}
                  </span>
                )}
                {pathname === item.path && isSidebarOpen && (
                  <span
                    className="
                      absolute right-0 
                      w-1 h-8 
                      bg-white 
                      rounded-l-full
                    "
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default EmpSidebar;