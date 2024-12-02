import React, { useContext } from 'react';
import { EventContext } from '../hooks/eventsContext';
import { Link } from 'react-router-dom';

export default function UpcomingEvents() {
  const { events } = useContext(EventContext);


  
  if (events.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-50 via-pink-100 to-purple-200">
        <p className="text-xl font-semibold text-gray-700">No upcoming events available.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-50 via-pink-100 to-purple-200 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-12 text-center">Upcoming Events</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl group"
            >
              <div className="relative">
                <img
                  src={event.image || 'https://via.placeholder.com/400x300'}
                  alt={event.title}
                  className="w-full h-56 object-cover rounded-t-2xl group-hover:opacity-90 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 z-10">
                  <h2 className="text-2xl font-bold text-white mb-1">{event.title}</h2>
                  <p className="text-lg text-gray-200">{new Date(event.date).toDateString()}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 line-clamp-4 text-base mb-6">{event.description}</p>

                <Link to={`/event/page/${event._id}`}>
                <button className="w-full py-3 px-8 bg-gradient-to-r from-teal-600 to-pink-500 text-white font-semibold rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl focus:outline-none">
                  View Details
                </button>
                </Link>
        
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
