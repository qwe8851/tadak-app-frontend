import * as Localization from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import ja from "./locales/ja.json";
import ko from "./locales/ko.json";

const locales = Localization.getLocales();
const locale = locales[0]?.languageCode || "en";

i18n.use(initReactI18next).init({
  compatibilityJSON: "v4",
  lng: locale.startsWith("ko") ? "ko" : locale.startsWith("ja") ? "ja" : "en", // 기본 언어
  fallbackLng: "en",
  resources: {
    en: { translation: en },
    ko: { translation: ko },
    ja: { translation: ja },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
