import CitiesPills from "./CitiesPills";
import SectionFooter from "./SectionFooter";

const Locations = () => {
  const row1 = [
    "Strzelin (Baza)",
    "Oława",
    "Brzeg",
    "Ząbkowice Śląskie",
    "Bielawa",
  ];
  const row2 = ["Kłodzko", "Świdnica", "Wrocław", "Wałbrzych"];
  const row3 = ["Trzebnica", "Dzierżoniów", "Leganica"];
  const row4 = ["Nysa", "Ziębice"];

  return (
    <section className="bg-[#F1EAE6] pt-16 lg:pt-24 pb-2 font-text px-6 lg:px-8 flex flex-col items-center">
      <div className="max-w-6xl w-full text-center uppercase mb-12 lg:mb-16">
        <p className="text-[#D46B43] font-mont font-bold mb-3 tracking-widest text-xs sm:text-sm">
          Gdzie działamy?
        </p>
        <h2 className="font-mont text-2xl lg:text-3xl font-black text-[#353436] tracking-tight leading-tight mb-6 max-w-3xl mx-auto">
          Przeprowadzki i transport na terenie Dolnego Śląska
        </h2>
        <p className="text-xs sm:text-sm text-[#353436] font-medium tracking-widest normal-case max-w-5xl mx-auto leading-relaxed opacity-90">
          Nasz duży bus i młoda ekipa regularnie krążą po całym województwie.
          Sprawdź główne rejony, w których najczęściej realizujemy
          przeprowadzki, transport gabarytów oraz dostawy z marketów.
        </p>
      </div>

      <div className="w-full max-w-4xl flex flex-col items-center gap-4 sm:gap-6 px-2">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full">
          {row1.map((city, index) => (
            <CitiesPills key={`row1-${index}`} city={city} />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full">
          {row2.map((city, index) => (
            <CitiesPills key={`row2-${index}`} city={city} />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full">
          {row3.map((city, index) => (
            <CitiesPills key={`row3-${index}`} city={city} />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full">
          {row4.map((city, index) => (
            <CitiesPills key={`row3-${index}`} city={city} />
          ))}
        </div>
      </div>

      <div className="max-w-8xl w-full flex justify-center md:justify-end lg:mt-4">
        <SectionFooter
          title="Nie widzisz swojej miejscowości?"
          subtext="Bez obaw. Działamy elastycznie i dojedziemy w dowolne miejsce w kraju"
          ctaText="Zadzwoń"
        />
      </div>
    </section>
  );
};

export default Locations;
