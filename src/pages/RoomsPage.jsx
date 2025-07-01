import React, { useState } from 'react';

const RoomsPage = () => {
  const roomData = [
    { id: '#045', bedType: 'Double bed', floor: 'Floor -1', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Available' },
    { id: '#020', bedType: 'Single bed', floor: 'Floor -2', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Booked' },
    { id: '#003', bedType: 'VIP', floor: 'Floor -1', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Booked' },
    { id: '#040', bedType: 'VIP', floor: 'Floor -1', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Reserved' },
    { id: '#015', bedType: 'Single bed', floor: 'Floor -1', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Reserved' },
  ];

  const [rooms] = useState(roomData);
  const [filteredRooms, setFilteredRooms] = useState(roomData);
  const [filter, setFilter] = useState('All');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);

  const handleFilterClick = (type) => {
    setFilter(type);
    if (type === 'All') {
      setFilteredRooms(rooms);
    } else {
      setFilteredRooms(rooms.filter(r => r.bedType.toLowerCase().includes(type.toLowerCase())));
    }
  };

  const handleCheckAvailability = () => {
    let result = [...rooms];

    if (adult > 2) {
      result = result.filter(r => r.bedType === 'VIP');
    }

    if (children > 0) {
      result = result.filter(r => r.bedType !== 'Single bed');
    }

    if (checkIn && checkOut) {
      result = result.filter(r => r.status !== 'Booked');
    }

    if (filter !== 'All') {
      result = result.filter(r => r.bedType.toLowerCase().includes(filter.toLowerCase()));
    }

    setFilteredRooms(result);
  };

  return (
    <div className="bg-[#f9fafb] min-h-screen p-6 text-[#1f2937] font-sans">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-6 space-y-6">
        <h1 className="text-2xl font-bold text-[#111827]">Rooms Management</h1>

        {/* FILTER TABS */}
        <div className="flex flex-wrap items-center gap-3">
          {['All', 'Single', 'Double', 'VIP'].map(type => (
            <button
              key={type}
              onClick={() => handleFilterClick(type)}
              className={`px-4 py-2 rounded-full border text-sm ${
                filter === type ? 'bg-[#d4af7f] text-white' : 'bg-white text-[#374151] border-gray-300'
              } hover:bg-[#d4af7f] hover:text-white transition`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* SEARCH FORM */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 bg-[#f9fafb] p-4 rounded-lg border">
          <div className="col-span-1">
            <label className="block text-xs text-gray-500 mb-1">Check in</label>
            <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} className="w-full border rounded px-3 py-2 text-sm" />
          </div>
          <div className="col-span-1">
            <label className="block text-xs text-gray-500 mb-1">Check out</label>
            <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} className="w-full border rounded px-3 py-2 text-sm" />
          </div>
          <div className="col-span-1 flex items-center gap-2">
            <label className="text-xs text-gray-500">Adult</label>
            <button onClick={() => setAdult(a => Math.max(1, a - 1))} className="px-2 py-1 border rounded">-</button>
            <span>{adult}</span>
            <button onClick={() => setAdult(a => a + 1)} className="px-2 py-1 border rounded">+</button>
          </div>
          <div className="col-span-1 flex items-center gap-2">
            <label className="text-xs text-gray-500">Children</label>
            <button onClick={() => setChildren(c => Math.max(0, c - 1))} className="px-2 py-1 border rounded">-</button>
            <span>{children}</span>
            <button onClick={() => setChildren(c => c + 1)} className="px-2 py-1 border rounded">+</button>
          </div>
          <button
            onClick={handleCheckAvailability}
            className="bg-[#d4af7f] text-white rounded-md text-sm px-4 py-2 hover:bg-[#c49a6c] w-full md:w-auto"
          >
            Check availability
          </button>
        </div>

        {/* ROOM LIST */}
        <div className="overflow-x-auto">
          <table className="min-w-full border rounded-lg">
            <thead className="bg-[#f3f4f6] text-left text-xs uppercase text-gray-500">
              <tr>
                <th className="px-4 py-3">Room number</th>
                <th className="px-4 py-3">Bed type</th>
                <th className="px-4 py-3">Room floor</th>
                <th className="px-4 py-3">Room facility</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-sm">
              {filteredRooms.map(room => (
                <tr key={room.id}>
                  <td className="px-4 py-3">{room.id}</td>
                  <td className="px-4 py-3">{room.bedType}</td>
                  <td className="px-4 py-3">{room.floor}</td>
                  <td className="px-4 py-3">{room.facility}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        room.status === 'Available'
                          ? 'bg-green-100 text-green-800'
                          : room.status === 'Booked'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {room.status}
                    </span>
                  </td>
                </tr>
              ))}
              {filteredRooms.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center text-gray-400 px-4 py-6">No rooms found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RoomsPage;
