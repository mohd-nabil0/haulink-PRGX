import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Localization from "expo-localization";
import { I18n } from "i18n-js";
import React, {
  createContext,
  useCallback,
  useEffect,
  useState
} from "react";

import { languageCode } from "./constants";
import en from "./translations/en.json";

const i18n = new I18n({ en });
i18n.enableFallback = true;

const LANGUAGE_KEY = "appLocale";

export type TranslationContextType = {
  t: (key: string, options?: any) => string;
  locale: string;
  changeLanguage: (lang: string) => Promise<void>;
};

export const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

export const TranslationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [locales] = Localization.useLocales();
  const [locale, setLocale] = useState<string>(
    locales.languageCode || languageCode.en
  );

  useEffect(() => {
    (async () => {
      const savedLocale = await AsyncStorage.getItem(LANGUAGE_KEY);
      const activeLocale = savedLocale || (locales.languageCode || languageCode.en);
      i18n.locale = activeLocale;
      setLocale(activeLocale);
    })();
  }, []);

  const changeLanguage = async (lang: string) => {
    i18n.locale = lang;
    setLocale(lang);
    await AsyncStorage.setItem(LANGUAGE_KEY, lang);
  };

  const t = useCallback(
    (key: string, options?: any) => i18n.t(key, options),
    []
  );

  return (
    <TranslationContext.Provider value={{ t, locale, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};