"use client"
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
const chartData = [
  { browser: "safari", visitors: '67' , fill: "var(--color-safari)" },
]

const chartConfig = {
  visitors: {
    label: "TB's",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Empadmin() {
  return (
    <Card className="flex flex-col">
      <CardHeader className=" items-center pb-0">
      <h1 className="text-xl items-start font-bold mb-4">Storage</h1>
        <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-1">
      <span className="w-4 h-4 rounded-full" style={{ backgroundColor: '#2A9D90' }}></span>
        <span>Used</span>
      </div>
      <div className="flex items-center space-x-1">
        <span className="w-4 h-4 bg-gray-300 rounded-full"></span>
        <span>Remaining</span>
      </div>
    </div>
        
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
                          {/* {chartData[0].visitors.toLocaleString()} */}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground font-bold h-7 text-3xl"
                        >
                          67%
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
  )
}
