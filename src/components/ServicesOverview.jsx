import { servicesCards } from "../data/servicesCards";
import SectionFooter from "./SectionFooter";
import ServiceCard from "./ServiceCard";
import Reveal from "../utils/Reveal";

const ServicesOverview = () => {
  return (
    <section className="bg-[#F1EAE6] pt-12 pb-4 lg:pt-14 font-text px-6 lg:px-12 ">
      <Reveal className="max-w-6xl mx-auto text-center uppercase ">
        <p className="text-[#D46B43] font-bold mb-2 tracking-wide">
          Nasze usługi
        </p>
        <h2 className="font-mont text-xl lg:text-3xl font-extrabold text-[#353436] leading-tight">
          Kompleksowo pomagamy z transportem i przeprowadzkami
        </h2>
      </Reveal>

      <Reveal
        delay={0.1}
        className="flex flex-wrap justify-self-center max-w-6xl gap-4 mt-16"
      >
        {servicesCards.map((card, index) => (
          <ServiceCard key={index} {...card} />
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

export default ServicesOverview;
