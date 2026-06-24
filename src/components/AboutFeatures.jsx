import { features } from "../data/features";
import FeatureCard from "./FeatureCard";
import SectionFooter from "./SectionFooter";

const AboutFeatures = () => {
    return (
        <section className="bg-[#F1EAE6]  pt-16 pb-8 lg:pt-20 font-text px-6 lg:px-12">
            <div className="max-w-6xl mx-auto py-8 text-center uppercase">
                <p className="text-[#D46B43] font-bold mb-2 tracking-wide">Dlaczego my?</p>
                <h2 className="font-mont text-7xl mb-4 lg:text-6xl font-bold text-[#353436] leading-tight">dowozimy</h2>
                <p className="text-sm text-[#353436] font-bold mb-2 tracking-wider">Niezależnie od tego, czy przewozimy jedną pralkę, czy pakujemy całe biuro –<br /><span className="text-[#D46B43] font-bold mb-2 tracking-wider">wchodzimy, robimy swoje i zostawiamy po sobie tylko uśmiech.</span></p>
            </div>

            <div className="flex flex-wrap justify-self-center max-w-6xl gap-4 mt-10">
                {features.map((item) => (
                    <div key={item.title}>
                        <FeatureCard {...item} />
                    </div>
                    
                ))}
            </div>

            <SectionFooter
                title="Nie znalazłeś usługi dla siebie?"
                subtext="Skontaktuj się z nami, postaramy się pomóc"
                ctaText="Zadzwoń"
            />

        </section>
    );
};

export default AboutFeatures;