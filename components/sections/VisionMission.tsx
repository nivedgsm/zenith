export function VisionMission() {
  return (
    <section className="section-container bg-slate-900/50">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <p className="text-gold-light font-serif text-sm uppercase tracking-widest font-bold">
                Our Strategic Direction
              </p>
              <div className="gold-accent-line mx-auto" />
            </div>

            <blockquote className="space-y-6">
              <p className="text-4xl lg:text-5xl font-serif text-platinum-light leading-tight">
                Redefining global project management through
                <span className="text-gold-light"> innovation, expertise, and excellence.</span>
              </p>
            </blockquote>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
              <div className="space-y-4 text-left border-l-2 border-gold-light pl-6">
                <h3 className="text-gold-light font-serif text-2xl">Vision</h3>
                <p className="text-platinum-light/80 font-light leading-relaxed">
                  To be the most trusted global consultancy delivering transformative aviation and investment solutions that drive sustainable growth and strategic value for our clients worldwide.
                </p>
              </div>

              <div className="space-y-4 text-left border-l-2 border-gold-dark pl-6">
                <h3 className="text-gold-light font-serif text-2xl">Mission</h3>
                <p className="text-platinum-light/80 font-light leading-relaxed">
                  Empowering organizations through strategic consulting, innovative solutions, and operational excellence, enabling them to achieve ambitious goals and thrive in competitive global markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
