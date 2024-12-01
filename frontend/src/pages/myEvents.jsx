import React, { useEffect, useState, useContext } from 'react';
import { EventContext } from '../hooks/eventsContext';
import { AuthContext } from '../hooks/authContext';

export default function MyEvents() {

  const [events, setEvents] = useState([]);

  const { getUserEvents } = useContext(EventContext);

  const { user } = useContext(AuthContext);




  const fetchEvents = async () => {
    const userEvents = await getUserEvents(user._id); 
    setEvents(userEvents);
  };

  console.log(user._id);
  

  useEffect(() => {

    fetchEvents();

  }, []);

  if (events.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-600 text-lg font-semibold">You have no events yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-4xl font-semibold text-gray-800 mb-8">My Events</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={event.image || 'https://via.placeholder.com/400x300'}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="absolute bottom-4 left-4">
                  <h2 className="text-lg font-semibold text-white">{event.title}</h2>
                  <p className="text-sm text-gray-200">{event.date}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 line-clamp-3">{event.description}</p>
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-all">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
