import Navbar from "./components/Navbar"
import Contact from "./sections/Contact"
import FeatureCards from "./sections/FeatureCards"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import TechStack from "./sections/TechStack"

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <ShowcaseSection />
    <TechStack />
    <FeatureCards />
    <Contact />
    <Footer />
    </>
  )
}

export default App