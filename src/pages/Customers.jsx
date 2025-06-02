import React, { useState } from "react";

const initialCustomers = [
  {
    id: 1,
    name: "Ahmad Syahputra",
    email: "ahmad@example.com",
    phone: "081234567890",
    checkInDate: "2025-06-01",
    checkOutDate: "2025-06-05",
    active: true,
  },
  {
    id: 2,
    name: "Dewi Lestari",
    email: "dewi@example.com",
    phone: "082112345678",
    checkInDate: "2025-05-28",
    checkOutDate: "2025-05-30",
    active: false,
  },
];

export default function CustomerManagement() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkInDate: "",
    checkOutDate: "",
    active: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddCustomer = () => {
    const { name, email, phone, checkInDate, checkOutDate } = formData;
    if (!name || !email || !phone || !checkInDate || !checkOutDate) {
      alert("Semua kolom harus diisi");
      return;
    }
    const newCustomer = {
      ...formData,
      id: customers.length + 1,
    };
    setCustomers([...customers, newCustomer]);
    setFormData({
      name: "",
      email: "",
      phone: "",
      checkInDate: "",
      checkOutDate: "",
      active: true,
    });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus data pelanggan ini?")) {
      setCustomers(customers.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Manajemen Data Pelanggan Hotel</h1>

      <button
        onClick={() => setShowForm((prev) => !prev)}
        className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        {showForm ? "Batal Tambah Pelanggan" : "Tambah Pelanggan"}
      </button>

      {showForm && (
        <div className="mb-6 p-4 border border-gray-300 rounded bg-white shadow-sm">
          <div className="mb-2">
            <label className="block mb-1 font-medium">Nama</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:ring-indigo-400 focus:outline-none"
              placeholder="Masukkan nama pelanggan"
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:ring-indigo-400 focus:outline-none"
              placeholder="contoh@email.com"
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1 font-medium">No. Telepon</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:ring-indigo-400 focus:outline-none"
              placeholder="08xxxxxxxxxx"
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1 font-medium">Tanggal Check-In</label>
            <input
              type="date"
              name="checkInDate"
              value={formData.checkInDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:ring-indigo-400 focus:outline-none"
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1 font-medium">Tanggal Check-Out</label>
            <input
              type="date"
              name="checkOutDate"
              value={formData.checkOutDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:ring-indigo-400 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="active"
                checked={formData.active}
                onChange={handleChange}
                className="mr-2"
              />
              Sedang Menginap
            </label>
          </div>

          <button
            onClick={handleAddCustomer}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Simpan Pelanggan
          </button>
        </div>
      )}

      <div className="overflow-x-auto bg-white shadow rounded">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nama</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Telepon</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Check-In</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Check-Out</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {customers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{customer.name}</td>
                <td className="px-6 py-4">{customer.email}</td>
                <td className="px-6 py-4">{customer.phone}</td>
                <td className="px-6 py-4 text-center">{customer.checkInDate}</td>
                <td className="px-6 py-4 text-center">{customer.checkOutDate}</td>
                <td className="px-6 py-4 text-center">
                  {customer.active ? (
                    <span className="inline-block px-2 py-1 text-xs text-green-800 bg-green-100 rounded">
                      Menginap
                    </span>
                  ) : (
                    <span className="inline-block px-2 py-1 text-xs text-gray-600 bg-gray-200 rounded">
                      Selesai
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-center space-x-2">
                  <button
                    className="text-indigo-600 hover:text-indigo-900"
                    onClick={() => alert("Fitur Edit belum tersedia")}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => handleDelete(customer.id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
            {customers.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">
                  Tidak ada data pelanggan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
