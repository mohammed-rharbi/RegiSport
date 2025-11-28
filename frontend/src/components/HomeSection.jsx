import { useContext } from 'react';
import { AuthContext } from '../hooks/authContext';
import { Link } from 'react-router-dom';

export default function HomeSection() {
    const { user } = useContext(AuthContext);

    return (
        <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[85vh] flex flex-col justify-center bg-[#0f172a]">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-secondary/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-[20%] left-[10%] w-32 h-32 bg-accent/10 rounded-full blur-[60px] animate-bounce" style={{ animationDuration: '6s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
                    <div className="space-y-6 text-center lg:text-left max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_10px_rgba(198,255,0,0.5)]"></span>
                            <span className="text-sm font-bold text-gray-300 tracking-wide uppercase">Ready for action</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight drop-shadow-lg">
                            Welcome back, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-white to-primary animate-gradient-x">
                                {user?.userName || 'Athlete'}
                            </span>
                        </h1>

                        <p className="text-xl text-gray-400 leading-relaxed font-medium">
                            Your journey to greatness continues here. Track your progress, find new challenges, and dominate the field.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <Link to="/myEvents" className="group">
                                <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm">
                                    <span className="text-2xl group-hover:scale-110 transition-transform">📋</span>
                                    <span>My Events</span>
                                </button>
                            </Link>
                            <Link to="/commingEvents" className="group">
                                <button className="w-full sm:w-auto px-8 py-4 bg-secondary text-primary font-bold rounded-2xl hover:bg-secondary-light shadow-[0_0_20px_rgba(198,255,0,0.2)] hover:shadow-[0_0_30px_rgba(198,255,0,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                                    <span className="text-2xl group-hover:rotate-12 transition-transform">🎯</span>
                                    <span>Find Events</span>
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Dashboard Widgets */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-auto">
                        {/* Stat Card 1 */}
                        <div className="bg-[#0f172a]/60 backdrop-blur-xl border border-white/5 p-6 rounded-3xl shadow-xl hover:shadow-2xl hover:border-white/10 hover:-translate-y-1 transition-all duration-300 group">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-blue-500/10 text-blue-400 rounded-2xl border border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                </div>
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider bg-white/5 px-2 py-1 rounded-lg border border-white/5">Upcoming</span>
                            </div>
                            <h3 className="text-4xl font-black text-white mb-1">3</h3>
                            <p className="text-sm font-medium text-gray-400">Events this month</p>
                        </div>

                        {/* Stat Card 2 */}
                        <div className="bg-[#0f172a]/60 backdrop-blur-xl border border-white/5 p-6 rounded-3xl shadow-xl hover:shadow-2xl hover:border-white/10 hover:-translate-y-1 transition-all duration-300 group sm:translate-y-8">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-green-500/10 text-green-400 rounded-2xl border border-green-500/20 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider bg-white/5 px-2 py-1 rounded-lg border border-white/5">Completed</span>
                            </div>
                            <h3 className="text-4xl font-black text-white mb-1">12</h3>
                            <p className="text-sm font-medium text-gray-400">Events total</p>
                        </div>

                        {/* Stat Card 3 */}
                        <div className="bg-[#0f172a]/60 backdrop-blur-xl border border-white/5 p-6 rounded-3xl shadow-xl hover:shadow-2xl hover:border-white/10 hover:-translate-y-1 transition-all duration-300 group sm:col-span-2 lg:col-span-1 lg:translate-y-4">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-purple-500/10 text-purple-400 rounded-2xl border border-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                </div>
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider bg-white/5 px-2 py-1 rounded-lg border border-white/5">Activity</span>
                            </div>
                            <div className="flex items-end gap-2">
                                <h3 className="text-4xl font-black text-white mb-1">Top 10%</h3>
                                <span className="text-green-400 font-bold mb-2">↑</span>
                            </div>
                            <p className="text-sm font-medium text-gray-400">Active participant</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
