import SectionFooter from "./SectionFooter";
import StepCard from "./StepCard";
import Reveal from "../utils/Reveal";

const WorkProcess = () => {
  return (
    <section className="bg-[#F1EAE6]  pt-12 pb-8 lg:pt-14 font-text px-6 lg:px-12">
      <Reveal className="max-w-6xl mx-auto py-8 md:py-24 text-center uppercase">
        <p className="text-[#D46B43] font-bold mb-2 tracking-wide">
          Jak pracujemy?
        </p>
        <h2 className="font-mont text-xl lg:text-3xl font-extrabold text-[#353436] leading-tight">
          4 proste kroki do ogarnięcia twoich spraw
        </h2>
      </Reveal>

      <Reveal
        delay={0.2}
        className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-around items-center gap-8 lg:gap-4"
      >
        <div className="w-full lg:w-[20%] flex flex-col items-center gap-6 lg:gap-40 order-2 lg:order-1 text-center">
          <StepCard num="1." text="Umowę zawieramy telefonicznie" />
          <StepCard num="2." text="Wykonujemy usługę szybko i profesjonalnie" />
        </div>

        <div className="w-full lg:w-[70%] flex justify-center order-1 lg:order-2">
          <img
            src="/assets/photos.webp"
            alt="4 kroki przeprowadzkowe"
            className="w-full max-w-160 sm:max-w-175 lg:max-w-210 h-auto drop-shadow-sm transition-all duration-400 hover:-translate-y-1 hover:scale-105"
          />
        </div>

        <div className="w-full lg:w-[20%] flex flex-col items-center gap-6 lg:gap-40 order-3 lg:order-3 text-center">
          <StepCard num="3." text="Bezpiecznie transportujemy i wnosimy" />
          <StepCard num="4." text="Cieszysz się z efektów naszej pracy" />
        </div>
      </Reveal>

      <Reveal delay={0.3}>
        <SectionFooter
          title="Darmowa wycena."
          subtext="Masz pytania? Skontaktuj się z nami"
          ctaText="Zadzwoń"
        />
      </Reveal>
    </section>
  );
};

export default WorkProcess;
