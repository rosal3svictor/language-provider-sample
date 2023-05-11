/* eslint-disable tsdoc/syntax */
import React from 'react';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import { useSessionStorage } from '@utils';

import { LanguageProviderContext } from './context';
import { getSupportedLanguages } from './getSupportedLanguages';

import type { LanguageProviderOptions, Language } from '@interfaces';

/**
 * Provider to handle the internationalization related features within the app
 *
 * @example
 * import { LanguageProvider } from '@components';
 * import * as translations from './locales';
 *
 * ReactDOM.render(
 *  <LanguageProvider options={{ translations }}>
 *    <App />
 *  </LanguageProvider>,
 *  document.getElementById('root'),
 * );
 *
 */
export const LanguageProvider: React.FC<{
  children: React.ReactNode;
  options: LanguageProviderOptions;
}> = ({ children, options }) => {
  const fallbackLng = 'en_US';
  const [storedValue, setValue] = useSessionStorage({
    key: 'i18nextLng',
    defaultValue: fallbackLng,
  });
  const supportedLanguages = getSupportedLanguages();

  const currentLanguage = supportedLanguages.find(
    ({ locale }) => locale === storedValue,
  ) as Language;

  void i18n.use(initReactI18next).init({
    resources: options.translations,
    lng: storedValue,
    interpolation: { escapeValue: false },
    defaultNS: 'translation',
    fallbackLng,
    load: 'all',
    debug: true,
  });

  const setCurrentLanguage = (locale: string): void => {
    void i18n.changeLanguage(locale);
    setValue(locale);

    document.documentElement.setAttribute('lang', locale);
    const currentLanguageDir =
      supportedLanguages.find((item) => item.locale === locale)?.dir ?? 'ltr';
    document.body.dir = currentLanguageDir;
  };

  const languageIsSelected = ({ locale }: Language): boolean =>
    locale === storedValue;

  const getNameFromLocale = (locale: string): string =>
    supportedLanguages.find((language) => language.locale === locale)
      ?.name as string;

  const languagesAsOptions: Array<{ label: string; value: unknown }> =
    supportedLanguages.map(({ name: label, locale: value }) => ({
      label,
      value,
    }));

  /** Number of default languages availables within the app  */
  const defaultLangCount = supportedLanguages.length;

  const getAvailableLocales = (): Array<{
    label: string;
    value: unknown;
  }> => languagesAsOptions.filter((languageItem) => languageItem.value);

  return (
    <LanguageProviderContext.Provider
      value={{
        useTranslation,
        currentLanguage,
        setCurrentLanguage,
        supportedLanguages,
        languagesAsOptions,
        languageIsSelected,
        getNameFromLocale,
        defaultLangCount,
        getAvailableLocales,
      }}
    >
      {children}
    </LanguageProviderContext.Provider>
  );
};

export * from './context';
export * from './supportedLanguages';
export * from './getSupportedLanguages';
