import { FaLuggageCart } from "react-icons/fa";
import { LuTrash2, LuWarehouse, LuTv } from "react-icons/lu";
import { FaTruckRampBox, FaBroom } from "react-icons/fa6";


export const servicesCards = [
     {
        title: "Przeprowadzki prywatne i firmowe",
        text: "Kompleksowa usługa od małej kawalerki po duże biuro wraz z wnoszeniem i zabezpieczeniem mienia.",
        link: "uslugi",
        icon: FaLuggageCart,
    },
    {
        title: "Przewóz AGD i RTV",
        text: "Bezpieczny transport sprzętu w pionie przy użyciu specjalnych pasów i mat ochronnych.",
        link: "uslugi",
        icon: LuTv,
    },
    {
        title: "Dostawa z marketów typu IKEA & castorama",
        text: "Szybki odbiór i transport mebli oraz materiałów budowlanych prosto pod Twoje drzwi.",
        link: "uslugi",
        icon: FaTruckRampBox,
    },
    {
        title: "Opróżnianie mieszkań",
        text: "Sprawne czyszczenie i przygotowanie lokali pod klucz przed sprzedażą lub wynajmem.",
        link: "uslugi",
        icon: LuWarehouse,
    },
    {
       title: "Wywóz odpadów i gabarytów",
       text: "Szybkie pozbywanie się starych mebli i wielkogabarytowych śmieci bez wysiłku z Twojej strony.",
        link: "uslugi",
        icon: LuTrash2, 
    },
    {
       title: "Oczyszczanie piwnic, strychów i garaży",
       text: "Gruntowne sprzątanie i usuwanie zbędnego wyposażenia, które pozwoli Ci odzyskać wolną przestrzeń.",
        link: "uslugi",
        icon: FaBroom,
    },
]