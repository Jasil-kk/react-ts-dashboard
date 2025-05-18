import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import type { ChartOptions } from "chart.js";
import { useUser } from "../../context/UserContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const userRoleData = [
  { role: "Admin", count: 5 },
  { role: "Editor", count: 12 },
  { role: "Viewer", count: 25 },
];

const BarChart = () => {
  const { darkMode } = useUser();

  const data = {
    labels: userRoleData.map((item) => item.role),
    datasets: [
      {
        label: "Active Users",
        data: userRoleData.map((item) => item.count),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: darkMode ? "#e0e0e0" : "#333",
        },
      },
      title: {
        display: true,
        text: "Active Users by Role",
        color: darkMode ? "#ffffff" : "#000000",
        font: {
          size: 20,
          weight: "bold",
        },
      },
      tooltip: {
        backgroundColor: darkMode ? "#2d2d2d" : "#ffffff",
        titleColor: darkMode ? "#ffffff" : "#000000",
        bodyColor: darkMode ? "#ffffff" : "#000000",
      },
    },
    scales: {
      x: {
        ticks: {
          color: darkMode ? "#e0e0e0" : "#333",
        },
        grid: {
          color: darkMode ? "#444" : "#ccc",
        },
      },
      y: {
        ticks: {
          color: darkMode ? "#e0e0e0" : "#333",
        },
        grid: {
          color: darkMode ? "#444" : "#ccc",
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
