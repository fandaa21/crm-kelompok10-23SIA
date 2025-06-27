import React from 'react';

const FooterUserWeb = () => {
  return (
    <footer className="bg-[#4e3b2f] text-[#f8f2e9] px-6 py-8 mt-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-xl font-bold mb-3">Aryaduta Hotel</h4>
          <p className="text-sm">Nikmati pengalaman menginap terbaik dengan layanan premium dan suasana mewah.</p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-3">Kontak</h4>
          <p className="text-sm">Email: Disenatalis@Email.com</p>
          <p className="text-sm">Telepon: +62 123 456 789</p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-3">Ikuti Kami</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#A86844]">Facebook</a>
            <a href="#" className="hover:text-[#A86844]">Instagram</a>
            <a href="#" className="hover:text-[#A86844]">Twitter</a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-[#f8f2e9]/30 pt-4 text-center text-sm">
        © 2025 Aryaduta Hotel. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterUserWeb;
