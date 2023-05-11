/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { vitest } from 'vitest';

import { LanguageProviderContext, useLanguageProviderContext } from './context';

const mockLanguageProviderValue = {
  useTranslation: vitest.fn(),
  currentLanguage: {
    locale: 'en_US',
    name: 'English',
    dir: 'ltr',
  },
  setCurrentLanguage: vitest.fn(),
  supportedLanguages: [
    {
      locale: 'en_US',
      name: 'English',
      dir: 'ltr',
    },
    {
      locale: 'es_ES',
      name: 'Español',
      dir: 'ltr',
    },
  ],
  languageIsSelected: vitest.fn(),
  getNameFromLocale: vitest.fn(),
  languagesAsOptions: [
    {
      label: 'English',
      value: 'en_US',
    },
    {
      label: 'Español',
      value: 'es_ES',
    },
  ],
  defaultLangCount: 2,
  getAvailableLocales: vitest.fn(),
};

describe('LanguageProviderContext', () => {
  it('should create the context', () => {
    expect(LanguageProviderContext).not.toBeNull();
  });

  it('should provide the value', () => {
    // @ts-expect-error: This mock is not introducing bugs
    const wrapper = ({ children }) => (
      // @ts-expect-error: This mock is not introducing bugs
      <LanguageProviderContext.Provider value={mockLanguageProviderValue}>
        {children}
      </LanguageProviderContext.Provider>
    );

    const { result } = renderHook(() => useLanguageProviderContext(), {
      wrapper,
    });

    expect(result.current).toEqual(mockLanguageProviderValue);
  });
});

describe('useLanguageProviderContext', () => {
  it('should return the context value', () => {
    // @ts-expect-error: This mock is not introducing bugs
    const wrapper = ({ children }) => (
      // @ts-expect-error: This mock is not introducing bugs
      <LanguageProviderContext.Provider value={mockLanguageProviderValue}>
        {children}
      </LanguageProviderContext.Provider>
    );
    const { result } = renderHook(() => useLanguageProviderContext(), {
      wrapper,
    });

    expect(result.current).toEqual(mockLanguageProviderValue);
  });
});
