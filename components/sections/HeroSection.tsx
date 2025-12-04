'use client';

import { Plane } from 'lucide-react';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />

      <div className="relative z-10 section-container">
        <div className="section-padding text-center space-y-8 max-w-5xl">
          <div className="flex flex-col items-center gap-6 mb-4">
            <div className="flex items-center justify-center gap-3">
              <Plane className="w-10 h-10 text-gold-light animate-pulse" />
              <span className="font-serif text-2xl md:text-3xl font-bold text-platinum-light tracking-wide">
                Akhurath Zenith Solutions
              </span>
            </div>
            <span className="luxury-heading text-gold-light text-xs md:text-sm">
              STRATEGIC AVIATION & AIRCRAFT SOLUTIONS
            </span>
          </div>

          <h1 className="animate-slideUp font-serif text-platinum-light leading-tight">
            Private Jet Chartering & Aircraft Leasing Excellence
          </h1>

          <p className="animate-slideUp text-xl md:text-2xl text-platinum-light/80 font-light leading-relaxed max-w-3xl mx-auto">
            Bespoke private jet chartering and aircraft leasing services tailored for global aviation excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fadeIn">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary-luxury text-base md:text-lg"
            >
              Request Charter / Lease
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary-luxury text-base md:text-lg"
            >
              Speak to an Aviation Expert
            </button>
          </div>

          <p className="text-platinum-light/60 font-light text-sm md:text-base pt-4 animate-fadeIn italic">
            Trusted by aviation partners across India, Southeast Asia, the Middle East & Africa
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold-light rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gold-light rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
