import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { services } from "../data/services";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyles = ({ isActive }) =>
    `relative pb-1 transition-all duration-300 uppercase font-mont font-bold text-sm tracking-wide flex items-center ${
      isActive ? "text-[#D46B43]" : "text-gray-700 hover:text-amber-600"
    }`;

  const activeBar =
    "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.75 after:bg-[#D46B43] after:transition-all";
  const inactiveBar =
    "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D46B43] hover:after:w-full after:transition-all after:duration-300";

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav className="font-mont tracking-widest sticky top-0 z-50 bg-[#F1EAE6] shadow-sm">
        <div className="mx-auto px-4 py-2 sm:px-6 lg:px-12 flex items-center justify-between">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:translate-x-36 transition-all duration-800"
          >
            <img
              src="/assets/logo-hero.svg"
              alt="Logo O.M Transport"
              className="w-24 lg:w-42 h-24 lg:h-32 object-contain"
            />
          </NavLink>

          <div className="hidden lg:flex space-x-8 items-center font-extrabold uppercase">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${navLinkStyles({ isActive })} ${isActive ? activeBar : inactiveBar}`
              }
            >
              <FaHouse size={18} className="mr-1" />
            </NavLink>

            <NavLink
              to="/uslugi"
              className={({ isActive }) =>
                `${navLinkStyles({ isActive })} ${isActive ? activeBar : inactiveBar}`
              }
            >
              usługi
            </NavLink>

            <NavLink
              to="/informacje"
              className={({ isActive }) =>
                `${navLinkStyles({ isActive })} ${isActive ? activeBar : inactiveBar}`
              }
            >
              O nas
            </NavLink>

            <NavLink
              to="/kontakt"
              className={({ isActive }) =>
                `${navLinkStyles({ isActive })} ${isActive ? activeBar : inactiveBar}`
              }
            >
              Kontakt
            </NavLink>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/people/MO-Transport/61589353359186/?locale=pl_PL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:scale-110 transition-transform"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:scale-110 transition-transform"
              >
                <FaInstagram size={24} />
              </a>
            </div>
            <div className="flex flex-col items-end font-text">
              <a
                href="tel:668127294"
                className="text-black font-mont font-bold text-sm hover:underline"
              >
                668 127 294
              </a>
              <span className="text-gray-600 font-mont font-semibold text-xs">
                Skontaktuj się z nami
              </span>
            </div>
          </div>

          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-200 transition-all duration-300 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      <div
        className={`
          fixed top-0 right-0 h-full w-3/4 max-w-sm font-text bg-[#F1EAE6] border-l-3 border-[#D46B43] shadow-2xl transform 
          transition-transform duration-300 ease-in-out z-50 lg:hidden overflow-y-auto
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-4 flex justify-end border-b border-gray-200">
          <button
            onClick={() => setIsOpen(false)}
            className="p-3 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
          >
            <FaTimes size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-2 font-mont font-bold uppercase tracking-wider">
            <Link
              to="/"
              className="block text-lg text-gray-700 hover:text-[#D46B43] py-1 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Strona Główna
            </Link>

            <div>
              <Link
                to="/uslugi"
                className="block text-lg text-gray-700 hover:text-[#D46B43] py-1 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Usługi
              </Link>
              {services?.map((service, index) => (
                <Link
                  key={index}
                  to={`/uslugi#${service.slug || index}`}
                  className="pl-6 block text-sm text-gray-600 hover:text-[#D46B43] py-1.5 transition hover:translate-x-1"
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>

            <Link
              to="/informacje"
              className="block text-lg text-gray-700 hover:text-[#D46B43] py-1 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              O nas
            </Link>

            <Link
              to="/kontakt"
              className="block text-lg text-gray-700 hover:text-[#D46B43] py-1 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </Link>
          </div>

          <div className="pt-6 border-t border-gray-300 space-y-6">
            <div className="flex gap-6">
              <a
                href="https://www.facebook.com/people/MO-Transport/61589353359186/?locale=pl_PL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-700 hover:text-[#D46B43] hover:scale-110 transition-transform"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-700 hover:text-[#D46B43] hover:scale-110 transition-transform"
              >
                <FaInstagram />
              </a>
            </div>

            <div className="flex flex-col gap-1 pb-20 font-mont">
              <p className="text-gray-600 text-sm">Skontaktuj się z nami</p>
              <a
                href="tel:668127294"
                className="block text-xl font-bold text-gray-800 hover:underline"
              >
                668 127 294
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
