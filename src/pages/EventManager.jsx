import { useState, useMemo } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const initialForm = {
  eventName: "",
  clientName: "",
  contact: "",
  date: "",
  type: "Meeting",
  status: "Terkonfirmasi",
  notes: "",
};

const eventTypes = ["Meeting", "Wedding", "Seminar", "Workshop", "Gala Dinner", "Corporate Event"];
const statusOptions = ["Terkonfirmasi", "Pending", "Dibatalkan"];

export default function EventManager() {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.eventName || !form.clientName || !form.date) return;
    setEvents([...events, { ...form, id: Date.now() }]);
    setForm(initialForm);
  };

  const handleDelete = (id) => {
    setEvents(events.filter((e) => e.id !== id));
  };

  const eventTypeCount = useMemo(() => {
    return eventTypes.map((type) => events.filter((e) => e.type === type).length);
  }, [events]);

  const statusCount = useMemo(() => {
    return statusOptions.map((status) => events.filter((e) => e.status === status).length);
  }, [events]);

  const typeChartData = {
    labels: eventTypes,
    datasets: [
      {
        label: "Jumlah Event",
        data: eventTypeCount,
        backgroundColor: ["#4f46e5", "#6366f1", "#a78bfa", "#facc15", "#fb923c", "#ec4899"],
      },
    ],
  };

  const statusChartData = {
    labels: statusOptions,
    datasets: [
      {
        label: "Status Event",
        data: statusCount,
        backgroundColor: ["#16a34a", "#facc15", "#ef4444"],
      },
    ],
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Manajemen Event Hotel Aryaduta</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md mb-8 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="eventName" placeholder="Nama Event" className="input" value={form.eventName} onChange={handleChange} required />
          <input name="clientName" placeholder="Nama Klien" className="input" value={form.clientName} onChange={handleChange} required />
          <input name="contact" placeholder="Kontak Klien" className="input" value={form.contact} onChange={handleChange} />
          <input name="date" type="date" className="input" value={form.date} onChange={handleChange} required />
          <select name="type" className="input" value={form.type} onChange={handleChange}>
            {eventTypes.map((type) => <option key={type}>{type}</option>)}
          </select>
          <select name="status" className="input" value={form.status} onChange={handleChange}>
            {statusOptions.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
        <textarea name="notes" placeholder="Catatan Tambahan" className="input w-full" rows={3} value={form.notes} onChange={handleChange} />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Tambah Event</button>
      </form>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-lg font-semibold mb-2">Distribusi Jenis Event</h3>
          <Bar data={typeChartData} />
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-lg font-semibold mb-2">Status Event</h3>
          <Doughnut data={statusChartData} />
        </div>
      </div>

      {/* Event List */}
      <div className="space-y-4">
        {events.length === 0 ? (
          <p className="text-gray-500">Belum ada event terdaftar.</p>
        ) : (
          events.map((event) => (
            <div key={event.id} className="bg-gray-100 p-4 rounded shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{event.eventName}</h3>
                  <p><strong>Jenis:</strong> {event.type}</p>
                  <p><strong>Tanggal:</strong> {event.date}</p>
                  <p><strong>Klien:</strong> {event.clientName} ({event.contact || "-"})</p>
                  <p><strong>Status:</strong> <span className={
                    event.status === "Terkonfirmasi"
                      ? "text-green-600"
                      : event.status === "Pending"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }>{event.status}</span></p>
                  {event.notes && <p><strong>Catatan:</strong> {event.notes}</p>}
                </div>
                <button onClick={() => handleDelete(event.id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Hapus</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
