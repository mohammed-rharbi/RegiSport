import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../hooks/authContext';
import { useNavigate, Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const authenticatedNavLinks = [
    { label: 'Home', path: '/home', icon: '🏠' },
    { label: 'My Events', path: '/myEvents', icon: '📋' },
    { label: 'Upcoming', path: '/commingEvents', icon: '🎯' },
  ];

  const publicNavLinks = [
    { label: 'Home', path: '/', icon: '🏠' },
    { label: 'Events', path: '#events', icon: '🎯' },
    { label: 'About', path: '#about', icon: 'ℹ️' },
  ];

  const navLinks = user ? authenticatedNavLinks : publicNavLinks;

  const isActive = (path) => {
    if (path.startsWith('#')) return false;
    return location.pathname === path;
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 top-0 start-0 transition-all duration-500 ${scrolled
          ? 'bg-[#0f172a]/80 backdrop-blur-xl border-b border-white/5 shadow-lg py-3'
          : 'bg-transparent border-b border-transparent py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            <div className="flex-shrink-0">
              <Link to={user ? "/home" : "/"} className="group flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary rounded-xl blur-md opacity-40 group-hover:opacity-70 transition duration-500"></div>
                </div>
                <span className="text-2xl font-black text-white tracking-tight">
                  Regi<span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-lime-400">Sport</span>
                </span>
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-2 bg-white/5 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/5 shadow-inner">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-5 py-2 text-sm font-bold transition-all duration-300 rounded-full flex items-center gap-2 ${isActive(link.path)
                    ? 'text-primary bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  <span className="text-lg">{link.icon}</span>
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {user ? (
                <>

                  <div className="relative hidden sm:block">
                    <button
                      onClick={() => setUserMenuOpen(!userMenuOpen)}
                      className="flex items-center gap-3 pl-2 pr-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group"
                    >
                      <div className="h-9 w-9 bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center rounded-full font-bold text-sm shadow-lg group-hover:scale-105 transition-transform">
                        {user.userName?.[0]?.toUpperCase() || 'U'}
                      </div>
                      <div className="flex flex-col items-start text-xs">
                        <span className="text-gray-400 font-medium">Hello,</span>
                        <span className="text-white font-bold group-hover:text-secondary transition-colors">
                          {user.userName}
                        </span>
                      </div>
                      <svg className={`w-4 h-4 text-gray-500 group-hover:text-white transition-transform duration-300 ${userMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {userMenuOpen && (
                      <div className="absolute right-0 mt-4 w-60 bg-[#0f172a]/95 backdrop-blur-2xl rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden animate-in fade-in zoom-in-95 duration-200 origin-top-right z-50">
                        <div className="px-5 py-4 border-b border-white/5 bg-white/5">
                          <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Account</p>
                          <p className="font-bold text-white truncate mt-1 text-lg">{user.userName}</p>
                          <p className="text-xs text-gray-500 truncate">{user.email}</p>
                        </div>
                        <div className="p-2 space-y-1">
                          <Link
                            to="/profile"
                            className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                            onClick={() => setUserMenuOpen(false)}
                          >
                            <span className="text-lg">👤</span> Profile
                          </Link>
                          <Link
                            to="/settings"
                            className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                            onClick={() => setUserMenuOpen(false)}
                          >
                            <span className="text-lg">⚙️</span> Settings
                          </Link>
                          <div className="h-px bg-white/10 my-1 mx-2"></div>
                          <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-colors text-left"
                          >
                            <span className="text-lg">🚪</span> Sign out
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="hidden md:flex items-center gap-3">
                  <Link to="/login">
                    <button className="px-6 py-2.5 text-sm font-bold text-gray-300 hover:text-white transition-colors">
                      Log In
                    </button>
                  </Link>
                  <Link to="/register">
                    <button className="group relative px-6 py-2.5 font-bold text-primary bg-secondary rounded-xl overflow-hidden transition-transform active:scale-95 hover:shadow-[0_0_20px_rgba(198,255,0,0.3)]">
                      <span className="relative z-10 text-gray-900">Get Started</span>
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </button>
                  </Link>
                </div>
              )}

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden relative z-50 p-2 text-gray-300 hover:text-white transition-colors bg-white/5 rounded-lg border border-white/5"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                  <span className={`w-full h-0.5 bg-current transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`fixed inset-0 bg-[#0f172a]/95 backdrop-blur-2xl z-40 md:hidden transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
            }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-3xl font-black text-white hover:text-secondary transition-all duration-300 transform flex items-center gap-4 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="text-4xl">{link.icon}</span>
                {link.label}
              </Link>
            ))}

            {!user && (
              <div
                className={`flex flex-col gap-4 w-full max-w-xs transition-all duration-500 transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                style={{ transitionDelay: '300ms' }}
              >
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full py-4 text-lg font-bold text-white border border-white/20 rounded-2xl hover:bg-white/5 transition-colors">
                    Log In
                  </button>
                </Link>
                <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full py-4 text-lg font-bold text-gray-900 bg-secondary rounded-2xl hover:bg-secondary-light transition-colors shadow-lg shadow-secondary/20">
                    Get Started
                  </button>
                </Link>
              </div>
            )}

            {user && (
              <button
                onClick={() => { handleLogout(); setMobileMenuOpen(false); }}
                className={`text-red-400 font-bold text-xl flex items-center gap-3 transition-all duration-500 transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                style={{ transitionDelay: '400ms' }}
              >
                <span>🚪</span> Sign Out
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
