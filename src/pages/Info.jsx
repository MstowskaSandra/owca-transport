import AboutFeatures from "../components/AboutFeatures";
import Gallery from "../components/Gallery";
import LargeBanner from "../components/LargeBanner";
import Locations from "../components/Locations";
import ReviewSection from "../components/ReviewSection";
import Contact from "./Contact";

const Info = () => {
  return (
    <>
      <LargeBanner imgUrl="/assets/background-van.webp" size="S" />
      <AboutFeatures />
      <ReviewSection />
      <Gallery />
      <Locations />
      <Contact />
    </>
  );
};

export default Info;
