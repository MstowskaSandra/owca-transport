import { MdOutlinePhoneCallback } from "react-icons/md";

export const CallButton = ({ variant = "orange", text = "Zadzwoń do nas" }) => {
  const variants = {
    orange: "bg-[#D46B43] hover:bg-[#EAB33B]",
    yellow: "bg-[#EAB33B] hover:bg-[#D46B43]",
  };

  const selectedVariant = variants[variant] || variants.orange;

  return (
    <button>
      <a
        href="tel:668127294"
        className={`cursor-pointer uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full transition w-fit font-mont font-bold text-[10px] tracking-widest ${selectedVariant}`}
      >
        <MdOutlinePhoneCallback className="w-5 h-5" />
        <span>{text}</span>
      </a>
    </button>
  );
};

export default CallButton;