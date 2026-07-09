import { FcGoogle } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import Reveal from "../utils/Reveal";



const ReviewCard = ({ name, text, delay = 0 }) => {
  return (
    <Reveal
      delay={delay}
      className="flex-1 w-full min-w-80 max-w-60 md:max-w-[320px] bg-[#ffffff] border-2 border-[#D46B43] rounded-3xl shadow-lg p-5 sm:p-6 flex flex-col hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
    >
      <div className="flex items-center gap-2 sm:gap-3 pb-3 sm:pb-4">
        <FcGoogle className="text-2xl sm:text-3xl shrink-0" />

        <span className="font-semibold text-black text-xs sm:text-sm">
          {name}
        </span>
      </div>

      <div className="flex gap-1 pb-6">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} className="text-yellow-400 text-xs sm:text-sm" />
        ))}
      </div>

      <p className="text-sm text-gray-800 leading-relaxed italic">"{text}"</p>
    </Reveal>
  );
};

export default ReviewCard; 

