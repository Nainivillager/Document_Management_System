"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { date: "Oct 27", uploads:1 },
  { date: "Oct 28", uploads:0 },
  { date: "Oct 29", uploads:3 },
  { date: "Oct 30", uploads:1 },
  { date: "Oct 31", uploads:1 },
  { date: "Nov 1", uploads: 0},
  { date: "Nov 2", uploads: 1},
  { date: "Nov 3", uploads: 9},
  { date: "Nov 4", uploads: 1},
  { date: "Nov 5", uploads: 0},
  { date: "Nov 6", uploads: 0},
  { date: "Nov 7", uploads: 0},
  { date: "Nov 8", uploads: 0},
  { date: "Nov 9", uploads:  5},
  
];

const FileActivityChart: React.FC = () => {
  return (
    <div className="p-4">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="uploads" stroke="#82ca9d" dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FileActivityChart;