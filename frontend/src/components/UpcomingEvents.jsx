import { useContext } from 'react';
import { EventContext } from '../hooks/eventsContext';
import { Link } from 'react-router-dom';

export default function UpcomingEvents() {
  const { events } = useContext(EventContext);

  return (
    <section className="py-20 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-inner mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-sm font-bold text-gray-300 tracking-wide uppercase">Don&apos;t Miss Out</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Events</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join the action and compete in the hottest sports events happening near you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.slice(0, 3).map((event, idx) => (
            <div
              key={event._id}
              className="group bg-gray-900/40 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-white/10 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
                <img
                  src="https://via.placeholder.com/400x300"
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20 bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  #{idx + 1} Trending
                </div>
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="px-3 py-1 bg-secondary text-primary text-xs font-bold rounded-lg shadow-lg">
                    {new Date(event.date).toLocaleDateString()}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-400 line-clamp-2 mb-6 text-sm leading-relaxed">
                  {event.description}
                </p>

                <Link to={`/event/page/${event._id}`}>
                  <button className="w-full px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group-hover:border-secondary/50 group-hover:text-secondary">
                    View Details
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/events">
            <button className="px-8 py-4 bg-secondary text-primary font-bold rounded-2xl shadow-[0_0_20px_rgba(198,255,0,0.3)] hover:shadow-[0_0_30px_rgba(198,255,0,0.5)] hover:-translate-y-1 transition-all duration-300">
              View All Events
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
