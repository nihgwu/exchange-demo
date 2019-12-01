import { renderHook, act, rerender } from '@testing-library/react-hooks';
import { getRates, cancelGetRates } from 'services/rate';

import useRates from './useRates';

jest.mock('services/rate', () => ({
  getRates: jest.fn().mockResolvedValue({}),
  cancelGetRates: jest.fn(),
}));
jest.useFakeTimers();

describe('useRates', () => {
  it('call api request periodically', async () => {
    const { result, waitForNextUpdate, rerender } = renderHook(() =>
      useRates()
    );

    expect(result.current.loading).toBe(true);
    expect(result.current.rates).toBeNull();
    expect(result.current.error).toBeNull();
    expect(getRates).toHaveBeenCalledTimes(1);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.rates).toEqual({});
    expect(result.current.error).toBeNull();
    expect(getRates).toHaveBeenCalledTimes(1);

    // rerender should not trigger another request
    rerender();
    expect(getRates).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(12 * 1000);
    await waitForNextUpdate();
    expect(getRates).toHaveBeenCalledTimes(2);

    jest.advanceTimersByTime(12 * 1000);
    await waitForNextUpdate();
    expect(getRates).toHaveBeenCalledTimes(3);
  });
});
