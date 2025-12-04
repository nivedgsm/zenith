'use client';

import { ArrowRight } from 'lucide-react';

export function CTASection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="cta" className="section-container bg-gradient-to-b from-slate-900/50 to-slate-950">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-platinum-light leading-tight">
            Partner with a globally trusted
            <span className="text-gold-light"> aviation and investment consultancy</span>
          </h2>

          <p className="text-lg text-platinum-light/80 font-light max-w-2xl mx-auto">
            Let us help you navigate complex aviation challenges, unlock strategic investment opportunities, and achieve your organizational goals through expert consulting and proven solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={scrollToContact}
              className="btn-primary-luxury flex items-center justify-center gap-2"
            >
              Connect with Our Experts
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-gold-dark/20">
            <div className="space-y-2">
              <p className="text-3xl font-serif text-gold-light font-bold">50+</p>
              <p className="text-platinum-light/70 font-light text-sm">Global Projects Delivered</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-serif text-gold-light font-bold">25+</p>
              <p className="text-platinum-light/70 font-light text-sm">Years Combined Expertise</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-serif text-gold-light font-bold">5</p>
              <p className="text-platinum-light/70 font-light text-sm">International Markets</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
