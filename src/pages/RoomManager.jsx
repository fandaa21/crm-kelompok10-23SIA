import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

const initialForm = {
  number: "",
  type: "Standard",
  price: "",
  status: "Tersedia",
  facilities: [],
  cleaningDate: "",
};

const facilityOptions = ["AC", "TV", "WiFi", "Breakfast", "Minibar"];

export default function RoomManager() {
  const [rooms, setRooms] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [filterStatus, setFilterStatus] = useState("");
  const [filterDate, setFilterDate] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFacilityToggle = (facility) => {
    setForm((prev) => ({
      ...prev,
      facilities: prev.facilities.includes(facility)
        ? prev.facilities.filter((f) => f !== facility)
        : [...prev.facilities, facility],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.number || !form.price) return;
    setRooms([...rooms, { ...form, id: Date.now() }]);
    setForm(initialForm);
  };

  const handleDelete = (id) => {
    setRooms(rooms.filter((room) => room.id !== id));
  };

  const getStatusChartData = () => {
    const counts = { Tersedia: 0, Dipesan: 0, "Perlu Dibersihkan": 0 };
    rooms.forEach((room) => counts[room.status]++);
    return Object.entries(counts).map(([status, jumlah]) => ({ status, jumlah }));
  };

  const getTypeChartData = () => {
    const counts = { Standard: 0, Deluxe: 0, Suite: 0 };
    rooms.forEach((room) => counts[room.type]++);
    return Object.entries(counts).map(([type, jumlah]) => ({ type, jumlah }));
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(rooms);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Kamar");
    XLSX.writeFile(workbook, "DataKamar.xlsx");
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["Nomor", "Jenis", "Harga", "Status", "Cleaning", "Fasilitas"];
    const tableRows = rooms.map((room) => [
      room.number,
      room.type,
      room.price,
      room.status,
      room.cleaningDate,
      room.facilities.join(", "),
    ]);
    doc.text("Data Kamar Hotel", 14, 15);
    doc.autoTable({ head: [tableColumn], body: tableRows, startY: 20 });
    doc.save("DataKamar.pdf");
  };

  const filteredRooms = rooms.filter((room) => {
    return (
      (filterStatus ? room.status === filterStatus : true) &&
      (filterDate ? room.cleaningDate === filterDate : true)
    );
  });

  return (
    <div className="p-6 max-w-6xl mx-auto bg-[#F7F6F3] min-h-screen text-black">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Manajemen Kamar Hotel Aryaduta</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md mb-10 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Nomor Kamar</label>
            <input name="number" value={form.number} onChange={handleChange} required placeholder="Contoh: 101"
              className="border border-[#BD845F] text-black rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#BD845F]" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Jenis Kamar</label>
            <select name="type" value={form.type} onChange={handleChange}
              className="border border-[#BD845F] text-black rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#BD845F]">
              <option>Standard</option>
              <option>Deluxe</option>
              <option>Suite</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Harga per Malam</label>
            <input name="price" type="number" value={form.price} onChange={handleChange} required placeholder="Contoh: 750000"
              className="border border-[#BD845F] text-black rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#BD845F]" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Status Kamar</label>
            <select name="status" value={form.status} onChange={handleChange}
              className="border border-[#BD845F] text-black rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#BD845F]">
              <option>Tersedia</option>
              <option>Dipesan</option>
              <option>Perlu Dibersihkan</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Tanggal Pembersihan</label>
            <input name="cleaningDate" type="date" value={form.cleaningDate} onChange={handleChange}
              className="border border-[#BD845F] text-black rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#BD845F]" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Fasilitas</label>
          <div className="flex flex-wrap gap-4 text-sm">
            {facilityOptions.map((facility) => (
              <label key={facility} className="flex items-center gap-2 text-black">
                <input
                  type="checkbox"
                  checked={form.facilities.includes(facility)}
                  onChange={() => handleFacilityToggle(facility)}
                />
                {facility}
              </label>
            ))}
          </div>
        </div>

        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Tambah Kamar
        </button>
      </form>

      {/* FILTER & EXPORT */}
      {rooms.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-4 items-center">
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}
            className="border border-[#BD845F] text-black p-2 rounded focus:ring-2 focus:ring-[#BD845F]">
            <option value="">Filter Status</option>
            <option value="Tersedia">Tersedia</option>
            <option value="Dipesan">Dipesan</option>
            <option value="Perlu Dibersihkan">Perlu Dibersihkan</option>
          </select>
          <input type="date" value={filterDate} onChange={(e) => setFilterDate(e.target.value)}
            className="border border-[#BD845F] text-black p-2 rounded" />
          <button onClick={exportToExcel} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
            Export Excel
          </button>
          <button onClick={exportToPDF} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
            Export PDF
          </button>
        </div>
      )}

      {/* CHARTS */}
      {rooms.length > 0 && (
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-semibold mb-2">Status Kamar</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={getStatusChartData()}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="status" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="jumlah" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-semibold mb-2">Jenis Kamar</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={getTypeChartData()}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="jumlah" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* ROOM LIST */}
      <div className="space-y-4">
        {filteredRooms.length === 0 ? (
          <p className="text-gray-500">Tidak ada kamar ditemukan.</p>
        ) : (
          filteredRooms.map((room) => (
            <div key={room.id} className="bg-white p-4 rounded shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">Kamar {room.number}</h3>
                  <p><strong>Jenis:</strong> {room.type}</p>
                  <p><strong>Harga:</strong> Rp{room.price}</p>
                  <p><strong>Status:</strong> {room.status}</p>
                  <p><strong>Cleaning:</strong> {room.cleaningDate || "-"}</p>
                  <p><strong>Fasilitas:</strong> {room.facilities.join(", ") || "-"}</p>
                </div>
                <button onClick={() => handleDelete(room.id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Hapus</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
