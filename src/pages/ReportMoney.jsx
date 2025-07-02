// Ganti nama/isi file LaporanKeuangan.jsx dengan ini.
// Atau simpan sebagai file baru: src/pages/RateManagement.jsx

import React from 'react';
import { Plus, Filter, MoreVertical } from 'lucide-react';

// Komponen kecil untuk badge Availability
const AvailabilityBadge = ({ availability }) => {
  const isFull = availability.toLowerCase() === 'full';
  const style = isFull
    ? 'bg-red-100 text-red-700'
    : 'bg-blue-100 text-blue-700';

  return (
    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${style}`}>
      {availability}
    </span>
  );
};

// --- DATA STATIS (DUMMY) UNTUK RATE KAMAR ---
const rateData = [
  { roomType: 'Single', deals: 'Family deal', cancellationPolicy: 'Strict', dealPrice: 800, rate: 800, availability: '5 rooms' },
  { roomType: 'Double', deals: 'Christmas deal', cancellationPolicy: 'Strict', dealPrice: 1200, rate: 1200, availability: 'Full' },
  { roomType: 'Triple', deals: 'Family deal', cancellationPolicy: 'Flexible', dealPrice: 2000, rate: 2000, availability: '12 rooms' },
  { roomType: 'VIP', deals: 'Black Friday', cancellationPolicy: 'Non refundable', dealPrice: 4000, rate: 4000, availability: '10 rooms' },
];


export default function RateManagement() {
  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Header Halaman dan Tombol Aksi */}
      <div className="flex justify-between items-center mb-6">
        {/* Judul bisa ditambahkan di sini jika perlu, atau biarkan kosong sesuai desain */}
        <div></div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            <Plus size={16} />
            <span>Add rate</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm border rounded-lg hover:bg-gray-50">
            <Filter size={16} className="text-gray-600" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Ganti seluruh blok table Anda dengan ini */}
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
          {rateData.map((item, index) => (
            // Garis pemisah (border-b) dihapus dari sini
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 font-semibold">{item.roomType}</td>
              <td className="px-6 py-4 text-gray-600">{item.deals}</td>
              <td className="px-6 py-4 text-gray-600">{item.cancellationPolicy}</td>
              <td className="px-6 py-4 text-gray-600">${item.dealPrice.toLocaleString('en-US')}</td>
              <td className="px-6 py-4 font-bold text-gray-900">${item.rate.toLocaleString('en-US')}</td>
              <td className="px-6 py-4"><AvailabilityBadge availability={item.availability} /></td>
              <td className="px-6 py-4 text-right">
                <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={18} /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  );
}