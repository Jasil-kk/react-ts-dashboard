import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import type { ChartOptions } from "chart.js";
import { useUser } from "../../context/UserContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const chartData = [
  { month: "Jan", registrations: 30 },
  { month: "Feb", registrations: 45 },
  { month: "Mar", registrations: 60 },
  { month: "Apr", registrations: 40 },
  { month: "May", registrations: 80 },
  { month: "Jun", registrations: 70 },
];

const data = {
  labels: chartData.map((item) => item.month),
  datasets: [
    {
      label: "Registrations",
      data: chartData.map((item) => item.registrations),
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.3,
    },
  ],
};

const LineChart = () => {
  const { darkMode } = useUser();

  const options: ChartOptions<"line"> = {
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
        text: "User Registrations Over Time",
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
        callbacks: {
          title: (tooltipItems) => {
            const monthShort = tooltipItems[0].label;
            const monthMap: Record<string, string> = {
              Jan: "January",
              Feb: "February",
              Mar: "March",
              Apr: "April",
              May: "May",
              Jun: "June",
              Jul: "July",
              Aug: "August",
              Sep: "September",
              Oct: "October",
              Nov: "November",
              Dec: "December",
            };
            return monthMap[monthShort] || monthShort;
          },
        },
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

  return <Line data={data} options={options} />;
};

export default LineChart;
