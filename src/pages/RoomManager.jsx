// src/pages/RoomManagement.jsx

import React, { useState } from 'react';
// Impor ikon dari lucide-react yang sudah terpasang
import { Calendar, User, Users, Minus, Plus, MoreVertical } from 'lucide-react';

// Komponen kecil untuk badge status agar kode lebih rapi
const StatusBadge = ({ status }) => {
    const statusStyles = {
        Available: 'bg-blue-100 text-blue-700',
        Booked: 'bg-red-100 text-red-700',
        Reserved: 'bg-green-100 text-green-700',
    };
    return (
        <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusStyles[status] || 'bg-gray-100 text-gray-700'}`}>
            {status}
        </span>
    );
};

// --- DATA STATIS UNTUK TABEL ---
const roomsData = [
    { number: '#045', bedType: 'Double bed', floor: 'Floor - 1', facility: 'AC, Shower, Double bed, towel bathtub, TV', status: 'Available' },
    { number: '#020', bedType: 'Single bed', floor: 'Floor - 2', facility: 'AC, Shower, Double bed, towel bathtub, TV', status: 'Booked' },
    { number: '#003', bedType: 'VIP', floor: 'Floor - 1', facility: 'AC, Shower, Double bed, towel bathtub, TV', status: 'Booked' },
    { number: '#040', bedType: 'VIP', floor: 'Floor - 1', facility: 'AC, Shower, Double bed, towel bathtub, TV', status: 'Reserved' },
    { number: '#015', bedType: 'Single bed', floor: 'Floor - 1', facility: 'AC, Shower, Double bed, towel bathtub, TV', status: 'Reserved' },
];

const RoomManagement = () => {
    const [activeTab, setActiveTab] = useState('All room');
    const roomTabs = ['All room(5)', 'Single', 'Double', 'Triple', 'VIP'];

    return (
        <div className="p-6 bg-[#f9fafb] min-h-screen">
            
            {/* KARTU FILTER UTAMA */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
                {/* Tabs Tipe Kamar */}
                <div className="flex items-center space-x-2 border-b pb-4">
                    {roomTabs.map(tab => (
                        <button 
                            key={tab} 
                            onClick={() => setActiveTab(tab.split('(')[0])}
                            className={`px-4 py-2 text-sm font-semibold rounded-lg transition ${
                                activeTab === tab.split('(')[0] ? 'bg-gray-200 text-gray-800' : 'text-gray-500 hover:bg-gray-100'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Filter Tanggal dan Jumlah Tamu */}
                <div className="pt-4 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    {/* Check In */}
                    <div className="space-y-1">
                        <label className="text-xs font-medium text-gray-500">Check in</label>
                        <div className="flex items-center border rounded-lg p-2">
                            <Calendar size={18} className="text-gray-400" />
                            <input type="text" defaultValue="Tue, Mar 2" className="text-sm ml-2 w-full bg-transparent focus:outline-none"/>
                        </div>
                    </div>
                     {/* Check Out */}
                    <div className="space-y-1">
                        <label className="text-xs font-medium text-gray-500">Check out</label>
                         <div className="flex items-center border rounded-lg p-2">
                            <Calendar size={18} className="text-gray-400" />
                            <input type="text" defaultValue="Wed, Mar 10" className="text-sm ml-2 w-full bg-transparent focus:outline-none"/>
                        </div>
                    </div>
                    {/* Guest Counters */}
                    <div className="flex items-end gap-4 col-span-1 md:col-span-2">
                        <div className="space-y-1 w-full">
                            <label className="text-xs font-medium text-gray-500">Adult</label>
                            <div className="flex items-center border rounded-lg p-2 justify-between">
                                <button className="text-gray-500"><Minus size={16}/></button>
                                <span className="font-bold">1</span>
                                <button className="text-gray-500"><Plus size={16}/></button>
                            </div>
                        </div>
                         <div className="space-y-1 w-full">
                            <label className="text-xs font-medium text-gray-500">Children</label>
                            <div className="flex items-center border rounded-lg p-2 justify-between">
                                <button className="text-gray-500"><Minus size={16}/></button>
                                <span className="font-bold">0</span>
                                <button className="text-gray-500"><Plus size={16}/></button>
                            </div>
                        </div>
                         <button className="bg-[#A86844] text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap h-10">Check availability</button>
                    </div>
                </div>
            </div>

            {/* TABEL DAFTAR KAMAR */}
            <div className="mt-8 bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50 text-gray-600">
                            <tr>
                                <th className="p-4 font-semibold">Room number</th>
                                <th className="p-4 font-semibold">Bed type</th>
                                <th className="p-4 font-semibold">Room floor</th>
                                <th className="p-4 font-semibold">Room facility</th>
                                <th className="p-4 font-semibold">Status</th>
                                <th className="p-4 font-semibold"></th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {roomsData.map((room, index) => (
                                <tr key={index} className="">
                                    <td className="p-4 font-medium">{room.number}</td>
                                    <td className="p-4">{room.bedType}</td>
                                    <td className="p-4">{room.floor}</td>
                                    <td className="p-4 text-xs max-w-xs truncate">{room.facility}</td>
                                    <td className="p-4"><StatusBadge status={room.status}/></td>
                                    <td className="p-4">
                                        <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={18}/></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default RoomManagement;