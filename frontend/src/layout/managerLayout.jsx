import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/ui/sideBar'


export default function ManagerLayout() {

  return (

    
    <div className="grid grid-cols-12  min-h-screen">
    
    <div className='col-span-2 h-full w-full text-white'>
    <SideBar />
    </div>
    
      <main className="col-span-10 w-full p-3 bg-gray-900">
        <Outlet />
      </main>
    </div>
  )
}
