import { Globe, Target, Award } from 'lucide-react';

export function CompanyIntroduction() {
  return (
    <section className="section-container bg-slate-900/50">
      <div className="section-padding space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-gold-light">About Akhurath Zenith Solutions</h2>
          <div className="gold-accent-line mx-auto" />
        </div>

        <p className="text-lg text-platinum-light/80 font-light leading-relaxed max-w-3xl mx-auto text-center">
          Akhurath Zenith Solutions is a globally recognized project management and aviation consultancy delivering specialized services across aviation, investment, healthcare, training, and research & development sectors.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center space-y-4 p-8 rounded-lg border border-gold-dark/20 hover:border-gold-light/40 transition-colors duration-300">
            <Globe className="w-12 h-12 text-gold-light mx-auto" />
            <h3 className="text-platinum-light">Global Reach</h3>
            <p className="text-platinum-light/70 font-light">
              Operating across India, Southeast Asia, Africa, Middle East, and Europe with strategic partnerships and local expertise.
            </p>
          </div>

          <div className="text-center space-y-4 p-8 rounded-lg border border-gold-dark/20 hover:border-gold-light/40 transition-colors duration-300">
            <Target className="w-12 h-12 text-gold-light mx-auto" />
            <h3 className="text-platinum-light">Aviation Leadership</h3>
            <p className="text-platinum-light/70 font-light">
              Industry-leading expertise in aviation consulting, supporting airlines, governments, and international stakeholders.
            </p>
          </div>

          <div className="text-center space-y-4 p-8 rounded-lg border border-gold-dark/20 hover:border-gold-light/40 transition-colors duration-300">
            <Award className="w-12 h-12 text-gold-light mx-auto" />
            <h3 className="text-platinum-light">Excellence</h3>
            <p className="text-platinum-light/70 font-light">
              Committed to project execution excellence and delivering measurable results that exceed client expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
