const FeatureCard = ({ icon: Icon, title, description }) => {
    return (
        <div className="bg-white border-4 border-[#C2B7B2] rounded-[36px] px-4 py-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl shadow-md w-full max-w-85 mx-auto min-h-60 ">
            <div className="text-5xl mb-4 flex justify-center items-center text-[#D46B43]">
                <Icon />
            </div>
            <div className="flex-1 flex flex-col justify-start space-y-4 ">
                <h3 className="font-mont font-extrabold text-md text-[#353436] uppercase tracking-wider leading-snug">
                {title}
                </h3>
                <p className="font-mont font-normal text-xs tracking-wider text-gray-700 leading-relaxed  mx-auto">
                {description}
                </p>
            </div>
        </div>
    );
};

export default FeatureCard;