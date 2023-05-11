import { render, screen } from '@testing-library/react';
import { describe, expect, it, vitest } from 'vitest';

import App from './App';

vitest.mock('@components', () => ({
  useLanguageProviderContext: () => ({
    currentLanguage: { locale: 'en_US' },
    supportedLanguages: [
      { locale: 'en_US', name: 'English' },
      { locale: 'en_US', name: 'English' },
      { locale: 'en_US', name: 'English' },
      { locale: 'en_US', name: 'English' },
      { locale: 'en_US', name: 'English' },
      { locale: 'en_US', name: 'English' },
      { locale: 'en_US', name: 'English' },
      { locale: 'en_US', name: 'English' },
      { locale: 'en_US', name: 'English' },
      { locale: 'en_US', name: 'English' },
      { locale: 'en_US', name: 'English' },
      { locale: 'es_ES', name: 'Spanish' },
      { locale: 'en_US', name: 'English' },
      { locale: 'fr_FR', name: 'French' },
    ],
    setCurrentLanguage: vitest.fn(),
    useTranslation: vitest.fn(() => ({ t: vitest.fn() })),
  }),
}));

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const performRender = () => render(<App />);

describe('App - Component', () => {
  it('It should be rendered with the expected components', () => {
    performRender();

    const h1Element = screen.getByText('Vite + React');
    const selectElement = screen.getByTestId('demo-lang');

    expect(h1Element).toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();
  });
});
