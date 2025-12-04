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
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950" />

      <div className="relative z-10 section-container">
        <div className="section-padding text-center space-y-8 max-w-4xl">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <Plane className="w-8 h-8 text-gold-light animate-pulse" />
            <span className="luxury-heading text-gold-light">
              Strategic Excellence
            </span>
          </div>

          <h1 className="animate-slideUp font-serif text-platinum-light leading-tight">
            Global Aviation & Investment Consultancy
          </h1>

          <p className="animate-slideUp text-xl text-platinum-light/80 font-light leading-relaxed max-w-2xl mx-auto">
            Delivering world-class aviation services, strategic investments, and global project management solutions across international markets
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fadeIn">
            <button
              onClick={() => scrollToSection('services')}
              className="btn-primary-luxury"
            >
              Explore Our Expertise
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary-luxury"
            >
              Contact Our Team
            </button>
          </div>
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
