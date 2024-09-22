import Navbar from "./components/Navbar";
import Intro from "./components/introductionPage";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Projects from "./components/projectTimeline";




const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Intro />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
