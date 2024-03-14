import { COOKIES } from "@constants/cookies";
import i18n from "i18next";
import Cookies from "js-cookie";
import { initReactI18next } from "react-i18next";

import us from "@locales/en-us/translation.json";
import tw from "@locales/zh-tw/translation.json";

i18n
  // .use(Backend)
  .use(initReactI18next)
  .init({
    resources: {
      "zh-TW": { translation: tw },
      "en-US": { translation: us },
    },
    // backend: { loadPath: '/locales/zh-tw/translation.json' },
    lng: Cookies.get(COOKIES.LANG) || 'zh-TW',
    interpolation: { escapeValue: false },
  });

export default i18n;