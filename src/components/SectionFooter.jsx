const SectionFooter = ({ title, subtext, ctaText }) => {
    return (
        <div className="flex flex-col sm:flex-row  justify-self-end gap-4 pt-16 lg:pt-22  font-mont text-sm font-semibold text-[#353436] text-center sm:text-left">
            <span className="text-[#D46B43] font-bold text-md">
            {title}
            </span>
            <p className="max-w-xl">{subtext}</p>

            <button className="font-mont font-bold rounded-full bg-[#D46B43] px-6 py-2.5 text-[10px] tracking-widest text-[#353436] shadow-md transition-all duration-200 active:scale-95 uppercase">{ctaText}</button>
        </div>
    );
};

export default SectionFooter;