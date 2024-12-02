import React, { useContext } from 'react';
import { EventContext } from '../hooks/eventsContext';
import { Link } from 'react-router-dom';

export default function Home() {
  const { events } = useContext(EventContext);

  return (
    <div className="bg-gray-100 min-h-screen">


      <section className="relative bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 sm:py-32 lg:py-40 text-center">
          <h1 className="text-5xl font-extrabold sm:text-6xl tracking-tight animate-fade-in-down">
            Discover Events That Inspire
          </h1>
          <p className="mt-6 text-lg sm:text-xl opacity-90 max-w-3xl mx-auto animate-fade-in">
            Explore the best events near you. Book tickets, host events, and make memories that last a lifetime.
          </p>
          <div className="mt-10 flex justify-center gap-6">
            <button className="px-8 py-3 text-lg font-medium bg-white text-indigo-600 rounded-lg shadow-lg hover:bg-gray-100 transform transition-transform hover:scale-105">
              Browse Events
            </button>
            <button className="px-8 py-3 text-lg font-medium bg-purple-700 text-white rounded-lg shadow-lg hover:bg-purple-800 transform transition-transform hover:scale-105">
              Host an Event
            </button>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-700 via-indigo-600 to-transparent opacity-70"></div>
      </section>


      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <h2 className="text-4xl font-extrabold text-center text-gray-800">
            Upcoming Events
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Don’t miss out on the hottest events happening near you!
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {events.slice(0, 3).map((event) => (
              <div
                key={event._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                <img
                  src="https://via.placeholder.com/400x300"
                  alt={event.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800">{event.title}</h3>
                  <p className="mt-3 text-gray-600 line-clamp-2">{event.description}</p>
                  <Link to={`/event/page/${event._id}`}>
                    <button className="mt-6 px-6 py-2 text-indigo-600 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition-transform transform hover:scale-105">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <h2 className="text-4xl font-extrabold text-center text-gray-800">
            What People Are Saying
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Hear from our community about their event experiences.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="bg-white shadow-lg p-6 rounded-lg max-w-sm text-center">
              <p className="text-lg text-gray-600">
                "Attending events through this platform has been amazing! So easy to find and book."
              </p>
              <div className="mt-4">
                <p className="font-semibold text-gray-800">Sarah L.</p>
                <p className="text-gray-500">Event Enthusiast</p>
              </div>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg max-w-sm text-center">
              <p className="text-lg text-gray-600">
                "Hosting my first event was a breeze. Highly recommend it to anyone organizing!"
              </p>
              <div className="mt-4">
                <p className="font-semibold text-gray-800">John D.</p>
                <p className="text-gray-500">Event Organizer</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <footer className="bg-gradient-to-br from-indigo-600 to-purple-600 py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 text-center text-white">
          <p className="text-lg font-medium">© 2024 EventMaster. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
