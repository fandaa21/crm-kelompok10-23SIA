
import React from 'react';
import { FaStar, FaMapMarkerAlt, FaBed, FaBath, FaWifi, FaMugHot, FaUserFriends, FaRulerCombined, FaCalendarAlt, FaCar, FaUtensils, FaSwimmer, FaConciergeBell } from 'react-icons/fa';

// --- Impor Gambar Lokal Anda ---
// Pastikan path dan nama file ini sesuai dengan yang ada di folder assets Anda
import mainImage from '../assets/image-chekin3.jpg';
import subImage1 from '../assets/image-chekin7.jpg';
import subImage2 from '../assets/image-chekin5.jpg';
import singleRoomImg from '../assets/image-chekin1.jpg';
import doubleRoomImg from '../assets/image-chekin2.jpg';
import premiumRoomImg from '../assets/image-chekin4.jpg';
import eliteRoomImg from '../assets/image-chekin6.jpg';
import privateRoomImg from '../assets/image-chekin1.jpg';
import exterior1 from '../assets/enterior1.png';
import exterior2 from '../assets/enterior2.png';



// --- DATA STATIS UNTUK HALAMAN ---
const propertyData = {
    name: 'Hotel Aryaduta',
    rating: '4.3/5',
    reviews: '999+ reviews',
    location: 'Pekanbaru',
    images: {
        main: mainImage,
        sub1: subImage1,
        sub2: subImage2,
        exterior1: exterior2,
        exterior2: exterior1,
    },
    description: [
        'Selamat datang di "Hotel Aryaduta", Hotel mewah di tengah jantung kota yang menawarkan pengalaman tinggal yang serba modern dan penuh kenyamanan.',
        'Dengan desain interior yang elegan, setiap kamar apartemen kami dirancang untuk memadukan keindahan estetika dengan fungsionalitas yang optimal.',
        'Dari dapur berdesain mutakhir hingga kamar tidur yang dilengkapi dengan teknologi terbaru, "Puncak Harmoni Residence" memanjakan penghuninya dengan gaya hidup modern yang tanpa kompromi.'
    ],
    topFacilities: [
        { icon: <FaMugHot />, text: 'Pemanas ruangan dan ruang kerja' },
        { icon: <FaStar />, text: 'Ruangan Bar AC' },
        { icon: <FaUserFriends />, text: 'Elevator' },
        { icon: <FaWifi />, text: 'Layanan Tiap Saat' }
    ],
    sonderStandard: [
        { icon: <FaBed />, text: 'Check-in Password' },
        { icon: <FaWifi />, text: 'WIFI Cepat' },
        { icon: <FaStar />, text: 'Kebersihan Profesional' },
        { icon: <FaUtensils />, text: 'Perlengkapan Lengkap' }
    ],
    // --- Data kamar diperbarui menjadi 5 item ---
    rooms: [
        { id: 1, name: 'Single Room', image: singleRoomImg, specs: '1 Tempat tidur • 1 Pengunjung • 1 Kamar mandi • 67 Sq ft', facilities: ['AC', 'Cable TV', 'Streaming device'], price: '500.000' },
        { id: 2, name: 'Double Room', image: doubleRoomImg, specs: '2 Bedroom • 2-3 Guest • 1 Bathroom • 84 Sq ft', facilities: ['AC', 'Cable TV', 'Streaming device'], price: '500.000' },
        { id: 3, name: 'Premium Room', image: premiumRoomImg, specs: '3 Bedroom • 5 Guest • 2 Bathroom • 92 Sq ft', facilities: ['Twin Bed', 'Cable TV', 'Streaming device'], price: '500.000' },
        { id: 4, name: 'Single Room Class Elite', image: eliteRoomImg, specs: '1 Bedroom • 1 Guest • 1 Bathroom • 67 Sq ft', facilities: ['AC', 'Cable TV', 'Streaming device'], price: '500.000' },
        { id: 5, name: 'Private Room', image: privateRoomImg, specs: '1 Ruangan • 1 Guest • 1 Bathroom • 67 Sq ft', facilities: ['Twin Bed', 'AC', 'Cable TV'], price: '500.000' },
    ],
    mainFacilities: [
        { icon: <FaBed />, label: 'Check-in Password' }, { icon: <FaWifi />, label: 'WIFI Cepat' },
        { icon: <FaStar />, label: 'Kebersihan Profesional' }, { icon: <FaUtensils />, label: 'Lengkap' },
        { icon: <FaConciergeBell />, label: 'Konsultasi' }, { icon: <FaMugHot />, label: 'Coffee hangat' },
        { icon: <FaSwimmer />, label: 'Tempat tidur nyaman' }, { icon: <FaBath />, label: 'Tersedia air hangat' }
    ],
    mapInfo: {
        url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.902348545939!2d107.6071443152701!3d-6.902251995012546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64c5e8a3a3b%3A0x33b853606f2e825!2sHotel%20Indonesia%20Group!5e0!3m2!1sen!2sid!4v1672834567890!5m2!1sen!2sid',
        description: 'Selamat datang di "Hotel Aryaduta" Hotel mewah di tengah jantung kota yang serba modern dan penuh kenyamanan.',
        address: 'Pekanbaru, no.201'
    }
};

const RoomDetailPage = () => {
    return (
        <div className="bg-[#f5f1ea]">
            <div className="container mx-auto px-6 py-12">

                {/* 1. IMAGE GALLERY / HERO SECTION */}
                <section className="grid grid-cols-2 grid-rows-2 gap-4 h-[500px]">
                    <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden">
                        <img src={propertyData.images.main} alt="Main room view" className="w-full h-full object-cover" />
                    </div>
                    <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
                         <img src={propertyData.images.sub1} alt="Secondary room view 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
                         <img src={propertyData.images.sub2} alt="Secondary room view 2" className="w-full h-full object-cover" />
                    </div>
                </section>
                
                {/* 2. MAIN INFO & BOOKING FORM SECTION */}
                <section className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Kolom Kiri: Info */}
                    <div className="lg:col-span-2">
                        <h1 className="text-4xl font-bold font-serif text-[#4e3b2f]">{propertyData.name}</h1>
                        <div className="flex items-center flex-wrap gap-4 mt-2 text-sm">
                            <div className="flex items-center gap-1 text-yellow-500"><FaStar /> {propertyData.rating}</div>
                            <a href="#" className="text-gray-600 underline">{propertyData.reviews}</a>
                            <div className="flex items-center gap-1 text-gray-600"><FaMapMarkerAlt /> {propertyData.location}</div>
                        </div>
                        <div className="space-y-4 mt-6 text-gray-700 leading-relaxed">
                            {propertyData.description.map((p, i) => <p key={i}>{p}</p>)}
                        </div>
                        <div className="mt-8 border-t pt-6 grid grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-bold text-lg mb-4">Fasilitas Teratas</h3>
                                <ul className="space-y-3 text-sm text-gray-700">{propertyData.topFacilities.map((f, i) => <li key={i} className="flex items-center gap-3">{f.icon} {f.text}</li>)}</ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-4">The Sonder standard</h3>
                                <ul className="space-y-3 text-sm text-gray-700">{propertyData.sonderStandard.map((s, i) => <li key={i} className="flex items-center gap-3">{s.icon} {s.text}</li>)}</ul>
                            </div>
                        </div>
                    </div>
                    {/* Kolom Kanan: Booking Form */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-2xl shadow-lg sticky top-24">
                            <h3 className="font-bold text-lg">Atur Jadwal mu disini..</h3>
                            <div className="mt-4 grid grid-cols-1 gap-4">
                               <div className="flex items-center border rounded-lg px-4 py-2">
                                   <FaCalendarAlt className="text-gray-500"/>
                                   <input type="text" placeholder="Check-in" className="flex-1 ml-2 bg-transparent focus:outline-none text-sm"/>
                                   <input type="text" placeholder="Check-out" className="flex-1 ml-2 bg-transparent focus:outline-none text-sm"/>
                               </div>
                               <div className="flex items-center border rounded-lg px-4 py-2">
                                   <FaUserFriends className="text-gray-500"/>
                                   <span className="flex-1 ml-2 text-sm">Orang</span>
                                   <button className="text-lg">-</button>
                                   <span className="px-2">2</span>
                                   <button className="text-lg">+</button>
                               </div>
                            </div>
                            <button className="mt-4 p-4 w-full bg-[#3d2b1f] text-white rounded-lg text-left">
                                <p className="font-bold flex items-center gap-2"><FaStar className="text-yellow-400" /> Pesan dengan keyakinan</p>
                                <p className="text-xs mt-1">sebelum check-in untuk pembayaran seluruh dana</p>
                            </button>
                        </div>
                    </div>
                </section>

                {/* 3. ROOM LIST SECTION */}
                <section className="mt-16">
                    <h2 className="text-3xl font-bold font-serif mb-8">List Room</h2>
                    <div className="space-y-6">
                        {propertyData.rooms.map(room => (
                            <div key={room.id} className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-white p-6 rounded-2xl shadow-md items-center">
                                <div className="md:col-span-1 rounded-lg overflow-hidden h-48 md:h-full"><img src={room.image} alt={room.name} className="w-full h-full object-cover" /></div>
                                <div className="md:col-span-2">
                                    <h3 className="font-bold text-xl">{room.name}</h3>
                                    <p className="text-xs text-gray-500 mt-1">{room.specs}</p>
                                    <p className="font-bold text-sm mt-4 mb-2">Tersedia Fasilitas:</p>
                                    <ul className="list-disc list-inside text-sm text-gray-600">
                                        {room.facilities.map((fac, i) => <li key={i}>{fac}</li>)}
                                    </ul>
                                </div>
                                <div className="md:col-span-1 text-right">
                                    <p className="text-xl font-bold">Rp. {room.price}</p>
                                    <p className="text-xs text-gray-500">Harga Harian</p>
                                    <button className="w-full mt-4 bg-[#f0eade] text-[#4e3b2f] py-2 px-4 rounded-lg font-semibold text-sm">Tentukan tanggal</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. FASILITAS SECTION (BARU) */}
                <section className="mt-16">
                    <h2 className="text-3xl font-bold font-serif mb-8">Fasilitas pada Hotel Indonesia</h2>
                    <div className="bg-[#3d2b1f] text-white p-8 rounded-2xl">
                        <h3 className="text-xl font-bold text-center">Layanan kami mulai</h3>
                        <p className="text-sm text-center text-gray-300 mt-2">Bekerja, bersantai, dan hidup. Tempat kami memiliki semua perlengkapan penting yang Anda perlukan untuk masa menginap Anda.</p>
                        <div className="grid grid-cols-4 md:grid-cols-8 gap-6 text-center mt-8">
                            {propertyData.mainFacilities.map((fac, i) => (
                                <div key={i} className="flex flex-col items-center gap-2"><span className="text-2xl">{fac.icon}</span><span className="text-xs">{fac.label}</span></div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 h-80">
                        <div className="rounded-2xl overflow-hidden"><img src={propertyData.images.exterior1} alt="Exterior 1" className="w-full h-full object-cover" /></div>
                        <div className="rounded-2xl overflow-hidden"><img src={propertyData.images.exterior2} alt="Exterior 2" className="w-full h-full object-cover" /></div>
                    </div>
                </section>

                {/* 5. MAP SECTION */}
                <section className="mt-16">
                    <h2 className="text-3xl font-bold font-serif mb-8">Peta Lokasi</h2>
                    <div className="rounded-2xl overflow-hidden border"><iframe src={propertyData.mapInfo.url} width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
                    <div className="mt-6">
                        <h3 className="font-bold text-lg">{propertyData.name}</h3>
                        <p className="text-sm text-gray-600 mt-2">{propertyData.mapInfo.description}</p>
                        <p className="flex items-center gap-2 text-sm text-gray-700 mt-4"><FaMapMarkerAlt /> {propertyData.mapInfo.address}</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default RoomDetailPage;