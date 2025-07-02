import React, { useState } from 'react';
import { Filter, MoreVertical, Plus } from 'lucide-react';

// Komponen untuk badge status yang berwarna
const StatusBadge = ({ status }) => {
  const styles = {
    Ongoing: 'bg-blue-100 text-blue-700',
    Full: 'bg-red-100 text-red-700',
    Inactive: 'bg-gray-200 text-gray-800',
    New: 'bg-green-100 text-green-700',
  };
  return (
    <span className={`px-3 py-1 text-xs font-medium rounded-full ${styles[status] || 'bg-gray-200'}`}>
      {status}
    </span>
  );
};

// --- DATA STATIS (DUMMY) UNTUK DEALS ---
const initialDeals = [
  { ref: '#5644', name: 'Family deal', reservationsLeft: 10, endDate: '21/3/23', roomType: 'VIP', status: 'Ongoing' },
  { ref: '#6112', name: 'Christmas deal', reservationsLeft: 12, endDate: '25/3/23', roomType: 'Single, Double', status: 'Full' },
  { ref: '#6141', name: 'Family deal', reservationsLeft: 15, endDate: '-', roomType: 'Triple', status: 'Inactive' },
  { ref: '#6535', name: 'Black Friday', reservationsLeft: 10, endDate: '1/5/23', roomType: 'VIP', status: 'New' },
];

export default function DealManagement() {
  const [deals, setDeals] = useState(initialDeals);
  const [activeTab, setActiveTab] = useState('Ongoing');
  // State untuk modal bisa ditambahkan nanti jika diperlukan

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Header Halaman */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-sm text-gray-500">Deal</h1>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 text-sm border rounded-lg hover:bg-gray-50">
            <Filter size={16} className="text-gray-600" />
            <span>Filter</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            <Plus size={16} />
            <span>Add deal</span>
          </button>
        </div>
      </div>

      {/* Kontrol Tabs */}
      <div className="flex items-center border-b mb-6">
        <button
          onClick={() => setActiveTab('Ongoing')}
          className={`px-4 py-2 text-sm font-semibold transition-colors ${activeTab === 'Ongoing' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-400'}`}
        >
          Ongoing
        </button>
        <button
          onClick={() => setActiveTab('Finished')}
          className={`px-4 py-2 text-sm font-semibold transition-colors ${activeTab === 'Finished' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-400'}`}
        >
          Finished
        </button>
      </div>

      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50/70 text-gray-500 uppercase text-xs border-b border-gray-200">
          <tr>
            <th className="px-6 py-4 font-medium">Room type</th>
            <th className="px-6 py-4 font-medium">Deals</th>
            <th className="px-6 py-4 font-medium">Cancellation policy</th>
            <th className="px-6 py-4 font-medium">Deal price</th>
            <th className="px-6 py-4 font-medium">Rate</th>
            <th className="px-6 py-4 font-medium">Availability</th>
            <th className="px-6 py-4"></th>
          </tr>
        </thead>
        <tbody className="text-gray-800">
          {deals.map((deal) => ( // <-- Gunakan variabel 'deals' dari state
            <tr key={deal.ref} className="border-b-0 hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-900">{deal.ref}</td>
              <td className="px-6 py-4">{deal.name}</td>
              <td className="px-6 py-4">{deal.reservationsLeft}</td>
              <td className="px-6 py-4">{deal.endDate}</td>
              <td className="px-6 py-4">{deal.roomType}</td>
              <td className="px-6 py-4"><StatusBadge status={deal.status} /></td>
              <td className="px-6 py-4 text-right">
                <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={18} /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}