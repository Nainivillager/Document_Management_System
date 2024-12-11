"use client";
import React, { ReactNode } from 'react';
import Header from "@/components/header/header";
import Sider from "@/components/sider/Sider";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Sidebar */}
      <Sider />

      {/* Main Content Area */}
      <div
        className="
          flex flex-col
          flex-1
          overflow-hidden
          transition-all
          duration-300
          ease-in-out
          ml-10
          md:ml-14
          lg:ml-56  // Adjust based on sidebar width
        "
      >
        {/* Header */}
        <Header />

        {/* Main Content - Scrollable */}
        <main
          className="
            flex-1
            overflow-y-auto
            p-4
            bg-gray-100
            w-full
          "
        >
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
