import React, { useState, useContext, useEffect } from 'react';
import { EventContext } from '../hooks/eventsContext';
import { AuthContext } from '../hooks/authContext';
import { useParams, useNavigate } from 'react-router-dom';

export default function EventPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);
  const [timeLeft, setTimeLeft] = useState({});
  const { getEventById, registerForEvent } = useContext(EventContext);
  const { user } = useContext(AuthContext);

  const getEvent = async () => {
    try {
      const res = await getEventById(id);
      setEvent(res);
      // Check if user is already registered
      if (user && res.participants) {
        setIsRegistered(res.participants.some(p => p.id === user.id));
      }
    } catch (error) {
      console.error('Error fetching event:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEvent();
  }, [id]);

  // Countdown Timer
  useEffect(() => {
    if (!event?.date) return;

    const calculateTimeLeft = () => {
      const eventDate = new Date(event.date);
      const now = new Date();
      const difference = eventDate - now;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return {};
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [event]);

  const handleRegister = async () => {
    if (!user) {
      navigate('/login');
      return;
    }
    try {
      await registerForEvent(id);
      setIsRegistered(true);
      getEvent(); // Refresh event data
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Check out this event: ${event.title}`;

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    };

    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-dark flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-xl font-semibold">Loading event...</p>
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-dark to-background">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={'/fake.jpg'}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-xl transition-all duration-300 hover:scale-110 group z-20"
        >
          <svg className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>

        {/* Event Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-7xl mx-auto">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/20 backdrop-blur-md rounded-full border border-primary/30">
              <span className="text-primary font-bold text-sm tracking-wide">🎯 UPCOMING EVENT</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-2xl leading-tight">
              {event.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-white/90">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-semibold">{event.date}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-semibold">{event.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Countdown Timer */}
        {Object.keys(timeLeft).length > 0 && (
          <div className="mb-12 -mt-20 relative z-10">
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-center text-white text-xl font-bold mb-6">Event Starts In</h3>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Minutes', value: timeLeft.minutes },
                  { label: 'Seconds', value: timeLeft.seconds },
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="bg-gradient-to-br from-primary to-secondary text-white text-4xl md:text-5xl font-black py-4 rounded-xl mb-2">
                      {String(item.value || 0).padStart(2, '0')}
                    </div>
                    <p className="text-gray-400 text-sm font-semibold uppercase tracking-wide">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

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

            {/* Event Features */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-secondary/20 rounded-lg">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-black text-white">What to Expect</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: '🏆', label: 'Competition', desc: 'High-level athletic competition' },
                  { icon: '🎯', label: 'Professional', desc: 'Expert event organization' },
                  { icon: '🌟', label: 'Premium', desc: 'Top-tier facilities and amenities' },
                  { icon: '🤝', label: 'Community', desc: 'Network with fellow athletes' }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                    <span className="text-3xl">{feature.icon}</span>
                    <div>
                      <p className="font-bold text-white">{feature.label}</p>
                      <p className="text-sm text-gray-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Share Section */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-black text-white mb-4">Share This Event</h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => handleShare('facebook')}
                  className="flex items-center gap-2 px-6 py-3 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white font-bold rounded-xl transition-all hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="flex items-center gap-2 px-6 py-3 bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white font-bold rounded-xl transition-all hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                  Twitter
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="flex items-center gap-2 px-6 py-3 bg-[#0077b5] hover:bg-[#0077b5]/90 text-white font-bold rounded-xl transition-all hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Registration */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl sticky top-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">
                  {isRegistered ? 'You\'re Registered!' : 'Register Now'}
                </h3>
                <p className="text-gray-400">
                  {isRegistered
                    ? 'You\'re all set for this event'
                    : 'Secure your spot at this event'}
                </p>
              </div>

              {/* Stats */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-gray-300 font-medium">Participants</span>
                  </div>
                  <span className="text-white font-bold">{event.participants?.length || 0}</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300 font-medium">Entry Fee</span>
                  </div>
                  <span className="text-white font-bold">Free</span>
                </div>
              </div>

              {/* Register Button */}
              {isRegistered ? (
                <div className="space-y-3">
                  <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-center">
                    <svg className="w-8 h-8 text-green-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-green-400 font-bold">Registration Confirmed</p>
                  </div>
                  <button
                    onClick={() => navigate(`/events/${id}/details`)}
                    className="w-full px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all hover:scale-105"
                  >
                    View Event Details
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleRegister}
                  className="w-full px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white font-black rounded-xl shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>{user ? 'Register for Event' : 'Login to Register'}</span>
                </button>
              )}

              <p className="text-center text-gray-500 text-sm mt-4">
                {user ? '✓ Free registration' : 'Login required to register'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
