import { services } from "../data/services";
import { HashLink as Link } from "react-router-hash-link"; 
import { generateSlug } from "../utils/generateSlug"; 

export const Footer = () => {
  return (
    <footer className="w-full bg-[#2f2e32] text-white font-mont">
      <div className="max-w-7xl mx-auto px-12 py-12 border-b border-white/30 flex flex-col lg:flex-row justify-between gap-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          <div>
            <h5 className="font-bold mb-2 lg:mb-4 text-md lg:text-lg">
              Nasze usługi
            </h5>
            <ul className="space-y-2 text-xs lg:text-sm text-white/80 w-84">
              {services.map((item, index) => {
                const slug = generateSlug(item.name);
                return (
                  <li key={index}>
                    <Link
                      smooth
                      to={`/uslugi#${slug}`}
                      className="hover:text-white transition hover:translate-x-1 inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-2 lg:mb-4 text-md lg:text-lg">
              Nasze media
            </h5>
            <div className="flex flex-col gap-2 text-xs lg:text-sm text-white/80">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition hover:translate-x-1 inline-block"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61589353359186&locale=pl_PL"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition hover:translate-x-1 inline-block"
              >
                Facebook
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-bold mb-2 lg:mb-4 text-md lg:text-lg">
              Kontakt
            </h5>
            <div className="flex flex-col gap-2 text-xs lg:text-sm text-white/80">
              <a
                href="tel:734414640"
                className="hover:text-white transition hover:translate-x-1 inline-block"
              >
                <span className="font-semibold text-white">Tel:</span> 668 127
                294
              </a>

              <a
                href="mailto:owca.transport@gmail.com"
                className="hover:text-white transition hover:translate-x-1 inline-block"
              >
                <span className="font-semibold text-white">Email:</span>{" "}
                owczarski.transport@gmail.com
              </a>

              <a
                href="https://maps.google.com/?q=ul.Brzegowa 48, Strzelin"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition hover:translate-x-1 inline-block"
              >
                <span className="font-semibold text-white">Adres:</span> ul.
                Brzegowa 48, 57-100 Strzelin
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 w-60">
          <img
            src="/assets/logo-circle.svg"
            alt="Logo Owca Ogrody"
            className="w-24 lg:w-36 h-24 lg:h-36 object-contain"
          />
          <p className="font-bold text-lg tracking-wider uppercase">
            M.O Transport
          </p>
          <p className="font-bold text-xs tracking-wider uppercase">
            Michał Owczarski
          </p>
        </div>
      </div>

      <div className="text-center text-xs font-semibold text-white/70 py-4 px-6 leading-relaxed">
        <p>
          © {new Date().getFullYear()} O.M Transport. Wszelkie prawa
          zastrzeżone.
        </p>
        <p className="mt-1 opacity-80">
          Projekt i realizacja:{" "}
          <a
            href="https://www.linkedin.com/in/sandra-mstowska-962368376/"
            className="text-white transition hover:translate-x-1 inline-block hover:text-orange-500"
          >
            Sandra Mstowska
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;