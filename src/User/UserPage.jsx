import React, { useState } from 'react';
import HeaderUserWeb from '../User/component/HeaderUserWeb';
import FooterUserWeb from '../User/component/FooterUserWeb';
import { HiOutlineSearch, HiOutlineUser, HiOutlineCalendar } from 'react-icons/hi';
import MembershipForm from './MembershipForm';

const MembershipCard = ({ title, description, benefits, price, styleClass, onChoose }) => (
  <div className={`rounded-xl p-6 shadow-md w-full max-w-sm ${styleClass}`}>
    <h3 className="text-xl font-bold text-center mb-2">{title}</h3>
    <p className="text-sm text-center mb-4">{description}</p>
    <h4 className="font-semibold mb-2">What's included</h4>
    <ul className="text-sm mb-6 list-disc list-inside space-y-1">
      {benefits.map((benefit, index) => (
        <li key={index}>{benefit}</li>
      ))}
    </ul>
    {price && <div className="text-center text-lg font-bold mb-4">{price}</div>}
    <button
      className="w-full bg-[#3d2b1f] text-white py-2 rounded-full font-semibold hover:bg-[#2c2117] transition"
      onClick={onChoose}
    >
      Choose
    </button>
  </div>
);

const UserPage = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleChoose = (level) => {
    setSelectedLevel(level);
    setShowForm(true); // tampilkan form saat pilih membership
  };

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
      <section className="py-12 px-6 md:px-16 bg-[#f5f1ea]">
        <div className="mb-8">
          <p className="uppercase text-sm text-[#A86844] font-semibold tracking-wide">Fitur</p>
          <h2 className="text-3xl font-bold text-[#4e3b2f] leading-snug mt-1">
            Kenyamanan & Kemewahan <br />
            dalam Satu Pengalaman
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <img src="src/assets/image 1.png" alt="Fitur 1" className="rounded-[30px] object-cover w-[370px] h-[281px]" />
          <div className="flex flex-col w-[468px]">
            <img src="src/assets/image 2.png" alt="Fitur 2" className="object-cover w-full h-[412px] rounded-tr-[80px]" />
            <div className="bg-[#8F5835] text-white py-6 px-6 text-sm font-semibold leading-relaxed w-full h-[152px]">
              Kami Memberikan Hasil <br /> Layanan Terbaik Untuk <br /> Penginapan Anda
            </div>
          </div>
          <img src="src/assets/image 3.png" alt="Fitur 3" className="rounded-[30px] object-cover w-[370px] h-[281px] mt-[29px]" />
        </div>
      </section>

       {/* MEMBERSHIP SECTION */}
       {!showForm ? (
        <section id="membership" className="bg-[#3d2b1f] text-white py-16 px-4 flex flex-col items-center">
          <div className="text-center mb-10">
            <h2 className="text-sm tracking-widest text-[#d4bba2] mb-2 uppercase">Services</h2>
            <h1 className="text-4xl md:text-5xl font-bold">Membership</h1>
            <p className="text-[#d4bba2] mt-2">Choose the plan that's right for you.</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch w-full max-w-6xl">
            <MembershipCard
              title="MEMBER"
              description="For new guests or those staying 1-2 times."
              benefits={["Welcome gift", "Access to public promotions", "Exclusive info from newsletter"]}
              price="FREE"
              styleClass="bg-white text-[#3d2b1f]"
              onChoose={() => handleChoose("MEMBER")}
            />
            <MembershipCard
              title="PREFERRED"
              description="For guests with ≥3 stays or spending ≥Rp 5 million."
              benefits={["Special member discounts", "Reward points", "Seasonal promotions", "Airport transfer"]}
              price="Contact Us"
              styleClass="bg-[#5a3d2e] text-white scale-105"
              onChoose={() => handleChoose("PREFERRED")}
            />
            <MembershipCard
              title="ELITE"
              description="For guests with ≥6 stays or spending ≥Rp 10 million."
              benefits={["Early check-in/out", "Room upgrade", "Priority concierge", "Exclusive events", "+20% bonus points"]}
              price="Contact Us"
              styleClass="bg-white text-[#3d2b1f]"
              onChoose={() => handleChoose("ELITE")}
            />
          </div>
        </section>
      ) : (
        <MembershipForm />
      )}


      {/* FOOTER SECTION */}
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
  );
};

export default UserPage;
