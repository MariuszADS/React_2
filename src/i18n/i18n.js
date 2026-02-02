import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json"
import pl from "./locales/pl.json"
import no from "./locales/no.json"

i18n.use(initReactI18next).init({
resources: {
      en: { translation: en },
      pl: { translation: pl },
      no: { translation: no }
    },
    lng:"pl",
    fallbackLng:"pl",
    interpolation:{escapeValue: false}
})

export default i18n
