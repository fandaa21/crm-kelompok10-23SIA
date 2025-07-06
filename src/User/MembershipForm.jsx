import React, { useState } from 'react';
import { supabase } from '../supabase';
import { toast } from 'react-hot-toast';

const MembershipForm = ({ onBack, selectedLevel }) => {
  const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true); // Mulai loading

  const { data, error } = await supabase
            .from('pendaftaran_membership') // Nama tabel di Supabase
            .insert([
                {
                    nama_depan: formData.firstName,
                    nama_belakang: formData.lastName,
                    email: formData.email,
                    alamat: formData.address,
                    pesan: formData.message,
                    level_membership: selectedLevel, // Menyimpan level yang dipilih
                },
            ]);

        setIsLoading(false); // Selesai loading

        if (error) {
            toast.error('Terjadi kesalahan: ' + error.message);
        } else {
            toast.success('Pendaftaran berhasil! Terima kasih telah bergabung.');
        
            // ✅ Kosongkan form
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                address: '',
                message: '',
            });
        
            // ✅ Kembali ke halaman sebelumnya
            if (typeof onBack === 'function') {
                onBack();
            }
        }
    };

    return (
      <div className="bg-[#fdf3e7] py-12 px-4 min-h-screen flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-4xl relative">
              <button onClick={onBack} className="absolute top-4 left-4 text-gray-500 hover:text-gray-800 transition">
                  &larr; Kembali
              </button>

              <div className="text-center">
                  <h2 className="text-2xl font-bold mb-2">Form Membership</h2>
                  <p className="text-sm text-gray-600 mb-1">
                      Anda mendaftar untuk level: <span className="font-bold text-[#A86844]">{selectedLevel}</span>
                  </p>
                  <p className="text-sm text-gray-600 mb-6">
                      Jangan ragu untuk meminta konsultasi atau bertanya langsung saja hubungi kami
                  </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                  {/* ... bagian input form tidak ada yang berubah ... */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                          <label className="block font-semibold text-sm mb-1">First Name</label>
                          <input type="text" name="firstName" placeholder="first name" value={formData.firstName} onChange={handleChange} required className="w-full px-4 py-2 rounded-full bg-[#f6f6f6] focus:outline-none"/>
                      </div>
                      <div>
                          <label className="block font-semibold text-sm mb-1">Last Name</label>
                          <input type="text" name="lastName" placeholder="last name" value={formData.lastName} onChange={handleChange} required className="w-full px-4 py-2 rounded-full bg-[#f6f6f6] focus:outline-none"/>
                      </div>
                      <div>
                          <label className="block font-semibold text-sm mb-1">Email Address</label>
                          <input type="email" name="email" placeholder="Hello@email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 rounded-full bg-[#f6f6f6] focus:outline-none"/>
                      </div>
                      <div>
                          <label className="block font-semibold text-sm mb-1">Address</label>
                          <input type="text" name="address" placeholder="Jalan" value={formData.address} onChange={handleChange} className="w-full px-4 py-2 rounded-full bg-[#f6f6f6] focus:outline-none"/>
                      </div>
                  </div>
                  <div>
                      <label className="block font-semibold text-sm mb-1">Pesan</label>
                      <textarea name="message" rows="4" placeholder="Ketik pesan disini..." value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-[#f6f6f6] focus:outline-none resize-none"></textarea>
                  </div>
                  
                  <button
                      type="submit"
                      className="bg-[#3d2b1f] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#2c1f15] transition disabled:bg-gray-400"
                      disabled={isLoading} // Tombol akan non-aktif saat loading
                  >
                      {isLoading ? 'Mengirim...' : 'SEND'}
                  </button>
              </form>
          </div>
      </div>
  );
};

export default MembershipForm;