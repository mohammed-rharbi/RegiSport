import { Link } from 'react-router-dom';
import { Users, Target, TrendingUp, Star, Calendar, User, BarChart3, CheckCircle } from 'lucide-react';
import DashCard from '../components/ui/dashCard';

export default function DashBoard() {
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#0f172a] to-gray-900 relative overflow-hidden">

      <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 p-6 md:p-10 max-w-7xl mx-auto">

        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
                Manager <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Dashboard</span>
              </h1>
              <p className="text-gray-400 text-lg">Welcome back! Here&apos;s what&apos;s happening today.</p>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm">{dateStr}</p>
              <p className="text-2xl font-bold text-white">{timeStr}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <DashCard
            icon={Users}
            number="89"
            label="Total Users"
            trend="up"
            trendValue="+12%"
          />
          <DashCard
            icon={Target}
            number="120"
            label="Total Events"
            trend="up"
            trendValue="+8%"
          />
          <DashCard
            icon={TrendingUp}
            number="456"
            label="Registrations"
            trend="up"
            trendValue="+23%"
          />
          <DashCard
            icon={Star}
            number="4.8"
            label="Avg Rating"
            trend="up"
            trendValue="+0.3"
          />
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-black text-white mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/events">
              <button className="w-full group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-secondary/50 transition-all duration-300 text-left overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-primary/0 group-hover:from-secondary/10 group-hover:to-primary/10 transition-all duration-500"></div>
                <div className="relative z-10">
                  <Calendar className="w-10 h-10 text-secondary mb-3" strokeWidth={2} />
                  <h3 className="text-xl font-bold text-white mb-2">Manage Events</h3>
                  <p className="text-gray-400 text-sm">Create, edit, and manage all events</p>
                </div>
              </button>
            </Link>

            <Link to="/users">
              <button className="w-full group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-secondary/50 transition-all duration-300 text-left overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-primary/0 group-hover:from-secondary/10 group-hover:to-primary/10 transition-all duration-500"></div>
                <div className="relative z-10">
                  <User className="w-10 h-10 text-secondary mb-3" strokeWidth={2} />
                  <h3 className="text-xl font-bold text-white mb-2">Manage Users</h3>
                  <p className="text-gray-400 text-sm">View and manage user accounts</p>
                </div>
              </button>
            </Link>

            <button className="w-full group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-secondary/50 transition-all duration-300 text-left overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-primary/0 group-hover:from-secondary/10 group-hover:to-primary/10 transition-all duration-500"></div>
              <div className="relative z-10">
                <BarChart3 className="w-10 h-10 text-secondary mb-3" strokeWidth={2} />
                <h3 className="text-xl font-bold text-white mb-2">View Analytics</h3>
                <p className="text-gray-400 text-sm">Check detailed statistics and reports</p>
              </div>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 shadow-xl">
            <h2 className="text-2xl font-black text-white mb-6">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 flex-shrink-0">
                  ✓
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">New event created</p>
                  <p className="text-gray-400 text-sm">Football Championship 2024</p>
                  <p className="text-gray-500 text-xs mt-1">2 hours ago</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 flex-shrink-0">
                  👤
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">New user registered</p>
                  <p className="text-gray-400 text-sm">John Doe joined the platform</p>
                  <p className="text-gray-500 text-xs mt-1">5 hours ago</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 flex-shrink-0">
                  📊
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">Event registration spike</p>
                  <p className="text-gray-400 text-sm">35 new registrations today</p>
                  <p className="text-gray-500 text-xs mt-1">1 day ago</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 shadow-xl">
            <h2 className="text-2xl font-black text-white mb-6">System Overview</h2>
            <div className="space-y-4">

              <div className="p-4 bg-white/5 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Active Events</span>
                  <span className="text-white font-bold">35</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-secondary to-primary h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>

              <div className="p-4 bg-white/5 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">User Engagement</span>
                  <span className="text-white font-bold">85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-secondary to-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>

              <div className="p-4 bg-white/5 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">System Performance</span>
                  <span className="text-white font-bold">92%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-secondary to-primary h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/20 rounded-xl">
                <p className="text-white font-medium mb-1">🎉 Great job!</p>
                <p className="text-gray-300 text-sm">Your platform is performing excellently. Keep up the good work!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
