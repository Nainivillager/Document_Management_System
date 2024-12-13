// "use client";
// import React from "react";
// import { Card } from "@/components/ui/card";
// import { Empadmin } from "@/components/emp-storage";
// import BarChart from "@/components/empdocchart";
// import FileActivityChart from "@/components/FileActivityChart";

// export default function Page() {
//   return (
//     <>
//     <div className="flex space-x-4 p-4">
//       <div className="w-[45%] ">
//         <Empadmin />
//       </div>
//       <Card className="w-2/3">
//         <div className="p-4">
//           <h1 className="text-xl font-bold mb-4">Monthly Document Stats</h1>
//           <div style={{ width: "90%" }}>
//             <BarChart />
//           </div>
//         </div>
//       </Card>
      
//     </div>
//     <Card >
//     <div style={{ padding: "20px" }}>
//       {/* <h1 style={{ textAlign: "center", marginBottom: "20px" }}>File Activity</h1> */}
//       <h1 className="text-xl font-bold mb-4">Daily Document Stats</h1>
//       <FileActivityChart />
//     </div></Card>
//    </>
//   );
// }
"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import { Empadmin } from "@/components/emp-storage";
import BarChart from "@/components/empdocchart";
import FileActivityChart from "@/components/FileActivityChart";

export default function Page() {
  return (
    <>
      <div className="flex space-x-4 p-4">
        {/* Left Section */}
        <div className="w-[45%]">
          <Empadmin />
        </div>

        {/* Right Section */}
        <Card className="w-2/3 shadow-lg rounded-lg bg-white">
          <div className="p-6">
            <h1 className="text-xl font-bold mb-6 text-gray-800">
              Monthly Document Stats
            </h1>
            <div className="w-[90%]">
              <BarChart />
            </div>
          </div>
        </Card>
      </div>

      {/* Bottom Section */}
      <Card className=" w-[97%] ml-4 mt-6 shadow-lg rounded-lg bg-white">
        <div className="p-6">
          <h1 className="text-xl font-bold mb-6 text-gray-800">
            Daily Document Stats
          </h1>
          <FileActivityChart />
        </div>
      </Card>
    </>
  );
}
