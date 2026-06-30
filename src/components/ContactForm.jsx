import { useRef, useState } from "react";
import { validateForm } from "../utils/validateForm";

export const ContactForm = () => {
  const formRef = useRef();
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataObj = new FormData(formRef.current);
    const data = {
      userName: formDataObj.get("userName"),
      phone: formDataObj.get("phone"),
      fromCity: formDataObj.get("fromCity"),
      fromFloor: formDataObj.get("fromFloor"),
      toCity: formDataObj.get("toCity"),
      toFloor: formDataObj.get("toFloor"),
      cargo: formDataObj.get("cargo"),
      maxDimension: formDataObj.get("maxDimension"),
      rodo: formDataObj.get("rodo") === "on",
    };

    const validationErrors = validateForm(data);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);

      setTimeout(() => {
        setIsSending(false);
        formRef.current.reset();
        alert("Wiadomość wysłana pomyślnie!");
      }, 2000);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white p-4 sm:p-6 lg:p-10 rounded-4xl shadow-2xl border-4 border-[#D46B43]">
      <h3 className="font-mont font-extrabold tracking-wider text-xl text-[#353436] uppercase text-center pb-4">
        Wycena Transportu
      </h3>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-black text-[#D46B43] mb-2 uppercase tracking-widest">
              Imię i nazwisko
            </label>
            <input
              name="userName"
              type="text"
              placeholder="np. Jan Kowalski"
              className={`w-full px-5 py-3 rounded-xl bg-transparent border-2 focus:border-[#D46B43] outline-none transition-all text-xs font-semibold ${
                errors.userName ? "border-red-500" : "border-gray-200"
              }`}
            />
            {errors.userName && (
              <p className="text-red-500 text-[10px] mt-1 font-bold">
                {errors.userName}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-black text-[#D46B43] mb-2 uppercase tracking-widest">
              Telefon
            </label>
            <input
              name="phone"
              type="tel"
              placeholder="Numer kontaktowy..."
              className={`w-full px-5 py-3 rounded-xl bg-transparent border-2 focus:border-[#D46B43] outline-none transition-all text-xs font-semibold ${
                errors.phone ? "border-red-500" : "border-gray-200"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-[10px] mt-1 font-bold">
                {errors.phone}
              </p>
            )}
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
              className={`w-full px-5 py-3 rounded-xl bg-transparent border-2 focus:border-[#D46B43] outline-none transition-all text-xs font-semibold ${
                errors.fromCity ? "border-red-500" : "border-gray-200"
              }`}
            />
            {errors.fromCity && (
              <p className="text-red-500 text-[10px] mt-1 font-bold">
                {errors.fromCity}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-black text-[#D46B43] mb-2 uppercase tracking-widest">
              Z którego piętra
            </label>
            <input
              name="fromFloor"
              type="text"
              placeholder="np. Parter, 3"
              className={`w-full px-5 py-3 rounded-xl bg-transparent border-2 focus:border-[#D46B43] outline-none transition-all text-xs font-semibold ${
                errors.fromFloor ? "border-red-500" : "border-gray-200"
              }`}
            />
            {errors.fromFloor && (
              <p className="text-red-500 text-[10px] mt-1 font-bold">
                {errors.fromFloor}
              </p>
            )}
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
              className={`w-full px-5 py-3 rounded-xl bg-transparent border-2 focus:border-[#D46B43] outline-none transition-all text-xs font-semibold ${
                errors.toCity ? "border-red-500" : "border-gray-200"
              }`}
            />
            {errors.toCity && (
              <p className="text-red-500 text-[10px] mt-1 font-bold">
                {errors.toCity}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-black text-[#D46B43] mb-2 uppercase tracking-widest">
              Na które piętro
            </label>
            <input
              name="toFloor"
              type="text"
              placeholder="np. 4, dom wolnostojący"
              className={`w-full px-5 py-3 rounded-xl bg-transparent border-2 focus:border-[#D46B43] outline-none transition-all text-xs font-semibold ${
                errors.toFloor ? "border-red-500" : "border-gray-200"
              }`}
            />
            {errors.toFloor && (
              <p className="text-red-500 text-[10px] mt-1 font-bold">
                {errors.toFloor}
              </p>
            )}
          </div>
        </div>

        <hr className="border-gray-100" />

        <div>
          <label className="block text-xs font-black text-[#D46B43] mb-2 uppercase tracking-widest">
            Co jest do przewiezienia
          </label>
          <textarea
            name="cargo"
            rows="4"
            placeholder="np. Szafa trzydrzwiowa, lodówka, 10 kartonów..."
            className={`w-full px-5 py-3 rounded-xl bg-transparent border-2 focus:border-[#D46B43] outline-none transition-all resize-none text-xs font-semibold ${
              errors.cargo ? "border-red-500" : "border-gray-200"
            }`}
          ></textarea>
          {errors.cargo && (
            <p className="text-red-500 text-[10px] mt-1 font-bold">
              {errors.cargo}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-black text-[#D46B43] mb-2 uppercase tracking-widest">
            Największy wymiar przewożonego sprzętu
          </label>
          <input
            name="maxDimension"
            type="text"
            placeholder="np. Szafa: 220cm x 120cm x 60cm"
            className={`w-full px-5 py-3 rounded-xl bg-transparent border-2 focus:border-[#D46B43] outline-none transition-all text-xs font-semibold ${
              errors.maxDimension ? "border-red-500" : "border-gray-200"
            }`}
          />
          {errors.maxDimension && (
            <p className="text-red-500 text-[10px] mt-1 font-bold">
              {errors.maxDimension}
            </p>
          )}
        </div>

        <div className="py-2">
          <div className="flex items-start gap-3">
            <input
              name="rodo"
              type="checkbox"
              id="rodo"
              className={`mt-0.5 h-4 w-4 shrink-0 rounded border-2 cursor-pointer transition-colors ${
                errors.rodo
                  ? "border-red-500"
                  : "border-gray-300 text-[#D46B43] focus:ring-[#D46B43]"
              }`}
            />
            <label
              htmlFor="rodo"
              className="text-[9px] leading-tight uppercase font-bold tracking-tight cursor-pointer transition-colors text-gray-500"
            >
              Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z
              ustawą o ochronie danych osobowych w związku z wysłaniem zapytania
              przez formularz kontaktowy.
            </label>
          </div>
          {errors.rodo && (
            <p className="text-red-500 text-[10px] font-bold mt-2 ml-7">
              {errors.rodo}
            </p>
          )}
        </div>

        <div className="flex justify-center pt-4">
          <button
            type="submit"
            disabled={isSending}
            className={`cursor-pointer w-full sm:w-auto bg-[#D46B43] text-white font-black text-[10px] uppercase tracking-[0.2em] px-14 py-4 rounded-xl shadow-xl transition-all duration-300
              ${isSending ? "opacity-50 cursor-not-allowed" : "hover:bg-[#b5552f] hover:-translate-y-1"}`}
          >
            {isSending ? "Wysyłanie..." : "Wyślij zapytanie"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
