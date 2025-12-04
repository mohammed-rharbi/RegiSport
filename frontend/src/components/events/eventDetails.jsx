import React, { useContext, useEffect, useState, useRef } from 'react';
import { EventContext } from '../../hooks/eventsContext';
import { useParams, useNavigate } from 'react-router-dom';
import html2pdf from 'html2pdf.js';

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const { getEventById } = useContext(EventContext);
  const pageRef = useRef();

  const getEvent = async () => {
    try {
      const res = await getEventById(id);
      setEvent(res);
    } catch (error) {
      console.error('Error fetching event:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEvent();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-dark flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-xl font-semibold">Loading event details...</p>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-dark flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-3xl font-black text-white mb-4">Event Not Found</h2>
          <p className="text-gray-400 mb-8">The event you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/events')}
            className="px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all"
          >
            Browse Events
          </button>
        </div>
      </div>
    );
  }

  const generatePDF = () => {
    const element = pageRef.current;
    const options = {
      margin: 0.5,
      filename: `${event.title.replace(/\s+/g, '_')}_Event.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };
    html2pdf().set(options).from(element).save();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-dark to-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={event.image}
          alt={event.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>

        {/* Floating Action Buttons */}
        <div className="absolute top-6 right-6 flex gap-3 z-20">
          <button
            onClick={() => navigate(-1)}
            className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-xl transition-all duration-300 hover:scale-110 group"
            title="Go Back"
          >
            <svg className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <button
            onClick={generatePDF}
            className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-xl transition-all duration-300 hover:scale-110 group"
            title="Download PDF"
          >
            <svg className="w-6 h-6 text-white group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </button>
        </div>

        {/* Event Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/20 backdrop-blur-md rounded-full border border-primary/30">
              <span className="text-primary font-bold text-sm tracking-wide">📅 EVENT DETAILS</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-2xl leading-tight">
              {event.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12" ref={pageRef}>
        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 -mt-20 relative z-10">
          <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/20 rounded-xl">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm font-medium">Date</p>
                <p className="text-white text-lg font-bold">{event.date}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-secondary/20 rounded-xl">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm font-medium">Location</p>
                <p className="text-white text-lg font-bold">{event.location}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-500/20 rounded-xl">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm font-medium">Participants</p>
                <p className="text-white text-lg font-bold">{event.participants?.length || 0} Registered</p>
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Event Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-black text-white">About This Event</h2>
              </div>
              <p className="text-lg leading-relaxed text-gray-300">
                {event.description}
              </p>
            </div>

            {/* Event Highlights */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-secondary/20 rounded-lg">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-black text-white">Event Highlights</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: '🏆', label: 'Competitive', desc: 'Professional level competition' },
                  { icon: '🎯', label: 'Organized', desc: 'Well-structured event flow' },
                  { icon: '🌟', label: 'Premium', desc: 'Top-tier facilities' },
                  { icon: '🤝', label: 'Networking', desc: 'Connect with athletes' }
                ].map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                    <span className="text-3xl">{highlight.icon}</span>
                    <div>
                      <p className="font-bold text-white">{highlight.label}</p>
                      <p className="text-sm text-gray-400">{highlight.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Participants */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-white/10 p-6 rounded-2xl sticky top-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-black text-white">Participants</h2>
                  <p className="text-sm text-gray-400">
                    {event.participants?.length || 0} registered athletes
                  </p>
                </div>
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>

              <div className="space-y-3 max-h-[600px] overflow-y-auto custom-scrollbar">
                {event.participants && event.participants.length > 0 ? (
                  event.participants.map((user, index) => (
                    <div
                      key={user.id || index}
                      className="bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/30 rounded-xl p-4 transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="h-12 w-12 bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center rounded-full text-lg font-bold shadow-lg group-hover:scale-110 transition-transform">
                            {user.userName?.[0]?.toUpperCase() || 'U'}
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-gray-900 rounded-full"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-base font-bold text-white truncate group-hover:text-primary transition-colors">
                            {user.userName}
                          </p>
                          <p className="text-sm text-gray-400 truncate">{user.email}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <div className="text-4xl mb-3">👥</div>
                    <p className="text-gray-400">No participants yet</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={generatePDF}
            className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-black rounded-xl shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
          >
            <svg className="w-6 h-6 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Download Event Details</span>
          </button>
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Events</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(198, 255, 0, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(198, 255, 0, 0.5);
        }
      `}</style>
    </div>
  );
}
