import { useContext } from "react";
import {
    TranslationContext,
    TranslationContextType,
} from "../translation-context";

export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};
