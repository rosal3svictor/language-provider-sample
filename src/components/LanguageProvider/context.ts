/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createContext, useContext } from 'react';

import type { Language } from '@interfaces';

/** React Context to manage the Language Configuration */
export const LanguageProviderContext = createContext<{
  /** Hook to access the translation keys to display a string localized */
  // eslint-disable-next-line @typescript-eslint/ban-types
  useTranslation: Function;
  currentLanguage: Language;
  setCurrentLanguage: (locale: string) => void;
  supportedLanguages: Language[];
  languageIsSelected: (props: Language) => boolean;
  getNameFromLocale: (locale: string) => string;
  languagesAsOptions: Array<{ label: string; value: unknown }>;
  defaultLangCount: number;
  getAvailableLocales: () => Array<{ label: string; value: unknown }>;
}>({} as any);

/** Custom Hook to access the Language Configuration Provider */
export const useLanguageProviderContext = () =>
  useContext(LanguageProviderContext);
