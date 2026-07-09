const CitiesPills = ({ city }) => {
  return (
    <div className="bg-white border-2 sm:border-3 border-[#C2B7B2] rounded-full px-4 py-2.5 sm:px-6 sm:py-4 shadow-md hover:text-[#D46B43] hover:scale-105 hover:shadow-2xl transition-all duration-300">
      <p className="font-mont uppercase text-[10px] sm:text-xs font-extrabold tracking-widest text-center">
        {city}
      </p>
    </div>
  );
};

export default CitiesPills;
