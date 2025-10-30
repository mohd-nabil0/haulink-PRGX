import * as Localization from "expo-localization";
import { I18n } from "i18n-js";

import { languageCode } from "./languageCode";
import en from "./translations/en.json";

const i18n = new I18n({ en });

i18n.locale = Localization.getLocales()[0].languageCode || languageCode.en;

// Enable fallback — if a translation is missing, use `en`
i18n.enableFallback = true;

export const setLocale = (locale: string) => {
  i18n.locale = locale;
};

export const t = (key: string, options?: any) => i18n.t(key, options);

export default i18n;
