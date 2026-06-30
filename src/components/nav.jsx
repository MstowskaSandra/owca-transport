import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";


const Nav = () => {
  return (
    <nav className="font-mont tracking-widest sticky top-0 z-50 bg-[#F1EAE6] shadow-sm">
      <div className="px-4 py-2 sm:px-6 lg:px-12 flex items-center justify-between">
        <NavLink
          to="/"
          className="hover:translate-x-36 transition-all duration-800"
        >
          <img
            src="/assets/logo-hero.svg"
            alt="Logo O.M Transport"
            className="w-24 lg:w-42 h-24 lg:h-32 object-contain"
          />
        </NavLink>

        <div className="hidden font-extrabold uppercase lg:flex space-x-8 items-center">
          <NavLink
            to="/"
            className="transition-all duration-200 hover:text-[#D46B43]"
          >
            <FaHouse size={22} />
          </NavLink>
          <NavLink
            to="/uslugi"
            className="transition-all duration-200 hover:text-[#D46B43]"
          >
            usługi
          </NavLink>
          <NavLink
            to="/informacje"
            className="transition-all duration-200 hover:text-[#D46B43]"
          >
            O nas
          </NavLink>

          <NavLink
            to="/kontakt"
            className="transition-all duration-200 hover:text-[#D46B43]"
          >
            Kontakt
          </NavLink>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:scale-110 transition-transform"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:scale-110 transition-transform"
            >
              <FaInstagram size={24} />
            </a>
          </div>
          <div className="flex flex-col items-end font-text">
            <a
              href="tel:734414640"
              className="text-black font-mont font-bold text-sm hover:underline"
            >
              734 414 640
            </a>
            <span className="text-gray-600 font-mont font-semibold text-xs">
              Skontaktuj się z nami
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;