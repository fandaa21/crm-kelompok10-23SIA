import React from 'react'

const HeaderUser = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-[#A86844]">Dashboard Pengguna</h1>
      <div className="flex items-center space-x-3">
        <img
          src="https://i.pravatar.cc/40?u=user"
          alt="User Avatar"
          className="w-10 h-10 rounded-full border border-gray-200"
        />
        <span className="text-gray-700 font-medium">Users</span>
      </div>
    </header>
  )
}

export default HeaderUser
