// Ganti seluruh isi file UserDashboard.jsx dengan kode ini

import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { FaCrown, FaStar, FaUser, FaEdit } from 'react-icons/fa';
import { HiOutlineCalendarDays, HiOutlineArrowRight } from 'react-icons/hi2';

// Komponen kecil untuk memilih ikon berdasarkan level
const MembershipIcon = ({ level }) => {
    if (level === 'ELITE') {
        return <FaCrown className="text-yellow-400 text-2xl" />;
    }
    if (level === 'PREFERRED') {
        return <FaStar className="text-blue-400 text-2xl" />;
    }
    // Default icon
    return <FaUser className="text-gray-400 text-2xl" />;
};


export default function UserDashboard() {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            setLoading(true);
            // 1. Ambil data sesi user yang sedang login
            const { data: { session }, error: sessionError } = await supabase.auth.getSession();

            if (sessionError) {
                console.error('Error getting session:', sessionError);
                setLoading(false);
                return;
            }

            if (session) {
                // 2. Gunakan ID user dari sesi untuk mengambil data dari tabel 'profiles'
                const { data: profileData, error: profileError } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('id', session.user.id)
                    .single(); // .single() untuk mengambil satu baris data saja

                if (profileError) {
                    console.error('Error fetching profile:', profileError);
                } else {
                    setProfile(profileData);
                }
            }
            setLoading(false);
        };

        fetchProfile();
    }, []);

    // Tampilkan pesan loading jika data belum siap
    if (loading) {
        return <div className="p-6">Loading profile...</div>;
    }
    
    // Tampilkan pesan jika profil tidak ditemukan
    if (!profile) {
        return <div className="p-6">Could not load user profile. Please try again later.</div>;
    }


    return (
        <div className="space-y-16 pb-20">
            {/* ... Bagian Hero Banner tidak berubah ... */}
            <section className="relative h-[400px] md:h-[400px] overflow-hidden rounded-3xl shadow-xl border border-[#A86844]/30">
                {/* ... (sama seperti sebelumnya) ... */}
            </section>

            {/* -- AWAL MODIFIKASI: Welcome Profile Section -- */}
            <section className="bg-white/70 backdrop-blur-xl border border-[#A86844]/20 rounded-3xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between space-y-6 md:space-y-0">
                <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                        {/* Ikon dinamis berdasarkan level membership */}
                        <MembershipIcon level={profile.level_membership} />
                        <h2 className="text-3xl font-serif font-bold text-[#A86844]">{profile.level_membership || 'Guest'}</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <div>
                            <p className="text-sm text-gray-500">Nama</p>
                            <p className="text-lg font-semibold">{profile.nama_lengkap || 'User'}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Member Sejak</p>
                            {/* Format tanggal menjadi lebih mudah dibaca */}
                            <p className="text-lg font-semibold">{new Date(profile.created_at).toLocaleDateString('id-ID', { year: 'numeric', month: 'long' })}</p>
                        </div>
                    </div>
                </div>
                <button className="flex items-center space-x-2 bg-[#A86844] hover:bg-[#8f5e3b] text-white px-5 py-2 rounded-full shadow-lg transition">
                    <FaEdit />
                    <span>Edit Profil</span>
                </button>
            </section>
            {/* -- AKHIR MODIFIKASI -- */}

            {/* ... Bagian Promo & Penawaran tidak berubah ... */}
            <section className="space-y-6">
                 {/* ... (sama seperti sebelumnya) ... */}
            </section>
        </div>
    );
}