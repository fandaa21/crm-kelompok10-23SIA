import React, { useState } from 'react'
import { HiOutlineCalendar, HiOutlineUser, HiOutlineChevronDown, HiOutlineCheckCircle } from 'react-icons/hi2'

const RoomReservation = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Reservasi berhasil dikirim! Kami akan menghubungi Anda segera.')
    setForm({
      name: '',
      email: '',
      checkIn: '',
      checkOut: '',
      guests: 1,
      roomType: '',
    })
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1950&q=80"
          alt="Hotel Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg">Reservasi Kamar Hotel</h1>
            <p className="text-white/90 max-w-xl mx-auto">Pesan kamar eksklusif untuk pengalaman menginap yang tak terlupakan.</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto -mt-20 p-6 md:p-10 bg-white rounded-3xl shadow-2xl border border-[#A86844]/30 space-y-6 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#A86844] text-center mb-2">Formulir Reservasi</h2>
        <p className="text-center text-gray-600 mb-6">Silakan isi data lengkap Anda di bawah ini. Kami akan memastikan semua kebutuhan Anda terpenuhi dengan layanan terbaik.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm uppercase text-gray-500 mb-1 block">Nama Lengkap</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-[#A86844] focus:border-[#A86844] transition shadow-sm"
                placeholder="Andi Putra"
              />
            </div>
            <div>
              <label className="text-sm uppercase text-gray-500 mb-1 block">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-[#A86844] focus:border-[#A86844] transition shadow-sm"
                placeholder="andi.putra@example.com"
              />
            </div>
            <div>
              <label className="text-sm uppercase text-gray-500 mb-1 block">Tanggal Check-In</label>
              <div className="relative">
                <HiOutlineCalendar className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="date"
                  name="checkIn"
                  value={form.checkIn}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-[#A86844] focus:border-[#A86844] transition shadow-sm"
                />
              </div>
            </div>
            <div>
              <label className="text-sm uppercase text-gray-500 mb-1 block">Tanggal Check-Out</label>
              <div className="relative">
                <HiOutlineCalendar className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="date"
                  name="checkOut"
                  value={form.checkOut}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-[#A86844] focus:border-[#A86844] transition shadow-sm"
                />
              </div>
            </div>
            <div>
              <label className="text-sm uppercase text-gray-500 mb-1 block">Jumlah Tamu</label>
              <div className="relative">
                <HiOutlineUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="number"
                  name="guests"
                  min="1"
                  value={form.guests}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-[#A86844] focus:border-[#A86844] transition shadow-sm"
                />
              </div>
            </div>
            <div>
              <label className="text-sm uppercase text-gray-500 mb-1 block">Tipe Kamar</label>
              <div className="relative">
                <HiOutlineChevronDown className="absolute left-3 top-3 text-gray-400" />
                <select
                  name="roomType"
                  value={form.roomType}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-[#A86844] focus:border-[#A86844] transition shadow-sm"
                >
                  <option value="" disabled>Pilih Tipe Kamar</option>
                  <option value="Standard">Standard Room</option>
                  <option value="Deluxe">Deluxe Room</option>
                  <option value="Suite">Suite Room</option>
                  <option value="Family">Family Room</option>
                </select>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full md:w-auto mx-auto block px-8 py-3 rounded-full bg-[#A86844] text-white hover:bg-[#92593c] transition text-lg font-semibold shadow-lg"
          >
            Kirim Reservasi
          </button>
        </form>
      </div>

      {/* Benefits Section */}
      <div className="max-w-4xl mx-auto mt-12 p-6 md:p-10 bg-white rounded-3xl shadow-lg border border-gray-100">
        <h3 className="text-2xl md:text-3xl font-bold text-[#A86844] mb-4 text-center">Mengapa Pesan Langsung di Sini?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-2">
            <HiOutlineCheckCircle className="mx-auto text-3xl text-[#A86844]" />
            <h4 className="font-bold text-gray-800">Free Breakfast</h4>
            <p className="text-gray-600 text-sm">Nikmati sarapan gratis setiap pagi.</p>
          </div>
          <div className="space-y-2">
            <HiOutlineCheckCircle className="mx-auto text-3xl text-[#A86844]" />
            <h4 className="font-bold text-gray-800">Free Wifi</h4>
            <p className="text-gray-600 text-sm">Internet cepat dan stabil di seluruh area hotel.</p>
          </div>
          <div className="space-y-2">
            <HiOutlineCheckCircle className="mx-auto text-3xl text-[#A86844]" />
            <h4 className="font-bold text-gray-800">Best Price Guarantee</h4>
            <p className="text-gray-600 text-sm">Dapatkan harga terbaik tanpa biaya tambahan.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomReservation
