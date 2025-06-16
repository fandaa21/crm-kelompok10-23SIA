import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const stats = [
    { label: "Total Revenue", value: "$82,340", percent: "+1.24%", color: "green" },
    { label: "Total Quantity", value: "3,734", percent: "-0.24%", color: "red" },
    { label: "Number of Orders", value: "5,532", percent: "+0.91%", color: "green" },
    { label: "Avg. Order Value", value: "$14.88", percent: "+1.02%", color: "green" },
    { label: "Customer Count", value: "4,982", percent: "-0.92%", color: "red" },
  ];

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
    datasets: [
      {
        label: "Revenue (k$)",
        data: [12, 19, 14, 17, 22, 30, 28, 26, 32, 35, 40, 45],
        backgroundColor: "rgba(234, 88, 12, 0.6)", // orange-600
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "Overall Revenue Trends", font: { size: 18 } },
    },
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
    datasets: [
      {
        label: "Customer Growth",
        data: [50, 75, 120, 180, 220, 260, 300, 350, 400, 430, 460, 500],
        borderColor: "rgba(34, 197, 94, 1)", // green-500
        backgroundColor: "rgba(34, 197, 94, 0.2)",
        fill: true,
        tension: 0.3,
        pointRadius: 4,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "Customer Growth Trend", font: { size: 18 } },
    },
  };

  return (
    <div className="p-6 space-y-10 bg-[#f9fafb] min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">Home / Dashboard</p>
        </div>
        <div className="mt-4 md:mt-0">
          <input
            type="date"
            className="border rounded-md px-4 py-2 text-sm text-gray-700"
          />
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {stats.map(({ label, value, percent, color }) => (
          <div key={label} className="bg-white p-5 rounded-xl shadow">
            <p className="text-sm text-gray-500">{label}</p>
            <div className="text-xl font-bold text-gray-800">{value}</div>
            <div className={`text-sm font-semibold text-${color}-500`}>{percent}</div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <Bar options={barOptions} data={barData} />
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <Line options={lineOptions} data={lineData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
