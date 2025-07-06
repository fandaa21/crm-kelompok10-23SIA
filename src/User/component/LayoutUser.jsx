import React from 'react'
import HeaderUser from './HeaderUser'
import SidebarUser from './SidebarUser'
import { Outlet } from 'react-router-dom'

const LayoutUser = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <SidebarUser />
      <div className="flex-1 flex flex-col">
        <HeaderUser />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default LayoutUser