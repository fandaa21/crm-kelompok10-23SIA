import React from 'react';
import { BedDouble, LogIn, LogOut } from "lucide-react";
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
    { label: "Today's", title: "Check-in", value: 23, icon: <LogIn size={20} className="text-indigo-500" /> },
    { label: "Today's", title: "Check-out", value: 13, icon: <LogOut size={20} className="text-indigo-500" /> },
    { label: "Total", title: "In hotel", value: 60, icon: <BedDouble size={20} className="text-indigo-500" /> },
    { label: "Total", title: "Available room", value: 10, icon: <BedDouble size={20} className="text-green-500" /> },
    { label: "Total", title: "Occupied room", value: 90, icon: <BedDouble size={20} className="text-red-500" /> },
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
        borderColor: "rgba(34, 197, 94, 1)",
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

      {/* Overview Cards */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-700">Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {stats.map(({ label, title, value, icon }, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-4 flex items-center space-x-4"
            >
              <div>{icon}</div>
              <div>
                <p className="text-xs text-gray-500">{label}</p>
                <p className="text-sm font-medium text-gray-600">{title}</p>
                <div className="text-xl font-bold text-orange-600 mt-1">{value}</div>
              </div>
            </div>
          ))}
        </div>
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
