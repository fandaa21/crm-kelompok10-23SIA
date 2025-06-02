import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CSVLink } from "react-csv"; // react-csv untuk export CSV
import pdfMake from 'pdfmake/build/pdfmake'; // pdfmake untuk export PDF
import pdfFonts from 'pdfmake/build/vfs_fonts'; // pdfmake fonts

const dailyData = [
  { date: '01 Jun', pendapatan: 1200000, pengeluaran: 300000 },
  { date: '02 Jun', pendapatan: 1500000, pengeluaran: 500000 },
  { date: '03 Jun', pendapatan: 1000000, pengeluaran: 450000 },
  { date: '04 Jun', pendapatan: 1300000, pengeluaran: 600000 },
  { date: '05 Jun', pendapatan: 1700000, pengeluaran: 700000 },
  { date: '06 Jun', pendapatan: 1600000, pengeluaran: 400000 },
  { date: '07 Jun', pendapatan: 1400000, pengeluaran: 550000 },
  { date: '08 Jun', pendapatan: 1100000, pengeluaran: 300000 },
];

const weeklyData = [
  { week: 'Week 1', pendapatan: 7500000, pengeluaran: 3200000 },
  { week: 'Week 2', pendapatan: 8600000, pengeluaran: 4000000 },
  { week: 'Week 3', pendapatan: 9200000, pengeluaran: 4500000 },
  { week: 'Week 4', pendapatan: 10500000, pengeluaran: 5200000 },
  { week: 'Week 5', pendapatan: 11000000, pengeluaran: 4800000 },
];

const monthlyData = [
  { month: 'Jan', pendapatan: 30000000, pengeluaran: 12000000 },
  { month: 'Feb', pendapatan: 28000000, pengeluaran: 10000000 },
  { month: 'Mar', pendapatan: 32000000, pengeluaran: 13000000 },
  { month: 'Apr', pendapatan: 31000000, pengeluaran: 11500000 },
  { month: 'May', pendapatan: 34000000, pengeluaran: 14000000 },
  { month: 'Jun', pendapatan: 33000000, pengeluaran: 13500000 },
];

export default function LaporanKeuangan() {
  const [activeTab, setActiveTab] = useState("harian");

  // Export PDF menggunakan pdfMake
  const handleExportPDF = () => {
    // Load fonts for pdfMake
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const documentDefinition = {
      content: [
        { text: "Laporan Keuangan", style: "header" },
        {
          table: {
            body: [
              ["Tanggal", "Pendapatan", "Pengeluaran"],
              ...dailyData.map(item => [item.date, item.pendapatan, item.pengeluaran])
            ]
          }
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
        }
      }
    };

    // Generate and download the PDF
    pdfMake.createPdf(documentDefinition).download('laporan-keuangan.pdf');
  };

  // Render chart
  const renderChart = (data, label) => (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-medium mb-2">{label}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={Object.keys(data[0])[0]} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pendapatan" stroke="#4ade80" name="Pendapatan" />
          <Line type="monotone" dataKey="pengeluaran" stroke="#f87171" name="Pengeluaran" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Laporan Keuangan</h1>

      <div className="flex justify-end mb-4 gap-2">
        <button onClick={handleExportPDF} className="bg-red-500 text-white px-4 py-2 rounded">Export PDF</button>
        {/* Export Excel to CSV */}
        <CSVLink data={dailyData} filename="laporan-keuangan.csv">
          <button className="bg-green-500 text-white px-4 py-2 rounded">Export CSV</button>
        </CSVLink>
      </div>

      <div className="flex gap-2 mb-4">
        <button
          className={`px-4 py-2 rounded ${activeTab === 'harian' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab("harian")}
        >
          Harian
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === 'mingguan' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab("mingguan")}
        >
          Mingguan
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === 'bulanan' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab("bulanan")}
        >
          Bulanan
        </button>
      </div>

      {activeTab === 'harian' && renderChart(dailyData, "Pendapatan & Pengeluaran Harian")}
      {activeTab === 'mingguan' && renderChart(weeklyData, "Pendapatan & Pengeluaran Mingguan")}
      {activeTab === 'bulanan' && renderChart(monthlyData, "Pendapatan & Pengeluaran Bulanan")}
    </div>
  );
}
