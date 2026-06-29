export const validateForm = (formData) => {
  const errors = {};

  if (!formData.userName || formData.userName.trim().length < 5) {
    errors.userName = "Imię i nazwisko musi mieć min. 5 znaków.";
  }

  const phoneRegex = /^[0-9]{9,12}$/;
  if (!formData.phone || !phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
    errors.phone = "Podaj poprawny numer telefonu.";
  }

  if (!formData.fromCity || formData.fromCity.trim().length < 2) {
    errors.fromCity = "Podaj miejscowość początkową.";
  }

  if (!formData.fromFloor || formData.fromFloor.trim().length === 0) {
    errors.fromFloor = "Wpisz piętro początkowe (np. 0 lub parter).";
  }

  if (!formData.toCity || formData.toCity.trim().length < 2) {
    errors.toCity = "Podaj miejscowość docelową.";
  }

  if (!formData.toFloor || formData.toFloor.trim().length === 0) {
    errors.toFloor = "Wpisz piętro docelowe.";
  }

  if (!formData.cargo || formData.cargo.trim().length < 5) {
    errors.cargo = "Opisz krótko, co jest do przewiezienia (min. 5 znaków).";
  }

  if (!formData.maxDimension || formData.maxDimension.trim().length < 3) {
    errors.maxDimension = "Podaj przybliżony wymiar największego sprzętu.";
  }

  if (!formData.rodo) {
    errors.rodo = "Musisz zaakceptować zgodę RODO.";
  }

  return errors;
};