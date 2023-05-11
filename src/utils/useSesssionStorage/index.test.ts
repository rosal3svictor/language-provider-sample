import {
  renderHook,
  type RenderHookResult,
} from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react';
import { describe, it } from 'vitest';

import { useSessionStorage } from '.';

import type { SessionStorageOutput } from '@interfaces';

const mockId = 'i18n';
const mockValue = 'en_US';
const mockUpdatedValue = 'es_ES';

const performRender = (): RenderHookResult<unknown, SessionStorageOutput> =>
  renderHook(() => useSessionStorage({ key: mockId, defaultValue: mockValue }));

describe('useSessionStorage', () => {
  it('A tuple containing the current locale and a setter is retrieved', () => {
    const {
      result: { current },
    } = performRender();

    expect(current[0]).toBeTypeOf('string');
    expect(current[1]).toBeTypeOf('function');
  });

  it('i18n key is added successfully into session storage', () => {
    const { result } = performRender();

    expect(result.current[0]).toBe(mockValue);
  });

  it('i18n key is updated and retrieved from the session storage', async () => {
    const {
      result: { current },
    } = renderHook(() =>
      useSessionStorage({ key: mockId, defaultValue: mockValue }),
    );

    await waitFor(() => {
      current[1](mockUpdatedValue);
    });

    expect(typeof current[0]).toBe('string');
    expect(typeof current[1]).toBe('function');
  });
});
