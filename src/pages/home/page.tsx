
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import HeroSection from './components/HeroSection';
import GameIntroSection from './components/GameIntroSection';
import FeaturesSection from './components/FeaturesSection';
import TeamSection from './components/TeamSection';
import RoadmapSection from './components/RoadmapSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <GameIntroSection />
        <FeaturesSection />
        <TeamSection />
        <RoadmapSection />
      </main>
      <Footer />
    </div>
  );
}
