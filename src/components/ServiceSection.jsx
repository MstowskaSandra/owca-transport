import CallButton from "./CallButton";

export const ServiceSection = ({ service, variant = "left", id }) => {
  const isRight = variant === "right";

  return (
    <div
      id={id}
      className="scroll-mt-24 py-8 md:py-16 lg:py-20 font-text px-6 lg:px-12 max-w-7xl mx-auto bg-[#ffffff] rounded-3xl shadow-md"
    >
      <div
        className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
          isRight ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="w-full md:w-1/2 space-y-8 font-mont order-2 md:order-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#D46B43] uppercase tracking-tight text-center">
            {service.name}
          </h2>

          <ul className="space-y-3 pl-2">
            {service.features?.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 font-semibold text-sm sm:text-base text-gray-600 tracking-wide"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D46B43]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex justify-center items-center pt-4 md:pt-0">
            <CallButton />
          </div>
        </div>

        <div className="w-full md:w-1/2 order-1 md:order-0">
          <div className="overflow-hidden rounded-3xl shadow-xl border-4 border-gray-100 transform hover:scale-[1.02] transition duration-300">
            <img
              src={service.imgUrl}
              alt={service.name}
              className="w-full h-56 sm:h-75 md:h-100 object-cover bg-gray-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
