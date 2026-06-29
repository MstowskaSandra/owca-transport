const sizeVariants = {
  S: "h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[45vh]",
  M: "h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh]",
  L: "h-[45vh] sm:h-[50vh] md:h-[55vh] lg:h-[65vh]", // Twój oryginalny rozmiar
};

export const LargeBanner = ({ imgUrl, text, size = "L" }) => {
  const heightClass = sizeVariants[size] || sizeVariants.L;

  return (
    <section
      className={`relative w-full bg-cover bg-bottom bg-no-repeat ${heightClass}`}
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
    >
      <div className="absolute inset-0 bg-white/40"></div>

      <div className="relative z-10 flex h-full items-end justify-start pl-8 pb-16">
        <h2 className="font-mont px-4 md:px-8 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#fafff4] tracking-wider drop-shadow-lg uppercase">
          {text}
        </h2>
      </div>
    </section>
  );
};

export default LargeBanner;
