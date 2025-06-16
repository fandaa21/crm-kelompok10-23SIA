import React, { useEffect, useState } from "react";
import { CalendarCheck, User, DoorOpen, Ban } from "lucide-react";

const statusMap = {
  confirmed: { color: "bg-green-100 text-green-700", icon: <DoorOpen className="w-4 h-4" />, label: "Dikonfirmasi" },
  pending: { color: "bg-yellow-200 text-yellow-800", icon: <CalendarCheck className="w-4 h-4" />, label: "Menunggu" },
  cancelled: { color: "bg-red-100 text-red-700", icon: <Ban className="w-4 h-4" />, label: "Dibatalkan" },
};

export default function Reservation() {
  const [reservations, setReservations] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [guest, setGuest] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("reservations");
    if (savedData) {
      setReservations(JSON.parse(savedData));
    } else {
      setReservations([
        { id: 1, guest: "Andi Saputra", type: "Kamar Deluxe", date: "2025-06-20", status: "confirmed" },
        { id: 2, guest: "Sari Lestari", type: "Ballroom A", date: "2025-07-03", status: "pending" },
        { id: 3, guest: "Budi Pratama", type: "Meeting Room 2", date: "2025-06-22", status: "cancelled" },
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("reservations", JSON.stringify(reservations));
  }, [reservations]);

  const handleAddReservation = () => {
    if (!guest || !type || !date) return alert("Lengkapi semua field!");
    const newRes = {
      id: reservations.length + 1,
      guest,
      type,
      date,
      status: "pending",
    };
    setReservations([...reservations, newRes]);
    setGuest(""); setType(""); setDate(""); setShowModal(false);
  };

  const handleStatusChange = (id, newStatus) => {
    const updated = reservations.map((r) =>
      r.id === id ? { ...r, status: newStatus } : r
    );
    setReservations(updated);
  };

  return (
    <div className="p-6 space-y-6 font-sans bg-white min-h-screen">
      <div className="flex items-center gap-3 text-3xl font-bold text-yellow-900">
        <CalendarCheck className="text-yellow-800 w-8 h-8" />
        <span>Reservasi Hotel</span>
      </div>
      <p className="text-gray-700 max-w-2xl text-sm">
        Fitur ini mendukung pemesanan kamar, ruang meeting, hingga ballroom secara praktis dan terintegrasi.
      </p>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {reservations.map((res) => (
          <div key={res.id} className="rounded-xl border shadow-sm bg-yellow-50 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-semibold text-lg text-yellow-900">
                <User className="w-5 h-5 text-yellow-800" />
                {res.guest}
              </div>
              <select
                value={res.status}
                onChange={(e) => handleStatusChange(res.id, e.target.value)}
                className={`text-xs px-2 py-1 rounded-full ${statusMap[res.status].color}`}
              >
                {Object.entries(statusMap).map(([key, val]) => (
                  <option key={key} value={key}>{val.label}</option>
                ))}
              </select>
            </div>
            <div className="text-sm text-yellow-900">
              <p className="font-medium">Tipe Reservasi:</p>
              <p>{res.type}</p>
            </div>
            <div className="text-sm text-yellow-900">
              <p className="font-medium">Tanggal:</p>
              <p>{res.date}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <button onClick={() => setShowModal(true)} className="bg-yellow-800 text-white px-4 py-2 rounded-lg hover:bg-yellow-900 transition">
          + Tambah Reservasi
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg space-y-4">
            <h2 className="text-xl font-bold text-yellow-900">Form Tambah Reservasi</h2>
            <input type="text" placeholder="Nama Tamu" value={guest} onChange={(e) => setGuest(e.target.value)} className="w-full border px-3 py-2 rounded" />
            <input type="text" placeholder="Tipe Reservasi" value={type} onChange={(e) => setType(e.target.value)} className="w-full border px-3 py-2 rounded" />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full border px-3 py-2 rounded" />
            <div className="flex justify-end gap-2">
              <button onClick={() => setShowModal(false)} className="px-3 py-1 border rounded text-yellow-900">Batal</button>
              <button onClick={handleAddReservation} className="px-3 py-1 bg-yellow-800 text-white rounded hover:bg-yellow-900">Simpan</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
