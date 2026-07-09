import CallButton from "./CallButton";

const SectionFooter = ({ title, subtext }) => {
  return (
    <div className="pt-20 pb-8 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-3 font-mont text-sm font-semibold text-[#353436]">
      <span className="text-[#D46B43] font-bold text-md text-center sm:text-left">
        {title}
      </span>
      <p className="max-w-xl text-center sm:text-left">{subtext}</p>
      <CallButton variant="orange" text="Zadzwoń" />
    </div>
  );
};

export default SectionFooter;
