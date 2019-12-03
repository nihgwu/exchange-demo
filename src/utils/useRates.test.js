import { renderHook } from '@testing-library/react-hooks';
import { getRates, cancelGetRates } from 'services/rate';

import useRates from './useRates';

jest.mock('services/rate');
jest.useFakeTimers();

describe('useRates', () => {
  beforeEach(() => {
    getRates.mockClear();
    cancelGetRates.mockClear();

    getRates.mockResolvedValue({});
  });

  it('should get rates every 10s', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useRates());

    expect(result.current).toEqual({
      loading: true,
      rates: null,
      error: null,
    });
    expect(getRates).toHaveBeenCalledTimes(1);
    expect(cancelGetRates).toHaveBeenCalledTimes(1);

    await waitForNextUpdate();

    expect(result.current).toEqual({
      loading: false,
      rates: {},
      error: null,
    });
    expect(getRates).toHaveBeenCalledTimes(1);
    expect(cancelGetRates).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(10 * 1000);
    await waitForNextUpdate();
    expect(getRates).toHaveBeenCalledTimes(2);
    expect(cancelGetRates).toHaveBeenCalledTimes(2);

    jest.advanceTimersByTime(5 * 1000);
    expect(getRates).toHaveBeenCalledTimes(2);
    expect(cancelGetRates).toHaveBeenCalledTimes(2);

    jest.advanceTimersByTime(5 * 1000);
    await waitForNextUpdate();
    expect(getRates).toHaveBeenCalledTimes(3);
    expect(cancelGetRates).toHaveBeenCalledTimes(3);
  });

  it('should returns error if failed to get rates', async () => {
    getRates.mockRejectedValue('failed');

    const { result, waitForNextUpdate } = renderHook(() => useRates());

    expect(result.current).toEqual({
      loading: true,
      rates: null,
      error: null,
    });

    await waitForNextUpdate();

    expect(result.current).toEqual({
      loading: false,
      rates: null,
      error: 'failed',
    });
  });

  it('should not trigger another request on component rerender', async () => {
    const { waitForNextUpdate, rerender } = renderHook(() => useRates());

    await waitForNextUpdate();
    expect(getRates).toHaveBeenCalledTimes(1);

    rerender();
    expect(getRates).toHaveBeenCalledTimes(1);
  });

  it('should cancel api request on unmount', async () => {
    const { waitForNextUpdate, unmount } = renderHook(() => useRates());

    await waitForNextUpdate();
    expect(getRates).toHaveBeenCalledTimes(1);
    expect(cancelGetRates).toHaveBeenCalledTimes(1);

    unmount();
    expect(getRates).toHaveBeenCalledTimes(1);
    expect(cancelGetRates).toHaveBeenCalledTimes(2);
  });
});
