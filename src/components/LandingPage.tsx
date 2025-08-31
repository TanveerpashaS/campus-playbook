import Navbar from "./Navbar";
import Hero from "./Hero";
import Blueprint from "./Blueprint";
import Solution from "./Solution";
import Features from "./Features";
import Mission from "./Mission";
import FinalCTA from "./FinalCTA";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Blueprint />
      <Solution />
      <Features />
      <Mission />
      <FinalCTA />
    </div>
  );
};

export default LandingPage;