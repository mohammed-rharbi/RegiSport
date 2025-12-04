import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Trophy, Star, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-28 pb-20 px-6 relative overflow-hidden bg-gradient-to-b from-gray-900 via-[#0f172a] to-gray-900">

      <div className="absolute top-10 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="flex justify-center relative order-2 lg:order-1">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-primary/20 rounded-full blur-xl"></div>

            <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
              <img
                src="/hero.webp"
                alt="Sports Event"
                className="w-full rounded-2xl"
              />
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 border border-secondary/40 rounded-full text-sm font-bold text-secondary">
                <Calendar className="w-4 h-4" />
                JUNE 24TH
              </span>
              <span className="flex items-center gap-2 text-gray-400 font-medium">
                <MapPin className="w-4 h-4" />
                Sport Center
              </span>
            </div>

            <div>
              <h1 className="text-5xl md:text-6xl font-black leading-tight text-white mb-3">
                SPORTS
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">EVENT</span>
              </h1>

              <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-gradient-to-r from-secondary/20 to-primary/20 border border-secondary/40 text-white font-extrabold text-lg rounded-lg shadow-lg">
                <Trophy className="w-5 h-5" />
                Elite Football Championship
              </div>
            </div>

            <p className="text-xl text-gray-300 font-semibold">
              Just sports, no hard feelings
            </p>

            <p className="text-gray-400 leading-relaxed text-base max-w-md">
              Join us for an incredible football experience. Compete, learn, and connect with passionate athletes from around the region.
            </p>

            <div className="flex gap-4 pt-4">
              <Link to="/events">
                <button className="px-8 py-3 bg-gradient-to-r from-secondary to-primary text-gray-900 font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2">
                  Read More
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link to="/register">
                <button className="px-8 py-3 bg-white/10 border border-white/20 text-white font-bold rounded-lg shadow-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-200">
                  Join Now
                </button>
              </Link>
            </div>

            <div className="flex gap-8 pt-6 border-t border-gray-700/50">
              <div>
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">500+</p>
                <p className="text-sm text-gray-400 flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  Participants
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">16+</p>
                <p className="text-sm text-gray-400 flex items-center gap-1">
                  <Trophy className="w-4 h-4" />
                  Teams
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center gap-1">
                  4.9
                  <Star className="w-5 h-5 fill-current" />
                </p>
                <p className="text-sm text-gray-400">Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
