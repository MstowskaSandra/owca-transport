import AboutFeatures from "../components/AboutFeatures";
import LargeBanner from "../components/LargeBanner";
import ReviewSection from "../components/ReviewSection";
import Contact from "./Contact";

const Info = () => {
  return (
    <>
      <LargeBanner imgUrl="/assets/background-van.webp" size="S" />
      <ReviewSection />
      <AboutFeatures />
      <Contact />
    </>
  );
};

export default Info;
