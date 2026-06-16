import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Nav = () => {
    return (
        <nav className="sticky top-0 z-50 bg-[#fafff4] shadow-md">
            <div className="mx-auto px-4 py-4 sm:px-6 sm:py-4 lg:px-12 flex items-center justify-between">
                <NavLink
                    to="/"
                    className="text-xl sm:text-2xl lg:text-2xl font-candal font-bold uppercase text-black-700"
                >
                    O.M Transport
                </NavLink>
            

            <div className="hidden lg:flex space-x-8 items-center">
                <NavLink to="/informacje">O nas</NavLink>
                <NavLink to="/lokalizacje">Lokalizacje</NavLink>
                <NavLink to="/kontakt">Kontakt</NavLink>
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
                className="text-black-700 font-mont font-bold text-sm hover:underline"
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
    )
};

export default Nav;