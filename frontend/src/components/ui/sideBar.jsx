import { useContext } from 'react';
import { AuthContext } from '../../hooks/authContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, Target, Settings, HelpCircle, LogOut } from 'lucide-react';

export default function SideBar() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/dash', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/users', label: 'Users', icon: Users },
    { path: '/events', label: 'Events', icon: Target },
  ];

  return (
    <div className="fixed w-72 h-full bg-gradient-to-b from-gray-900 via-[#0f172a] to-gray-900 border-r border-gray-700/50 flex flex-col shadow-2xl">

      {/* Animated Background */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative z-10 flex flex-col h-full">

        {/* Logo/Brand */}
        <div className="p-6 mb-6">
          <Link to="/dash" className="block">
            <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-purple-500 mb-2">
              RegiSport
            </h2>
            <p className="text-sm text-gray-400 font-medium">Manager Portal</p>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4">
          <ul className="space-y-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`group relative flex items - center gap - 4 px - 5 py - 4 rounded - 2xl transition - all duration - 300 ${isActive(item.path)
                        ? 'bg-gradient-to-r from-secondary/20 to-primary/20 border border-secondary/40 text-white shadow-lg shadow-secondary/20'
                        : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-gray-700/50'
                      } `}
                  >
                    {/* Active indicator */}
                    {isActive(item.path) && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-gradient-to-b from-secondary via-primary to-purple-500 rounded-r-full shadow-lg shadow-secondary/50"></div>
                    )}

                    {/* Icon */}
                    <Icon
                      className={`transition - all duration - 300 ${isActive(item.path)
                          ? 'w-6 h-6 scale-110 drop-shadow-[0_0_10px_rgba(163,230,53,0.6)]'
                          : 'w-6 h-6 group-hover:scale-110'
                        } `}
                      strokeWidth={2.5}
                    />

                    {/* Label */}
                    <span className={`font - bold text - lg ${isActive(item.path) ? 'text-white' : ''
                      } `}>
                      {item.label}
                    </span>

                    {/* Glow effect on hover */}
                    {!isActive(item.path) && (
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 to-primary/0 group-hover:from-secondary/10 group-hover:to-primary/10 rounded-2xl transition-all duration-300"></div>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Divider */}
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent"></div>

          {/* Additional Links */}
          <div className="space-y-2">
            <Link to="/settings" className="flex items-center gap-3 px-5 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all">
              <Settings className="w-5 h-5" strokeWidth={2} />
              <span className="text-sm font-medium">Settings</span>
            </Link>
            <Link to="/help" className="flex items-center gap-3 px-5 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all">
              <HelpCircle className="w-5 h-5" strokeWidth={2} />
              <span className="text-sm font-medium">Help & Support</span>
            </Link>
          </div>
        </nav>

        {/* User Info Card */}
        <div className="px-4 mb-4">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-4 hover:border-secondary/30 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-full flex items-center justify-center text-xl font-black text-white border-2 border-secondary/20">
                  M
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900"></div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-black text-white truncate">Manager</p>
                <p className="text-xs text-gray-400 truncate">admin@regisport.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <div className="p-4">
          <button
            onClick={handleLogout}
            className="w-full group relative px-5 py-4 bg-gradient-to-r from-red-500/20 to-red-600/20 hover:from-red-500 hover:to-red-600 border border-red-500/30 hover:border-red-500 text-red-400 hover:text-white font-black rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden shadow-lg hover:shadow-red-500/20"
          >
            <LogOut className="relative z-10 w-5 h-5" strokeWidth={2.5} />
            <span className="relative z-10">Logout</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </div>
  );
}
