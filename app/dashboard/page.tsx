// import React from "react";

// export default function page() {
//   interface Cards {
//     heading: string;
//     users: number;
//     growth: string;
//   }
//   const Header: Cards[] = [
//     {
//       heading: "Total Companies",
//       users: 118,
//       growth: "2.5%",
//     },
//     {
//       heading: "New Users(Monthly)",
//       users: 8,
//       growth: "-1.2%",
//     },
//     {
//       heading: "Active Users",
//       users: 98,
//       growth: "+11%",
//     },

//   ];
//   return (
//     // <div className="min-w-full px-4 md:px-0 bg-gray-100">
//     //   <div className="overflow-x-auto flex justify-center mb-4">Dashboard</div>
//     //   <div className="flex flex-column md:flex-row justify-between ">
//     //     {Header.map((val) =>(
//     //       <div className="border px-4 rounded-lg bg-white font-light">
//     //       {" "}
//     //       <div>{val.heading}</div>
//     //       <div className="flex  justify-between">
//     //         <div>{val.users}</div>
//     //         <div className="border rounded-xl">{val.growth}</div>
//     //       </div>{" "}
//     //     </div>
//     //     ))}
//     //   </div>
//     <div className="min-w-full px-4 md:px-0 bg-gray-100 py-6">
//   <div className="overflow-x-auto flex justify-center mb-6 text-2xl font-semibold text-gray-700">
//     Dashboard
//   </div>
//   <div className="flex flex-col md:flex-row gap-4 justify-between">
//     {Header.map((val) => (
//       <div
//         key={val.heading}
//         className="border px-6 py-4 rounded-lg bg-white font-light shadow-md hover:shadow-lg transition-shadow duration-300"
//       >
//         <div className="text-lg font-medium text-gray-800 mb-2">{val.heading}</div>
//         <div className="flex justify-between items-center">
//           <div className="text-gray-600 text-sm">{val.users}</div>
//           <div className="border rounded-xl px-3 py-1 text-sm text-green-600 bg-green-100">
//             {val.growth}
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>

//   );
// }
"use client";

import React from "react";
import { TrendingUp, Users, Activity } from "lucide-react";
import { Storageadmin } from "@/components/storageadmin";

const Header = [
  {
    heading: "Total Users",
    users: "12,345",
    growth: "+12.5%",
    icon: Users,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500",
    // This will make this card smaller
  },
  {
    heading: "Active Users",
    users: "8,762",
    growth: "+8.2%",
    icon: Activity,
    bgColor: "bg-green-50",
    iconColor: "text-green-500",
    size: "md:col-span-2", // This will make this card larger
  },
  {
    heading: "Growth Rate",
    users: "24.7%",
    growth: "+15.3%",
    icon: TrendingUp,
    bgColor: "bg-purple-50",
    iconColor: "text-purple-500",
    size: "md:col-span-2", // This will make this card larger
  },
];
interface DashboardCardProps {
  heading: string;
  users: string;
  growth: string;
  icon: React.ComponentType<{ className?: string }>;
  bgColor: string;
  iconColor: string;
}
const DashboardCard: React.FC<DashboardCardProps> = ({
  heading,
  users,
  growth,
  icon: Icon,
  bgColor,
  iconColor,
}) => (
  <div
    className={`
      ${bgColor} 

      border 
      px-4 
      py-4 
      lg: min-w-[31%]
      rounded-2xl 
      hover:scale-105 
      transform 
      transition-all 
      duration-300 
      ease-in-out 
      shadow-md 
      hover:shadow-xl 
      relative 
      overflow-hidden
    `}
  >
    <div
      className={`
        absolute 
        top-0 
        left-0 
        w-full 
        h-full 
        ${bgColor} 
        opacity-10 
        -z-10
      `}
    />

    <div className="absolute top-2 right-4">
      <Icon className={`${iconColor} w-6 h-6 opacity-70`} />
    </div>

    <div>
      <div className="text-base font-semibold text-gray-800 mb-2">
        {heading}
      </div>
      <div className="flex justify-between items-center">
        <div
          className={`font-bold ${
            heading === "Total Users" ? "text-xl" : "text-2xl"
          } text-gray-900`}
        >
          {users}
        </div>
        <div
          className="
            border 
            rounded-full 
            px-2 
            py-1 
            text-xs 
            font-medium 
            bg-white 
            text-green-600 
            border-green-200
          "
        >
          {growth}
        </div>
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="min-w-full px-4 md:px-6 bg-gradient-to-r from-blue-50 to-white py-8">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Performance Dashboard
          </h1>
          <p className="text-gray-500">
            Overview of your application's performance
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-around gap-6 z-0 lg:w-full">
          {Header.map((val) => (
            <DashboardCard key={val.heading} {...val} />
          ))}
        </div>
        <div className="mt-9"></div>
        <div className="w-72">
          <Storageadmin />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
