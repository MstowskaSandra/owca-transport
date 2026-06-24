
const CitiesPills = ({ city }) => {
    return (
        <div className="bg-white border-3 border-[#C2B7B2] rounded-full px-6 py-4 shadow-md hover:text-[#D46B43] hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <p className="font-mont uppercase text-xs font-extrabold tracking-widest">{city}</p>
        </div>
    );
};

export default CitiesPills;