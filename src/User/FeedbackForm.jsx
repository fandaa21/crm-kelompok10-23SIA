import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const FeedbackForm = () => {
    // State untuk mengelola rating bintang
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    // State untuk mengelola input form lainnya
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Untuk saat ini, kita tampilkan datanya di alert.
        // Nanti, logika untuk mengirim ke Supabase akan ada di sini.
        alert(`
            Terima kasih atas feedback Anda!
            
            Nama: ${formData.name}
            Email: ${formData.email}
            Rating: ${rating} Bintang
            Pesan: ${formData.message}
        `);
        // Reset form setelah submit
        setFormData({ name: '', email: '', message: '' });
        setRating(0);
    };

    return (
        <section className="bg-[#f5f1ea] py-16 lg:py-24">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
                    {/* Judul Form */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-[#4e3b2f] font-serif">Berikan Feedback Anda</h2>
                        <p className="text-gray-600 mt-2">Kami sangat menghargai setiap masukan untuk menjadi lebih baik.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Rating Bintang */}
                        <div className="text-center">
                            <label className="block font-semibold text-gray-700 mb-2">Seberapa puas Anda dengan layanan kami?</label>
                            <div className="flex justify-center items-center gap-2 text-3xl">
                                {[...Array(5)].map((star, index) => {
                                    const currentRating = index + 1;
                                    return (
                                        <label key={index}>
                                            <input type="radio" name="rating" value={currentRating} onClick={() => setRating(currentRating)} className="hidden" />
                                            <FaStar
                                                className="cursor-pointer transition-colors duration-200"
                                                color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                                onMouseEnter={() => setHover(currentRating)}
                                                onMouseLeave={() => setHover(0)}
                                            />
                                        </label>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Input Nama & Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
                                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#A86844] focus:border-[#A86844]" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#A86844] focus:border-[#A86844]" />
                            </div>
                        </div>

                        {/* Input Pesan */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Pesan Feedback</label>
                            <textarea name="message" id="message" rows="4" value={formData.message} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#A86844] focus:border-[#A86844] resize-none"></textarea>
                        </div>

                        {/* Tombol Submit */}
                        <div>
                            <button type="submit" className="w-full bg-[#3d2b1f] text-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-300">
                                Kirim Feedback
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default FeedbackForm;