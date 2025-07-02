import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import contactBannerImage from '../assets/image-contact1.jpg';
import contactBanner from '../assets/contact2.jpg'

const ContactPage = () => {
    // State untuk mengelola semua input pada form
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    });

    // Handler untuk memperbarui state saat pengguna mengetik
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Handler saat form di-submit
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Pesan Terkirim!\n\nData:\n${JSON.stringify(formData, null, 2)}`);
        // Reset form
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="bg-[#f5f1ea] text-[#4e3b2f]">
            <section 
                className="relative h-[350px] bg-cover bg-center" 
                style={{ backgroundImage: `url(${contactBanner})` }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative container mx-auto px-6 h-full flex flex-col justify-center text-white">
                    <p className="text-sm uppercase tracking-wider">Homepage &gt; Contact Us</p>
                    <h1 className="text-5xl lg:text-6xl font-bold font-serif mt-4">Hubungi Kami</h1>
                    <p className="mt-4 max-w-lg">
                        Kami memberikan kenyamana yang bagus, Jika ada kendala Segera Hubungi kami.
                    </p>
                </div>
            </section>

            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    
                    {/* Kolom Kiri: Form */}
                    <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-lg">
                        <h2 className="text-3xl font-bold font-serif mb-2">Hubungi kami</h2>
                        <p className="text-gray-600 mb-8">Jangan ragu untuk meminta konsultasi atau bertanya langsung saja hubungi kami</p>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required className="w-full px-4 py-3 bg-[#f6f6f6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A86844]" />
                                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required className="w-full px-4 py-3 bg-[#f6f6f6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A86844]" />
                            </div>
                            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-[#f6f6f6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A86844]" />
                            <select name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 bg-[#f6f6f6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A86844] text-gray-500">
                                <option value="" disabled>-- Choose Topic --</option>
                                <option value="Reservasi">Reservasi</option>
                                <option value="Membership">Membership</option>
                                <option value="Lainnya">Lainnya</option>
                            </select>
                            <textarea name="message" placeholder="Ketik pesan disini..." rows="5" value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 bg-[#f6f6f6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A86844] resize-none"></textarea>
                            <button type="submit" className="w-full bg-[#3d2b1f] text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Kolom Kanan: Info Kontak */}
                    <div className="pt-10">
                         <p className="text-sm uppercase tracking-wider text-[#A86844] font-semibold">Tetap Bersama Kami</p>
                         <h2 className="text-3xl lg:text-4xl font-bold font-serif mt-2">Hubungi kami</h2>
                         <p className="text-gray-600 mt-4 mb-8">Jangan ragu untuk meminta konsultasi atau bertanya langsung saja hubungi kami.</p>
                         <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <FaMapMarkerAlt className="text-2xl text-[#8F5835]" />
                                <div>
                                    <h4 className="font-bold">Tempat Kami</h4>
                                    <p className="text-gray-600">Jakarta, Indonesia</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <FaEnvelope className="text-2xl text-[#8F5835]" />
                                <div>
                                    <h4 className="font-bold">Email Address</h4>
                                    <p className="text-gray-600">Hello@Email.com</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <FaPhoneAlt className="text-2xl text-[#8F5835]" />
                                <div>
                                    <h4 className="font-bold">Telephone</h4>
                                    <p className="text-gray-600">(+62 ) 123 456 789</p>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-6 pb-16 lg:pb-24">
                <div className="h-64 rounded-2xl bg-cover bg-center" style={{ backgroundImage: `url(${contactBannerImage})` }}>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;