import React from 'react'



export default function LandingPage() {

  return (

    <div className="bg-gray-100 min-h-screen">

    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-6 py-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to EventPro</h1>
        <p className="text-lg">Your gateway to amazing events and experiences.</p>
        <button className="mt-6 px-6 py-2 bg-white text-blue-600 font-semibold rounded-md hover:bg-blue-100">
          Get Started
        </button>
      </div>
    </header>


    <section className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Why Choose EventPro?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 shadow-md rounded-md">
          <h3 className="text-xl font-semibold mb-2">Exclusive Events</h3>
          <p>Discover events tailored just for you, from concerts to workshops.</p>
        </div>
        <div className="bg-white p-6 shadow-md rounded-md">
          <h3 className="text-xl font-semibold mb-2">Easy Bookings</h3>
          <p>Book your spot in just a few clicks with our user-friendly platform.</p>
        </div>
        <div className="bg-white p-6 shadow-md rounded-md">
          <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
          <p>Stay updated with the latest changes and announcements.</p>
        </div>
      </div>
    </section>


    <section className="bg-blue-600 text-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Join the Community Today!</h2>
        <p className="mb-6">Sign up now to explore and enjoy amazing events.</p>
        <button className="px-6 py-2 bg-white text-blue-600 font-semibold rounded-md hover:bg-blue-100">
          Sign Up
        </button>
      </div>
    </section>


    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 EventPro. All rights reserved.</p>
      </div>
    </footer>
  </div>

  )
}
