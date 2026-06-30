import { FiPhone } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="w-full min-h-[90vh] flex items-center bg-[#F1EAE6] py-6 px-6">
      <div className="py-4 container mx-auto max-w-8xl px-6 sm:px-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 relative">
        <div className=" w-1/2 flex justify-center items-center relative z-10">
          <img
            src="/assets/van.webp"
            alt="Usługi transportowe i przeprowadzki"
            className="max-w-240 h-auto object-contain transform md:scale-112 md:translate-x-4 transition-transform duration-300 hover:scale-[1.15]"
          />
        </div>

        <div className="font-mont w-1/2 flex flex-col items-start space-y-6 md:space-y-16 text-left md:pl-6">
          <div className="space-y-6 md:space-y-10">
            <h1 className="font-extrabold text-4xl sm:text-4xl lg:text-4xl tracking-wider text-[#353436] leading-[1.15] uppercase">
              Pakujemy. <br />
              Transportujemy. <br />
              Ogarniamy.
            </h1>

            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#353436] uppercase">
              Młoda ekipa do zadań specjalnych.
            </p>
          </div>

          <button>
            <a
              href="tel:734414640"
              className="mx-auto md:mx-0 flex items-center gap-2.5 rounded-full bg-[#D46B43] px-8 py-4 text-xs sm:text-xs font-black tracking-widest text-white shadow-md transition-all duration-200 hover:bg-[#EAB33B] hover:shadow-lg active:scale-95 cursor-pointer uppercase group"
            >
              <FiPhone className="text-base sm:text-lg transition-transform duration-200 group-hover:rotate-12" />
              <span>Szybka wycena</span>
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
