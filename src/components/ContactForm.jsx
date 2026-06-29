export const ContactForm = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-4 sm:p-6 lg:p-12 rounded-4xl shadow-2xl border-4 border-[#D46B43]">
      <h3 className="text-xl font-extrabold text-[#D46B43] mb-8 uppercase tracking-tight text-center">
        Wycena Transportu
      </h3>

      <form className="space-y-6 ">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-black text-[#D46B43] mb-2 uppercase tracking-widest">
              Imię i nazwisko
            </label>
            <input
              name="userName"
              type="text"
              placeholder="np. Jan Kowalski"
              className="w-full px-5 py-3 rounded-xl bg-transparent border-2 border-gray-200 focus:border-green-700 outline-none transition-all text-xs font-semibold"
            />
          </div>

          <div>
            <label className="block text-xs font-black text-[#D46B43] mb-2 uppercase tracking-widest">
              Telefon
            </label>
            <input
              name="phone"
              type="tel"
              placeholder="Numer kontaktowy..."
              className="w-full px-5 py-3 rounded-xl bg-transparent border-2 border-gray-200 focus:border-green-700 outline-none transition-all text-xs font-semibold"
            />
          </div>
        </div>

        <hr className="border-gray-100" />

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <label className="block text-xs font-black text-[#D46B43] mb-2 uppercase tracking-widest">
              Miejscowość z której przewozimy
            </label>
            <input
              name="fromCity"
              type="text"
              placeholder="np. Warszawa"
              className="w-full px-5 py-3 rounded-xl bg-transparent border-2 border-gray-200 focus:border-green-700 outline-none transition-all text-xs font-semibold"
            />
          </div>

          <div>
            <label className="block text-xs font-black text-[#D46B43] mb-2 uppercase tracking-widest">
              Z którego piętra
            </label>
            <input
              name="fromFloor"
              type="text"
              placeholder="np. Parter, 3"
              className="w-full px-5 py-3 rounded-xl bg-transparent border-2 border-gray-200 focus:border-green-700 outline-none transition-all text-xs font-semibold"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <label className="block text-xs font-black text-[#D46B43] mb-2 uppercase tracking-widest">
              Miejscowość do której przewozimy
            </label>
            <input
              name="toCity"
              type="text"
              placeholder="np. Kraków"
              className="w-full px-5 py-3 rounded-xl bg-transparent border-2 border-gray-200 focus:border-green-700 outline-none transition-all text-xs font-semibold"
            />
          </div>

          <div>
            <label className="block text-xs font-black text-[#D46B43] mb-2 uppercase tracking-widest">
              Na które piętro
            </label>
            <input
              name="toFloor"
              type="text"
              placeholder="np. 4, dom wolnostojący"
              className="w-full px-5 py-3 rounded-xl bg-transparent border-2 border-gray-200 focus:border-green-700 outline-none transition-all text-xs font-semibold"
            />
          </div>
        </div>

        <hr className="border-gray-100" />

        <div>
          <label className="block text-xs font-black text-[#D46B43]  mb-2 uppercase tracking-widest">
            Co jest do przewiezienia
          </label>
          <textarea
            name="cargo"
            rows="4"
            placeholder="np. Szafa trzydrzwiowa, lodówka, 10 kartonów..."
            className="w-full px-5 py-3 rounded-xl bg-transparent border-2 border-gray-200 focus:border-green-700 outline-none transition-all resize-none text-xs font-semibold"
          ></textarea>
        </div>

        <div>
          <label className="block text-xs font-black text-[#D46B43] mb-2 uppercase tracking-widest">
            Największy wymiar przewożonego sprzętu
          </label>
          <input
            name="maxDimension"
            type="text"
            placeholder="np. Szafa: 220cm x 120cm x 60cm"
            className="w-full px-5 py-3 rounded-xl bg-transparent border-2 border-gray-200 focus:border-green-700 outline-none transition-all text-xs font-semibold"
          />
        </div>

        <div className="py-2">
          <div className="flex items-start gap-3">
            <input
              name="rodo"
              type="checkbox"
              id="rodo"
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-2 border-gray-300 text-green-700 focus:ring-green-600 cursor-pointer"
            />
            <label
              htmlFor="rodo"
              className="text-[9px] leading-tight uppercase font-bold tracking-tight cursor-pointer transition-colors text-gray-500"
            >
              Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z
              ustawą o ochronie danych osobowych w związku z wysłaniem
              zapytania przez formularz kontaktowy.
            </label>
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="cursor-pointer w-full sm:w-auto bg-[#D46B43] text-white font-black text-[10px] uppercase tracking-[0.2em] px-14 py-4 rounded-xl shadow-xl transition-all duration-300 hover:bg-orange-500 hover:-translate-y-1"
          >
            Wyślij zapytanie
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;