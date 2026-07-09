import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <section className="w-full min-h-[75vh] flex flex-col items-center justify-center bg-[#F1EAE6] px-6 py-12 text-center font-mont">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md flex flex-col items-center gap-6"
      >
        <h1 className="text-6xl sm:text-7xl font-extrabold text-[#353436]">404</h1>
        <div className="w-70 rounded-full overflow-hidden shadow-xl border-4 border-[#D46B43] my-2">
          <img 
            src="/assets/404.gif" 
            alt="Zgubiona owca jadąca samochodem" 
            className="w-full h-56 sm:h-64 object-cover"
          />
        </div>

        
        <h2 className="text-xl sm:text-2xl font-bold text-[#D46B43] uppercase tracking-wide">
          Ups! Zgubiliśmy trasę...
        </h2>
        
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
          Ta podstrona chyba odjechała w innym kierunku. 
          Nawet najlepszemu kierowcy zdarzy się czasem pomylić zjazd!
        </p>

        <Link
          to="/"
          className="mt-4 cursor-pointer font-semibold text-white bg-[#D46B43] hover:bg-orange-600 px-8 py-3.5 rounded-full shadow-md hover:scale-105 transition-all duration-300 uppercase text-xs sm:text-sm tracking-wider"
        >
          Wróć na główną trasę
        </Link>
      </motion.div>
    </section>
  );
};

export default NotFound;