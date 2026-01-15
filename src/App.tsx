import HeroSection from './components/HeroSection/HeroSection';
import AboutUsSection from './components/AboutUsSection/AboutUsSection';
import HowItAllBeganSection from './components/HowItAllBeganSection/HowItAllBeganSection';
import WayCard from './components/WayCard/WayCard';

import startWay from './assets/images/OurWay/start-icon.webp';

function App() {
  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <HowItAllBeganSection />
      <WayCard
        cardImageSrc={startWay}
        cardImgAlt="старт"
        cardNumber="01"
        cardDate="Липень 2025"
        cardTitle="Старт ініціативи"
        cardDescription="Збір команди на Team Challenge та визначення місії проєкту."
      />
    </div>
  );
}

export default App;
