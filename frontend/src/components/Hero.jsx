import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="pt-12 pb-20 px-6 relative overflow-hidden">

      <div className="absolute top-10 left-10 w-72 h-72 bg-red-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-20 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="flex justify-center relative">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-red-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-purple-500 rounded-full opacity-20 blur-xl"></div>

            <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
              <img
                src="/heroimage.png"
                alt="Sports Event"
                className="w-full rounded-2xl"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="inline-block px-4 py-2 bg-lime-300 rounded-full text-sm font-bold text-gray-800">
                JUNE 24TH
              </span>
              <span className="text-gray-600 font-medium">Sport Center</span>
            </div>

            <div>
              <h1 className="text-5xl md:text-6xl font-black leading-tight text-gray-900 mb-3">
                SPORTS
                <br />
                EVENT
              </h1>

              <div className="inline-block mt-4 px-4 py-2 bg-red-500 text-white font-extrabold text-lg rounded-lg shadow-lg transform hover:shadow-xl transition">
                ⚽ Elite Football Championship
              </div>
            </div>

            <p className="text-xl text-gray-600 font-semibold">
              Just sports, no hard feelings
            </p>

            <p className="text-gray-600 leading-relaxed text-base max-w-md">
              Join us for an incredible football experience. Compete, learn, and connect with passionate athletes from around the region.
            </p>

            <div className="flex gap-4 pt-4">
              <Link to="/events">
                <button className="px-8 py-3 bg-purple-600 text-white font-bold rounded-lg shadow-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-200 flex items-center gap-2">
                  Read More →
                </button>
              </Link>
              <Link to="/register">
                <button className="px-8 py-3 bg-red-500 text-white font-bold rounded-lg shadow-lg hover:bg-red-600 transform hover:scale-105 transition-all duration-200">
                  Join Now
                </button>
              </Link>
            </div>

            <div className="flex gap-8 pt-6 border-t border-gray-300">
              <div>
                <p className="text-2xl font-bold text-red-500">500+</p>
                <p className="text-sm text-gray-600">Participants</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-600">16+</p>
                <p className="text-sm text-gray-600">Teams</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">4.9★</p>
                <p className="text-sm text-gray-600">Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
