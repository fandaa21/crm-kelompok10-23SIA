import React from 'react';
import { BedDouble, LogIn, LogOut, MoreHorizontal, MoreVertical } from "lucide-react";
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

  const roomData = [
    { name: 'Single sharing', deals: 2, occupied: 2, total: 30, price: 568 },
    { name: 'Double sharing', deals: 2, occupied: 2, total: 35, price: 1068 },
    { name: 'Triple sharing', deals: 0, occupied: 2, total: 25, price: 1568 },
    { name: 'VIP Suit', deals: 0, occupied: 4, total: 10, price: 2568 },
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

  const roomStatusData = {
    leftColumn: [
      { label: 'Occupied rooms', value: 104 },
      { label: 'Clean', value: 90 },
      { label: 'Dirty', value: 4 },
      { label: 'Inspected', value: 60 },
    ],
    rightColumn: [
      { label: 'Available rooms', value: 20 },
      { label: 'Clean', value: 30 },
      { label: 'Dirty', value: 19 },
      { label: 'Inspected', value: 30 },
    ],
  };

  const customerFeedbackData = [
    { name: 'Mark', feedback: 'Food could be better.', room: 'A201' },
    { name: 'Christian', feedback: 'Facilities are not enough for amount paid.', room: 'A101' },
    { name: 'Alexander', feedback: 'Room cleaning could be better.', room: 'A301' },
  ];

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

      {/* SECTION BARU: Rooms */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-700">Rooms</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {roomData.map((room, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-4 flex flex-col space-y-3">
              {/* Baris atas: Deals dan ikon ... */}
              <div className="flex justify-between items-center">
                {room.deals > 0 ? (
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-md">{room.deals} Deals</span>
                ) : (
                  <span></span> // Elemen kosong agar 'justify-between' tetap bekerja
                )}
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal size={20} />
                </button>
              </div>

              {/* Konten tengah: Nama kamar dan okupansi */}
              <div className="flex-grow">
                <p className="font-semibold text-gray-800">{room.name}</p>
                <p className="text-gray-500 text-sm">
                  <span className="font-bold text-gray-900">{room.occupied}</span> / {room.total}
                </p>
              </div>

              {/* Harga */}
              <p className="text-xl font-bold text-orange-600">
                <span className="text-lg align-top">$</span> {room.price.toLocaleString()}
                <span className="text-sm font-normal text-gray-500">/ day</span>
              </p>
            </div>
          ))}
        </div>
      </div>

       {/* SECTION BARU: Room Status & Feedback */}
       <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Card Room Status (memakan 2 kolom) */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
          <h3 className="font-bold text-gray-800 mb-4">Room status</h3>
          <div className="grid grid-cols-2 gap-8">
            {/* Sub-kolom kiri */}
            <div className="space-y-3">
              {roomStatusData.leftColumn.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">{item.label}</span>
                  <span className="font-bold text-gray-800">{item.value}</span>
                </div>
              ))}
            </div>
            {/* Sub-kolom kanan */}
            <div className="space-y-3">
              {roomStatusData.rightColumn.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">{item.label}</span>
                  <span className="font-bold text-gray-800">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card Customers Feedback (memakan 1 kolom) */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800">Customers feedback</h3>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical size={20} />
            </button>
          </div>
          <div className="space-y-4">
            {customerFeedbackData.map((item, index) => (
              <div key={index} className="border-b pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-sm text-gray-800">{item.name}</p>
                    <p className="text-xs text-gray-500 mt-1">{item.feedback}</p>
                  </div>
                  <p className="text-xs text-gray-500 flex-shrink-0 ml-2">{item.room}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
