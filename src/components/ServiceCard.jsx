import { Link } from "react-router-dom";

const ServiceCard = ({ icon: Icon, title, text, link }) => {
  return (
    <div className="bg-white border-4 border-[#C2B7B2] rounded-[36px] px-4 py-6 flex flex-col items-center text-center relative transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl shadow-md w-full max-w-85 mx-auto min-h-60 ">
      <div className="text-5xl mb-4 flex justify-center items-center text-[#D46B43]">
        <Icon />
      </div>

      <div className="flex-1 flex flex-col justify-start space-y-4 ">
        <h3 className="font-mont font-extrabold text-md text-[#353436] uppercase tracking-wider leading-snug">
          {title}
        </h3>
        <p className="font-mont font-normal text-xs tracking-wider text-gray-700 leading-relaxed  mx-auto">
          {text}
        </p>
      </div>

      <div className="w-full flex justify-end pt-4">
        <Link
          to={`/uslugi/${link}`}
          className="font-mont font-bold rounded-full bg-[#EAB33B] hover:bg-[#D46B43] px-6 py-2.5 text-[10px] tracking-widest text-[#353436] shadow-md transition-all duration-200 active:scale-95 uppercase"
        >
          Zobacz
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
