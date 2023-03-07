import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./services/locales/en.json";
import oromifa from "./services/locales/oro.json";

const resources = {
  en: {
    translation: {
      ...english,
    },
  },
  oro: {
    translation: {
      ...oromifa,
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    fallbackLng: "en",
  });

export default i18n;
