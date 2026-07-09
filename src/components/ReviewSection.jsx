import { reviews } from "../data/reviews";
import ReviewCard from "./ReviewCard";
import { FcGoogle } from "react-icons/fc";
import { HiCheck } from "react-icons/hi";
import Reveal from "../utils/Reveal";



export const ReviewSection = () => (
  <section className="bg-[#F1EAE6] py-16 lg:py-18 font-text overflow-hidden">
    <Reveal className="max-w-6xl mx-auto text-center uppercase px-6">
      <p className="text-[#D46B43] font-bold mb-2 tracking-wide">opinie</p>

      <h2 className="font-mont text-lg md:text-xl lg:text-2xl font-extrabold text-[#353436] leading-tight">
        Nasza praca mówi sama za siebie, tak samo jak opinie naszych klientów
      </h2>
    </Reveal>

    <div className="flex flex-wrap justify-center gap-6 mt-12 mx-2 px-4 md:px-12 border-2 border-red-500">
      {reviews.map((item, index) => (
        <ReviewCard key={index} {...item} delay={0.2 + index * 0.1} />
      ))}
    </div>

    <Reveal
      delay={0.3}
      className="mt-12 flex flex-col items-center px-6 md:flex-row md:justify-end md:pr-12"
    >
      <div className="flex flex-col gap-4">
        <a
          href="https://share.google/r7xgF3dJDwaWx6zH9"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-center gap-2 cursor-pointer font-mont text-xs sm:text-sm font-semibold text-white w-full max-w-80 sm:w-auto px-5 py-3 rounded-full bg-[#D46B43] hover:bg-orange-600 hover:scale-105 transition shadow-md"
        >
          Sprawdź nas w Google
          <FcGoogle className="text-lg shrink-0" />
        </a>

        <a
          href="https://fixly.pl/profil/kam4zmxu"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-center gap-2 cursor-pointer font-mont text-xs sm:text-sm font-semibold text-white w-full max-w-80 sm:w-auto px-5 py-3 rounded-full bg-[#D46B43] hover:bg-orange-600 hover:scale-105 transition shadow-md"
        >
          Sprawdź nas w Fixly
          <HiCheck className="text-lg shrink-0 border-2 rounded-full" />
        </a>
      </div>
    </Reveal>
  </section>
);

export default ReviewSection; 