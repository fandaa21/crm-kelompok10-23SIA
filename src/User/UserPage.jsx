import React from 'react';
import HeaderUserWeb from '../User/component/HeaderUserWeb';
import FooterUserWeb from '../User/component/FooterUserWeb';
import { HiOutlineSearch, HiOutlineUser, HiOutlineCalendar } from 'react-icons/hi';

const UserPage = () => {
  return (
    <div className="bg-[#f8f2e9] text-[#4e3b2f] font-sans">

      <HeaderUserWeb />

      {/* HERO SECTION */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1950&q=80"
          alt="Hotel Room"
          className="w-full h-[450px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
          <p className="uppercase text-sm text-white/80 tracking-widest mb-2">Homepage</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Cari Hotel atau Apartemen</h1>
          <p className="text-white/90 max-w-2xl">Segera cari tempat yang ingin anda inap, atur jadwal checkin dan checkout</p>
        </div>
      </div>

      {/* SEARCH FORM */}
      <div className="bg-[#f8f2e9] px-6 md:px-16 py-6 shadow-lg -mt-12 relative z-10 rounded-xl mx-4 md:mx-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="Pilih Tipe Kamar"
            className="px-4 py-3 border rounded-md focus:outline-[#A86844]"
          />
          <div className="flex items-center border rounded-md px-4 py-3 space-x-2">
            <HiOutlineCalendar />
            <input type="date" className="flex-1 focus:outline-none bg-transparent" />
          </div>
          <div className="flex items-center border rounded-md px-4 py-3 space-x-2">
            <HiOutlineCalendar />
            <input type="date" className="flex-1 focus:outline-none bg-transparent" />
          </div>
          <div className="flex items-center border rounded-md px-4 py-3 space-x-2">
            <HiOutlineUser />
            <input type="number" placeholder="Orang" className="flex-1 focus:outline-none bg-transparent" />
          </div>
          <button className="bg-[#A86844] text-white px-4 py-3 rounded-md flex items-center justify-center hover:bg-[#92593c]">
            <HiOutlineSearch className="mr-2" /> Cari
          </button>
        </div>
      </div>

      {/* FITUR / PROMO */}
      <section className="py-12 px-6 md:px-16">
        <h2 className="text-3xl font-bold mb-6 text-[#4e3b2f]">Kenyamanan & Kemewahan dalam Satu Pengalaman</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <img className="rounded-xl object-cover h-48 w-full" src="https://source.unsplash.com/600x400/?hotel,villa" alt="Fitur 1" />
          <img className="rounded-xl object-cover h-48 w-full" src="https://source.unsplash.com/601x400/?resort,swimming-pool" alt="Fitur 2" />
          <img className="rounded-xl object-cover h-48 w-full" src="https://source.unsplash.com/602x400/?beach,resort" alt="Fitur 3" />
          <div className="bg-[#A86844] text-white rounded-xl p-6 flex items-center justify-center text-center">
            <p className="font-bold text-lg">Kami Memberikan Hasil Layanan Terbaik Untuk Penginapan Anda</p>
          </div>
        </div>
      </section>

      {/* SERVICES & PACKAGES */}
      <section className="bg-[#4e3b2f] text-[#f8f2e9] py-12 px-6 md:px-16">
        <h2 className="text-3xl font-bold mb-8">Services & Packages</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white text-[#4e3b2f] rounded-xl shadow-lg p-6 flex flex-col">
            <h3 className="text-xl font-bold mb-2">Single Size</h3>
            <p className="text-sm mb-4">2 loads per week, up to 10 lbs per load</p>
            <p className="mt-auto font-bold">$10 / per month</p>
            <button className="mt-3 bg-[#A86844] text-white py-2 rounded-md hover:bg-[#92593c]">Choose</button>
          </div>
          <div className="bg-[#A86844] text-white rounded-xl shadow-lg p-6 flex flex-col">
            <h3 className="text-xl font-bold mb-2">Couples Size</h3>
            <p className="text-sm mb-4">4 loads per week, up to 12 lbs per load, Special garments, Pickup & drop off</p>
            <p className="mt-auto font-bold">$20 / per month</p>
            <button className="mt-3 bg-white text-[#A86844] py-2 rounded-md hover:bg-[#f3e9e5]">Choose</button>
          </div>
          <div className="bg-white text-[#4e3b2f] rounded-xl shadow-lg p-6 flex flex-col">
            <h3 className="text-xl font-bold mb-2">Family Size</h3>
            <p className="text-sm mb-4">6 loads per week, up to 15 lbs per load, Free detergent samples</p>
            <p className="mt-auto font-bold">$30 / per month</p>
            <button className="mt-3 bg-[#A86844] text-white py-2 rounded-md hover:bg-[#92593c]">Choose</button>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-12 px-6 md:px-16">
        <div className="relative bg-[#A86844] rounded-xl overflow-hidden text-white">
          <img
            src="https://images.unsplash.com/photo-1582719478185-2197d4b1ba4b?auto=format&fit=crop&w=1950&q=80"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            alt="Hotel Interior"
          />
          <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="space-y-3 max-w-xl">
              <h3 className="text-3xl font-bold">Tempati Hotel Terbaik Sesuai Impian Anda</h3>
              <p className="text-white/90">Tersedia banyak sekali apartemen terbaik yang siap anda tempati</p>
            </div>
            <button className="mt-6 md:mt-0 bg-white text-[#A86844] px-5 py-3 rounded-full hover:bg-[#f3e9e5] transition">
              Lihat Selengkapnya
            </button>
          </div>
        </div>
      </section>

      <FooterUserWeb />
    </div>
  )
}

export default UserPage;
