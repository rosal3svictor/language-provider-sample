/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { LanguageProvider, LanguageProviderContext } from '.';

describe('LanguageProvider', () => {
  const translations = {
    en_US: {
      translation: {
        hello: 'Hello, world!',
      },
    },
    es_ES: {
      translation: {
        hello: '¡Hola, mundo!',
      },
    },
  };

  const TestComponent = (): JSX.Element => {
    const {
      currentLanguage,
      setCurrentLanguage,
      languagesAsOptions,
      defaultLangCount,
      getAvailableLocales,
      getNameFromLocale,
      languageIsSelected,
      useTranslation,
    } = React.useContext(LanguageProviderContext);
    const langIsSelected = languageIsSelected({
      name: 'Frances',
      dir: 'ltr',
      locale: 'fr_FR',
    });
    const getLocaleName = getNameFromLocale('it_IT');

    const { t } = useTranslation();

    return (
      <div>
        <span>{t('hello')}</span>
        <span>{currentLanguage?.locale}</span>
        <button
          onClick={() => {
            setCurrentLanguage('es_ES');
          }}
        >
          Switch to Spanish
        </button>
        <button
          onClick={() => {
            setCurrentLanguage('en_US');
          }}
        >
          Switch to English
        </button>
        <div data-testid="lang-as-options">{languagesAsOptions.length}</div>
        <div data-testid="default-lang-count">{defaultLangCount}</div>
        <div data-testid="available-locales">
          {getAvailableLocales().length}
        </div>
        <div data-testid="lang-is-selected">{`${langIsSelected}`}</div>
        <div data-testid="locale-name">{`${getLocaleName}`}</div>
      </div>
    );
  };

  it('renders with English as the default language', () => {
    render(
      <LanguageProvider options={{ translations }}>
        <TestComponent />
      </LanguageProvider>,
    );

    expect(screen.getByText('Hello, world!')).toBeInTheDocument();
    expect(screen.getByText('en_US')).toBeInTheDocument();
  });

  it('can switch the language to Spanish', async () => {
    render(
      <LanguageProvider options={{ translations }}>
        <TestComponent />
      </LanguageProvider>,
    );

    await waitFor(() => {
      void userEvent.click(screen.getByText('Switch to Spanish'));

      expect(screen.getByText('es_ES')).toBeInTheDocument();
    });

    expect(screen.getByText('¡Hola, mundo!')).toBeInTheDocument();
  });

  it('can switch the language back to English', async () => {
    render(
      <LanguageProvider options={{ translations }}>
        <TestComponent />
      </LanguageProvider>,
    );

    await waitFor(() => {
      void userEvent.click(screen.getByText('Switch to English'));

      expect(screen.getByText('en_US')).toBeInTheDocument();
    });

    expect(screen.getByText('Hello, world!')).toBeInTheDocument();
  });

  it('renders the correct number of languages', () => {
    render(
      <LanguageProvider options={{ translations }}>
        <TestComponent />
      </LanguageProvider>,
    );

    expect(screen.getByTestId('lang-as-options')).toBeInTheDocument();
    expect(screen.getByTestId('lang-as-options')).toHaveTextContent('32');
  });

  it('renders the correct default language count', () => {
    render(
      <LanguageProvider options={{ translations }}>
        <TestComponent />
      </LanguageProvider>,
    );

    expect(screen.getByTestId('default-lang-count')).toBeInTheDocument();
    expect(screen.getByTestId('default-lang-count')).toHaveTextContent('32');
  });

  it('renders the correct number of available locales', () => {
    render(
      <LanguageProvider options={{ translations }}>
        <TestComponent />
      </LanguageProvider>,
    );

    expect(screen.getByTestId('available-locales')).toBeInTheDocument();
    expect(screen.getByTestId('available-locales')).toHaveTextContent('32');
  });

  it('checks that a given locale is selected or not', () => {
    render(
      <LanguageProvider options={{ translations }}>
        <TestComponent />
      </LanguageProvider>,
    );

    expect(screen.getByTestId('lang-is-selected')).toBeInTheDocument();
    expect(screen.getByTestId('lang-is-selected')).toHaveTextContent('false');
  });

  it('retrieves the name of a provided locale string', () => {
    render(
      <LanguageProvider options={{ translations }}>
        <TestComponent />
      </LanguageProvider>,
    );

    expect(screen.getByTestId('locale-name')).toBeInTheDocument();
    expect(screen.getByTestId('locale-name')).toHaveTextContent(
      'Italiano (Italia)',
    );
  });
});
