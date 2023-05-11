import { describe, it, expect } from 'vitest';

import { getSupportedLanguages } from '.';

describe('getSupportedLanguages', () => {
  it('Returns a array of languages under a specific form', () => {
    const supportedLanguages = getSupportedLanguages();

    expect(supportedLanguages).toEqual([
      { name: 'العربية', dir: 'rtl', locale: 'ar_SA' },
      { name: 'Azərbaycan (Azərbaycan)', dir: 'ltr', locale: 'az_AZ' },
      { name: 'čeština (Česká republika)', dir: 'ltr', locale: 'cs_CZ' },
      { name: 'Cymraeg (Cymru)', dir: 'ltr', locale: 'cy_GB' },
      { name: 'Dansk (Danmark)', dir: 'ltr', locale: 'da_DK' },
      { name: 'Deutsch (Deutschland)', dir: 'ltr', locale: 'de_DE' },
      { name: 'English (Australia)', dir: 'ltr', locale: 'en_AU' },
      { name: 'English (United Kingdom) ', dir: 'ltr', locale: 'en_GB' },
      { name: 'English (United States)', dir: 'ltr', locale: 'en_US' },
      {
        name: 'English for K-12 (United States)',
        dir: 'ltr',
        locale: 'en_US_k12',
      },
      {
        name: 'English for Pro-Ed (United States)',
        dir: 'ltr',
        locale: 'en_US_pro',
      },
      { name: 'Español (España)', dir: 'ltr', locale: 'es_ES' },
      { name: 'Français (Canada)', dir: 'ltr', locale: 'fr_CA' },
      { name: 'Français (France)', dir: 'ltr', locale: 'fr_FR' },
      { name: 'עברית', dir: 'rtl', locale: 'he_IL' },
      { name: 'Italiano (Italia)', dir: 'ltr', locale: 'it_IT' },
      { name: '日本語 (日本)', dir: 'ltr', locale: 'ja_JP' },
      { name: '한국어 (한국)', dir: 'ltr', locale: 'ko_KR' },
      { name: 'Bahasa Melayu (Malaysia)', dir: 'ltr', locale: 'ms_MY' },
      { name: 'Bokmål (Norge)', dir: 'ltr', locale: 'nb_NO' },
      { name: 'Nederlands (Nederland)', dir: 'ltr', locale: 'nl_NL' },
      { name: 'Nynorsk (Norge)', dir: 'ltr', locale: 'nn_NO' },
      { name: 'Polski (Polska)', dir: 'ltr', locale: 'pl_PL' },
      { name: 'Português (Brasil)', dir: 'ltr', locale: 'pt_BR' },
      { name: 'Português (Portugal)', dir: 'ltr', locale: 'pt_PT' },
      { name: 'Русский (Россия)', dir: 'ltr', locale: 'ru_RU' },
      { name: 'Svenska (Sverige)', dir: 'ltr', locale: 'sv_SE' },
      { name: 'ไทย (ไทย)', dir: 'ltr', locale: 'th_TH' },
      { name: 'Türkçe (Türkiye)', dir: 'ltr', locale: 'tr_TR' },
      { name: 'український (Україна)', dir: 'ltr', locale: 'uk_UA' },
      { name: '中文 (中国)', dir: 'ltr', locale: 'zh_CN' },
      { name: '中文 (台灣)', dir: 'ltr', locale: 'zh_TW' },
    ]);
  });
});
