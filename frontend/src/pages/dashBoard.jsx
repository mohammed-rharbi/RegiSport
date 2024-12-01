import React from 'react';
import DashCard from '../components/ui/dashCard';

export default function DashBoard() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col p-6">

      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-indigo-500">Manager Dashboard</h1>
        <p className="text-gray-400 mt-2">Manage Events,  users, and more efficiently from one place.</p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <DashCard name={'Users'} title="Movies" count="120" description="Total movies in the database" icon="🎥" />
        <DashCard name={'Events'} title="Reservations" count="456" description="Total reservations made" icon="🪑" />
        <DashCard name={'Statistics'} title="Users" count="89" description="Registered users on the platform" icon="👤" />
      </div>


      <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
        <h2 className="text-3xl font-semibold text-indigo-400 mb-4">Overview</h2>
        <p className="text-gray-400 mb-6">
          Gain insights into recent activity, analytics, and stats to help you make data-driven decisions.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-medium text-indigo-300 mb-2">Active Reservations</h3>
            <p className="text-gray-300 text-sm">35 active reservations for today’s events.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-medium text-indigo-300 mb-2">Upcoming Movies</h3>
            <p className="text-gray-300 text-sm">12 new movies scheduled for next week.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-medium text-indigo-300 mb-2">User Growth</h3>
            <p className="text-gray-300 text-sm">We have gained 15% new users this month.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
