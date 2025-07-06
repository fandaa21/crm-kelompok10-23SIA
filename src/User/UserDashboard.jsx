import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { FaCrown, FaStar, FaUser, FaEdit } from 'react-icons/fa';
import { HiOutlineArrowRight } from 'react-icons/hi2';

// Icon Membership dinamis dalam bubble 3D
const MembershipIcon = ({ level }) => {
  const iconClass = 'text-3xl';
  let icon, bg, ring;

  if (level === 'ELITE') {
    icon = <FaCrown className={`${iconClass} text-yellow-400`} />;
    bg = 'bg-yellow-50';
    ring = 'ring-yellow-300';
  } else if (level === 'PREFERRED') {
    icon = <FaStar className={`${iconClass} text-blue-400`} />;
    bg = 'bg-blue-50';
    ring = 'ring-blue-300';
  } else {
    icon = <FaUser className={`${iconClass} text-gray-400`} />;
    bg = 'bg-gray-50';
    ring = 'ring-gray-300';
  }

  return (
    <div className={`w-14 h-14 flex items-center justify-center rounded-full shadow-xl ring-2 ${bg} ${ring}`}>
      {icon}
    </div>
  );
};

export default function UserDashboard() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();

        if (!error) setProfile(data);
      }
      setLoading(false);
    };

    fetchProfile();
  }, []);

  if (loading) return <div className="p-6 text-gray-600">Loading profile...</div>;
  if (!profile) return <div className="p-6 text-red-500">Profile tidak ditemukan.</div>;

  return (
    <div className="space-y-10 pb-20 px-4 md:px-10 lg:px-20">

      {/* Header dengan Efek 3D */}
      <section className="bg-white  rounded-3xl shadow-2xl px-6 py-10 relative z-0 hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-shadow">
        <div className="absolute top-6 right-6">
          <button className="bg-[#A86844] hover:bg-[#8f5e3b] text-white p-2 rounded-full shadow-md">
            <FaEdit />
          </button>
        </div>

        <div className="flex items-center space-x-5">
          <MembershipIcon level={profile.level_membership} />
          <div>
            <h2 className="text-xl font-bold text-[#4e3b2f] font-serif drop-shadow-sm">
              {profile.nama_lengkap || 'Guest'}
            </h2>
            <p className="text-sm text-gray-500 capitalize">
              {profile.level_membership || 'Guest'} Member
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-sm text-gray-600">
          <div>
            <p className="font-medium text-gray-500">Email</p>
            <p className="text-gray-800">{profile.email || '-'}</p>
          </div>
          <div>
            <p className="font-medium text-gray-500">Bergabung Sejak</p>
            <p className="text-gray-800">
              {new Date(profile.created_at).toLocaleDateString('id-ID', { year: 'numeric', month: 'long' })}
            </p>
          </div>
        </div>
      </section>

      {/* Promo Placeholder */}
      <section className="bg-white rounded-3xl shadow-xl px-6 py-8 text-center hover:shadow-2xl transition">
        <h3 className="text-lg font-semibold text-[#4e3b2f]">Promo & Penawaran Spesial</h3>
        <p className="text-sm text-gray-600 mt-2">Segera hadir... kami sedang menyiapkan penawaran terbaik untuk Anda!</p>
        <button className="mt-4 inline-flex items-center gap-2 bg-[#A86844] text-white px-5 py-2 rounded-full hover:bg-[#8f5e3b] transition">
          Lihat Penawaran <HiOutlineArrowRight size={18} />
        </button>
      </section>

    </div>
  );
}
