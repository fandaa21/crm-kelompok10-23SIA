import React from 'react'
import { HiOutlineCalendarDays, HiOutlineArrowRight } from 'react-icons/hi2'
import { FaCrown, FaEdit } from 'react-icons/fa'

export default function UserDashboard() {
  const user = {
    name: "Andi Putra",
    email: "andi.putra@example.com",
    memberSince: "Januari 2023",
    tier: "Gold Member",
  }

  return (
    <div className="space-y-16 pb-20">

      {/* Hero Banner */}
      <section className="relative h-[400px] md:h-[400px] overflow-hidden rounded-3xl shadow-xl border border-[#A86844]/30">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1950&q=80"
          className="w-full h-full object-cover brightness-75 hover:scale-105 transition duration-700"
          alt="Hotel Lobby"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white drop-shadow-lg">
            Welcome to Aryaduta
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl">
            Nikmati pengalaman menginap bintang lima dengan layanan premium eksklusif untuk Anda.
          </p>
          <a
            href="/User/Reservasi"
            className="mt-8 inline-flex items-center space-x-3 bg-[#A86844] hover:bg-[#8f5e3b] text-white px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transition duration-300"
          >
            <HiOutlineCalendarDays className="text-xl" />
            <span>Reservasi Kamar Sekarang</span>
            <HiOutlineArrowRight className="text-xl" />
          </a>
        </div>
      </section>

      {/* Welcome Profile Section */}
      <section className="bg-white/70 backdrop-blur-xl border border-[#A86844]/20 rounded-3xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between space-y-6 md:space-y-0">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <FaCrown className="text-yellow-400 text-2xl" />
            <h2 className="text-3xl font-serif font-bold text-[#A86844]">{user.tier}</h2>
          </div>
          <p className="text-gray-700">Member sejak <span className="font-medium">{user.memberSince}</span></p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <p className="text-sm text-gray-500">Nama</p>
              <p className="text-lg font-semibold">{user.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-lg font-semibold">{user.email}</p>
            </div>
          </div>
        </div>
        <button className="flex items-center space-x-2 bg-[#A86844] hover:bg-[#8f5e3b] text-white px-5 py-2 rounded-full shadow-lg transition">
          <FaEdit />
          <span>Edit Profil</span>
        </button>
      </section>

      {/* Promo & Penawaran */}
      <section className="space-y-6">
        <h3 className="text-4xl font-serif font-bold text-[#A86844] text-center">Promo & Penawaran Spesial</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Diskon Early Bird",
              desc: "Pesan 2 minggu lebih awal dan nikmati potongan hingga 20%.",
              img: "https://images.unsplash.com/photo-1552901464-0be00459e6c9?auto=format&fit=crop&w=1050&q=80"
            },
            {
              title: "Paket Honeymoon",
              desc: "Suasana romantis dengan kamar khusus dan layanan ekstra.",
              img: "https://images.unsplash.com/photo-1578898887657-3ef3c4a405b1?auto=format&fit=crop&w=1050&q=80"
            },
            {
              title: "Family Staycation",
              desc: "Nikmati waktu berkualitas bersama keluarga dengan harga spesial.",
              img: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1050&q=80"
            }
          ].map((promo, i) => (
            <div key={i} className="relative group rounded-3xl overflow-hidden shadow-lg border border-[#A86844]/20">
              <img
                src={promo.img}
                alt={promo.title}
                className="h-56 w-full object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 p-5 text-white">
                <h4 className="text-2xl font-serif font-bold">{promo.title}</h4>
                <p className="text-sm text-white/80 mt-1">{promo.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
