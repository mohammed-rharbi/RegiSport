import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../hooks/authContext'; 
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { user, logout } = useContext(AuthContext); 

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  
  const navigate = useNavigate()

  const handleLogout = () => {
    logout();
	navigate('/login')

  };

  if(!user){

    return navigate('/login')
  }

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen ? 'true' : 'false'}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg
                className={`hidden h-6 w-6 ${mobileMenuOpen ? 'block' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
             <h1 className='text-2xl font-bold text-white'>R.S</h1>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">

                <Link to={'/home'}className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" aria-current="home">
                Home
                </Link>
       
                <Link to={'/myEvents'}className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" aria-current="home">
                My Events
                </Link>

                <Link to={'/home'}className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" aria-current="home">
                Home Page
                </Link>

              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <div className="h-10 w-10 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-bold">
                    {user.userName[0]}
                  </div>
                  <p className='text-white text-center mt-2 ml-3'>{user.userName}</p>
                </button>
              </div>
            </div>
            <button
              className="ml-4 text-white bg-red-600 px-4 py-2 rounded-md hover:bg-red-500"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">
            Dashboard
          </a>
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
            Team
          </a>
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
            Projects
          </a>
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
}
