import { supportedLanguages } from '../supportedLanguages';

import type { Language } from '@interfaces';

export const getSupportedLanguages = (): Language[] =>
  Object.keys(supportedLanguages).reduce(
    (languagesList: Language[], locale: string) => {
      languagesList.push({
        name: supportedLanguages[locale],
        dir: ['he_IL', 'ar_SA'].includes(locale) ? 'rtl' : 'ltr',
        locale,
      });
      return languagesList;
    },
    [],
  );
