import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { HiOutlineSearch, HiOutlineUser, HiOutlineCalendar } from 'react-icons/hi';
import MembershipForm from './MembershipForm';
import MembershipCard from './MembershipCard';
import FeedbackForm from './FeedbackForm';



const UserPage = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // -- AWAL MODIFIKASI --
  const [roomTypes, setRoomTypes] = useState([]); // State untuk menyimpan tipe kamar
  const [searchQuery, setSearchQuery] = useState({
    roomType: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
  });
  // useEffect untuk fetch data dari Supabase saat komponen pertama kali dimuat
  useEffect(() => {
    const fetchRoomTypes = async () => {
      const { data, error } = await supabase
        .from('tipe_kamar') // Sesuaikan dengan nama tabel Anda
        .select('id, nama_tipe'); // Ambil id dan nama saja

      if (error) {
        console.error('Error fetching room types:', error);
      } else {
        setRoomTypes(data);
      }
    };

    fetchRoomTypes();
  }, []); // Array kosong berarti efek ini hanya berjalan sekali

  const handleSearchChange = (e) => {
    setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value });
  };

  const handleSearchSubmit = () => {
    alert("Mencari dengan kriteria:\n" + JSON.stringify(searchQuery, null, 2));
    // Logika pencarian akan kita implementasikan nanti
  };
  // -- AKHIR MODIFIKASI --

  const handleChoose = (level) => {
    setSelectedLevel(level);
    setShowForm(true);
  };

  // **Tambahan**: Fungsi untuk kembali dari form ke halaman membership
  const handleBackFromForm = () => {
    setShowForm(false);
    setSelectedLevel(null);
  }

  return (
    <div className="bg-[#f8f2e9] text-[#4e3b2f] font-sans">

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

      {/* -- AWAL MODIFIKASI SEARCH FORM -- */}
      <div className="bg-white px-6 md:px-16 py-6 shadow-lg -mt-12 relative z-10 rounded-xl mx-4 md:mx-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Select dropdown yang dinamis */}
          <select
            name="roomType"
            value={searchQuery.roomType}
            onChange={handleSearchChange}
            className="px-4 py-3 border rounded-md focus:outline-[#A86844] bg-white"
          >
            <option value="" disabled>Pilih Tipe Kamar</option>
            {roomTypes.map((type) => (
              <option key={type.id} value={type.nama_tipe}>
                {type.nama_tipe}
              </option>
            ))}
          </select>

          {/* Input lainnya */}
          <input name="checkIn" type="date" value={searchQuery.checkIn} onChange={handleSearchChange} className="border rounded-md px-4 py-3" />
          <input name="checkOut" type="date" value={searchQuery.checkOut} onChange={handleSearchChange} className="border rounded-md px-4 py-3" />
          <input name="guests" type="number" placeholder="Orang" min="1" value={searchQuery.guests} onChange={handleSearchChange} className="border rounded-md px-4 py-3" />

          <button onClick={handleSearchSubmit} className="bg-[#A86844] text-white px-4 py-3 rounded-md flex items-center justify-center hover:bg-[#92593c]">
            <HiOutlineSearch className="mr-2" /> Cari
          </button>
        </div>
      </div>
      {/* -- AKHIR MODIFIKASI SEARCH FORM -- */}

      {/* FITUR / PROMO - VERSI PERBAIKAN */}
      <section className="py-12 px-6 md:px-16 bg-[#f5f1ea]">
        {/* Bagian Judul (tidak ada perubahan) */}
        <div className="mb-8 max-w-7xl mx-auto">
          <p className="uppercase text-sm text-[#A86844] font-semibold tracking-wide">FITUR</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#4e3b2f] leading-snug mt-1">
            Kenyamanan & Kemewahan <br />
            dalam Satu Pengalaman
          </h2>
        </div>

        {/* Layout Kolase Gambar */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 h-auto md:h-[580px]">

          {/* === KOLOM KIRI (2 Gambar Vertikal) === */}
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="overflow-hidden rounded-3xl h-full">
              <img
                src="src/assets/image 1.png" // Ganti dengan path gambar Anda
                alt="Villa dengan kolam renang"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-3xl h-full">
              <img
                src="src/assets/image 2.png" // Ganti dengan path gambar Anda
                alt="Santai di pinggir kolam"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* === KOLOM TENGAH (Gambar Besar + Teks) === */}
          {/* Gambar ini akan memakan 2 kolom di layar medium ke atas */}
          <div className="md:col-span-2 flex flex-col rounded-3xl overflow-hidden">
            {/* Wrapper untuk gambar agar bisa mengisi sisa ruang */}
            <div className="flex-grow overflow-hidden relative rounded-tl-3xl rounded-tr-3xl">
              <img
                src="src/assets/image 3.png" // Ganti dengan path gambar Anda
                alt="Kolam renang di tengah resort tropis"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            {/* Kotak Teks dengan padding vertikal yang lebih kecil */}
            <div className="bg-[#8F5835] text-white px-6 py-4 flex items-center w-full">
              <p className="font-semibold text-base lg:text-lg leading-relaxed">
                Kami Memberikan Hasil <br /> Layanan Terbaik Untuk <br /> Penginapan Anda
              </p>
            </div>
          </div>

          {/* === KOLOM KANAN (1 Gambar Vertikal) === */}
          <div className="overflow-hidden rounded-3xl h-full">
            <img
              src="src/assets/image 4.png" // Ganti dengan path gambar Anda
              alt="Pemandangan kolam saat senja"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

        </div>
      </section>


      {/* MEMBERSHIP SECTION - VERSI PERBAIKAN FINAL */}
      {!showForm ? (
        <section id="membership" className="bg-[#3d2b1f] text-white py-16 px-4">
          <div className="container mx-auto flex flex-col items-center">
            {/* Judul Section */}
            <div className="text-center mb-12">
              <h2 className="text-sm tracking-widest text-[#d4bba2] mb-2 uppercase">SERVICES</h2>
              <h1 className="text-4xl md:text-5xl font-bold font-serif">Membership</h1>
            </div>

            {/* --- PERUBAHAN UTAMA ADA DI BARIS DI BAWAH INI --- */}
            {/* Wadah untuk Kartu Membership */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                <MembershipCard
                    title="MEMBER"
                    description="Untuk tamu baru atau menginap 1-2 kali"
                    benefits={["Welcome gift", "Akses promo publik", "Info eksklusif dari newsletter"]}
                    price="FREE /per month"
                    styleClass="bg-white text-[#3d2b1f] hover:scale-105"
                    onChoose={() => handleChoose("MEMBER")}
                />
                <MembershipCard
                    title="PREFERRED"
                    description="Untuk tamu yang menginap ≥3 kali atau spending ≥Rp5 juta"
                    benefits={["Diskon kamar & F&B khusus anggota", "Reward point (1 poin/Rp10.000)", "Akses promo musiman", "Airport transfer service"]}
                    price="Hubungi kami"
                    styleClass="bg-[#5a3d2e] text-white hover:scale-110"
                    onChoose={() => handleChoose("PREFERRED")}
                />
                <MembershipCard
                    title="ELITE"
                    description="Untuk tamu dengan ≥6 kali menginap atau spending ≥Rp10 juta"
                    benefits={["Early check-in & late check-out", "Room upgrade", "Akses lounge/concierge prioritas", "Exclusive culinary showcase & lifestyle gathering", "Bonus poin +20% tiap transaksi"]}
                    price="Hubungi kami"
                    styleClass="bg-white text-[#3d2b1f] hover:scale-105"
                    onChoose={() => handleChoose("ELITE")}
                />
            </div>
          </div>
        </section>
      ) : (
        <MembershipForm
          onBack={handleBackFromForm}
          selectedLevel={selectedLevel}
        />
      )}
      <FeedbackForm />

    </div>
  );
};

export default UserPage;
