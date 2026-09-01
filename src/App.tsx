import Navbar from "./components/Navbar"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/Hero"
// import LogoSection from "./sections/LogoSection"
import ShowcaseSection from "./sections/ShowcaseSection"
import TechStack from "./sections/TechStack"

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <ShowcaseSection />
    {/* <LogoSection /> */}
    <FeatureCards />
    <TechStack />
    </>
  )
}

export default App