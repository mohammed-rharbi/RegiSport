import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/ui/sideBar';

export default function ManagerLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:grid md:grid-cols-12">

      <div className="md:hidden flex justify-between items-center p-4 bg-gray-800 text-white">
        <h1 className="text-xl font-bold">Manager Dashboard</h1>
        <button
          onClick={toggleSidebar}
          className="p-2 bg-blue-500 rounded-md hover:bg-blue-600"
        >
          {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
        </button>
      </div>


      <div className={`${ isSidebarOpen ? 'block' : 'hidden'} md:block col-span-2 bg-gray-800 z-20 text-white transition-all duration-300`}>
        <SideBar />
      </div>


      <main className="col-span-10  p-4 bg-gray-900">
        <Outlet />
      </main>
    </div>
  );
}
