import { Plane, TrendingUp, Stethoscope, BookOpen, Beaker } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Aviation Services',
    description: 'Comprehensive aviation consulting including fleet management, operational efficiency, and regulatory compliance for airlines and aviation operators worldwide.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Services',
    description: 'Strategic investment solutions with access to global funding networks, project financing, and strategic capital allocation across emerging markets.',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare Services',
    description: 'Healthcare sector consulting with expertise in institutional development, project management, and operational excellence for healthcare providers.',
  },
  {
    icon: BookOpen,
    title: 'Training & Aviation Hub',
    description: 'Advanced training programs and aviation hubs for pilot development, crew training, and institutional capacity building across regions.',
  },
  {
    icon: Beaker,
    title: 'Research & Development',
    description: 'Innovation-driven R&D consulting supporting technology adoption, process optimization, and emerging solutions development.',
  },
];

export function BusinessAreas() {
  return (
    <section id="services" className="section-container bg-slate-950">
      <div className="section-padding space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-platinum-light">Core Business Areas</h2>
          <div className="gold-accent-line mx-auto" />
          <p className="text-platinum-light/70 font-light text-lg max-w-2xl mx-auto">
            Delivering specialized solutions across five strategic business verticals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="card-hover group relative p-8 rounded-lg bg-slate-900/80 border border-gold-dark/20 hover:bg-slate-800 hover:border-gold-light/60 space-y-4"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-light to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg" />

                <Icon className="w-10 h-10 text-gold-light group-hover:scale-110 transition-transform duration-300" />

                <h3 className="text-platinum-light font-serif text-lg group-hover:text-gold-light transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-platinum-light/70 font-light text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#contact"
                    className="text-gold-light text-sm font-medium hover:text-gold-dark transition-colors flex items-center gap-2"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
