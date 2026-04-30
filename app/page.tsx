import PieChartComponent from "./Components/pie";
export default function Home() {
  return (
    <PieChartComponent
      dataUrl="/data/PLF.json"
      title="Budget Français 2026 (Projet de Loi de Finance)"
    />
  );
}
