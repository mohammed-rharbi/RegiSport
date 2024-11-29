import React from 'react';

export default function Home() {
  return (
    <div className="bg-gray-50">

      <section className="relative bg-indigo-600 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 sm:px-12 sm:py-32 lg:px-16 lg:py-40">
          <div className="text-center text-white">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Find Your Perfect Event
            </h1>
            <p className="mt-4 text-lg sm:text-xl">
              Discover events near you, book tickets, and stay updated on the latest happenings!
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-100">
                Browse Events
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-800">
                Host an Event
              </button>
            </div>
          </div>
        </div>
      </section>


      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <h2 className="text-3xl font-extrabold text-center text-gray-900">Upcoming Events</h2>
          <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {/* Event Card 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Event 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Concert in the Park</h3>
                <p className="mt-2 text-gray-600">Join us for a beautiful evening of live music and fun vibes in the park!</p>
                <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-100">
                  View Details
                </button>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Event 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Tech Conference 2024</h3>
                <p className="mt-2 text-gray-600">A premier conference featuring leading speakers in technology and innovation.</p>
                <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-100">
                  View Details
                </button>
              </div>
            </div>


            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Event 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Charity Gala</h3>
                <p className="mt-2 text-gray-600">An elegant evening to raise funds for a worthy cause.</p>
                <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-100">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <h2 className="text-3xl font-extrabold text-center text-gray-900">What Our Users Say</h2>
          <div className="mt-8 flex justify-center gap-8">
            <div className="bg-white shadow-lg p-6 rounded-lg max-w-xs text-center">
              <p className="text-lg text-gray-600">"Attending the events through this platform has been amazing! It's so easy to find the best ones."</p>
              <div className="mt-4">
                <p className="font-semibold text-gray-800">Sarah L.</p>
                <p className="text-gray-500">Event Enthusiast</p>
              </div>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg max-w-xs text-center">
              <p className="text-lg text-gray-600">"Hosting an event was a breeze with this platform. Highly recommend it for any organizer!"</p>
              <div className="mt-4">
                <p className="font-semibold text-gray-800">John D.</p>
                <p className="text-gray-500">Event Organizer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-indigo-600 py-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 text-center text-white">
          <p>© 2024 EventMaster. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
