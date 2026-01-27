import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutUsSection from './components/AboutUsSection/AboutUsSection';
import HowItAllBeganSection from './components/HowItAllBeganSection/HowItAllBeganSection';
import WhoCreatesAdoptly from './components/WhoCreatesAdoptly/WhoCreatesAdoptly';
import OurWaySection from './components/OurWaySection/OurWaySection';
import ForShelters from './components/ForShelters/ForShelters';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <HeroSection />
        <AboutUsSection />
        <HowItAllBeganSection />
        <OurWaySection />
        <WhoCreatesAdoptly />
        <ForShelters />
      </main>
    </>
  );
}

export default App;
