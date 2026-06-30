import AboutFeatures from "../components/AboutFeatures";
import Hero from "../components/Hero";
import LargeBanner from "../components/LargeBanner";
import ReviewSection from "../components/ReviewSection";
import ServicesOverview from "../components/ServicesOverview";
import WorkProcess from "../components/WorkProcess";
import Contact from "./Contact";
import Locations from "../components/Locations";

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WorkProcess />
      <AboutFeatures />
      <Locations />
      <ReviewSection />
      <LargeBanner imgUrl="/assets/background.webp" text="kontakt" />
      <Contact />
    </>
  );
};

export default Home;
