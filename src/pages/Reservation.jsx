import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase';
import { Filter, MoreVertical, Plus } from 'lucide-react';

export default function DealManagement() {
  const [reservations, setReservations] = useState([]);
  const [activeTab, setActiveTab] = useState('Ongoing');

  useEffect(() => {
    const fetchReservations = async () => {
      const { data, error } = await supabase.from('reservations').select('*');
      if (error) {
        console.error('Gagal memuat data reservasi:', error.message);
      } else {
        setReservations(data);
      }
    };

    fetchReservations();
  }, []);

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Header Halaman */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-sm text-gray-500">Reservasi</h1>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 text-sm border rounded-lg hover:bg-gray-50">
            <Filter size={16} className="text-gray-600" />
            <span>Filter</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            <Plus size={16} />
            <span>Tambah</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center border-b mb-6">
        <button
          onClick={() => setActiveTab('Ongoing')}
          className={`px-4 py-2 text-sm font-semibold transition-colors ${
            activeTab === 'Ongoing'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-400'
          }`}
        >
          Aktif
        </button>
        <button
          onClick={() => setActiveTab('Finished')}
          className={`px-4 py-2 text-sm font-semibold transition-colors ${
            activeTab === 'Finished'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-400'
          }`}
        >
          Selesai
        </button>
      </div>

      {/* Tabel Reservasi */}
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50/70 text-gray-500 uppercase text-xs border-b border-gray-200">
          <tr>
            <th className="px-6 py-4 font-medium">Nama</th>
            <th className="px-6 py-4 font-medium">Email</th>
            <th className="px-6 py-4 font-medium">Check-In</th>
            <th className="px-6 py-4 font-medium">Check-Out</th>
            <th className="px-6 py-4 font-medium">Tamu</th>
            <th className="px-6 py-4 font-medium">Tipe Kamar</th>
            <th className="px-6 py-4"></th>
          </tr>
        </thead>
        <tbody className="text-gray-800">
          {reservations.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-900">{item.name}</td>
              <td className="px-6 py-4">{item.email}</td>
              <td className="px-6 py-4">{item.check_in}</td>
              <td className="px-6 py-4">{item.check_out}</td>
              <td className="px-6 py-4">{item.guests}</td>
              <td className="px-6 py-4">{item.room_type}</td>
              <td className="px-6 py-4 text-right">
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
