import AboutFeatures from "../components/AboutFeatures";
import Hero from "../components/Hero";
import ServicesOverview from "../components/ServicesOverview";
import WorkProcess from "../components/WorkProcess";
import Locations from "./Locations";

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WorkProcess />
      <AboutFeatures />
      <Locations />
      <div>Home</div>
    </>
  );
};

export default Home;
