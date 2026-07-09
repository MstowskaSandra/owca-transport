import ContactForm from "../components/ContactForm";
import Reveal from "../utils/Reveal";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail, MdLocationOn } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { HiShieldCheck } from "react-icons/hi";

const Contact = () => {
  return (
    <section className="bg-[#F1EAE6] py-16 pb-8 lg:py-20 font-text px-6 lg:px-12 flex flex-col md:flex-row justify-around items-center md:items-start gap-12 md:gap-4">
      <Reveal className="flex flex-col justify-items-start gap-4 px-6 pt-0 md:pt-26 w-full md:w-[40%]">
        <h2 className="font-mont font-extrabold tracking-wider text-2xl text-[#353436] uppercase text-center md:text-left">
          Skontaktuj się z nami
        </h2>
        <p className="font-mont leading-6 tracking-wider text-[#353436] border-b-3 border-[#D46B43] pb-10 text-center md:text-left">
          Zadzwoń bezpośrednio albo zostaw nam namiary – oddzwonimy z gotową
          wyceną szybciej, niż zdążysz spakować pierwszy karton.
        </p>

        <div className="flex flex-col items-start gap-6 pt-10">
          <a
            href="tel:734414640"
            className="flex items-center gap-6 group cursor-pointer w-fit"
          >
            <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100 hover:bg-[#EAB33B] hover:text-[#D46B43] transition-all duration-300">
              <FiPhone size={28} className="text-black transition-colors" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600 mb-1">
                Zadzwoń do nas
              </p>
              <p className="text-sm lg:text-xl font-extrabold text-[#353436] !text-[#353436] hover:underline">
                668 127 294
              </p>
            </div>
          </a>

          <a
            href="mailto:owca.ogrody@gmail.com"
            className="flex items-center gap-6 group cursor-pointer w-fit"
          >
            <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100 hover:bg-[#EAB33B] hover:text-[#D46B43] transition-all duration-300">
              <MdOutlineMail
                size={28}
                className="text-black transition-colors"
              />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600 mb-1">
                Napisz e-mail
              </p>
              <p className="text-sm lg:text-xl font-extrabold break-all sm:break-normal text-[#353436] !text-[#353436] hover:underline">
                owczarski.transport@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://maps.app.goo.gl/1YNFGqNLspPWdPC46"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 group cursor-pointer w-fit"
          >
            <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100 hover:bg-[#EAB33B] hover:text-[#D46B43] transition-all duration-300">
              <MdLocationOn
                size={28}
                className="text-black transition-colors"
              />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600 mb-1">
                Znajdź nas
              </p>
              <p className="text-sm lg:text-xl font-extrabold text-[#353436] hover:underline">
                Brzegowa 48, 57-100 Strzelin
              </p>
            </div>
          </a>
          <a
            href="https://fixly.pl/profil/kam4zmxu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 group cursor-pointer w-fit"
          >
            <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100 hover:bg-[#EAB33B] hover:text-[#D46B43] transition-all duration-300">
              <HiShieldCheck
                size={28}
                className="text-black transition-colors"
              />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600 mb-1">
                Zamów usługe
              </p>
              <p className="text-sm lg:text-xl font-extrabold text-[#353436] hover:underline">
                FIXLY- jesteśmy zweryfikowanym usługodawcą
              </p>
            </div>
          </a>
        </div>

        <div className="flex justify-center md:justify-start gap-4 pt-16">
          <a
            href="https://www.facebook.com/profile.php?id=61589353359186&locale=pl_PL"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black p-4 rounded-2xl text-white hover:bg-orange-500 transition-all shadow-lg hover:-translate-y-1"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://instagram.com/owca.ogrody/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black p-4 rounded-2xl text-white hover:bg-orange-500 transition-all shadow-lg hover:-translate-y-1"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.15} className="w-full md:w-[60%] px-4">
        <ContactForm />
      </Reveal>
    </section>
  );
};

export default Contact;
