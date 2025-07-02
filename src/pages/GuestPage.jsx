import React, { useState } from 'react';
import * as XLSX from 'xlsx';

export default function GuestPage() {
  const initialData = [
    { id: '#5644', name: 'Alexander', room: 'A647', total: 467, paid: 200, status: 'Clean' },
    { id: '#6112', name: 'Pegasus', room: 'A456', total: 645, paid: 250, status: 'Dirty' },
    { id: '#6141', name: 'Martin', room: 'A645', total: 686, paid: 400, status: 'Dirty' },
    { id: '#6535', name: 'Cecil', room: 'A684', total: 8413, paid: 2500, status: 'Inspected' },
    { id: '#6541', name: 'Luke', room: 'B464', total: 841, paid: 400, status: 'Clean' },
    { id: '#9846', name: 'Yadrin', room: 'C648', total: 684, paid: 300, status: 'Clean' },
    { id: '#4921', name: 'Kiand', room: 'D644', total: 984, paid: 513, status: 'Pick up' },
    { id: '#9841', name: 'Turen', room: 'B641', total: 984, paid: 600, status: 'Dirty' },
  ];

  const [data, setData] = useState(initialData);
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState('check-in');

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleDelete = () => {
    setData((prev) => prev.filter((g) => !selected.includes(g.id)));
    setSelected([]);
  };

  const handleExport = () => {
    if (selected.length === 0) {
      alert('Tidak ada baris yang dipilih!');
      return;
    }
    const exportData = data.filter((g) => selected.includes(g.id));
    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Guests');
    XLSX.writeFile(wb, 'Selected_Guests.xlsx');
  };

  const filteredData = data.filter((g) =>
    g.room.toLowerCase().includes(search.toLowerCase())
  );

  const statusColors = {
    Clean: 'bg-blue-100 text-blue-700',
    Dirty: 'bg-red-100 text-red-700',
    Inspected: 'bg-green-100 text-green-700',
    'Pick up': 'bg-yellow-100 text-yellow-800',
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen p-6">
      <div className="bg-white rounded-lg shadow border border-gray-200 p-4 md:p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Guest Management</h2>

        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          {['check-in', 'check-out'].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-full text-sm border ${
                tab === t
                  ? 'bg-[#A86844] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {t.replace('-', ' ').toUpperCase()}
            </button>
          ))}

          <div className="ml-auto flex space-x-2">
            {selected.length > 0 && (
              <>
                <button
                  onClick={handleDelete}
                  className="bg-red-100 text-red-700 px-3 py-2 rounded-md text-sm hover:bg-red-200"
                >
                  BULK DELETE
                </button>
                <button
                  onClick={handleExport}
                  className="bg-green-100 text-green-700 px-3 py-2 rounded-md text-sm hover:bg-green-200"
                >
                  BULK EXPORT
                </button>
              </>
            )}
          </div>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search by room number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-md border-gray-300 text-sm mb-4 px-3 py-2"
        />

        {/* Table */}
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-[#f1f3f5] text-gray-700">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Select</th>
                <th className="px-4 py-3 text-left font-medium">Reservation ID</th>
                <th className="px-4 py-3 text-left font-medium">Name</th>
                <th className="px-4 py-3 text-left font-medium">Room Number</th>
                <th className="px-4 py-3 text-left font-medium">Total Amount</th>
                <th className="px-4 py-3 text-left font-medium">Amount Paid</th>
                <th className="px-4 py-3 text-left font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {filteredData.map((g) => (
                <tr key={g.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selected.includes(g.id)}
                      onChange={() => toggleSelect(g.id)}
                    />
                  </td>
                  <td className="px-4 py-3">{g.id}</td>
                  <td className="px-4 py-3">{g.name}</td>
                  <td className="px-4 py-3">{g.room}</td>
                  <td className="px-4 py-3">${g.total}</td>
                  <td className="px-4 py-3">${g.paid}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${statusColors[g.status]}`}
                    >
                      {g.status}
                    </span>
                  </td>
                </tr>
              ))}
              {filteredData.length === 0 && (
                <tr>
                  <td colSpan="7" className="px-4 py-6 text-center text-gray-500">
                    No guests found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
