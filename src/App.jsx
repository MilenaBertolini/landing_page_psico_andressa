import { ParallaxProvider } from 'react-scroll-parallax'; // Importa o ParallaxProvider
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AboutMeSection from './components/Section/AboutMeSection/AboutMeSection';
import BenefitsSection from './components/Section/BenefitsSection/BenefitsSection';
import FAQSection from './components/Section/FAQSection/FAQSection';
import HomeSection from './components/Section/HomeSection/HomeSection';
import MediaSection from './components/Section/MediaSection/MediaSection';
import RetentionSection from './components/Section/RetentionSection/RetentionSection';
import SpecialtySection from './components/Section/SpecialtySection/SpecialtySection';
import Whatsapp from './components/Section/Whatsapp/Whatsapp';

import './css/global.css';

function App() {
  return (
    <ParallaxProvider> {/* Envolva seu app com o ParallaxProvider */}
      <Header />
      <HomeSection />
      <SpecialtySection />
      <BenefitsSection />
      <AboutMeSection />
      <RetentionSection />
      <FAQSection /> {/* Por exemplo, o FAQSection pode usar o parallax */}
      <MediaSection />
      <Footer />
      <Whatsapp />
    </ParallaxProvider>
  )
}

export default App
