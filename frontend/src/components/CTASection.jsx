import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90 z-0"></div>
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 z-0 mix-blend-overlay"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 drop-shadow-lg">
          Ready to Join the Action?
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-10 font-medium max-w-2xl mx-auto">
          Register now and be part of the biggest sports community. Your journey starts here.
        </p>
        <Link to="/register">
          <button className="px-12 py-5 bg-white text-primary font-black rounded-2xl shadow-2xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 text-lg flex items-center gap-3 mx-auto">
            <span>🚀</span>
            Get Started Today
          </button>
        </Link>
      </div>
    </section>
  );
}
