"use client";
import {
  Pie,
  PieChart,
  PieLabelRenderProps,
  PieSectorShapeProps,
  Sector,
  Tooltip,
} from "recharts";
import data from "./data/budget.json";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const MyCustomPie = (props: PieSectorShapeProps) => {
  return <Sector {...props} fill={COLORS[props.index % COLORS.length]} />;
};

export default function Home() {
  const chartData = data;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white-50 text-black p-8">
      <h1 className="text-4xl font-bold mb-12">French Budget</h1>
      <PieChart width={600} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          shape={MyCustomPie}
        />
        <Tooltip />
      </PieChart>
    </main>
  );
}
