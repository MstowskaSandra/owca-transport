import { servicesCards } from "../data/servicesCards"
import ServiceCard from "./ServiceCard"

const ServicesOverview = () => {
    return (
        <section className="bg-[#F1EAE6] pt-16 pb-8 lg:pt-20 font-text px-6 lg:px-12">
           
                <div className="max-w-6xl mx-auto text-center uppercase ">
                    <p className="text-[#D46B43] font-bold mb-2 tracking-wide">Nasze usługi</p>
                    <h2 className="font-mont text-xl lg:text-3xl font-extrabold text-[#353436] leading-tight">Kompleksowo pomagamy z transportem  i przeprowadzkami</h2>
                </div>
                

                <div className="flex flex-wrap justify-self-center max-w-6xl gap-4 mt-16">
                    {servicesCards.map((card, index) => (
                        <ServiceCard key={index} {...card} />
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row  justify-self-end gap-4 pt-16 lg:pt-22  font-mont text-sm font-semibold text-[#353436] text-center sm:text-left">
                    <span className="text-[#D46B43] font-bold text-md">
                    Nie znalazłeś usługi dla siebie?
                    </span>
                    <p className="max-w-xl">Skontaktuj się z nami, postaramy się pomóc</p>

                    <button className="font-mont font-bold rounded-full bg-[#D46B43] px-6 py-2.5 text-[10px] tracking-widest text-[#353436] shadow-md transition-all duration-200 active:scale-95 uppercase">Zadzwoń</button>
                </div>
         
        </section>
    );
};

export default ServicesOverview;

