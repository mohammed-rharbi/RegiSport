import React, { useContext, useEffect, useState } from 'react';
import CreateEvent from './createEvent';
import { EventContext } from '../../hooks/eventsContext';

export default function ManageEvents() {
  const [isOpen, setIsOpen] = useState(false);
  const { events, getEvents } = useContext(EventContext);


  const fakeImage = 'https://images.pexels.com/photos/2897462/pexels-photo-2897462.jpeg?auto=compress&cs=tinysrgb&w=600';

  
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  return (
    <>

      <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">

        <header className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 shadow-md flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-extrabold">Manage Events Dashboard</h1>
            <p className="text-gray-200">Streamline your event management effortlessly.</p>
          </div>
          <button
            onClick={toggleModal}
            className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-6 py-3 rounded shadow-md"
          >
            + New Event
          </button>
        </header>


        <main className="flex-1 p-6">
          <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="relative">
                    
                  <img
                    src={fakeImage || event.image}
                    alt={event.title}
                    className="w-full h-40 object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Featured
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white">{event.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">
                    Location: <span className="text-gray-300">{event.location}</span>
                  </p>
                  <p className="text-sm text-gray-400">
                    Date: <span className="text-gray-300">{event.date}</span>
                  </p>
                  <p className="mt-4 text-sm text-gray-300 leading-relaxed">{event.description}</p>
                </div>
                <div className="p-4 bg-gray-700 flex justify-between items-center">
                  <button className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded shadow">
                    View Details
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#e8eaed">
                      <path d="M186.67-186.67H235L680-631l-48.33-48.33-445 444.33v48.33Z" />
                    </svg>
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#e8eaed">
                      <path d="M267.33-120q-27.5 0-47.08-19.58-19.58-19.59-19.58-47.09V-740H160v-66.67h192V-840h256v33.33h192V-740h-40.67v553.33q0 27-19.83 46.84Q719.67-120 692.67-120H267.33Z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {isOpen && <CreateEvent toggleModal={toggleModal} />}
    </>
  );
}
