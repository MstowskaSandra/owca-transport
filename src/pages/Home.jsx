import AboutFeatures from "../components/AboutFeatures";
import Hero from "../components/Hero";
import ServicesOverview from "../components/ServicesOverview";
import WorkProcess from "../components/WorkProcess";

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WorkProcess />
      <AboutFeatures />
      <div>Home</div>
    </>
  );
};

export default Home;
