import { services } from "../data/services";

const Services = () => {
  return (
    <section className="bg-[#F1EAE6] pt-16 pb-8 lg:pt-20 font-text px-6 lg:px-12">
      <div className="max-w-6xl mx-auto text-center uppercase pb-12">
        <p className="text-[#D46B43] font-bold mb-2 tracking-wide">
          Nasze usługi
        </p>
        <h2 className="font-mont text-xl lg:text-3xl font-extrabold text-[#353436] leading-tight">
          W czym możemy ci pomóc?
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <a
            key={index}
            href={`#link`}
            className="group flex items-center justify-between bg-white p-6 rounded-2xl shadow-md border-2 border-gray-100 hover:border-[#D46B43] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
          >
            <span className="font-mont font-bold text-xs sm:text-sm text-gray-800 uppercase tracking-wide group-hover:text-[#D46B43] transition-colors">
              {service.name}
            </span>

            <svg
              className="w-5 h-5 text-gray-400 group-hover:text-[#D46B43] group-hover:translate-x-1 transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Services;
