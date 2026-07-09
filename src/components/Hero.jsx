import { FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full min-h-[80vh] md:min-h-[90vh] flex items-center bg-[#F1EAE6] py-12 md:py-6 px-6 overflow-hidden">
      <div className="py-4 container mx-auto max-w-8xl px-6 sm:px-4 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6 relative">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 flex justify-center items-center relative z-10"
        >
          <img
            src="/assets/van.webp"
            alt="Usługi transportowe i przeprowadzki"
            className="xl:max-w-280 lg:max-w-240 md:max-w-180 max-w-120 sm:max-w-200 h-auto object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="font-mont w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left space-y-6 md:space-y-16 md:pl-6"
        >
          <div className="space-y-6 md:space-y-10">
            <h1 className="font-extrabold text-2xl sm:text-4xl md:text-2xl lg:text-4xl tracking-wider text-[#353436] leading-[1.15] uppercase">
              Pakujemy. <br />
              Transportujemy. <br />
              Ogarniamy.
            </h1>

            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#353436] uppercase">
              Młoda ekipa do zadań specjalnych.
            </p>
          </div>

          <a
            href="tel:668127294"
            className="flex items-center justify-center gap-2.5 sm:w-auto rounded-full bg-[#D46B43] px-8 py-4 text-xs font-black tracking-widest text-white shadow-md transition-all duration-200 hover:bg-[#EAB33B] hover:shadow-lg active:scale-95 cursor-pointer uppercase group"
          >
            <FiPhone className="text-base transition-transform duration-200 group-hover:rotate-12" />
            <span className="!text-white">Szybka wycena</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
