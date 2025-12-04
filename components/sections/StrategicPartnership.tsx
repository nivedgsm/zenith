import { Handshake, Zap, Shield } from 'lucide-react';

export function StrategicPartnership() {
  return (
    <section className="section-container bg-slate-900/50">
      <div className="section-padding space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-platinum-light">Strategic Alliance</h2>
          <div className="gold-accent-line mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          <div className="text-center lg:text-left space-y-4">
            <h3 className="text-platinum-light font-serif text-3xl">
              Harmonie International
            </h3>
            <p className="text-platinum-light/80 font-light text-lg">
              Strategic partnership enabling access to global funding networks and international investment solutions.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-2 text-gold-light">
                <Zap className="w-5 h-5" />
                <span className="text-sm font-medium">Global Reach</span>
              </div>
              <div className="flex items-center gap-2 text-gold-light">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">Trusted Network</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="text-6xl font-serif text-gold-light/30">
              ✦
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg border border-gold-light/20 p-8 space-y-4">
            <Handshake className="w-12 h-12 text-gold-light" />
            <h4 className="text-platinum-light font-serif text-xl">
              Partnership Benefits
            </h4>
            <ul className="space-y-3 text-platinum-light/80 font-light text-sm">
              <li className="flex gap-2">
                <span className="text-gold-light">→</span>
                <span>Access to diversified investment opportunities</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gold-light">→</span>
                <span>Enhanced project financing capabilities</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gold-light">→</span>
                <span>International market expertise and insights</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gold-light">→</span>
                <span>Strategic capital allocation solutions</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gold-light">→</span>
                <span>Global network of institutional investors</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-900/50 border border-gold-dark/20 rounded-lg p-8 text-center">
          <p className="text-platinum-light/80 font-light text-lg leading-relaxed">
            Through this strategic alliance, we leverage complementary strengths to deliver comprehensive solutions that address complex investment and operational challenges across global markets.
          </p>
        </div>
      </div>
    </section>
  );
}
