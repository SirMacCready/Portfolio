"use client";
import { useState, useEffect } from "react";
import { Pie, PieChart, Sector, Tooltip } from "recharts";
import Navbar from "./navbar";

const COLORS = [
  "#3B82F6",
  "#10B981",
  "#F97316",
  "#EAB308",
  "#EF4444",
  "#8B5CF6",
  "#06B6D4",
  "#EC4899",
];

const MyCustomPie = (props: any) => {
  return <Sector {...props} fill={COLORS[props.index % COLORS.length]} />;
};

interface BudgetItem {
  nom: string;
  "Budget général": number;
}

interface PieChartComponentProps {
  dataUrl: string;
  title: string;
  sourceUrl?: string;
}

export default function PieChartComponent({
  dataUrl,
  title,
  sourceUrl = "https://www.budget.gouv.fr/budget-etat/ministere?annee=247&loi_finances=47&type_budget=43&type_donnee_budget=ae&op=Valider",
}: PieChartComponentProps) {
  const [data, setData] = useState<BudgetItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(dataUrl);
        const jsonData = await response.json();
        const sortedData = [...jsonData].sort(
          (a: BudgetItem, b: BudgetItem) =>
            b["Budget général"] - a["Budget général"],
        );
        setData(sortedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dataUrl]);

  if (loading) {
    return (
      <main className="flex flex-col items-center min-h-screen bg-gray-50 text-black">
        <Navbar />
        <div className="text-center py-8">Loading data...</div>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-50 text-black">
      <Navbar />
      <h1 className="text-4xl font-bold my-8">{title}</h1>

      {/* Pie Chart */}
      <div className="w-full max-w-2xl mb-12">
        <PieChart width={600} height={400}>
          <Pie
            data={data}
            dataKey="Budget général"
            nameKey="nom"
            cx="50%"
            cy="50%"
            outerRadius={150}
            shape={MyCustomPie}
          />
          <Tooltip
            formatter={(value: number, name: string) => [`${value} Md€`, name]}
          />
        </PieChart>
      </div>

      {/* Budget List */}
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Détail des budgets par ministère
        </h2>
        <ul className="space-y-2">
          {data.map((item, index) => (
            <li
              key={index}
              className="flex justify-between p-3 border-b border-gray-200 last:border-0"
            >
              <span className="font-medium">{item.nom}</span>
              <span className="text-gray-700">
                {item["Budget général"].toFixed(2)} Md€
              </span>
            </li>
          ))}
          <p>
            Source:
            <a
              className="hover:text-amber-500"
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              budget.gouv.fr
            </a>
          </p>
        </ul>
      </div>
    </main>
  );
}
