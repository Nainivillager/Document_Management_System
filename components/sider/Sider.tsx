"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiMenu,
  FiChevronLeft,
  FiHome,
  FiDollarSign,
  FiUsers,
  FiSend,
} from "react-icons/fi";

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const sidebarItems = [
    { name: "Dashboard", path: "/dashboard", icon: <FiHome /> },
    {
      name: "Billing Information",
      path: "/dashboard/super-admin/billing",
      icon: <FiDollarSign />,
    },
    {
      name: "Companies Overview",
      path: "/dashboard/super-admin/companies",
      icon: <FiUsers />,
    },
    {
      name: "Broadcast Messages",
      path: "/dashboard/super-admin/broadcast",
      icon: <FiSend />,
    },
  ];

  const linkClasses = (path: string) => {
    return pathname === path
      ? "bg-blue-600 text-white font-semibold rounded-l-full w-full"
      : "hover:bg-gray-400 hover:text-white rounded-l-full w-full";
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => {
      const newState = !prev;
      if (typeof window !== "undefined") {
        localStorage.setItem("sidebarState", JSON.stringify(newState));
      }
      return newState;
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedState = JSON.parse(
        localStorage.getItem("sidebarState") || "true"
      );
      setIsSidebarOpen(savedState);
    }
  }, []);

  return (
    <div
      className={`h-screen fixed top-0 left-0 flex flex-col pt-16 transition-all duration-300 ease-in-out ${
        isSidebarOpen ? "w-64" : "w-16"
      } bg-gray-800 text-white md:w-64`}
    >
      {/* Logo and Toggle Button */}
      <div
        className="flex items-center justify-between h-16 absolute top-0 w-full bg-gray-700 px-4 cursor-pointer"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        <h1
          className={`text-2xl font-semibold ${
            !isSidebarOpen && "hidden"
          } md:block`}
        >
          Logo
        </h1>
        <button className="text-xl md:hidden" aria-expanded={isSidebarOpen}>
          {isSidebarOpen ? <FiChevronLeft /> : <FiMenu />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav className="flex-1 pl-4 mt-2">
        <ul>
          {sidebarItems.map((item) => (
            <li key={item.path} className="mb-8">
              <Link
                href={item.path}
                className={`px-4 py-2 flex items-center ${linkClasses(
                  item.path
                )}`}
                aria-label={`Go to ${item.name}`}
              >
                <span className="text-xl mr-4">{item.icon}</span>
                <span
                  className={`${
                    isSidebarOpen ? "inline-flex" : "hidden"
                  } md:inline-flex ml-2 items-center`}
                >
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
