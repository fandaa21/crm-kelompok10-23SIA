// src/User/component/FooterUserWeb.jsx

import React from 'react';
// 1. Kita impor ikon yang dibutuhkan dari react-icons
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaChevronRight, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const FooterUserWeb = () => {
    return (
        // Menggunakan warna background yang lebih gelap sesuai desain
        <footer className="bg-[#3d2b1f] text-[#e3dcd2]">
            <div className="container mx-auto px-6 py-16">

                {/* 2. Struktur grid diubah untuk menampung konten baru */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Kolom 1: Brand & Sosial Media */}
                    <div className="space-y-4">
                        <div className="flex justify mb-3">
                            <img src="/logo1.png" alt="logo" className="h-20" />
                        </div>
                        <p className="text-sm leading-relaxed">
                            Aplikasi terbaik layanan penginapan di seluruh apartemen dan hotel di Pekanbaru.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="https://www.facebook.com/aryadutahotels" className="text-[#e3dcd2] hover:text-white transition"><FaFacebookF /></a>
                            <a href="https://x.com/hotelaryaduta" className="text-[#e3dcd2] hover:text-white transition"><FaTwitter /></a>
                            <a href="https://www.instagram.com/aryaduta_hotels/" className="text-[#e3dcd2] hover:text-white transition"><FaInstagram /></a>
                        </div>
                    </div>

                    {/* Kolom 2: Quick Links dengan Ikon */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-white">
                            Quick Links
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2 hover:text-white transition">
                                <FaChevronRight size={10} /> <a href="/">Home</a>
                            </li>
                            <li className="flex items-center gap-2 hover:text-white transition">
                                <FaChevronRight size={10} /> <a href="/about-us">About Us</a>
                            </li>
                            <li className="flex items-center gap-2 hover:text-white transition">
                                <FaChevronRight size={10} /> <a href="/room/1">Check-in Check-out</a>
                            </li>
                            <li className="flex items-center gap-2 hover:text-white transition">
                                <FaChevronRight size={10} /> <a href="/contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>

                    {/* Kolom 3: Kontak dengan Ikon */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-white">
                            Tetap bersama kami
                        </h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                                <span>Pekanbaru, Indonesia</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaEnvelope className="mt-1 flex-shrink-0" />
                                <span>Aryaduta@Email.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaPhoneAlt className="mt-1 flex-shrink-0" />
                                <span>(+62 ) 123 456 789</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 3. Garis pemisah dan Copyright diperbarui */}
                <div className="border-t border-gray-500/30 mt-16 pt-8 text-center">
                    <p className="text-xs tracking-widest uppercase">
                        © 2025 Aryaduta Hotel. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default FooterUserWeb;