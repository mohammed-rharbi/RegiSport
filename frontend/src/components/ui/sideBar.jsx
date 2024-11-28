import React, { useContext } from 'react'
import { AuthContext } from '../../hooks/authContext'
import { Link, useNavigate } from 'react-router-dom';


export default function SideBar() {


    const {logout , user} = useContext(AuthContext);

    const navigate = useNavigate()


    const handleLogout = ()=>{

        logout();
        navigate('/login');
    }

  return (
    <div className="fixed w-[16rem] h-full bg-gradient-to-r from-gray-800 to-gray-700 text-white p-6 flex flex-col shadow-lg ">

      <div className="flex justify-center items-center mb-10">
        <h2 className="text-3xl font-extrabold text-blue-400 uppercase tracking-wide">Manager Dashboard</h2>
      </div>


      <ul className="flex-1">

        <li className="mb-5 hover:bg-blue-600 transition-all duration-300 rounded-lg shadow-md hover:shadow-xl">
        <Link to={'/users'} className="block text-lg py-2 px-4 hover:text-white">Users</Link>
        </li>
        
        <li className="mb-5 hover:bg-blue-600 transition-all duration-300 rounded-lg shadow-md hover:shadow-xl">
        <Link to={'/events'} className="block text-lg py-2 px-4 hover:text-white">Events</Link>
        </li>
        
      </ul>


      <div className="mt-auto mb-6">
        <button onClick={handleLogout} className="w-full bg-red-600 text-white py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-red-700 hover:shadow-lg transition-all duration-300">
          Logout
        </button>
      </div>
    </div>
  )
}
