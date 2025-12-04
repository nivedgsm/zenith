import { HeroSection } from '@/components/sections/HeroSection';
import { CompanyIntroduction } from '@/components/sections/CompanyIntroduction';
import { BusinessAreas } from '@/components/sections/BusinessAreas';
import { VisionMission } from '@/components/sections/VisionMission';
import { GlobalFootprint } from '@/components/sections/GlobalFootprint';
import { StrategicPartnership } from '@/components/sections/StrategicPartnership';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="bg-slate-950 overflow-hidden">
      <HeroSection />
      <CompanyIntroduction />
      <BusinessAreas />
      <VisionMission />
      <GlobalFootprint />
      <StrategicPartnership />
      <CTASection />
      <Footer />
    </main>
  );
}
