import { galleryImages } from "../data/gallery";
import Reveal from "../utils/Reveal";

export const Gallery = () => {
  return (
    <section className="bg-[#F1EAE6] pt-16 pb-12 lg:pt-20 font-text px-6 lg:px-12">
      <Reveal className="max-w-6xl mx-auto text-center uppercase pb-12">
        <p className="text-[#D46B43] font-bold mb-2 tracking-wide">
          Nasze realizacje
        </p>
        <h2 className="font-mont text-xl lg:text-3xl font-extrabold text-[#353436] leading-tight">
          Galeria zdjęć z naszych transportów i przeprowadzek
        </h2>
      </Reveal>

      <Reveal
        delay={0.25}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto"
      >
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden rounded-2xl shadow-md border-3 border-[#C2B7B2] bg-white transform hover:shadow-2xl hover:border-[#D46B43] transition duration-300 group cursor-pointer"
          >
            <img
              src={image.src}
              alt={image.alt || "Realizacja transportu"}
              loading="lazy"
              className="w-full h-58 sm:h-68 md:h-72 object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <p className="font-mont font-bold text-[10px] sm:text-xs text-white uppercase tracking-wider text-center leading-snug">
                {image.alt || "O.M Transport"}
              </p>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
};

export default Gallery;