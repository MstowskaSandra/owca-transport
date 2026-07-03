import { features } from "../data/features";
import FeatureCard from "./FeatureCard";
import SectionFooter from "./SectionFooter";
import Reveal from "../utils/Reveal";

const AboutFeatures = () => {
  return (
    <section className="bg-[#F1EAE6]  pt-16 pb-8  font-text px-6 lg:px-12">
      <Reveal className="max-w-6xl mx-auto py-8 text-center uppercase">
        <p className="text-[#D46B43] font-bold mb-2 tracking-wide">
          Dlaczego my?
        </p>
        <h2 className="font-mont text-4xl sm:text-5xl lg:text-6xl mb-4 font-bold text-[#353436] leading-tight">
          dowozimy
        </h2>
        <p className="sm:text-sm text-xs text-[#353436] font-bold mb-2 tracking-wider">
          Niezależnie od tego, czy przewozimy jedną pralkę, czy pakujemy całe
          biuro –<br />
          <span className="text-[#D46B43] font-bold mb-2 tracking-wider">
            wchodzimy, robimy swoje i zostawiamy po sobie tylko uśmiech.
          </span>
        </p>
      </Reveal>

      <Reveal
        delay={0.1}
        className="flex flex-wrap justify-center justify-self-center max-w-6xl gap-4 mt-10"
      >
        {features.map((item) => (
          <div key={item.title} className="w-full max-w-85 sm:w-auto">
            <FeatureCard {...item} />
          </div>
        ))}
      </Reveal>

      <Reveal delay={0.2}>
        <SectionFooter
          title="Nie znalazłeś usługi dla siebie?"
          subtext="Skontaktuj się z nami, postaramy się pomóc"
          ctaText="Zadzwoń"
        />
      </Reveal>
    </section>
  );
};

export default AboutFeatures;
