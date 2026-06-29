import { reviews } from "../data/reviews";
import ReviewCard from "./ReviewCard";
import { FcGoogle } from "react-icons/fc";


export const ReviewSection = () => (
  <section className="bg-[#F1EAE6] py-16 lg:pyggggggg-18 font-text overflow-hidden">
    <div className="max-w-6xl mx-auto text-center uppercase ">
      <p className="text-[#D46B43] font-bold mb-2 tracking-wide">opinie</p>
      <h2 className="font-mont text-xl lg:text-2xl font-extrabold text-[#353436] leading-tight">
        Nasza praca mówi sama za siebie, tak samo jak opinie naszych klientów
      </h2>
    </div>

    <div className="flex flex-wrap justify-center gap-6 mt-12 px-12">
      {reviews.map((item, index) => (
        <ReviewCard key={index} {...item} delay={0.2 + index * 0.1} />
      ))}
    </div>

    <div className="mt-12 flex justify-end pr-12">
      <a
        href="https://share.google/r7xgF3dJDwaWx6zH9"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 cursor-pointer font-mont text-xs sm:text-sm font-semibold text-white px-5 py-2 rounded-full bg-[#D46B43] hover:bg-orange-600 hover:scale-105 transition"
      >
        Sprawdź nas w Google
        <FcGoogle className="text-lg" />
      </a>
    </div>
  </section>
);

export default ReviewSection;