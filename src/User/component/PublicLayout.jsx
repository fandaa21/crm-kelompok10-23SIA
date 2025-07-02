import React from 'react';
import { Outlet } from 'react-router-dom'; // 1. Impor Outlet dari React Router
import HeaderUserWeb from './HeaderUserWeb'; // 2. Impor Header publik Anda
import FooterUserWeb from './FooterUserWeb'; // 3. Impor Footer publik Anda

const PublicLayout = () => {
  return (
    <div>
      <HeaderUserWeb />
      <main>
        <Outlet />
      </main>
      <FooterUserWeb />
    </div>
  );
};

export default PublicLayout;