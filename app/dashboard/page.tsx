import React from "react";
import { TrendingUp } from "lucide-react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import { ChartConfig, ChartContainer } from "@/components/ui/chart";


const chartConfig = {
  storage: {
    label: "storage",
  },
  safari: {
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const chartData = [
  {  storage: 200, fill: "var(--color-safari)" },
]
export default function page() {
  interface Cards {
    heading: string;
    users: number;
    growth: string;
  }
  const Header: Cards[] = [
    {
      heading: "Total Companies",
      users: 118,
      growth: "2.5%",
    },
    {
      heading: "New Users(Monthly)",
      users: 8,
      growth: "-1.2%",
    },
    {
      heading: "Active Users",
      users: 98,
      growth: "+11%",
    },
  
  ];
  return (
    <div className="min-w-full px-4 md:px-0 bg-gray-100">
      <div className="overflow-x-auto flex justify-center mb-4">Dashboard</div>
      <div className="flex flex-column md:flex-row justify-between ">
        {Header.map((val) =>(
          <div className="border px-4 rounded-lg bg-white font-light">
          {" "}
          <div>{val.heading}</div>
          <div className="flex  justify-between">
            <div>{val.users}</div>
            <div className="border rounded-xl">{val.growth}</div>
          </div>{" "}
        </div>
        ))}
      </div>


      
    <div>



    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Radial Chart - Text</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={250}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="visitors" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {chartData[0].visitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  



    </div>

    </div>
  );
}
