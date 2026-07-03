const StepCard = ({ num, text }) => {
  return (
    <div className="flex items-center justify-center bg-white border-4 border-[#C2B7B2] rounded-[36px] px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl shadow-md w-full max-w-85 min-h-40 mx-auto">
      <p className="font-mont sm:text-sm font-extrabold text-[#353436] uppercase tracking-wide leading-relaxed max-w-65">
        <span className="text-[#D46B43] mr-1.5 font-bold text-xl">{num}</span>
        {text}
      </p>
    </div>
  );
};

export default StepCard;
