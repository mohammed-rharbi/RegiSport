import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function CTASection() {
  const [particles, setParticles] = useState([]);
  const [stats] = useState([
    { value: '10K+', label: 'Active Athletes' },
    { value: '500+', label: 'Events Hosted' },
    { value: '50+', label: 'Sports Categories' },
  ]);

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 8 + 4,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary bg-[length:200%_200%] animate-gradient z-0"></div>

      {/* Overlay Pattern */}
      <div className="absolute inset-0 opacity-10 z-0" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white/20 backdrop-blur-sm animate-float"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        ></div>
      ))}

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="backdrop-blur-md bg-white/10 px-8 py-4 rounded-2xl border border-white/20 transform hover:scale-110 transition-all duration-300 hover:bg-white/20"
            >
              <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-sm md:text-base text-white/80 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main CTA Content */}
        <div className="text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
            <span className="text-white font-bold text-sm tracking-wide">✨ LIMITED TIME OFFER</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl leading-tight">
            Ready to Elevate Your
            <br />
            <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Sports Journey?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-12 font-medium max-w-3xl mx-auto leading-relaxed">
            Join thousands of athletes, teams, and sports enthusiasts. Register for events,
            track your progress, and connect with your community.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/register" className="group">
              <button className="relative px-10 py-5 bg-white text-gray-900 font-black rounded-2xl shadow-2xl hover:shadow-white/20 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 text-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-3">
                  <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">🚀</span>
                  <span>Get Started Free</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </button>
            </Link>

            <Link to="/events" className="group">
              <button className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-gray-900 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 text-lg backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🏆</span>
                  <span>Browse Events</span>
                </div>
              </button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Free forever plan</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
            opacity: 0.3;
          }
          75% {
            transform: translateY(-20px) translateX(-20px);
            opacity: 0.6;
          }
        }
        
        .animate-gradient {
          animation: gradient 8s ease infinite;
        }
        
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  );
}
