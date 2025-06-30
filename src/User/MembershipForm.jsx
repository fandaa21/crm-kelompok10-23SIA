import React, { useState } from 'react';

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted:\n${JSON.stringify(formData, null, 2)}`);
    // Kirim ke server jika diperlukan
  };

  return (
    <div className="bg-[#fdf3e7] py-12 px-4 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-2">Form Membership</h2>
        <p className="text-sm text-gray-600 mb-6">
          Jangan ragu untuk meminta konsultasi atau bertanya langsung saja hubungi kami
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-sm mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="first name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-full bg-[#f6f6f6] focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold text-sm mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="last name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-full bg-[#f6f6f6] focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold text-sm mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Hello@email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-full bg-[#f6f6f6] focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold text-sm mb-1">Address</label>
              <input
                type="text"
                name="address"
                placeholder="Jalan"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-full bg-[#f6f6f6] focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block font-semibold text-sm mb-1">Pesan</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Ketik pesan disini..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-[#f6f6f6] focus:outline-none resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#3d2b1f] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#2c1f15] transition"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default MembershipForm;