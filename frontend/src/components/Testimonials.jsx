import { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The best sports event I've ever attended! Great organization and amazing atmosphere.",
      name: "Sarah L.",
      role: "Professional Skateboarder",
      emoji: "🏅"
    },
    {
      quote: "Hosting events here has been incredible. Highly recommend to anyone organizing!",
      name: "John D.",
      role: "Event Organizer",
      emoji: "🎯"
    }
  ];

  return (
    <section className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            What Athletes <span className="text-secondary">Say</span>
          </h2>
          <p className="text-xl text-gray-400">
            Join thousands of satisfied participants
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-gray-900/40 backdrop-blur-xl border border-white/5 p-8 rounded-3xl shadow-xl hover:border-white/10 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-3xl shadow-inner border border-white/5">
                  {testimonial.emoji}
                </div>
              </div>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed italic">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div>
                  <p className="font-bold text-white text-lg">{testimonial.name}</p>
                  <p className="text-sm text-secondary font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
