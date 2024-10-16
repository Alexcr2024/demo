import i18n,{createInstance} from "i18next";
import { initReactI18next } from "react-i18next";

import es from "@/locales/es.json";
import en from "@/locales/en.json";

export default async function initTranslations({ locales, defaultLocale = "en", i18nInstance }) {
    if (!i18nInstance) {
        i18nInstance = createInstance();
    }
    await i18nInstance
        .use(initReactI18next)
        .init({
            resources: {
                en: {translation: en},
                es: {translation: es},
            },
            lng: defaultLocale,
            fallbackLng: defaultLocale,
            interpolation: {
                escapeValue: false,
            },
        });

    return {
        i18n: i18nInstance,
        t: i18nInstance.t.bind(i18nInstance),
    }

}