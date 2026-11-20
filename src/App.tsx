import { useState } from "react";

import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import Contact from "./sections/Contact";
import FeatureCards from "./sections/FeatureCards";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack";

const App = () => {
  const [isPortfolioReady, setIsPortfolioReady] = useState(false);

  return (
    <>
      <Preloader isReady={isPortfolioReady} />

      <Navbar />

      <Hero onSceneReady={() => setIsPortfolioReady(true)} />

      <ShowcaseSection />
      <TechStack />
      <FeatureCards />
      <Contact />
      <Footer />
    </>
  );
};

export default App;