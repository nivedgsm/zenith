import { MapPin, Building2 } from 'lucide-react';

const regions = [
  { name: 'India', icon: '🇮🇳', details: 'Headquarters and primary hub' },
  { name: 'Southeast Asia', icon: '🌏', details: 'Regional operations and partnerships' },
  { name: 'Africa', icon: '🌍', details: 'Emerging market expertise' },
  { name: 'Middle East', icon: '🌙', details: 'Strategic aviation services' },
  { name: 'Europe', icon: '🇪🇺', details: 'International partnerships' },
];

export function GlobalFootprint() {
  return (
    <section className="section-container bg-slate-950">
      <div className="section-padding space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-platinum-light">Global Operations</h2>
          <div className="gold-accent-line mx-auto" />
          <p className="text-platinum-light/70 font-light text-lg max-w-2xl mx-auto">
            Strategic presence and partnerships across five continents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {regions.map((region, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-lg bg-slate-900/80 border border-gold-dark/20 hover:bg-slate-800 hover:border-gold-light/60 transition-all duration-300 text-center space-y-4"
            >
              <div className="text-5xl">{region.icon}</div>
              <h3 className="text-platinum-light font-serif text-xl group-hover:text-gold-light transition-colors">
                {region.name}
              </h3>
              <p className="text-platinum-light/70 font-light text-sm">
                {region.details}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900/50 border border-gold-dark/20 rounded-lg p-8 md:p-12 space-y-6">
          <div className="flex items-start gap-4">
            <MapPin className="w-8 h-8 text-gold-light flex-shrink-0 mt-1" />
            <div className="space-y-3">
              <h3 className="text-platinum-light font-serif text-2xl">
                International Presence
              </h3>
              <p className="text-platinum-light/80 font-light leading-relaxed">
                With operations spanning multiple continents, Akhurath Zenith Solutions maintains a robust network of local expertise combined with global best practices. Our presence enables us to provide culturally sensitive, locally informed, and internationally competitive solutions to clients across diverse markets.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 pt-4 border-t border-gold-dark/20">
            <Building2 className="w-8 h-8 text-gold-light flex-shrink-0 mt-1" />
            <div className="space-y-3">
              <h3 className="text-platinum-light font-serif text-2xl">
                Strategic Partnerships
              </h3>
              <p className="text-platinum-light/80 font-light leading-relaxed">
                We collaborate with leading institutions, government bodies, and industry players across all regions. These partnerships strengthen our service delivery and create synergies that deliver enhanced value to our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
