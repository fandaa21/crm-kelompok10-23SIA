import React from 'react';

import { FaPlay, FaShieldAlt, FaListAlt, FaCommentDots, FaQuoteLeft, FaRegBookmark, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const AboutUsPage = () => {
    // Placeholder untuk gambar, ganti dengan path gambar Anda
    const images = {
        hero: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?fit=crop&w=1950&q=80',
        missionCollage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?fit=crop&w=1950&q=80',
        whyUsVideoThumb: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?fit=crop&w=1950&q=80',
        cta: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?fit=crop&w=1950&q=80',
    };

    return (
        <div className="bg-[#f5f1ea] text-[#4e3b2f]">
            <section className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${images.hero})` }}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative container mx-auto px-6 h-full flex flex-col justify-center text-white">
                    <p className="text-sm uppercase tracking-wider">Homepage &gt; About Us</p>
                    <h1 className="text-5xl lg:text-6xl font-bold font-serif mt-4">Tentang Kami</h1>
                    <p className="mt-4 max-w-lg">
                        Hotel Impian Anda, Ruang Nyaman, Hidup Bahagia. Temukan Hotel Terbaik di Pekanbaru Bersama Kami!
                    </p>
                </div>
            </section>

            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center md:text-left mb-12">
                        <p className="text-sm uppercase tracking-wider text-[#A86844] font-semibold">Tujuan Kami</p>
                        <h2 className="text-3xl lg:text-4xl font-bold font-serif mt-2">Berikan Layanan & Tempat Apartemen Terbaik Sesuai Impian Pengunjung</h2>
                        <p className="mt-4 text-gray-600">Layanan dan Tempat Apartemen Terbaik, Sesuai Impian Anda. Rasakan kenyamanan istimewa di hunian kami.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Misi Kami Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="font-bold text-2xl mb-6">Misi Kami</h3>
                            <div className="space-y-6">
                                <div className="flex gap-6">
                                    <p className="text-5xl font-bold text-[#e0d1c1]">01</p>
                                    <div>
                                        <h4 className="font-bold text-lg">Menghadirkan Kemewahan Berkualitas Tinggi</h4>
                                        <p className="text-gray-600 mt-1">Menyediakan layanan dan tempat apartemen terbaik.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <p className="text-5xl font-bold text-[#e0d1c1]">02</p>
                                    <div>
                                        <h4 className="font-bold text-lg">Memenuhi Harapan Setiap Pengunjung</h4>
                                        <p className="text-gray-600 mt-1">Memenuhi kebutuhan serta harapan setiap pengunjung.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <p className="text-5xl font-bold text-[#e0d1c1]">03</p>
                                    <div>
                                        <h4 className="font-bold text-lg">Menciptakan Pengalaman Tak Terlupakan</h4>
                                        <p className="text-gray-600 mt-1">Memberikan pengalaman tinggal tak terlupakan.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Misi Kami Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="font-bold text-2xl mb-6">Visi Kami</h3>
                            <div className="space-y-6">
                                <div className="flex gap-6">
                                    <p className="text-5xl font-bold text-[#e0d1c1]">01</p>
                                    <div>
                                        <h4 className="font-bold text-lg">Menghadirkan Kemewahan Berkualitas Tinggi</h4>
                                        <p className="text-gray-600 mt-1">Menyediakan layanan dan tempat apartemen terbaik.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <p className="text-5xl font-bold text-[#e0d1c1]">02</p>
                                    <div>
                                        <h4 className="font-bold text-lg">Memenuhi Harapan Setiap Pengunjung</h4>
                                        <p className="text-gray-600 mt-1">Memenuhi kebutuhan serta harapan setiap pengunjung.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <p className="text-5xl font-bold text-[#e0d1c1]">03</p>
                                    <div>
                                        <h4 className="font-bold text-lg">Menciptakan Pengalaman Tak Terlupakan</h4>
                                        <p className="text-gray-600 mt-1">Memberikan pengalaman tinggal tak terlupakan.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Kolase Gambar */}
                    <div className="relative h-[450px]">
                        <div className="absolute bottom-0 left-0 bg-white p-6 rounded-2xl shadow-2xl z-10 w-48 text-center">
                            <p className="text-6xl font-bold text-[#8F5835]">99<span className="text-4xl">%</span></p>
                            <p className="text-gray-600 mt-1">Customer Suka</p>
                        </div>
                        <img src={images.missionCollage} alt="Interior hotel" className="absolute top-0 right-0 h-[90%] w-[90%] object-cover rounded-3xl shadow-lg"/>
                    </div>
                    {/* Teks Layanan */}
                    <div className="space-y-6">
                        <p className="text-sm uppercase tracking-wider text-[#A86844] font-semibold">Layanan Terbaik</p>
                        <h2 className="text-3xl lg:text-4xl font-bold font-serif">Kami Berikan Hotel dengan Layanan Terbaik</h2>
                        <p className="text-gray-600">Memberikan layanan terbaik sampai anda mendapatkan apartemen sesuai dengan impian.</p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <FaRegBookmark className="text-2xl text-[#8F5835]" />
                                <span>No.1 Layanan Hotel Terbaik Di Pekanbaru</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaCalendarAlt className="text-2xl text-[#8F5835]" />
                                <span>15 Tahun Lebih Kami Bersedia Layani Anda</span>
                            </div>
                        </div>
                        <button className="bg-[#3d2b1f] text-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition flex items-center gap-2">
                            Lihat Selengkapnya <FaArrowRight />
                        </button>
                    </div>
                </div>
            </section>
            
            <section className="py-16 lg:py-24 bg-[#3d2b1f] text-white">
                 <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Konten Kiri */}
                    <div className="space-y-6">
                        <p className="text-sm uppercase tracking-wider text-[#d4bba2] font-semibold">Kenapa Harus Gunakan Layanan Kami</p>
                        <h2 className="text-3xl lg:text-4xl font-bold font-serif">Kami Memberikan Hasil Layanan Terbaik Untuk Apartemen Anda</h2>
                        <div className="relative w-full max-w-md h-64 rounded-2xl overflow-hidden cursor-pointer group">
                             <img src={images.whyUsVideoThumb} alt="Video thumbnail" className="w-full h-full object-cover"/>
                             <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                <FaPlay className="text-white text-6xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"/>
                             </div>
                        </div>
                    </div>
                    {/* Konten Kanan */}
                    <div className="space-y-6">
                        <div className="bg-[#5a3d2e] p-8 rounded-2xl">
                             <FaQuoteLeft className="text-5xl text-[#d4bba2] mb-4" />
                             <p className="italic">"Hotel impian anda dengan kamar yang elit."</p>
                             <p className="mt-4 text-[#d4bba2] text-sm">Selamat Datang di Hotel Aryaduta, Terimakasih Atas kepercayaan anda kepada layanan kami.</p>
                        </div>
                         <div className="space-y-4 text-sm">
                            <p className="flex items-center gap-3"><FaShieldAlt className="text-xl"/> Konsultasi Gratis</p>
                            <p className="flex items-center gap-3"><FaListAlt className="text-xl"/> Bersertifikat</p>
                            <p className="flex items-center gap-3"><FaCommentDots className="text-xl"/> Layanan Terbaik</p>
                            <p className="flex items-center gap-3"><FaRegBookmark className="text-xl"/> Tempat Idaman</p>
                        </div>
                    </div>
                 </div>
            </section>

            <section className="py-16 lg:py-24">
                 <div className="container mx-auto px-6 text-center">
                     <p className="text-sm uppercase tracking-wider text-[#A86844] font-semibold">Bagaimana Cara Kerja Layanan Kami</p>
                     <h2 className="text-3xl lg:text-4xl font-bold font-serif mt-2">Kami Memberikan Langkah Kerja Yang Mudah</h2>
                     <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
                        {/* Step 1 */}
                        <div className="space-y-2">
                           <p className="text-5xl font-bold text-[#e0d1c1]">01</p>
                           <h3 className="font-bold text-lg pt-2">Check In</h3>
                           <p className="text-gray-600 text-sm">Set tanggal check-in dan check-out sesuai keinginan.</p>
                        </div>
                        {/* Step 2 */}
                        <div className="space-y-2">
                           <p className="text-5xl font-bold text-[#e0d1c1]">02</p>
                           <h3 className="font-bold text-lg pt-2">Pilih Tempat</h3>
                           <p className="text-gray-600 text-sm">Pilih tempat apartemen terbaik sesuai keinginan anda.</p>
                        </div>
                        {/* Step 3 */}
                        <div className="space-y-2">
                           <p className="text-5xl font-bold text-[#e0d1c1]">03</p>
                           <h3 className="font-bold text-lg pt-2">Bayar Tempat</h3>
                           <p className="text-gray-600 text-sm">Lakukan pembayaran sesudah anda set tanggal check-in & check-out.</p>
                        </div>
                        {/* Step 4 */}
                        <div className="space-y-2">
                           <p className="text-5xl font-bold text-[#e0d1c1]">04</p>
                           <h3 className="font-bold text-lg pt-2">Download Bukti</h3>
                           <p className="text-gray-600 text-sm">Kami akan segera kirimkan tiket/sewa apartemen anda.</p>
                        </div>
                     </div>
                 </div>
            </section>

            <section className="py-16 lg:py-24">
                 <div className="container mx-auto px-6">
                    <div className="relative h-96 rounded-2xl bg-cover bg-center flex items-center justify-center text-center text-white" style={{ backgroundImage: `url(${images.cta})` }}>
                         <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
                         <div className="relative z-10 space-y-4 px-4">
                            <h2 className="text-3xl lg:text-5xl font-bold font-serif">Tempati Apartemen Terbaik Sesuai Impian Anda</h2>
                            <p>Tersedia banyak sekali apartemen terbaik yang siap anda tempati</p>
                            <button className="bg-white text-[#3d2b1f] py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition">
                                Lihat Selengkapnya
                            </button>
                         </div>
                    </div>
                 </div>
            </section>
        </div>
    );
};

export default AboutUsPage;