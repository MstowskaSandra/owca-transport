import AboutFeatures from "../components/AboutFeatures";
import Hero from "../components/Hero";
import ServicesOverview from "../components/ServicesOverview";
import WorkProcess from "../components/WorkProcess";
import Contact from "./Contact";
import Locations from "./Locations";

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WorkProcess />
      <AboutFeatures />
      <Locations />
      <Contact />
      <div>Home</div>
    </>
  );
};

export default Home;
